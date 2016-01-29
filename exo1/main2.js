<!-- Début du code JavaScript

var n = 5; // nombre de questions

function effacer(form) // efface toutes les réponses du formulaire
{
    for (var i = 1; i < n; i++) form[i].value = "";
}

res = new Array(n)

function score(form) // corrige chaque réponse et
{ // compte le nombre de réponses justes
    somme = 0;
    if (form[1].value == 4) {
        somme++
    };
    if (form[1].value == 4) {
        res[1] = "juste"
    } else {
        res[1] = "<FONT COLOR=#FF0000>faux</FONT>"
    };
    if (form[2].value == 2) {
        somme++
    };
    if (form[2].value == 2) {
        res[2] = "juste"
    } else {
        res[2] = "<FONT COLOR=#FF0000>faux</FONT>"
    };
    if (form[3].value == 4) {
        somme++
    };
    if (form[3].value == 4) {
        res[3] = "juste"
    } else {
        res[3] = "<FONT COLOR=#FF0000>faux</FONT>"
    };
    if (form[4].value == 3) {
        somme++
    };
    if (form[4].value == 3) {
        res[4] = "juste"
    } else {
        res[4] = "<FONT COLOR=#FF0000>faux</FONT>"
    };
    if (form[5].value == 2) {
        somme++
    };
    if (form[5].value == 2) {
        res[5] = "juste"
    } else {
        res[5] = "<FONT COLOR=#FF0000>faux</FONT>"
    }
    return somme;
}

function verif(form) // vérifie que toutes les réponses ont été données
{
    i = 1;
    while ((i < n) && (form[i].value != "")) {
        i++
    };
    return ((i == n) && (form[n].value != ""));
}

function corriger(form) // corrige les réponses
{
    var j = 1;
    var somme = 0;
    var ch = "<HTML><TITLE>Quiz</TITLE><BODY BGCOLOR=#66CC99><H2>Correction</H2>";
    somme = score(form);
    while (res[j] != null) {
        ch = ch + "Question " + j + ": " + res[j] + "<BR>";
        j++;
    }
    ch = ch + "<P>Votre score est de " + somme + "/" + n;
 
    ch = ch + "</BODY></HTML>"
    return (ch)
}

function ouvrir(form) // ouvre la fenêtre du corrigé
{
    var haut = 440; // hauteur de la fenêtre (en pixels)
    var larg = 420; // largeur de la fenêtre (en pixels)
    var options = "toolbar=no,location=no,directories=no,status=no," + "menubar=no,scrollbars=yes,resizable=yes,copyhistory=yes," + "width=" + larg + ",height=" + haut;
    maFenetre = window.open("", "Quiz", options);
    maFenetre.document.open();
    corps = corriger(form);
    maFenetre.document.write(corps);
}

function process(form) // lance la correction
{
    if (verif(form)) {
        ouvrir(form)
    } else {
        alert("\nFormulaire incomplet")
    }
}

// Fin du code JavaScript  -->