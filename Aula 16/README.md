# Aula 16 — Projeto Final: Refinamento e Publicação

**Módulo:** Fundamentos de Arquitetura Web, Protocolo HTTP, Conceitos de API REST, HTML, CSS e JavaScript
**Carga horária da aula:** 4 horas
**Professor(a):** @karizeviecelli

> ⭐ **Checkpoint 5** — esta aula é ponto de avaliação do projeto final (ver `plano-de-ensino.md`).

---

## 🎯 Objetivos da Aula

Ao final desta aula, você será capaz de:

- Testar seu projeto de forma sistemática, encontrando e corrigindo bugs.
- Aplicar revisão de código (code review) básica, sua e de colegas.
- Organizar um repositório Git/GitHub para o projeto.
- Publicar seu projeto usando o GitHub Pages, de forma acessível a qualquer pessoa.

---

## 🖼️ Analogia: a inauguração da casa

A casa está construída. Antes de entregar a chave para os moradores, um bom construtor faz uma **vistoria completa**: testa as torneiras, as portas, verifica se a fiação está segura. Só depois disso a casa está pronta para receber visitas.

- **Testar sistematicamente** é a vistoria: percorrer cada cômodo (funcionalidade) verificando se tudo funciona como esperado.
- **Code review** é chamar um colega arquiteto para dar uma segunda olhada — às vezes ele vê um problema que você, por estar tão envolvido, não percebeu.
- **Git/GitHub** é a planta oficial registrada em cartório — um histórico organizado de tudo que foi construído.
- **GitHub Pages** é a inauguração: a casa agora tem um endereço público, que qualquer pessoa pode visitar.

---

## 📚 Conteúdo Teórico

### 1. Testando sistematicamente

```
Checklist de teste manual:
[ ] Cada botão/link faz o que deveria fazer?
[ ] A busca funciona com dados válidos?
[ ] A busca funciona (sem quebrar) com dados inválidos/vazios?
[ ] O layout se adapta bem em telas pequenas (celular)?
[ ] Existe algum erro no console do DevTools (F12)?
[ ] O estado de carregamento aparece e desaparece corretamente?
```

Teste como se fosse um usuário "malvado": clique em coisas fora de ordem, deixe campos vazios, tente URLs erradas de propósito.

### 2. Code review básico (revisão entre colegas)

```
O que observar ao revisar o código de um colega:
- O código está organizado em arquivos separados (HTML/CSS/JS)?
- Os nomes de variáveis e funções fazem sentido?
- Existem comentários explicando partes não óbvias?
- O tratamento de erro está presente (Aula 14)?
- Alguma parte do código está duplicada sem necessidade?
```

Dar feedback é: específico ("essa função podia ter um nome mais claro"), construtivo (sugerir, não só apontar), e respeitoso.

### 3. Organizando o repositório Git

```
git init                              → inicia um repositório local
git add .                             → prepara os arquivos para commit
git commit -m "Primeira versão do projeto"  → salva um "ponto de restauração"
git remote add origin <url-do-repo>   → conecta ao repositório remoto (GitHub)
git push -u origin main               → envia o código para o GitHub
```

Boas práticas: mensagens de commit claras (o que mudou, não "mudanças"); um `.gitignore` se necessário; um `README.md` explicando o que o projeto faz e como rodá-lo.

### 4. Publicando com GitHub Pages

```
1. No repositório do GitHub, vá em Settings → Pages
2. Em "Source", selecione a branch (geralmente main) e a pasta (geralmente / root)
3. Salve e aguarde alguns minutos
4. Seu projeto estará disponível em:
   https://seu-usuario.github.io/nome-do-repositorio/
```

O GitHub Pages transforma um repositório estático (HTML/CSS/JS) em um site público, gratuito, sem precisar de servidor próprio.

---

<a id="atividade"></a>
## 💻 Atividade Prática

**Duração sugerida:** 90 minutos
**Formato:** individual, com revisão em dupla — **checkpoint 5 do projeto final**

### Parte 1 — Testar, revisar e publicar

1. Percorra o checklist de teste manual no seu próprio projeto e corrija o que encontrar.
2. Troque de tela com um colega por 10 minutos e façam code review um do outro, usando os critérios acima.
3. Crie (ou organize) o repositório Git do seu projeto, com um commit inicial claro.
4. Suba o projeto para o GitHub e ative o GitHub Pages.
5. Acesse o link público gerado e confirme que o projeto funciona fora do seu computador.

### Parte 2 — Perguntas de fixação

1. Por que testar "como um usuário malvado" (clicando fora de ordem, com dados inválidos) é uma boa prática?
2. Qual a diferença entre code review e apenas testar seu próprio código sozinho?
3. Para que serve o comando `git commit`, e por que mensagens de commit claras importam?
4. O que o GitHub Pages faz, tecnicamente, com os arquivos do seu repositório?

[Ver Gabarito »](#gabarito)

---

<a id="gabarito"></a>
## ✅ Gabarito

### Parte 1 — Testar, revisar e publicar

Checklist de acompanhamento do professor (checkpoint 5):

```
✓ Projeto testado manualmente, com bugs óbvios corrigidos
✓ Code review realizado com um colega (feedback trocado)
✓ Repositório Git criado, com ao menos 1 commit claro
✓ Projeto publicado no GitHub Pages, com link funcionando
✓ Link testado em uma aba anônima/outro dispositivo, confirmando acesso público
```

### Parte 2 — Perguntas de fixação

1. Porque usuários reais não seguem o "caminho feliz" esperado — eles clicam fora de ordem, deixam campos vazios, digitam coisas inesperadas. Testar assim revela bugs que passariam despercebidos em um teste "ideal".
2. Testar seu próprio código sozinho tende a confirmar suas próprias suposições — você já sabe "o jeito certo" de usar o que construiu. Um colega, sem esse conhecimento prévio, testa e lê o código com outros olhos, encontrando problemas que você não veria.
3. `git commit` salva um "ponto de restauração" do projeto naquele estado — permite voltar a versões anteriores se algo quebrar. Mensagens claras ajudam a entender o histórico do projeto sem precisar reler todo o código de cada versão.
4. O GitHub Pages pega os arquivos estáticos do repositório (HTML, CSS, JS) e os serve publicamente através de um endereço próprio, funcionando como um servidor web simples, sem custo e sem precisar configurar infraestrutura própria.

[« Voltar para a Atividade](#atividade)
