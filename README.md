<h2 align="center">
Bootcamp <img align="center"  height="120" width="120" src="https://raw.githubusercontent.com/cypress-io/cypress-icons/e61b554695b28267a1387a839f816c73e7a7e95e/src/logo/cypress-io-logo.svg"> Avançado - QAcademy
</h2>

**Projeto feito no curso**

Este projeto foi criado com o intuito de estudar um pouco mais sobre cypress, através do curso oferecido pelo Bootcamp da [QAcademy](https://br.qacademy.io/ "QAcademy") com a mentoria do Fernando Papito.

Nele automatizamos com cypress 10 o sistema do Qtruck feito exclusivamente para o curso, sendo um sistema de recomedações de foodtruck, onde pessoas e donos de foodtruck interessadas podem indicar e avaliar um foodtruck.

![signup_cy_js_AdobeExpress](https://user-images.githubusercontent.com/43914674/193889288-073def40-2454-49c3-a7dd-1085cfcd905e.gif)

### Instalação e Execução

Para rodar o projeto,  você  precisará  do: 
[NodeJS - Vesion 16](https://nodejs.org/en/download/ "NodeJS -Vesion 16") e do [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "npm") e/ou [yarn](https://yarnpkg.com/package/npm "yarn") instalados.

O  projeto da aplicação que está sendo testada no curso foi hospedada  em um projeto local.

Após ter instância do QTruck de pé, entre na pasta do projeto de automação e rode o comando: `npm install`ou `yarn install` e dessa forma todas as dependências serão instaladas.

Para rodar os testes, após ter instalado o cypress com o comando acima, navegue para a pasta raiz do projeto e execute: 

    npx cypress open

ou  no modo headless

    npx cypress run

## Conceitos aplicados:

 - Visitando url's
 - Preenchendo campos do tipo texto
 - Validando Textos
 - Conhecendo a aplicação do Qtruck (Backeend e Frontend)
 - Automatizar Mapa
 - Mock
 - Realizando asserts
 - Criando comandos personalizados
 - Relatorio de testes com Allure
 - Relatorio de testes com Tesults.
