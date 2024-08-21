//Exercitiul nr.1

//Scrieți o funcție de traducere numită helloWorld care:
//acceptă 1 argument, un cod de limbă (ex. „es”, „de”, „en”)
//returnează „Hello, World!” pentru limba dată, pentru cel puțin 3 limbi. Ar trebui să returneze implicit limba engleză.
//Apelați acea funcție pentru fiecare dintre limbile acceptate și înregistrați rezultatul pentru a vă asigura că funcționează.

function helloWorld(language) {
    if (language == 'fr' ) {
        return 'Bonjour, le monde!';
    } else if (language == 'ro' ) {
        return 'Salut, lume!'
    } else if (language == 'ru' ) {
        return 'Privet mir!'
    } else {
        return 'Hello World!'
    }
}
console.log(helloWorld('fr'));
console.log(helloWorld ('ro'));
console.log(helloWorld ('ngfgjlk'));


//acelasi cod dar intr-un switch

function helloWorld(language) {
    switch (language) {
        case 'fr' :
            console.log('Bonjour, le monde!');
            break;
        case 'ro':
            console.log('Salut, lume!');
            break;
        case 'ru':
            console.log('Prive, mir!');
            bfreak;
        default:
            console.log('Hello world');
            break
    }
}
helloWorld



//Exercitiul nr.2

//Scrieți o funcție cu numele plural care să:
//Accepte 2 argumente: un substantiv și un număr.
//Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: “I have 5 cats” sau “I have 1 dog”. 
//Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
//Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, “I have 9 geese”)

function plural(substantiv, numar) {
    // Verificăm excepțiile pentru "sheep" și "goose"
    if (substantiv === "sheep") {
        return `I have ${numar} sheep`;
    } else if (substantiv === "goose") {
        const pluralGoose = numar === 1 ? "goose" : "geese";
        return `I have ${numar} ${pluralGoose}`;
    } else {
        // Adăugăm "s" la final pentru a forma pluralul, dacă numărul nu este 1
        const pluralForm = numar === 1 ? substantiv : substantiv + "s";
        return `I have ${numar} ${pluralForm}`;
    }
}

// Apelarea funcției cu datele furnizate
console.log(plural("pig", 6));      // "I have 6 pigs"
console.log(plural("hamster", 0));  // "I have 0 hamsters"
console.log(plural("parrot", 1));   // "I have 1 parrot"

// Apeluri pentru excepții
console.log(plural("sheep", 1));    // "I have 1 sheep"
console.log(plural("sheep", 4));    // "I have 4 sheep"
console.log(plural("goose", 1));    // "I have 1 goose"
console.log(plural("goose", 9));    // "I have 9 geese"




//Exercitiul nr.3

//Creați o programă care întoarce prețul biletului la Grădina Botanică, în funcție de vârstă: copiii până la 12 ani plătesc 5 lei, după 12 - 10 lei, adulții - 20 lei, iar pensionarii (peste 65) - 15.
//Chemați numai 1 funcție, numai cu anul nașterii. (ar trebui să aveți 2 funcții)
//Datele: 2015, 1985, 1960, 2018

let pretBilet;
const calcVartsa = function(anulNasterii) {
    return 2024 - anulNasterii; //anul curent scadem anul nasteri fiacaruia.
}
//in dependenta de virsta care este pretul biletului
const calcPretBilet = function(anulNasterii1) {
    let varsta = calcVarsta(anulNasterii1);
    if (vartsa < 12) {
        pretBilet = 5; //daca avem virsta de 12 ani atunci pretul biletului va fi 5 lei
    } else if (varsta >= 12 && varsta < 18) {
        pretBilet = 10;
    } else if (varsta >= 18 && varsta < 65) {
        pretBilet = 20;
    } else {
        pretBilet = 15; // fara return sa folosit.
    }
    //console.log(' Pretul biletului pentru vartsa de ' + varsta + 'ani este de ' + pretBilet + ' lei. ');
    //console.log(`Pretul biletului pentru vrsta de ${varsta} ani este de ${pretBilet} lei.`)
}

console.log(calcPretBilet(2015));
console.log(calcPretBilet(1985));
console.log(calcPretBilet(1960));
console.log(calcPretBilet(2018));



//Exercitiul nr.4

//Creați o programă care are definite 3 variabile numele, anulNasterii şi isF (boolean).
//Creați o funcție care calculează vârsta persoanei.
//Creați o funcţie care acceptă o valoare booleană isF și întoarce vârsta de pensionare (folosiți ternaryOperator  - 67 bărbați, 64 femei);
//Creați o funcție care află dacă persoana este deja la pensie, peste câți ani se va pensiona, şi dacă nu este minoră.
//Afișați în consolă numele și mesajul de pensionare după exemplu: “Vasile mai are 26 de ani până la pensionare”. Chemați numai o funcție cu datele.
//Date: Sergiu, 1979. Anastasia, 1963. Andreea, 2010.

// Definirea variabilelor
const numele1 = "Sergiu";
const anulNasterii1 = 1979;
const isF1 = false;

const numele2 = "Anastasia";
const anulNasterii2 = 1963;
const isF2 = true;

const numele3 = "Andreea";
const anulNasterii3 = 2010;
const isF3 = true;

// Funcție pentru calcularea vârstei
function calculeazaVarsta(anulNasterii) {
    const anulCurent = new Date().getFullYear();
    return anulCurent - anulNasterii;
}

// Functie pentru determinarea varstei de pensionare
function varstaPensionare(isF) {
    return isF ? 64 : 67;
}

// Funcție pentru a determina starea de pensionare
function calculeazaPensionare(nume, anulNasterii, isF) {
    const varsta = calculeazaVarsta(anulNasterii);
    const pensionareLa = varstaPensionare(isF);
    const aniRamasi = pensionareLa - varsta;
    const esteLaPensie = aniRamasi <= 0;

    let mesaj;
    if (varsta < 18) {
        mesaj = `${nume} este minor(a).`;
    } else if (esteLaPensie) {
        mesaj = `${nume} este deja la pensie.`;
    } else {
        mesaj = `${nume} mai are ${aniRamasi} ani pana la pensionare.`;
    }
    
    console.log(mesaj);
}

// Apelarea funcției cu datele furnizate
calculeazaPensionare(numele1, anulNasterii1, isF1); // Sergiu, 1979
calculeazaPensionare(numele2, anulNasterii2, isF2); // Anastasia, 1963
calculeazaPensionare(numele3, anulNasterii3, isF3); // Andreea, 2010





