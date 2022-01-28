
// Verificando se a data é válida ou não para iniciar cadastro do evento:
let dataEvento = new Date(`05/29/2022`)
let dataHoje = new Date()

if(dataEvento > dataHoje) {
    console.log("Evento válido")
} else {
    console.log("Data inválida, ecolher outra data")
}

// Listando participantes:
let listaParticipantes = ["Priscila", "Carina", "Tiago"]

for(let contador = 0; contador < listaParticipantes.length; contador++) {
    console.log(listaParticipantes[contador])
}

// Verificando capacidade:
let capacidade = 90

if(capacidade < 100) {
    console.log("Limite de pessoas respeitado!")
} else {
    console.log("Não é possível cadastrar novo participante!")
}

// Verificando idade:
let idadePessoa = 20

if(idadePessoa >= 18) {
    console.log("Pode cadastrar participante do evento!")
} else {
    console.log("Não é possível cadastrar participante!")
}

//Participantes cadastrados:
let idadeParticipantes = ["Priscila 20", "Carina 21", "Tiago 30"]

for(let contador = 0; contador < idadeParticipantes.length; contador++) {
    console.log(idadeParticipantes[contador])
}