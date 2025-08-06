let alunos = [
    ['Larissa', 10],
    ['Lucas', 2],
    ['Rafael', 5],
    ['Otávio', 8],
    ['Luiz', 10],
    ['Daniel', 9.5],
    ['Eduardo', 7],
    ['Afonso', 9.2],
    ['Giovane', 0],
    ['Pedro', 1],
    ['Gabriel', 0.5],
    ['Cleber', 7.5],
    ['Antonio', 0.25],
    ['Antunes', 8],
    ['Kleyton', 5],
    ['Cleyton', 5.5],
    ['Claython', 6],
    ['Claython', 6.5],
    ['Klaython', 7],
    ['Cleython', 7.5],
    ['Kleython', 8],
    ['Mateus', 6.25],
    ['Matheus', 7],
    ['Walter', 1.5],
    ['Artur', 6],
    ['Arthur', 4],
    ['Lucca', 3],
    ['Valentim', 3.5],
    ['Tiago', 3.4],
    ['Thiago', 4.5],
    ['Maikon', 5],
    ['Maykon', 7],
    ['Caio', 7.5],
    ['Julio', 3],
    ['Felipe', 2.5]
]

for(let i = 0; i <= alunos.length; i++){
    if(alunos[i][1] >= 7){
        console.log(`${alunos[i][1]} passou`)
    }else{
        console.log(`${alunos[i][0]} reprovou`)
    }
}
