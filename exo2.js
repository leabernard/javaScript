function cercle() {
    var rayon = prompt("rayon");
    rayon = parseInt(rayon, 10);
    const aire = (Math.PI * (rayon*rayon)) ;
    const per = 2 * Math.PI * rayon;
    alert("l'aire est de" + aire + " le périmetre est de " + per);
}