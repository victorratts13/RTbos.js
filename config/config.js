/*
Desenvolvido e mantido por: Victor Ratts
github: https://github.com/victorratts13/RTbos
versão: estavel (1.0.1) Briba
*/
const API = require('../api');
const request = require('request');
const socket = require('socket.io');
const apiKey = API.key;
const secret = API.secret;
const Poloniex = require('poloniex-api-node');
//construtor POLONIEX api
const poloniex = new Poloniex(apiKey, secret, { nonce: () => new Date().getTime() * 1001 }, {socketTimeout: 60000});
//importação de indicadores
const RSI = require('technicalindicators').RSI; //os indicadores usados
const SMA = require('technicalindicators').SMA;
const EMA = require('technicalindicators').EMA;
const reloadTime = '10000';//tempo para recarregar os dados (padrão 300 segundos ou 300.000 milisegundos = 5min) 

setInterval(() => {

    //configurações gerais
const par = 'BTC_CLAM'; //ultilise o formato PAIR_PAIR ex. BTC_LTC, BTC_DOGE, USDT_BTC
const uTime = parseInt(new Date().getTime() / 1000);//TimeUnix format
const sub = 4550;//subtração do startTime
const period = 300; //valor do periodo dos candels em segundos (minimo 300 segundos ou 5 minutos)
const start = uTime - sub;//inicio do candle
const end = uTime;//fim do candle

const invest = ''; //valor a ser investido, caso esteja vazio o valor será seu saldo total - minimo 0.0001
const lucro = ''; //porcentagem de lucro, caso esteja vazio o lucro esperado será maximo

if(invest == false){
    console.log(
        '\033c \x1b[4m \x1b[33m Bem Vindo ao RTbos 1.0.5 -> BRIBA \x1b[0m \n' +
        'executando bot usando Valor do balanço total \n #-------------------------------------------- \n'+
        'caso não queira usar seu saldo total, pare o BOT e edite a variavel invest (Line: 29)\n'+
        '\n Analizando estratégias... \n#---------------------------------\n'+
         `\n#--------------------------------------------------#\n|\x1b[32m dados Graficos Obtidos para o time de: \x1b[36m'${period}' \x1b[37m segundos \n| URI do par: ${par}\n#--------------------------------------------------#\n`+
         `#--------------------------------------------------#\n|Data completa: ${new Date()}\n#--------------------------------------------------#`+
         '\ncalculando Indicadores'
        )
}else{
    console.log(
        '\033c \x1b[4m \x1b[33m Bem Vindo ao RTbos 1.0.1 -> BRIBA \x1b[0m \n' +
        'executando bot usando Valor: '+invest+' do saldo total \n #-------------------------------------------- \n'+
        'caso queira usar seu saldo total, pare o BOT e edite a variavel invest (Line: 29)\n'+
        '\n Analizando estratégias... \n #---------------------------------'+
         `#--------------------------------------------------#\n|\x1b[32m dados Graficos Obtidos para o time de: \x1b[36m'${period}' \x1b[37m segundos \n| URI do par: ${par}\n#--------------------------------------------------#\n`+
         `#--------------------------------------------------#\n|Data completa: ${new Date()}\n#--------------------------------------------------#`+
         '\ncalculando Indicadores'
    )

}
                                    //interface do console
                                    

        poloniex.returnCurrencies((err, cur) => {
            if(err){
                console.log('algum erro ocorreu, por favor, verifique => ' + err + ' -> returnCurrencies')
            }else{
                poloniex.returnBalances((err, balances) => {


                    if(err){
                        console.log('algum erro ocorreu, por favor, verifique => ' + err + ' -> returnBalances')
                    }else{
                        if(invest == false){

                            //caso não haja valor inserido na variavel invest:
                            poloniex.returnChartData(par, period, start, end, (err, data) => {
                                dataCh = data;
                                if(err){
                                    console.log('algum erro ocorreu, por favor, verifique => ' + err + ' -> returnChartData')
                                }else{
                                    //Criando estrategia RSI 
                                    var inputRSI = {
                                        values : [
                                        //aqui é onde calcula o RSI para executar a compra/venda
                                            dataCh[0].high,
                                            dataCh[1].high,
                                            dataCh[2].high,
                                            dataCh[3].high,
                                            dataCh[4].high,
                                            dataCh[5].high,
                                            dataCh[6].high,
                                            dataCh[7].high,
                                            dataCh[8].high,
                                            dataCh[9].high,
                                            dataCh[10].high,
                                            dataCh[11].high,
                                            dataCh[12].high,
                                            //habilite mais candles caso precise
                                        /*  dataCh[13].high,
                                            dataCh[14].high,
                                            dataCh[15].high,
                                            dataCh[16].high,
                                            dataCh[17].high,
                                            dataCh[18].high,
                                            dataCh[19].high,
                                            */

                                        ],
                                        period : 5
                                    }
                                    //calculando rsi baseado no mercado (periodo 5 = 300 segundos)
                                    var resultRSI = RSI.calculate(inputRSI)
                                    var price = dataCh[0].high;
                                    var buy = balances.BTC / price;
                                    var sell = price * balances.CLAM / price;
                                    console.log(resultRSI);

                                    console.log('Balanço BTC -> '+ balances.BTC + '\n#--------------------------------')
                                    console.log('Balanço CLAM -> '+ balances.CLAM + '\n#--------------------------------')
                                    console.log('Preço BTC -> '+ price + '\n#--------------------------------')

                                    /*
                                        formula de calculo RSI:
                                        se a % de valor estiver > 70%, é executado uma ordem de venda
                                        se a % de valor estiver < 30% é executado uma ordem de compra

                                        se o valor % estiver abaixo de 70 e acima de 50 a mais de 20min, executa uma venda
                                        se o valor % estiver acima de 30 e abaixo de 50 a mais de 20min, executa uma compra

                                    */   
                                    //executando ordem de venda
                                    if(resultRSI[7] > 70){//se for maior que 70% vende
                                    
                                        poloniex.sell(par, price, sell, 1, 1, 0, (err, sell) => {
                                            console.log(JSON.stringify(sell))
                                            console.log('executando venda')
                                            console.log('venda no valor de: '+ price +' BTC\n aguardando proxima ordem....')
                                        })
                                    }else{
                                        console.log('aguardando oportunidade para venda... \n#--------------------------')
                                    }
                                    //executando ordem de compra
                                    if(resultRSI[7] < 30){//se for menor que 30% compra
                                        poloniex.buy(par, price, buy, 1, 0, 0, (err, buy) => {
                                            console.log(JSON.stringify(buy))
                                            console.log('executando compra:')
                                            console.log('compra no valor de: '+ price +'\n aguardando proxima ordem....')
                                        })
                                    }else{
                                        console.log('aguardando oportunidade para compra... \n#--------------------------')
                                    }
                                }
                            });
                        }else{
                            //caso haja valor inserido na variavel invest (minimo 0.0001 satoshis)
                            poloniex.returnChartData(par, period, start, end, (err, data) => {
                                dataCh = data;
                                if(err){
                                    console.log('algum erro ocorreu, por favor, verifique => ' + err + ' -> returnChartData')
                                }else{
                                    //Criando estrategia RSI 
                                    var inputRSI = {
                                        values : [
                                            dataCh[0].high,
                                            dataCh[1].high,
                                            dataCh[2].high,
                                            dataCh[3].high,
                                            dataCh[4].high,
                                            dataCh[5].high,
                                            dataCh[6].high,
                                            dataCh[7].high,
                                            dataCh[8].high,
                                            dataCh[9].high,
                                            dataCh[10].high,
                                            dataCh[11].high,
                                            dataCh[12].high,
                                            //habilite mais candles caso precise
                                        /*  dataCh[13].high,
                                            dataCh[14].high,
                                            dataCh[15].high,
                                            dataCh[16].high,
                                            dataCh[17].high,
                                            dataCh[18].high,
                                            dataCh[19].high,
                                            */

                                        ],
                                        period : 5
                                    }
                                    //calculando rsi baseado no mercado (periodo 5 = 300 segundos)
                                    var resultRSI = RSI.calculate(inputRSI)
                                    var price = dataCh[0].high;
                                    var buy = invest / price;
                                    var sell = price * balances.CLAM / price;
                                    console.log(resultRSI);

                                    console.log('Balanço BTC -> '+ balances.BTC + '\n#--------------------------------')
                                    console.log('Balanço CLAM -> '+ balances.CLAM + '\n#--------------------------------')
                                    console.log('Preço BTC -> '+ price + '\n#--------------------------------')

                                    /*
                                        formula de calculo RSI:
                                        se a % de valor estiver > 70%, é executado uma ordem de venda
                                        se a % de valor estiver < 30% é executado uma ordem de compra

                                        se o valor % estiver abaixo de 70 e acima de 50 a mais de 20min, executa uma venda
                                        se o valor % estiver acima de 30 e abaixo de 50 a mais de 20min, executa uma compra

                                    */
                                    
                                    //executando ordem de venda
                                    if(resultRSI[7] > 70){
                                        if(balances.CLAM >= invest){
                                           poloniex.sell(par, price, sell, 1, 1, 0, (err, sell) => {
                                            console.log(JSON.stringify(sell))
                                            console.log('executando venda:')
                                            console.log('venda no valor de: '+ price +'\n aguardando proxima ordem....')
                                        })
                                           }else{
                                            console.log('Ignorando a venda, Saldo insuficiente');
                                            console.log('Saldo: '+ balances.CLAM + 'CLAM');
                                           }
                                    }else{
                                        console.log('aguardando oportunidade para venda...\n#--------------------------')
                                    }
                                    //executando ordem de compra
                                    if(resultRSI[7] < 30){
                                        if(balances.BTC >= invest){
                                       poloniex.buy(par, price, buy, 1, 1, 0, (err, buy) => {
                                            console.log(JSON.stringify(buy))
                                            console.log('executando compra:')
                                            console.log('compra no valor de: '+ price +'\n aguardando proxima ordem....')
                                        })
                                           }else{
                                           console.log('Ignorando a compra, Saldo insuficiente');
                                            console.log('Saldo: '+ balances.BTC+' BTC');
                                           }
                                    }else{
                                        console.log('aguardando oportunidade para compra...\n#--------------------------')
                                    }


                                }
                            });
                        }
                    }
                })
            }
        })

}, reloadTime)
