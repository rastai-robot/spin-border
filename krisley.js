class Krisley {
    // características públicas
    nome = "Krisley";
    skin = "Gordin"
    velocidade = 100
    pode_ser_enpurrado = false

    //ações privads
    fugir(){}
    responder(){}
    tagarelar(){}
    desculpar(){}
    vender(){}

    //ações publicas
    lerMensagem(message){
        return `Krisley diz: ${message}`;
    }

}
module.exports = Krisley;

// const pode_ser_enpurrado = false;
// var velocidade = 67;
// let nome = "Krisley";

