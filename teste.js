let vitorias = 20;
let derrotas = 10;

qtdPontos = pontuacaoPlayer(vitorias, derrotas)
rank = rankPlayer(qtdPontos)

console.log("O Saldo de vitorias eh: "+qtdPontos+" O rank do jogador eh: "+rank);


function pontuacaoPlayer(v, d){
    return v - d;
}
function rankPlayer(pontos){
    if(pontos<=10)
       return "Ferro"
    else if(pontos>=11 && pontos<=20)
        return "Bronze"
    else if(pontos>=21 && pontos<=50)
        return "Prata"
    else if(pontos>=51 && pontos<=80)
        return "Ouro"
    else if(pontos>=81 && pontos<=90)
        return "Diamante"
        else if(pontos>=91 && pontos<=100)
        return "Lendario"
        else
        return "Imortal"   
}