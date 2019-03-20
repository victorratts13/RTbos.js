/*
	Bem vindo ao RTbos Versão 1.0 (Briba)
	especificações da versão:
	* dependencias
		"poloniex-api-node": "^2.0.1",
	    "request": "^2.88.0",
	    "socket.io": "^2.2.0",
	    "technicalindicators": "^1.1.13"
	repo: https://github.com/victorratts13/RTbos
	git: https://github.com/victorratts13/RTbos.git
	Language: Js/Nodejs
	Versão: 1.0
	dist: BETA

	conetarios do desenvolvedor:

	Obrigado por usar o RTbos.
	RTbos é um bot OpenSource de trade em criptomoédas. Desenvolvido por Victor Ratts em 2019, 
	e mantido pela comunidade.
	RTbos usa todas as estrategias de negociação e possui todas as configurações necessarias para comportalas.

	verifique o arquivo config/config.js e add sua API key e secret.

	echanges suportadas: POLONIEX


*/
const conf = require('./config/config');



//Todas as execuções e ordens são feitas
//no arquivo config.js
conf.est