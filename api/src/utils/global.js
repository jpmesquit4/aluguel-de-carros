import { horaAtual } from './dateTime.js'


global.criarErro = function criarErro(err) {
  let obj = {
    error: err.message
  }

  return obj; 
}


global.logError = function logError(err) {
  console.log(horaAtual() + " ERROR --> " + err.message);
}