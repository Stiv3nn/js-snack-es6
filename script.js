// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// SNACK 1  
// Crea un array di oggetti
const bici = [

    {
        'nome': "bici#1",
        'peso': 50
    },

    {
        'nome': "bici#2",
        'peso': 40
    },

    {
        'nome': "bici#3",
        'peso': 30
    },

    {
        'nome': "bici#4",
        'peso': 20
    },

    {
        'nome': "bici#5",
        'peso': 10
    }

] ;


// (DEBUG) Stampare l'array sullo schermo
//console.table(bici);

// Stampare a schermo la bici con peso minore
console.log("La bici con il peso minore è:" ,bici[4].peso, "kg");

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

