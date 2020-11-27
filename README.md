# Controle de Despesas

Controle de Despesas é um projeto que desenvolvi baseado em um canal do YouTube - ([video aulas] https://www.youtube.com/watch?v=g5CuiTpx6Sg&list=PL7SyCwLzd5jt7zcDoBjGt7v7zViBt7WgA&ab_channel=ArthurOliveira).
Se trata de uma SPA (Single Page Application) utilizando o Vue.js e o Firebase para inserir gastos
pessoais e ter um controle dos mesmos. Os dados são salvos no realtime database do Firebase e utilizo
tambem o storage para salvar a imagem do comprovante caso o usuário queira inserí-la.

## Conteúdos

- [Tecnologias principais](#tecnologias-principais)
- [Rodando o projeto local](#rodando-o-projeto-local)
- [Compilar arquivos minificados para produção](#compilar-arquivos-minificados-para-produção)
- [Fazer o deploy para o firebase](#fazer-o-deploy-para-o-firebase)
- [Playlist passo a passo da construção do projeto](#caso-desejar-o-link-para-os-vídeos-estão-a-seguir)

## Tecnologias principais

- Vue.js v2.6.11
- Vue Router v3.2.0
- Firebase v7.19.0
- Bootstrap v4.5.2

### Rodando o projeto local

- Clone o projeto na sua máquina;
- Instale as dependências usando `npm i`
- Renomeie o arquivo `.env.local.example` para `.env.local`;
- Crie uma conta no [Firebase](https://firebase.google.com/) (basta ter uma conta do Google);
- No console, adicione um novo projeto e dê o nome que preferir;
- Copie as credenciais do projeto para o ambiente Web e coloque-as em seus devidos locais dentro do arquivo `.env.local`;
- Ative o método de login para E-mail/senha;
- Ative o realtime database dentro do console do Firebase;
- Execute `npm run serve` para subir um servidor local para desenvolvimento com hot reload ativado.

### Compilar arquivos minificados para produção

Para criar os arquivos minificados prontos para serem colocados em um servidor web basta executar

```npm
npm run build
```

### Fazer o deploy para o firebase

Para usar o serviço de hosting do firebase basta executar os seguintes passos:

- Crie uma pasta deploy na raiz do projeto;
- Com o [firebase-tools](https://github.com/firebase/firebase-tools) instalado na máquina execute `firebase init` dentro da pasta deploy recém criada.

Se estiver no Linux ou MacOS basta executar

```npm
npm run deploy
```

No windows é preciso fazer o procedimento na mão:

- Execute `npm run build`;
- Copie o conteúdo de dentro da pasta /dist para dentro da pasta /deploy/public;
- Execute `firebase deploy` dentro da pasta /deploy.
