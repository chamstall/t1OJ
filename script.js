// 1.
// Variables globales
let input1 = document.querySelector("#input1");
let entrer1 = document.querySelector("#entrer1");
let tab1 = [];
let msg1 = document.querySelector(".msg1");

let input2 = document.querySelector("#input2");
let entrer2 = document.querySelector("#entrer2");
let tab2 = [];
let msg2 = document.querySelector(".msg2");

let tab3 = [];
let tab4 = [];

// premiere ecoute de l'evenement de click du bouton entrer1
entrer1.addEventListener("click", (e) => {
    e.preventDefault();
    if (input1.value === "" || isNaN(input1.value)) {
        msg1.innerHTML = "Veuillez saisir un nombre !"
    }
    else {
        msg1.innerHTML = "";
        if (tab1.length < 5) {
            tab1.push(parseFloat(input1.value));
        }
        else {
            msg1.innerHTML = "Vous avez déjà saisis 5 nombres  "
            console.log("taille limite atteinte")
        }
    }
    input1.value = "";
    console.log("tableau1 :" + "" + tab1);
});

// deuxieme ecoute de l'evenement de click du bouton entrer2
entrer2.addEventListener("click", (e) => {
    e.preventDefault();
    if (input2.value === "" || isNaN(input2.value)) {
        msg2.innerHTML = "Veuillez saisir un nombre!"
    }
    else {
        msg2.innerHTML = "";
        if (tab2.length < 5) {
            tab2.push(parseFloat(input2.value));
        }
        else {
            msg2.innerHTML = "Vous avez déjà saisis 5 nombres  "
            console.log("taille limite atteinte");
        }
    }
    input2.value = "";
    console.log("tableau2 :" + "" + tab2);
    if (tab1.length === 5 && tab2.length === 5) {
        createTab3();
    }
    if (tab1.length === 5 && tab2.length === 5) {
        createTab4();
    }
});
function createTab3() {
    tab3 = tab1.filter((element) => !tab2.includes(element));
    console.log("tableau 3 :" + tab3);
}
function createTab4() {
    tab4 = tab1.filter((element) => tab2.includes(element));
    console.log("tableau 4 :" + tab4);
}


// 2.

// function trierTableau(tableau) {
//     if (tableau.length <= 1) {
//         return tableau;
//     }

//     let pivot = tableau[Math.floor(tableau.length / 2)];
//     let inferieurs = [];
//     let egaux = [];
//     let superieurs = [];

//     for (let i = 0; i < tableau.length; i++) {
//         let elementActuel = tableau[i];
//         if (elementActuel < pivot) {
//             inferieurs.push(elementActuel);
//         }
//         else if (elementActuel > pivot) {
//             superieurs.push(elementActuel);
//         }
//         else {
//             egaux.push(elementActuel);
//         }
//     }

//     return  trierTableau(inferieurs).concat(egaux , trierTableau(superieurs));
// }

// let tab1 = [5, 3, 87, 1, -4, -99, 0];

// console.log(tab1);

// let tableauTrié = trierTableau(tab1);
// console.log(tableauTrié);

// // 3.
// function findMaxAndMin (tableau){
//     if(tableau.length === 0){
//         return tableau;
//     }
//     let min = tableau[0];
//     let max = tableau[0];
//     for(let i = 1; i < tableau.length; i++){
//         if(tableau[i] < min){
//             min = tableau[i];
//         }
//         if(tableau[i] > max){
//             max = tableau[i];
//         }
//     }
//     return `la valeur minimale est ${min} et la valeur maximale est ${max}`;
// }
// let resultats = findMaxAndMin(tab1);
// console.log(resultats);