# Aula 01

1.  Preparação do ambiente de desenvolvimento geral
2.  Trabalhando com git e github no VSCode

---

## 01. Instalando VSCode e extensão do git e github e fluxo de trabalho

O primeiro passo para começarmos trabalhar é instalar o VSCode. Caso já tenha instalado, podemos prosseguir para o próximo passo. Caso não tenha basta instalar seguindo a documentação [clicando aqui](https://code.visualstudio.com/download).

O segundo passo é instalar a CLI do git [clicando aqui](https://git-scm.com/download/win).

A seguir vamos instalar a CLI do gh (github) [clicando aqui](https://github.com/cli/cli#installation)

Em seguida vamos escolher ou criar uma pasta para trabalhar e iniciar um repositório git nesse diretório:

`git init .`

Após instalar vamos rodar o comando:

`gh repo create teste`

ou

`gh repo create teste --private`

E vamos criar nosso readme.md e fazer o primeiro commit nesse repositório:

```CMD
echo "# README" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/seu_usuario/teste.git
git push -u origin main
```

---

## 02. Trabalhando com git e github no VSCode

Vamos criar um arquivo javascript só para fazermos uma vez o fluxo de trabalho com o git e github. Para isso precisamos abrir um espaço de trabalho (workspace) no VSCode:

`code .`

E em seguida rodar o comando `mkdir script.js` ou pela interface clicar no botão de criar um novo arquivo.

Vamos abrir o novo arquivo e escrever algum código (ou texto qualquer), somente queremos ter algum conteúdo nesse arquivo. Feito isso, podemos verificar o estado do nosso repositório local git, rodando o comando:

`git status`

E para versionar o nosso arquivo rodamos:

`git add script.js` ou para adicionar todos os arquivos unstaged `git add .`

Para commitar a alteração (nesse caso a criação do arquivo contendo determinado conteúdo):

`git commit -m "mensagem do commit"`

E para enviar para o repositório remoto (no github):

`git push`

Tendo terminado esse processo, teremos feito nosso segundo commit. É dessa forma que devemos continuar trabalhando após fazer novas alterações no código do nosso projeto.
