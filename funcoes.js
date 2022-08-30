class Viagem {
    constructor(motorista, modelo, placa, origem, destino, km, litros, valor) {
      this.motorista = motorista;
      this.modelo = modelo;
      this.placa = placa;
      this.origem = origem;
      this.destino = destino;
      this.km = km;
      this.litros = litros;
      this.valor = valor;
    }  
    autonomia() {
        return this.km / this.litros;
    }
    gasto_km() {
        return this.autonomia / this.valor;
    }
    gasto_total() {
        return this.gasto_km * this.km;
    }

    set _setMotorista(motorista) {
    this.motorista = motorista;
    }
    set _setModelo(modelo) {
    this.modelo = modelo;
    }
    set _setPlaca(placa) {
    this.placa = placa;
    }
    set _setOrigem(origem) {
    this.origem = origem;
    }
    set _setDestino(destino) {
        this.destino = destino;
    }
    set _setKm(km) {
        this.km = km;
    }
    set _setLitros(litros) {
        this.litros = litros;
    }
    set _setValor(valor) {
        this.valor = valor;
    }

    get _motorista() {
    return this.motorista;
    }
    get _modelo() {
    return this.modelo;
    }
    get _placa() {
    return this.placa;
    }
    get _origem() {
    return this.origem;
    }
    get _destino() {
    return this.destino;
    }
    get _km() {
    return this.km;
    }
    get _litros() {
    return this.litros;
    }
    get _valor() {
    return this.valor;
    }
  }

var viagens = [];

function fIncluirviagen(motorista, modelo, placa, origem, destino, km, litros, valor) {
   let vviagem = new Viagem(motorista, modelo, placa, origem, destino, km, litros, valor);
   viagens.push(vviagem);
   return vviagem.autonomia();
}

function fListarviagens(separa = ' : ',  separadorlinha = ";") {
  let retorno = "";
  viagens.forEach(function(vviagem,i) {
    retorno += '<strong ondblclick="fApagaviagem('+i+')">&nbsp;'+i+'&nbsp;</strong>'+separa+vviagem._motorista + separa + vviagem._modelo + separa + vviagem._placa
    +separa + vviagem._origem + +separa + vviagem._destino + separa + vviagem._km + separa + vviagem._litros +separa + vviagem._valor + separa + vviagem.autonomia()+separadorlinha;
  });
  return retorno;
}

function fLimparviagens() {
  viagens = [];
}

function fApagaviagem(i) {
  //console.log(i);
  viagens.splice(i,1);
  //console.log(viagens);
  
}

function fContaviagens() {
  return viagens.length;
}
