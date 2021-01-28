function jourDeLaSemaine() {
     switch (new Date().getDay()){

        case 0:
            day = "dimache";
            alert(day);
            break;
        case 1:
            day = "lundi";
            alert(day);
            break;

        case 2:
            day = "mardi";
            alert(day);
            break;

        case 3:
            day = "mercredi";
            alert(day);
            break;

        case 4:
            day = "jeudi";
            alert(day);
            break;

        case 6:
            day = "vendredi";
            alert(day);
            break;

        case 7:
            day = "samedi";
            alert(day);
            break;
    }
}