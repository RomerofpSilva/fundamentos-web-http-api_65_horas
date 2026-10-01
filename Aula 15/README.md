# Aula 15 — Projeto Final: Integração

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Planejar a estrutura de um projeto que integra HTML, CSS, JavaScript e uma API real.
- Organizar o código do projeto de forma limpa (arquivos separados, nomes claros).
- Aplicar, de forma combinada, tudo que foi construído nas Aulas 1 a 14.
- Avançar de forma guiada na construção do seu projeto final.

---

## 🖼️ Analogia: a casa está pronta, hora de mobiliar por completo

Ao longo do curso, construímos a casa (Aulas 2-8: HTML e CSS), demos um cérebro a ela (Aulas 9-10: JS), ensinamos ela a se comunicar com o mundo (Aulas 11-14: API e HTTP). Hoje é o dia de **juntar tudo em um projeto único, funcionando de ponta a ponta**.

Não é mais sobre aprender uma peça nova — é sobre **montar a casa inteira** com as peças que você já tem, e fazer escolhas de arquiteto: onde cada arquivo vai, como as partes se conectam, o que fica bonito e funcional.

---

## 📚 Conteúdo Teórico

### 1. Planejamento antes de codar

```
Perguntas para responder ANTES de escrever a primeira linha:
1. Qual é o tema/propósito do projeto? (ex.: lista de filmes, clima, receitas)
2. Qual API vou consumir? (ex.: OMDb, OpenWeather, alguma API pública gratuita)
3. Quais telas/estados a interface precisa ter?
4. Como vai ser a estrutura de arquivos?
```

### 2. Wireframe simples (esboço da interface)

Um wireframe não precisa ser bonito — é um rascunho (papel, ou até comentários no código) mostrando onde cada elemento vai ficar: cabeçalho, campo de busca, lista de resultados, mensagens de erro/carregamento.

```
┌─────────────────────────────┐
│   Título do Projeto          │
├─────────────────────────────┤
│  [Campo de busca] [Buscar]   │
├─────────────────────────────┤
│  Card 1  │  Card 2  │ Card 3 │
├─────────────────────────────┤
│  (estado de erro/loading)    │
└─────────────────────────────┘
```

### 3. Organização de arquivos

```
meu-projeto/
├── index.html       → estrutura da página
├── style.css        → toda a estilização
├── script.js         → toda a lógica JS
└── README.md         → (opcional) descrição do projeto
```

Boas práticas: nomes de arquivo em minúsculo, sem espaços; separar HTML/CSS/JS em arquivos distintos (nada de `<style>` ou `<script>` gigante inline em projeto final); comentários curtos explicando partes não óbvias do código.

### 4. Juntando as peças: checklist técnico

```
[ ] HTML semântico (header, main, section, footer)
[ ] CSS com Flexbox e/ou Grid para o layout
[ ] Responsividade (media queries) para mobile
[ ] JavaScript com pelo menos 1 requisição fetch a uma API real
[ ] Tratamento de estados: carregando / erro / sucesso
[ ] Pelo menos 1 interação de usuário (busca, filtro, botão) que dispara o fetch
```

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual, desenvolvimento guiado do projeto final

### Parte 1 — Planejamento e primeiros passos

1. Escolha o tema do seu projeto e a API pública que vai consumir.
2. Faça um wireframe simples (papel, Figma, ou comentários no HTML) das telas principais.
3. Crie a estrutura de arquivos (`index.html`, `style.css`, `script.js`) separados.
4. Construa o HTML semântico básico da página (sem estilo ainda).
5. Adicione o CSS de layout (Flexbox/Grid) e, se der tempo, a responsividade.

### Parte 2 — Perguntas de fixação

1. Por que é importante planejar (wireframe, escolha de API) antes de começar a codar?
2. Por que separar HTML, CSS e JS em arquivos diferentes é considerado boa prática em um projeto final?
3. Cite 2 itens do checklist técnico que você já conseguiu aplicar até agora no seu projeto.
4. O que ainda falta no seu projeto para ele integrar HTML + CSS + JS + API de ponta a ponta?

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Planejamento e primeiros passos

Não há uma única resposta "correta" — o gabarito aqui é um checklist de acompanhamento do professor:

```
✓ Tema e API escolhidos e viáveis (API pública, gratuita, sem CORS bloqueado)
✓ Wireframe simples existe (papel, imagem ou comentários no código)
✓ 3 arquivos separados (index.html, style.css, script.js) devidamente linkados
✓ HTML semântico visível na estrutura (header, main, section, footer)
✓ Layout inicial com Flexbox/Grid aplicado
```

### Parte 2 — Perguntas de fixação

1. Porque planejar evita retrabalho: descobrir no meio do projeto que a API escolhida não funciona, ou que a interface não comporta o que você imaginou, custa muito mais tempo do que ajustar no papel antes.
2. Porque facilita manutenção e leitura do código — cada arquivo tem uma responsabilidade clara, fica mais fácil de encontrar e corrigir problemas, e é o padrão esperado em projetos profissionais.
3. Resposta pessoal — depende do progresso individual de cada aluno no projeto.
4. Resposta pessoal — o objetivo é o aluno identificar conscientemente as lacunas restantes (ex.: "ainda falta o tratamento de erro" ou "falta a responsividade").

[« Voltar para a Atividade](#atividade)
