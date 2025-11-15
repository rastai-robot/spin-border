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
        if(!message) return "Trabalhando po"
        if(message==="oi gordim") return "NÃO NÃO NÃO TA DOIDO PO PASSANDO MAL NAO NAO OFF GRUPO OFF OFF VITOR NAO OFF GRUPO"
        return `Krisley responde: ${message}`;
    }

}
module.exports = Krisley;

// const pode_ser_enpurrado = false;
// var velocidade = 67;
// let nome = "Krisley";

