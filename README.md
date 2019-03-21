![RTbos-logo](https://i.imgur.com/5Bxjhxp.png)

![Status](https://img.shields.io/badge/Status-est%C3%A1vel-yellow.svg) ![Versão](https://img.shields.io/badge/Vers%C3%A3o-Briba%20--%201.0-yellowgreen.svg) ![Language](https://img.shields.io/badge/Lang-JavaScript-green.svg)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

 - Version 1.0 **Briba**
 
## Dependencias

- "poloniex-api-node": "^2.0.1",
- "request": "^2.88.0",
- "socket.io": "^2.2.0",
- "technicalindicators": "^1.1.13"

## instalação

Clone o projeto
```sh
~$ git clone https://github.com/victorratts13/RTbos.git
```
execute a instalação
```sh
~$ npm install
```

## configuração

edite o arquivo *config/config.js*
```sh
const apiKey = 'Api_secret';
const secret = 'Api_key';
```
 > - versão briba:1.0.
  >- **NOTA**: a versão briba executa apenas ordens em um par de moedas, 
 vc pode selecionar o par desejado em:
```js
const par = 'BTC_LTC'; //utilise o formato PAIR_PAIR ex. BTC_LTC, BTC_DOGE, USDT_BTC
```
 > - Edite, `balances` para selecionar os balanços que quer ultilizar para negociação: ex - balances.LTC, balances.ETH, balances.CLAM...
## executando
inicie um test para verificar se está tudo ok
```sh
~$ npm test
```
inicie o bot
```sh
~$ npm start
```

### Ajude o projeto a se desenvolver
```sh
BTC: 1VRfQsPGgYJxhAXFyaoaPkcaAhEYECW7W
DOGE: DGqBZ7p9Ncupxnwo6kZ65cc1bQdHTfqhZY
ETH: 0xe752591b692d0d9d9e047ac186eec9e94de5773a
LTC: LgJViiNyP8j2ffAVSGPDB1K7oryefg4KAJ
```
