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
    case 0:  Statistiques(); 
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
                cin de condidat deja excuté !!!
                ` );
            return;
        };
        
    }
    let nom = prompt("entre le nom de condidat : ")
    let prenom = prompt("entre le prenom de condidat : ")
    let partePolitique = prompt("entre la partiPolitique : ")
    let age = parseInt(prompt("entre age de condidat : "))
    if (partePolitique === "") {
        partePolitique = "Indépendant"
    }
    const condidat = {
        CINE : CINE,
        nom : nom,
        prenom : prenom,
        partePolitique : partePolitique,
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
    if(condidats.length>0){
    console.log(`
        1.aficher simpel
        2.aficher pour le parti politique 
        3.aficher pour le nombre de vote 
         `);
    let choix=Number(prompt("votre choix"));
        if(choix==1){
    console.log(`=======Afficher la liste des candidats======`);
    for(let i=0;i<condidats.length;i++){
        console.log(`
            CINE    :  ${condidats[i].CINE}
            nom    :  ${condidats[i].nom}
            partePolitique : ${condidats[i].partePolitique}
            age : ${condidats[i].age}

            `);
        }
    }else if(choix==2){
        let partiPolitique=prompt("entre le nom de partinpolitique : ")
        for(let i=0;i<condidats.length;i++){
            if(partiPolitique==condidats[i].partePolitique){
               console.log(`
            CINE    :  ${condidats[i].CINE}
            nom    :  ${condidats[i].nom}
            partePolitique: ${condidats[i].partePolitique}
            age : ${condidats[i].age}

            `);
            }
        }
    }else if (choix===3){
        let reserve=0;
    for(let i =0 ; i<condidats.length-1;i++){
        for(let j=0 ; j<condidats.length -1-i ;j++){
            if(condidats[j].electeurs.length<condidats[j+1].electeurs.length){
                let reserve = condidats[j];

               condidats[j] = condidats[j+1];

                  condidats[j+1] = reserve;
            }
        }}
    for(let i=0;i<condidats.length;i++){
            
               console.log(`
            CINE    :  ${condidats[i].CINE}
            nom    :  ${condidats[i].nom}
            partePolitique : ${condidats[i].partePolitique}
            age : ${condidats[i].age}

            `);
        
        }
    }

    }else{
        console.log(" le choix invalide");
    }

    
}

function Voterpouruncandidat(){ 
let cinelecteur = prompt("Entrez votre CIN : ");
for(let i=0;i<condidats.length;i++){
    for(let j=0;j<condidats[i].electeurs.length;j++){
    if(condidats[i].electeurs[j]===cinelecteur){
        console.log("le electour et deja vete ");
        return ;
    }
}}
let trouv=false;
let cincondidat=prompt("entre le cin de condidat :")
for(let i=0;i<condidats.length;i++){
    if(cincondidat==condidats[i].CINE){
        trouv=true;
        condidats[i].electeurs.push(cinelecteur);
        console.log("le vote enregister");
    }
}if(!trouv){
    console.log("le condidat nexset pas ");
    return ;
}
}
function Modifierlesinformations(){
    let trouv=false
    let cincondidat=prompt("entre le cin de condidat :")
for(let i=0;i<condidats.length;i++){
    if(cincondidat==condidats[i].CINE){
        trouv=true;
        condidats[i].age=Number(prompt("entre nouvele age "));
        condidats[i].partePolitique=prompt("entre nouvele partie politique ")
        
    }
}if(!trouv){
    console.log("le condidat nexset pas ");
    return ;
}

}
function Supprimeruncandidat(){
    console.log(`==== supprimer en candidats====`);
let supprimer = prompt("entre le cine de condidat que tu va supptimer :");
for(let i =0 ; i<condidats.length; i++){
    if(condidats[i].CINE===supprimer){
        condidats.splice(i,1)
     trouve = true;
      console.log("Candidat supprimé.");
      break;
    
}
}
       if(trouve === false){
        console.log("Le CIN n'existe pas.");
}
}
function Rechercherdescandidats(){
  console.log(`======Recherch un candidats :`);
let  nomRecherche = prompt("Entrez le nom : ");

    let trouve = false;

    for(let i = 0; i < condidats.length; i++){

        if(condidats[i].nom === nomRecherche){

            console.log(`
            CINE : ${condidats[i].CINE}
            Nom : ${condidats[i].nom}
            Prénom : ${condidats[i].prenom}
            partePolitique: ${condidats[i].partePolitique}
            Age : ${condidats[i].age}
            Nombre de votes : ${condidats[i].electeurs.length}
            `);

            trouve = true;
        }
    }

    if(trouve === false){
        console.log("Candidat introuvable");
    }


} 

function Statistiques(){

    if(condidats.length === 0){
        console.log("Il n'y a aucun candidat.");
        return;
    }

    console.log("Nombre total de candidats : " + condidats.length);

    let totalVote = 0;

    for(let i = 0; i < condidats.length; i++){

        totalVote = totalVote + condidats[i].electeurs.length;
    }

    console.log("Nombre total de votes : " + totalVote);

    let copie = [];

    for(let i = 0; i < condidats.length; i++){
        copie.push(condidats[i]);
    }

    for(let i = 0; i < copie.length - 1; i++){

        for(let j = 0; j < copie.length - 1 - i; j++){

            if(copie[j].electeurs.length < copie[j + 1].electeurs.length){

                let reserve = copie[j];

                copie[j] = copie[j + 1];

                copie[j + 1] = reserve;
            }
        }
    }

    console.log("====== TOP 3 ======");

    let limite = 3;

    if(copie.length < 3){
        limite = copie.length;
    }

    for(let i = 0; i < limite; i++){

        console.log(
            (i + 1) + ". " +
            copie[i].nom + " " +
            copie[i].prenom +
            " - Votes : " +
            copie[i].electeurs.length
        );
    }

    console.log("====== CANDIDATS PAR PARTI ======");

    let partis = [];

    for(let i = 0; i < condidats.length; i++){

        let existe = false;

        for(let j = 0; j < partis.length; j++){

            if(partis[j] === condidats[i].partePolitique){

                existe = true;
            }
        }

        if(existe === false){

            partis.push(condidats[i].partePolitique);
        }
    }

    for(let i = 0; i < partis.length; i++){

        let compteur = 0;

        for(let j = 0; j < condidats.length; j++){

            if(condidats[j].partePolitique === partis[i]){

                compteur++;
            }
        }

        console.log(
            partis[i] + " : " + compteur
        );
    }
}

