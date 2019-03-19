/*
Desenvolvido e mantido por: Victor Ratts
github: https://github.com/victorratts13/RTbos
versão: beta (0.0.1) Briba
*/
const request = require('request');
const socket = require('socket.io');
const apiKey = 'Api_secret';
const secret = 'Api_key';
const Poloniex = require('poloniex-api-node');
const poloniex = new Poloniex(apiKey, secret, { nonce: () => new Date().getTime() * 1000 }, {socketTimeout: 60000});
const RSI = require('technicalindicators').RSI;





function conf(){
//definição de data (formato unix)
//mais informações: https://www.freeformatter.com/epoch-timestamp-to-date-converter.html
unix = new Date().getTime(); // time unix
time = unix / 1000; // divisão do time por 1000 (formato padrão de milisegundos)
uTime = parseInt(time);// conversão do time para numeros inteiros
uSub = 2550;// valor subtraido do inicio "start"
/* insira sua apikey e secret key poloniex */
var

version = '0.0.1',
codg = 'Briba',

//comandos de callbacks
comand = {
    ticker: "returnTicker",
    vol24: "return24hVolume",
    book: "returnOrderBook",
    history: "returnTradeHistory",
    chart: "returnChartData&",
    currency: "returnCurrencies",
    loan: "returnLoanOrders"
},
//pares
par = {
    BTC_BCN: 'BTC_BCN',
    BTC_BTS: 'BTC_BTS',
    BTC_BURST: 'BTC_BURST',
    BTC_CLAM: 'BTC_CLAM',
    BTC_DASH: 'BTC_DASH',
    BTC_DGB: 'BTC_DGB',
    BTC_DOGE: 'BTC_DOGE',
    BTC_GAME: 'BTC_GAME',
    BTC_HUC: 'BTC_HUC',
    BTC_LTC: 'BTC_LTC',
    BTC_MAID: 'BTC_MAID',
    BTC_OMNI: 'BTC_OMNI',
    BTC_NAV: 'BTC_NAV',
    BTC_NMC: 'BTC_NMC',
    BTC_NXT: 'BTC_NXT',
    BTC_PPC: 'BTC_PPC',
    BTC_STR: 'BTC_STR',
    BTC_SYS: 'BTC_SYS',
    BTC_VIA: 'BTC_VIA',
    BTC_VTC: 'BTC_VTC',
    BTC_XCP: 'BTC_XCP',
    BTC_XEM: 'BTC_XEM',
    BTC_XMR: 'BTC_XMR',
    BTC_XPM: 'BTC_XPM',
    BTC_XRP: 'BTC_XRP',
    USDT_BTC: 'USDT_BTC',
    USDT_DASH: 'USDT_DASH',
    USDT_LTC: 'USDT_LTC',
    USDT_NXT: 'USDT_NXT',
    USDT_STR: 'USDT_STR',
    USDT_XMR: 'USDT_XMR',
    USDT_XRP: 'USDT_XRP',
    XMR_BCN: 'XMR_BCN',
    XMR_DASH: 'XMR_DASH',
    XMR_LTC: 'XMR_LTC',
    XMR_MAID: 'XMR_MAID',
    XMR_NXT: 'XMR_NXT',
    BTC_ETH: 'BTC_ETH',
    USDT_ETH: 'USDT_ETH',
    BTC_SC: 'BTC_SC',
    BTC_FCT: 'BTC_FCT',
    BTC_DCR: 'BTC_DCR',
    BTC_LSK: 'BTC_LSK',
    ETH_LSK: 'ETH_LSK',
    BTC_LBC: 'BTC_LBC',
    BTC_STEEM: 'BTC_STEEM',
    ETH_STEEM: 'ETH_STEEM',
    BTC_SBD: 'BTC_SBD',
    BTC_ETC: 'BTC_ETC',
    ETH_ETC: 'ETH_ETC',
    USDT_ETC: 'USDT_ETC',
    BTC_REP: 'BTC_REP',
    USDT_REP: 'USDT_REP',
    ETH_REP: 'ETH_REP',
    BTC_ARDR: 'BTC_ARDR',
    BTC_ZEC: 'BTC_ZEC',
    ETH_ZEC: 'ETH_ZEC',
    USDT_ZEC: 'USDT_ZEC',
    XMR_ZEC: 'XMR_ZEC',
    BTC_STRAT: 'BTC_STRAT',
    BTC_PASC: 'BTC_PASC',
    BTC_GNT: 'BTC_GNT',
    ETH_GNT: 'ETH_GNT',
    BTC_BCH: 'BTC_BCH',
    ETH_BCH: 'ETH_BCH',
    USDT_BCH: 'USDT_BCH',
    BTC_ZRX: 'BTC_ZRX',
    ETH_ZRX: 'ETH_ZRX',
    BTC_CVC: 'BTC_CVC',
    ETH_CVC: 'ETH_CVC',
    BTC_OMG: 'BTC_OMG',
    ETH_OMG: 'ETH_OMG',
    BTC_GAS: 'BTC_GAS',
    ETH_GAS: 'ETH_GAS',
    BTC_STORJ: 'BTC_STORJ',
    BTC_EOS: 'BTC_EOS',
    ETH_EOS: 'ETH_EOS',
    USDT_EOS: 'USDT_EOS',
    BTC_SNT: 'BTC_SNT',
    ETH_SNT: 'ETH_SNT',
    USDT_SNT: 'USDT_SNT',
    BTC_KNC: 'BTC_KNC',
    ETH_KNC: 'ETH_KNC',
    USDT_KNC: 'USDT_KNC',
    BTC_BAT: 'BTC_BAT',
    ETH_BAT: 'ETH_BAT',
    USDT_BAT: 'USDT_BAT',
    BTC_LOOM: 'BTC_LOOM',
    ETH_LOOM: 'ETH_LOOM',
    USDT_LOOM: 'USDT_LOOM',
    USDT_DOGE: 'USDT_DOGE',
    USDT_GNT: 'USDT_GNT',
    USDT_LSK: 'USDT_LSK',
    USDT_SC: 'USDT_SC',
    USDT_ZRX: 'USDT_ZRX',
    BTC_QTUM: 'BTC_QTUM',
    ETH_QTUM: 'ETH_QTUM',
    USDT_QTUM: 'USDT_QTUM',
    USDC_BTC: 'USDC_BTC',
    USDC_ETH: 'USDC_ETH',
    USDC_USDT: 'USDC_USDT',
    BTC_MANA: 'BTC_MANA',
    ETH_MANA: 'ETH_MANA',
    USDT_MANA: 'USDT_MANA',
    BTC_BNT: 'BTC_BNT',
    ETH_BNT: 'ETH_BNT',
    USDT_BNT: 'USDT_BNT',
    USDC_BCH: 'USDC_BCH',
    BTC_BCHABC: 'BTC_BCHABC',
    USDC_BCHABC: 'USDC_BCHABC',
    BTC_BCHSV: 'BTC_BCHSV',
    USDC_BCHSV: 'USDC_BCHSV',
    USDC_XRP: 'USDC_XRP',
    USDC_XMR: 'USDC_XMR',
    USDC_STR: 'USDC_STR',
    USDC_DOGE: 'USDC_DOGE',
    USDC_LTC: 'USDC_LTC',
    USDC_ZEC: 'USDC_ZEC',
    BTC_FOAM: 'BTC_FOAM',
    USDC_FOAM: 'USDC_FOAM',
    BTC_NMR: 'BTC_NMR',
    BTC_POLY: 'BTC_POLY',
    BTC_LPT: 'BTC_LPT',
    BTC_GRIN: 'BTC_GRIN',
    USDC_GRIN: 'USDC_GRIN'
},
start = uTime - uSub,
end = uTime,
period = {
    //periodo em minutos 'M', horas 'H', dias 'D'
    M5: '300',
    M15: '900',
    M30: '1800',
    H2: '7200',
    H4: '14400',
    D1: '86400'
};// Priodo em segundos (300, 900, 1800, 7200, 14400, 86400)
depth = "10";// valor de 0 a 100 se for vazio, o valor padrão é 50

//construção da url
uri = "https://poloniex.com/public?",
comTk = `command=${comand.ticker}&`,
comVl = `command=${comand.vol24}&`,
comBk = `command=${comand.book}&`,
comHst = `command=${comand.history}&`,
comCh = `command=${comand.chart}&`,
comCur = `command=${comand.currency}&`,
cur = `currencyPair=${par.USDT_BTC}&`, //selecione o par de moedas que o bot vai trabalhar
st = `start=${start}&`,
e = `end=${end}&`,
per = `period=${period.M5}`;
//mensagem de inicio do sistema
console.log('\033c \x1b[41m Iniciando RTbos Versão: '+version+' - '+codg+'\x1b[0m \n \n ' )



//----------------------------------
}

function getUri(){

    //obtendo mercado - ticker
    console.log('\x1b[33m obtendo mercado')
        request({
                url: uri+comTk,
                json: true
                }, function (error, response, body) {
                    var dataTk = body
                    if(dataTk){
                        console.log('\x1b[32m dados de mercado obtidos')
                        //console.log(dataTk.BTC_BCN) //habilite o console e selecione o par de moedas
                    }else{
                        console.log('algum erro ocorreu =>' + error)
                }
                console.log('#---------------------------')
                
        });
        //obtendo volume
        console.log('\x1b[33m obtendo Volume negociado')
        request({
                url: uri+comVl,
                json: true
                }, function (error, response, body) {
                    var dataVl = body
                    if(dataVl){
                        console.log('\x1b[32m dados de Volume obtidos')
                         //console.log(dataVl.BTC_BCN) //habilite o console e selecione o par de moedas
                    }else{
                        console.log('algum erro ocorreu =>' + error)
                }
            console.log('#---------------------------')
        });
        //obtendo Livro de ordens
        console.log('\x1b[33m obtendo OrderBook')
        request({
                url: uri+comBk+cur+depth,
                json: true
                }, function (error, response, body) {
                    var dataBk = body
                    if(dataBk){
                        console.log('\x1b[32m dados de OrderBook obtidos')
                        console.log('\x1b[33m Ativo escolido -> \x1b[37m'+ cur + '\n Preço de mercado U$')
                        console.log(dataBk.asks[0]) 
                    }else{
                        console.log('algum erro ocorreu =>' + error)
                }
                console.log('#---------------------------')    
        });
        //Informações de data/hora
        console.log(
            '\x1b[36m obtendo dados de data/hora \n \x1b[37m' 
            + time + '\x1b[36m <- tempo Unix \n \x1b[37m'
            + uTime + '\x1b[36m <- data atual em Unix \n \x1b[37m'
            + (uTime - uSub) + '\x1b[36m <- data inicial do candle em Unix \n \x1b[37m'
            + Date() + '\x1b[36m <- Data/ Hora atual do servidor \x1b[37m \n'
            + '#---------------------------------'
        )
        //obtendo historico -  Trade History
        console.log('\x1b[33m obtendo Historico - Trade History')
        request({
                url: uri+comHst+cur,
                json: true
                }, function (error, response, body) {
                    var dataHs = body
                    if(dataHs){
                        console.log('\x1b[32m dados de History obtidos')
                       // console.log(dataHs)
                    }else{
                        console.log('algum erro ocorreu =>' + error)
                }
            console.log('#---------------------------')
        });
        //dados graficos - returnChart
        console.log('\x1b[33m obtendo dados graficos')
        request({
                url: uri+comCh+cur+st+e+per,
                json: true
                }, function (error, response, body) {
                    var dataCh = body
                    if(dataCh){
                        console.log('\x1b[32m dados Graficos Obtidos para o time de: \x1b[36m'+per+' \x1b[37m segundos')
                      //console.log(dataCh)
                    }else{
                        console.log('algum erro ocorreu =>' + error)
                }
            console.log('#--------------------------- \x1b[37m')
        });

        /*
            Os dados abaixo desta linha executam funções como ordens de compra e venda.
            certifique-se de ter add sua apiKey e secret.
        */
        
        poloniex.on('open', () => {
        console.log(` WebSocket conectado com sucesso \n preparando negociações...`);
        });
        poloniex.returnBalances(function (err, balances) {
            if (err) {
            console.log(err.message);
            } else {
            console.log('\x1b[37m Sua quantia em BTC é de -> '+balances.BTC);
            console.log('\x1b[37m Sua quantia em USDT é de -> '+balances.USDT);
            }
        });
        poloniex.openWebSocket();
}
    poloniex.returnBalances(function (err, balances) {
        if (err) {
          console.log(err.message);
        } else {
            console.log('obtendo saldos')
           // console.log(balances); habilite para verificar todos os saldos
            console.log('\x1b[45m \x1b[37m Seu saldo em BTC é: '+balances.BTC+'\x1b[0m '); //selecione balances.<coin> para mostrar o valor
        }
    });
    console.log('\x1b[33m obtendo dados graficos')
setInterval(function(){ 
start = parseInt(new Date().getTime() / 1000) - 6250
end = parseInt(new Date().getTime() / 1000)
poloniex.returnChartData('BTC_CLAM', '300', start, end, (err, data) => {
    var dataCh = data
    if(dataCh){
        console.log('\033c  \x1b[37m  \x1b[45m Bem vindo Ao RTbos \x1b[0m \n \n');
        console.log('\n Analizando estratégias... \n #---------------------------------');
        console.log(
            `#--------------------------------------------------#\n|\x1b[32m dados Graficos Obtidos para o time de: \x1b[36m'${per}' \x1b[37m segundos \n| URI do par: ${cur}\n#--------------------------------------------------#\n`+
            `#--------------------------------------------------#\n|Valor Inicial do ativo BTC -> ${dataCh[0].high}\n#--------------------------------------------------#\n`+
            `#--------------------------------------------------#\n|Data completa: ${new Date()}\n#--------------------------------------------------#`
        )
            
     //console.log('\x1b[32m dados Graficos Obtidos para o time de: \x1b[36m'+per+' \x1b[37m segundos \n URI do par: '+ cur)
     //   console.log('Valor Inicial do ativo -> '+dataCh[0].high+ '\n #-------------------------------')
        //console.log(dataCh)
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
            /*    dataCh[13].high,
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
            console.log('RSI '+resultRSI[7] + '% - indices calculados: \x1b[34m')
            console.log(new RSI.calculate(inputRSI) + ' - ' + new Date().getTime() + '\x1b[0m')
            console.log('\n\x1b[37m Analizando Mercado para executar ordens, Aguarde...')
            console.log('Aguardando melhor momento para compra/venda, aguarde....');

          /*
             formula de calculo RSI:
             se a % de valor estiver > 70%, é executado uma ordem de venda
             se a % de valor estiver < 30% é executado uma ordem de compra

             se o valor % estiver abaixo de 70 e acima de 50 a mais de 20min, executa uma venda
             se o valor % estiver acima de 30 e abaixo de 50 a mais de 20min, executa uma compra

          */   
       poloniex.returnBalances((err, balance) => {
            if(err){
                console.log(err)
            }else{

                price = dataCh[0].high;
                console.log('salso em BTC -> '+balance.BTC)
                console.log('Saldo em CLAM -> '+balance.CLAM)
                console.log(resultRSI[7])
                console.log(price)
                var buy = balance.BTC / price;
                var sell = price * balance.CLAM / price;
                console.log('total sell -> '+ parseFloat(sell.toFixed(8))+ '\n #-----------------------------------')
                console.log('total buy --> '+ parseFloat(buy.toFixed(8)) + '\n #-----------------------------------' )
            
           if(resultRSI[7] > 70){
              poloniex.sell('BTC_CLAM', price, sell , 1, 1, 0, (err, sell) => {console.log(JSON.stringify(sell)+ '\n aguardando Proxima ordem')})
          }else{
              console.log(`Aguardando Momento para Venda`)  
          }if(resultRSI[7] < 30){
              poloniex.buy('BTC_CLAM', price, buy, 0, 1, 0, (err, buy) => {console.log(buy)})
          }else{
              console.log(`Aguardando Momento para Compra`)
            }
        }
    })

          

    }else{
        console.log('algum erro ocorreu =>' + err)
} 
console.log('#--------------------------------- \x1b[37m')

})



}, 10000)
 

 //estrategia utilizada (RSI)


 var inputRSI = {
    values : [],
    period : 5
  };
  
  RSI.calculate(inputRSI)

//exportando funções

module.exports = {config: conf()};
module.exports= {get: getUri()};
