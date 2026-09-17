## O que é `grid-template`?

No CSS Grid, as propriedades `grid-template-*` definem o **molde da grade**: quantas colunas e linhas existirão e qual será o tamanho delas.

Antes de criar esse molde, o elemento-pai precisa receber:

```css
.container {
  display: grid;
}
```

Pense no Grid como uma estante:

* `grid-template-columns` define as divisões verticais — as colunas;
* `grid-template-rows` define as divisões horizontais — as linhas;
* `grid-template-areas` permite dar nomes às regiões da grade.

---

##  Criando colunas

### Colunas com tamanhos iguais

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
 }
```

Isso cria três colunas, cada uma com `200px`.

```text
200px | 200px | 200px
```

Cada valor informado corresponde a uma coluna.

### Colunas com tamanhos diferentes

```css
.container {
  display: grid;
  grid-template-columns: 200px 400px 100px;
}
```

Resultado:

```text
200px | 400px | 100px
```

### Usando porcentagem

```css
.container {
  display: grid;
  grid-template-columns: 30% 70%;
}
```

A primeira coluna ocupa 30% e a segunda ocupa 70% da largura.

Entretanto, se existir `gap`, as porcentagens podem ultrapassar o espaço disponível. Geralmente, a unidade `fr` é mais segura.

---

## A unidade `fr`

`fr` significa **fração do espaço disponível**.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

O espaço é dividido em três partes iguais.

```text
1 parte | 1 parte | 1 parte
```

Também podemos criar colunas proporcionais:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```

A segunda coluna ocupará o dobro do espaço da primeira.

```text
1 parte |       2 partes
```

Exemplo de layout com menu lateral:

```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
}
```

* menu: largura fixa de `250px`;
* conteúdo: ocupa o restante do espaço.

---

## Criando linhas

`grid-template-rows` define o tamanho das linhas:

```css
.container {
  display: grid;
  grid-template-rows: 100px 300px 80px;
}
```

Isso cria:

* primeira linha com `100px`;
* segunda linha com `300px`;
* terceira linha com `80px`.

Um exemplo de página seria:

```css
.pagina {
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  min-height: 100vh;
}
```

Nesse caso:

* cabeçalho: `100px`;
* conteúdo: ocupa o espaço restante;
* rodapé: `80px`.

---

## Espaçamento com `gap`

Para criar espaço entre linhas e colunas:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

O `gap` não cria margem nas bordas externas. Ele cria espaço somente entre os itens da grade.

Podemos controlar separadamente:

```css
.container {
  row-gap: 20px;
  column-gap: 10px;
}
```

---

## A função `repeat()`

Quando os tamanhos se repetem, podemos escrever:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

É equivalente a:

```css
grid-template-columns: 1fr 1fr 1fr;
```

Outro exemplo:

```css
grid-template-columns: repeat(4, 200px);
```

Cria quatro colunas de `200px`.

---

## Criando uma grade responsiva

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

Vamos separar as partes:

* `repeat()` repete as colunas;
* `auto-fit` calcula quantas colunas cabem;
* `minmax(250px, 1fr)` determina que cada coluna tenha no mínimo `250px`;
* `1fr` permite que ela cresça para ocupar o espaço disponível.

Esse recurso é muito utilizado para criar cards responsivos:

```html
<section class="container">
  <article class="card">Curso de Java</article>
  <article class="card">Curso de Python</article>
  <article class="card">Curso de HTML</article>
  <article class="card">Curso de CSS</article>
</section>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  padding: 20px;
  background-color: lightblue;
  border-radius: 8px;
}
```

Em uma tela larga, vários cards ficam lado a lado. Em telas menores, eles passam automaticamente para a próxima linha.

---

## `grid-template-areas`

Essa propriedade permite desenhar o layout usando nomes:

```html
<div class="pagina">
  <header>Cabeçalho</header>
  <nav>Menu</nav>
  <main>Conteúdo</main>
  <footer>Rodapé</footer>
</div>
```

```css
.pagina {
  display: grid;

  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr 80px;

  grid-template-areas:
    "cabecalho cabecalho"
    "menu      conteudo"
    "rodape    rodape";

  min-height: 100vh;
  gap: 10px;
}
```

Agora associamos cada elemento à sua área:

```css
header {
  grid-area: cabecalho;
}

nav {
  grid-area: menu;
}

main {
  grid-area: conteudo;
}

footer {
  grid-area: rodape;
}
```

O desenho criado é semelhante a este:

| Cabeçalho | Cabeçalho |
| --------- | --------- |
| Menu      | Conteúdo  |
| Rodapé    | Rodapé    |

Quando um nome aparece duas vezes na mesma linha, a área ocupa duas colunas.

---

## A propriedade abreviada `grid-template`

Existe também a propriedade resumida `grid-template`, que reúne linhas e colunas:

```css
.container {
  display: grid;
  grid-template: 100px 300px / 200px 1fr;
}
```

A ordem é:

```css
grid-template: linhas / colunas;
```

Portanto:

* linhas: `100px 300px`;
* colunas: `200px 1fr`.

Para iniciantes, geralmente é mais claro escrever separadamente:

```css
.container {
  display: grid;
  grid-template-rows: 100px 300px;
  grid-template-columns: 200px 1fr;
}
```

## Resumo

| Propriedade             | Define                                |
| ----------------------- | ------------------------------------- |
| `grid-template-columns` | Quantidade e tamanho das colunas      |
| `grid-template-rows`    | Quantidade e tamanho das linhas       |
| `grid-template-areas`   | Nomes e posições das regiões          |
| `grid-template`         | Forma abreviada para linhas e colunas |
| `gap`                   | Espaço entre linhas e colunas         |

### Verificação

O que este código cria?

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

O próximo passo é aprender a **posicionar os elementos dentro da grade** usando `grid-column`, `grid-row` e `grid-area`.

## 1. Crie a grade

```html
<div class="container">
  <header>Cabeçalho</header>
  <nav>Menu</nav>
  <main>Conteúdo</main>
  <footer>Rodapé</footer>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr 80px;
  gap: 10px;
  min-height: 100vh;
}
```

Nesse momento, os elementos entram automaticamente nas células disponíveis.

## 2. Entenda as linhas do Grid

Duas colunas produzem três linhas verticais:

```text
linha 1       linha 2             linha 3
   |   200px     |      1fr          |
```

O posicionamento usa essas linhas como referência.

## 3. Posicione com `grid-column`

Para o cabeçalho ocupar as duas colunas:

```css
header {
  grid-column: 1 / 3;
}
```

Isso significa:

> Comece na linha 1 e termine na linha 3.

Também podemos escrever:

```css
header {
  grid-column: 1 / -1;
}
```

O valor `-1` representa a última linha da grade.

## 4. Posicione com `grid-row`

Para o menu ocupar duas linhas:

```css
nav {
  grid-row: 2 / 4;
}
```

Isso faz o menu começar na linha horizontal 2 e terminar na linha 4.

## 5. Monte o layout completo

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr 80px;
  gap: 10px;
  min-height: 100vh;
}

header {
  grid-column: 1 / -1;
}

nav {
  grid-column: 1;
  grid-row: 2;
}

main {
  grid-column: 2;
  grid-row: 2;
}

footer {
  grid-column: 1 / -1;
}
```

O layout ficará assim:

| Cabeçalho                            |
| ------------------------------------ |
| Menu à esquerda — Conteúdo à direita |
| Rodapé                               |

## 6. Depois disso, estude alinhamento

A sequência recomendada é:

1. `display: grid`;
2. `grid-template-columns` e `grid-template-rows`;
3. `gap`;
4. `grid-column` e `grid-row`;
5. `grid-template-areas`;
6. `justify-items` e `align-items`;
7. `justify-content` e `align-content`;
8. Grid responsivo com `repeat()`, `minmax()` e `auto-fit`.

### Desafio prático

Crie uma página com:

* cabeçalho ocupando toda a largura;
* menu lateral de `200px`;
* conteúdo ocupando o espaço restante;
* rodapé ocupando toda a largura;
* espaçamento de `10px`.




Ele cria **três colunas**. A coluna central ocupa o dobro do espaço de cada coluna lateral.
