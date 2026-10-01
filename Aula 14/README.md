# Aula 14 — Tratamento de Erros em Requisições

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

> ⭐ **Checkpoint 4** — esta aula é ponto de avaliação do projeto final (ver `plano-de-ensino.md`).

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Verificar corretamente se uma resposta HTTP foi bem-sucedida (`response.ok`, status code).
- Criar estados de interface para carregamento, erro e sucesso.
- Aplicar boas práticas básicas de autenticação em requisições (headers, tokens).
- Construir uma experiência de usuário que não "quebra" diante de falhas de rede.

---

## 🖼️ Analogia: quando o pedido não chega

Nas Aulas 12 e 13, vimos como pedir e receber. Hoje tratamos do que fazer **quando o pedido dá errado** — prato errado, demora demais, ou o restaurante fechou.

- O estado de **carregamento** é a placa "seu pedido está sendo preparado" — o cliente sabe que algo está acontecendo, não fica encarando o vazio.
- O estado de **erro** é o garçom voltando para avisar "não temos mais esse prato" — uma mensagem clara, não um silêncio constrangedor.
- O estado de **sucesso** é o prato chegando certinho na mesa.

Um app profissional trata os três estados. Um app amador só sabe mostrar o prato quando tudo dá certo — e trava (ou pior, mostra uma tela em branco) quando algo falha.

---

## 📚 Conteúdo Teórico

### 1. fetch() não rejeita em erros HTTP (a pegadinha)

```js
// ATENÇÃO: fetch() só rejeita a Promise em falha de REDE
// (sem internet, servidor fora do ar) — não em erros como 404 ou 500!

const resposta = await fetch('/api/rota-que-nao-existe');
console.log(resposta.ok);      // false
console.log(resposta.status);  // 404
// mas o await NÃO lança erro aqui — você precisa checar manualmente
```

### 2. Verificando response.ok

```js
async function buscarDados() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/999999');

    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}: ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error('Falha ao buscar dados:', erro.message);
  }
}
```

`resposta.ok` é `true` só para status 200-299. Fora disso, é preciso lançar (`throw`) o erro manualmente para que o `catch` o capture.

### 3. Estados de interface: loading, erro, sucesso

```js
async function carregarDados() {
  mostrarEstado('carregando');

  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);

    const dados = await resposta.json();
    mostrarEstado('sucesso', dados);
  } catch (erro) {
    mostrarEstado('erro', erro.message);
  }
}

function mostrarEstado(estado, conteudo) {
  const app = document.getElementById('app');
  if (estado === 'carregando') app.innerHTML = '<p>Carregando...</p>';
  if (estado === 'erro') app.innerHTML = `<p>Algo deu errado: ${conteudo}</p>`;
  if (estado === 'sucesso') app.innerHTML = conteudo.map(d => `<li>${d.title}</li>`).join('');
}
```

### 4. Boas práticas básicas de autenticação

```js
// Enviando um token de autenticação junto com a requisição
const resposta = await fetch('https://api.exemplo.com/dados-privados', {
  headers: {
    'Authorization': 'Bearer SEU_TOKEN_AQUI'
  }
});

if (resposta.status === 401) {
  console.log('Token inválido ou expirado — usuário precisa logar de novo.');
}
```

```
Boas práticas rápidas:
- NUNCA deixe tokens/senhas visíveis em código público (GitHub, etc.)
- Trate 401 (não autenticado) e 403 (não autorizado) como casos separados
- Nunca confie só no front-end para segurança — o servidor deve validar tudo de novo
```

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual — **checkpoint 4 do projeto final**

### Parte 1 — Tratando falhas de requisição

1. Pegue a página que você construiu na Aula 13 (busca de dados de uma API).
2. Adicione um estado visual de **carregamento** (ex.: "Carregando...") exibido antes da resposta chegar.
3. Verifique `resposta.ok` e lance um erro manualmente se for `false`.
4. Adicione um estado visual de **erro**, com mensagem amigável, exibido quando a requisição falhar (teste forçando uma URL inválida).
5. Garanta que, em caso de sucesso, o estado de carregamento/erro anteriores sejam limpos da tela.

### Parte 2 — Perguntas de fixação

1. Por que `fetch()` não lança erro automaticamente para um status 404 ou 500?
2. O que `resposta.ok` verifica, exatamente?
3. Por que é importante mostrar um estado de "carregando" para o usuário, mesmo que a requisição seja rápida na maioria das vezes?
4. O que significa, na prática, um erro 401 vs. um erro 403?

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Tratando falhas de requisição

```js
async function carregarDados() {
  const app = document.getElementById('app');
  app.innerHTML = '<p>Carregando...</p>';

  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}: ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    app.innerHTML = dados.slice(0, 5).map(d => `<li>${d.title}</li>`).join('');
  } catch (erro) {
    app.innerHTML = `<p>Não foi possível carregar os dados: ${erro.message}</p>`;
  }
}
```

### Parte 2 — Perguntas de fixação

1. Porque, do ponto de vista técnico, a requisição em si "funcionou" — o servidor respondeu. O status 404/500 é uma resposta válida, só que com um código que indica falha; `fetch()` só rejeita a Promise em falhas de rede (sem conexão, servidor inacessível).
2. Verifica se o status code da resposta está na faixa 200-299 (sucesso). É `true` para 200, 201 etc., e `false` para qualquer coisa fora dessa faixa (400, 404, 500...).
3. Porque a rede pode ser lenta ou instável para alguns usuários, e sem um indicador visual, a tela fica parecendo travada ou quebrada — o "carregando" comunica que o app está funcionando, só aguardando.
4. `401 Unauthorized` indica que o usuário não está autenticado (não enviou credenciais válidas, como um token). `403 Forbidden` indica que o usuário ATÉ está autenticado, mas não tem permissão para acessar aquele recurso específico.

[« Voltar para a Atividade](#atividade)
