# Aula 13 — fetch e Consumo de API

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Usar `fetch()` para fazer requisições GET a partir do JavaScript.
- Entender o que é uma Promise e como ela representa uma operação assíncrona.
- Usar `async`/`await` para escrever código assíncrono de forma mais legível.
- Buscar dados de uma API pública e exibi-los dinamicamente na página com DOM.

---

## 🖼️ Analogia: o pedido que você não fica esperando parado

Lembra do garçom (Aula 1) e do rastreador de encomendas (Aula 12)? Hoje aprendemos a **fazer o pedido sem travar o restaurante inteiro** enquanto ele não chega.

- Fazer uma requisição com `fetch()` é como **fazer o pedido ao garçom**: você não trava esperando parado no meio do salão — a cozinha (servidor) trabalha, e você é avisado quando o prato (resposta) está pronto.
- Uma **Promise** é a **comanda numerada** que o garçom te dá: uma promessa de que, no futuro, ela vai virar um resultado (prato pronto) ou um problema (acabou o ingrediente).
- `async`/`await` é como dizer "eu vou **esperar sentado(a) na mesa**, mas o restaurante continua funcionando normalmente para todo mundo enquanto isso" — o código não bloqueia a página inteira.

Hoje o JS que você escreveu nas Aulas 9 e 10 finalmente vai buscar dados de verdade, de uma API real, pela internet.

---

## 📚 Conteúdo Teórico

### 1. O que é assíncrono, e por que importa

```
SÍNCRONO (bloqueante):
linha 1 → executa e TERMINA
linha 2 → só começa depois que a 1 terminou
linha 3 → só começa depois que a 2 terminou

ASSÍNCRONO (não-bloqueante):
linha 1 → dispara uma operação demorada (ex.: buscar dados na internet)
linha 2 → executa IMEDIATAMENTE, sem esperar a linha 1 terminar
(quando a operação da linha 1 termina, um código "de volta" é executado)
```

Buscar dados na internet pode demorar. Se o JavaScript travasse a página inteira esperando, o site ficaria congelado. Por isso APIs de rede são assíncronas.

### 2. fetch() — fazendo a requisição

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposta => resposta.json())   // converte a resposta em JSON
  .then(dados => console.log(dados))   // usa os dados já convertidos
  .catch(erro => console.error(erro)); // trata erros de rede
```

`fetch()` retorna uma **Promise**. `.then()` executa quando ela é resolvida com sucesso; `.catch()` executa se algo falhar.

### 3. Promises, em outras palavras

```
Uma Promise tem 3 estados possíveis:
  pending   → ainda não terminou (o pedido está sendo preparado)
  fulfilled → terminou com sucesso (o prato chegou)
  rejected  → terminou com erro (faltou ingrediente)

.then()  → o que fazer quando "fulfilled"
.catch() → o que fazer quando "rejected"
```

### 4. async/await — a mesma coisa, mais legível

```js
async function buscarUsuarios() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Deu erro:', erro);
  }
}

buscarUsuarios();
```

`await` "pausa" só aquela função até a Promise resolver — o resto da página continua funcionando normalmente. `async` é obrigatório em qualquer função que use `await` dentro dela.

### 5. Exibindo os dados na página (juntando com DOM da Aula 10)

```js
async function mostrarUsuarios() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await resposta.json();

  const lista = document.getElementById('lista-usuarios');
  lista.innerHTML = usuarios
    .map(u => `<li>${u.name} — ${u.email}</li>`)
    .join('');
}
```

Isso conecta tudo que vimos até agora: requisição HTTP (Aulas 11-12) + JavaScript e DOM (Aulas 9-10) = dados reais aparecendo dinamicamente na tela.

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual

### Parte 1 — Buscando e exibindo dados reais

1. Crie uma página HTML simples com um `<div id="app">` vazio e um botão "Carregar dados".
2. No JavaScript, escreva uma função `async` que, ao clicar no botão, busca dados de `https://jsonplaceholder.typicode.com/posts` (limite aos 5 primeiros com `.slice(0, 5)`).
3. Exiba os títulos dos posts como uma lista (`<ul><li>`) dentro do `#app`.
4. Adicione tratamento de erro básico com `try/catch` — mesmo que você não consiga forçar um erro real, o código deve ter a estrutura pronta.

### Parte 2 — Perguntas de fixação

1. Por que `fetch()` não bloqueia o restante da página enquanto espera a resposta?
2. O que `await` faz, exatamente, dentro de uma função `async`?
3. Qual a diferença entre usar `.then()/.catch()` e usar `async/await` para o mesmo fetch?
4. Por que é uma boa prática sempre tratar o caso de erro em uma chamada de API, mesmo quando "geralmente funciona"?

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Buscando e exibindo dados reais

```html
<div id="app"></div>
<button onclick="carregarPosts()">Carregar dados</button>

<script>
async function carregarPosts() {
  const app = document.getElementById('app');
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resposta.json();
    const primeiros = posts.slice(0, 5);
    app.innerHTML = '<ul>' + primeiros.map(p => `<li>${p.title}</li>`).join('') + '</ul>';
  } catch (erro) {
    app.innerHTML = '<p>Erro ao carregar os dados.</p>';
  }
}
</script>
```

### Parte 2 — Perguntas de fixação

1. Porque `fetch()` é assíncrono: ele dispara a requisição e devolve uma Promise imediatamente, sem travar a execução do restante do script enquanto a resposta não chega.
2. `await` pausa a execução daquela função específica até a Promise ser resolvida (com sucesso ou erro), sem travar o restante da página — o navegador continua responsivo.
3. São formas equivalentes de lidar com Promises: `.then()/.catch()` encadeia funções de callback; `async/await` permite escrever o mesmo fluxo de forma mais parecida com código síncrono, geralmente mais legível, especialmente com múltiplas etapas.
4. Porque requisições de rede podem falhar por muitos motivos fora do seu controle (internet instável, servidor fora do ar, URL errada) — sem tratamento de erro, a página pode travar, exibir dados quebrados, ou o usuário simplesmente não entende o que aconteceu.

[« Voltar para a Atividade](#atividade)
