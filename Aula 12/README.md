# Aula 12 — HTTP na Prática

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Revisar headers, status codes e o ciclo requisição-resposta, agora aplicados a APIs reais.
- Usar a aba Network do DevTools para inspecionar requisições feitas por uma página.
- Testar endpoints manualmente com Postman/Thunder Client, lendo headers de requisição e resposta.
- Interpretar diferentes status codes reais e o que cada um sinaliza.

---

## 🖼️ Analogia Inicial: o rastreador de encomendas

Nas Aulas 1 e 11, vimos o restaurante e o garçom. Hoje colocamos uma **lupa** sobre esse processo — como um rastreador de encomendas que mostra cada etapa: quando o pedido saiu da cozinha, quando chegou na sua mesa, o que veio junto (talheres, guardanapo).

- A **aba Network do DevTools** é esse rastreador: mostra TODAS as requisições que uma página fez, uma por uma, com todos os detalhes.
- Os **headers** são as etiquetas na caixa: informações extras sobre o pedido, sem fazer parte do "prato" em si — tipo de conteúdo, tamanho, se está em cache, quem autorizou.
- O **status code** é o carimbo final: entregue com sucesso, endereço não encontrado, ou problema na cozinha.

Hoje aprofundamos a leitura de tudo isso, agora com ferramentas profissionais e sobre APIs reais — não mais em teoria, e sim testando de verdade.

---

## 📚 Conteúdo Teórico

### 1. Revendo o ciclo requisição-resposta

```
Cliente (navegador/Postman) ──requisição──▶ Servidor (API)
Cliente (navegador/Postman) ◀──resposta─── Servidor (API)

Uma REQUISIÇÃO tem: método, URL, headers, (às vezes) um body
Uma RESPOSTA tem: status code, headers, body (geralmente JSON)
```

### 2. Headers comuns e o que significam

```
REQUISIÇÃO (o que o cliente envia):
Content-Type: application/json     → "estou enviando dados em JSON"
Authorization: Bearer abc123        → "aqui está minha credencial"
Accept: application/json            → "eu espero receber JSON de volta"

RESPOSTA (o que o servidor devolve):
Content-Type: application/json      → "estou te enviando JSON"
Content-Length: 348                 → tamanho da resposta em bytes
Cache-Control: no-cache             → regras de cache do navegador
```

### 3. Status codes na prática, revisados

```
2xx — Sucesso
  200 OK              → tudo certo, aqui está o resultado
  201 Created          → um novo recurso foi criado com sucesso

4xx — Erro do cliente
  400 Bad Request      → a requisição está malformada
  401 Unauthorized      → falta autenticação (ou está errada)
  404 Not Found          → o recurso pedido não existe

5xx — Erro do servidor
  500 Internal Server Error → algo quebrou do lado do servidor
```

### 4. Usando o DevTools para inspecionar requisições reais

```
1. Abra qualquer site (ex.: um site de notícias)
2. F12 → aba Network
3. Recarregue a página (F5)
4. Veja a lista de requisições feitas: HTML, CSS, JS, imagens, e chamadas de API (tipo "fetch/xhr")
5. Clique em uma requisição de API para ver headers, status e resposta
```

O DevTools mostra, em tempo real, TUDO que uma página está pedindo para funcionar — inclusive chamadas de API que talvez nem apareçam visualmente na tela.

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual, com apoio em dupla

### Parte 1 — Testando requisições reais com ferramentas de inspeção

1. Abra um site que você usa no dia a dia (rede social, e-commerce, notícias) e a aba Network do DevTools.
2. Recarregue a página e filtre por "Fetch/XHR" para ver só as chamadas de API.
3. Escolha uma dessas requisições e anote: método, URL, status code, e pelo menos 2 headers da resposta.
4. No Postman, repita uma requisição GET simples para uma API pública (ex.: `https://jsonplaceholder.typicode.com/posts`) e compare os headers de resposta com o que você viu no site.
5. Force um erro proposital (mude a URL para algo inválido) e anote o status code de erro retornado.

### Parte 2 — Perguntas de fixação

1. Qual a diferença entre um header de REQUISIÇÃO e um header de RESPOSTA?
2. O que significa o header `Content-Type: application/json`, e por que ele importa?
3. Se você receber um status `401 Unauthorized`, o que isso costuma indicar?
4. Por que a aba Network do DevTools é útil mesmo quando você não está desenvolvendo o site, só usando ele?

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Testando requisições reais com ferramentas de inspeção

Exemplo de anotação esperada:

```
Método: GET
URL: https://jsonplaceholder.typicode.com/posts
Status: 200 OK
Headers de resposta:
  Content-Type: application/json; charset=utf-8
  Content-Length: 27520
```

### Parte 2 — Perguntas de fixação

1. Headers de REQUISIÇÃO são enviados pelo cliente junto com o pedido (ex.: Authorization, Content-Type do que está enviando). Headers de RESPOSTA são enviados pelo servidor junto com o resultado (ex.: Content-Type do que está devolvendo, Cache-Control).
2. Indica que o corpo da mensagem está formatado como JSON — isso avisa quem recebe (navegador, outro programa) como interpretar corretamente os dados, evitando erros de leitura.
3. Costuma indicar que a requisição não tem credenciais válidas — falta autenticação, ou o token/API key enviado está incorreto ou expirado.
4. Porque permite entender o que está acontecendo "por trás" da página: quais dados estão sendo carregados, se há chamadas lentas, se algo está falhando silenciosamente — útil tanto para aprender como sites funcionam quanto para diagnosticar problemas.

[« Voltar para a Atividade](#atividade)
