function boucle() {

    let tab = new Array[3];

    for (i = 0; i < tab.length; i++)
        tab[i] = i * i;
}

function boucle2(){
    
    const longueur = parseInt(prompt("entrez la longueur"));
    let tab = [];

    for(i=0;i< longueur; i++)
        tab[i] = i * i;

    alert(tab);

}