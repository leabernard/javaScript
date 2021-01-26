onclick = function () {

    var longeur = prompt("longeur");
    var largeur = prompt("largeur");
    longeur = parseInt(longeur, 10);
    largeur = parseInt(largeur, 10);
    const aire = longeur * largeur;
    const per = (longeur + largeur) * 2;
    alert("l'aire est de" + aire + " le périmetre est de " + per);
};