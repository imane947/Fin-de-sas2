const prompt = require('prompt-sync')();

const condidats = []
let cont=0;
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
    case 1: Ajoutercondidate();
             menu();
        break;
    case 2: Ajouterplusieurscandidats():
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
    case 8: Statistiquesde(); 
          menu();
    break;
    default:
        console.log("choix introuvable");  
        menu();        
}

    
}
function  Ajoutercondidate(){
    let cont=0
    const CINE = prompt("entrez le cin :");
    for(let i=0; i<cont; i++){
    if(CINE===condidats[i].CINE){
        console.log("le cine et déja exucté:");
        menu();
    }
  
    }
}
  
