// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [ 
    {
        nome: 'Lombardo',
        peso: `12.00kg`,
    },{
        nome: 'Specialized',
        peso: `9.00kg`,
    },{
        nome: 'Scott',
        peso: `11.00kg`,
    },
];

// destructuring array
let destructuringArray = bici[0];

//Ciclo forEach
bici.forEach((element) => { 
    console.log(`${element.nome}`, `${element.peso}`)
})

//destructuring object
let {nome, peso} = bici[1]  

document.getElementById(`Mountain-bike`).innerHTML = `La Mountain bike più leggera è la ${nome} con il suo peso di ${peso}`


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squadre = [ 
    {
        nomeSquadra: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },{
        nomeSquadra: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,   
    },{
        nomeSquadra: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];


for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor((Math.random() * 100) + 1);
    squadre[i].falliSubiti = Math.floor((Math.random() * 100) + 1);    
}

let destructuringSquadre = squadre[0]
let {nomeSquadra, falliSubiti} = destructuringSquadre

let nuovoArraySquadre = []

squadre.forEach((element) => { 
    nuovoArraySquadre.push(`squadra ${element.nomeSquadra}`, `falli subiti${element.falliSubiti}`)
})
    
document.getElementById(`squadre`).innerHTML = `${nuovoArraySquadre}`

console.log(nuovoArraySquadre)







// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

