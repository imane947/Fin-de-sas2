const prompt = require('prompt-sync')();

const condidats = []
menu();

function menu(){
    console.log(`
        ================================= 
         LES LISTES DE CaANDIDATS
        ================================= 
        1. Ajouter un nouveau candidat 
        2. Ajouter plusieurs candidats à la fois
        3. Afficher la liste des candidats 
        4. Voter pour un candidat 
        5. Modifier les informations d'un candidat
        6. Supprimer un candidat  
        7.  Rechercher des candidats  
        0. Statistiques de l'élection 
        `);
         let choix= Number(prompt("entrez un chouix "));

        switch (choix) {
    case 1: 
    Ajoutercondidate();
             menu();
        break;
    case 2: Ajouterplusieurscandidats();
             menu();
        break;
    case 3:Afficherlalistedescandidats();
            menu();
        break;
    case 4:Voterpouruncandidat();
            menu();
        break;
    case 5: Modifierlesinformations();  
             menu();    
        break;
    case 6:   Supprimeruncandidat();
              menu();
        break;
    case 7: Rechercherdescandidats();
             menu();
        break;
    case 0: Statistiquesde(); 
          menu();
    break;
    default:
        console.log("choix introuvable");  
        menu();        
}


}

function  Ajoutercondidate() {
    console.log(`========== AJOUTER UN CONDIDAT ==========`);
    
    let CINE= prompt("entre cin de condidat : ")
    for (let i = 0; i < condidats.length; i++) {
        if (CINE === condidats[i].CINE) {
            console.log(`
                cin de condidat deja exicite !!!
                ` );
            menu();
        };
        
    }
    let nom = prompt("entre le nom de condidat : ")
    let prenom = prompt("entre le prenom de condidat : ")
    let partePolitic = prompt("entre la partiPolitique : ")
    let age = parseInt(prompt("entre age de condidat : "))
    if (partePolitic === "") {
        partePolitic = "Indépendant"
    }
    const condidat = {
        CINE : CINE,
        nom : nom,
        prenom : prenom,
        partePolitique : partePolitic,
        age : age,
        electeurs : []
    } 
    condidats.push(condidat)
}
    
function Ajouterplusieurscandidats(){
    let condidas = prompt("entrez le nombre de condidats que tu va ajouter :");
    for (let j=0 ; j<condidas ; j++){
    Ajoutercondidate(); 
    }
}
function Afficherlalistedescandidats(){
    let nombre=prompt("entre le nombre de candidat pour ajout ");
    if(condidats.length>0){
    console.log(`=======Afficher la liste des candidats======`);
    for(i=0;i<condidats.length;i++){
        console.log(`
            CINE    :  ${condidats[i].CINE}
            nom    :  ${condidats[i].nom}
            partePolitic : ${condidats[i].partePolitic}
            age : ${condidats[i].age}

            `);
    }
    
    }

    
}
function Voterpouruncandidat(){ 
let cinelecteur = prompt("Entrez votre CIN : ");



}