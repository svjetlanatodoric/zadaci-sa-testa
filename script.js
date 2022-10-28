
//for petlje sam koristila da bih prošla kroz sve članove niza

//izmijenila sam neke stvari čisto da mi prikaz bude ljepši, npr. da mi se ne ispisuje paragraf u .innerHTML pri svakom prolasku kroz petlju
//zato sam kreirala prazne nizove i dodjeljivala im vrijednosti direktno unutar petlje


//DRUGA GRUPA


var niz = [2, 5, 1, 145, 68, 97, 21, 45, 878, 22, 71, 50, 13, 24, 93]
var stranica = document.getElementById("body")
stranica.innerHTML = "<p style ='display: inline'> Početni niz je: </p>" + niz + "<br>"

function parniBrojevi() {
    var parni = []

    for (var i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {       //koristim if uslov da bih ispitala djeljivost brojeva sa 2; ako je ostatak pri dijeljenju 0, broj je paran, u suprotnom je neparan
            parni = parni + niz[i] + ", ";         // u varijablu "parni" smještam niz brojeva koji su ispunili uslov iz zagrada
        }

    }
    stranica.innerHTML += "<p style ='display: inline' >2. a) Parni brojevi su: " + parni + "</p>" + "<br>" // u element sa id-jem "stranica" (body element)ispisujem vrijednost varijable "parni"

}
parniBrojevi();   //poziv funkcije

function sume() {

    var sumaParnih = 0;     //kreiram dvije varijable i dodjeljujem im početnu vrijednost 0
    var sumaNeparnih = 0;
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {         //ispitivanje parnosti brojeva
            sumaParnih = sumaParnih + niz[i];   //u varijablu "sumaParnih" smještam sumu svih parnih brojeva nakon što sam prošla kroz petlju i našla parne brojeve
            // na početku je sumaParnih=0; kad je i=0, vrijednost niz[i]=2; po formuli sumaParnih tada postaje 0 =0+2
            //pri idućoj iteraciji sumaParnih = 2; kad je i=1, vrijednost niz[i]=5, sumaParnih ostaje na vrijednosti 2, jer je niz[1] =5; 5 je neparan broj i ne prolazi uslov; petlja po tom principu ide dalje i na kraju imamo sumu parnih brojeva u varijabli sumaParnih
        } else if (niz[i] % 2 != 0) {
            sumaNeparnih = sumaNeparnih + niz[i]; //isti princip kao kod sume parnih brojeva
        }
    }
    stranica.innerHTML += "<p style ='display: inline' >2. b) Suma parnih brojeva je: </p>" + sumaParnih + "<br>";   //ispis na stranici
    stranica.innerHTML += "<p style ='display: inline' >Suma neparnih brojeva je: </p>" + sumaNeparnih + "<br>";

}
sume();

function prostiBrojevi() {
    var nizProstihBrojeva = []; //ponovo kreiram prazan niz da bih u njega smjestila samo određene vrijednosti
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] == 1) {
            stranica.innerHTML += "<p style ='display: inline' >2. c) Broj 1 nije ni prost ni složen, a  </p>" //ako u nizu ima broj 1, prikaži na stranici ovaj paragraf
        } if (niz[i] % 2 != 0 && niz[i] % 3 != 0 && niz[i] % 5 != 0 && niz[i] % 7 != 0 && niz[i] % 11 != 0 || niz[i] == 2 || niz[i] == 3 || niz[i] == 5 || niz[i] == 7 || niz[i] == 11) {

            nizProstihBrojeva = nizProstihBrojeva + niz[i] + ", ";
        }
        //ovim if uslovom sam provjerila djeljivost brojeva iz niza sa brojevima 2,3,5,7 i 11; nisam provjeravala npr. sa 4,6,8,10 i sl. jer ako je broj iz niza djeljiv tim brojevima onda je djeljiv i brojem 2 (automatski nije prost broj) i između tih uslova sam stavila znak && jer ne želim da mi se ispiše neki broj koji je djeljiv bilo kojim od tih brojeva ; provjerila sam da li u nizu ima neki od tih brojeva ( ili 2 ili 3 ili 5 ...) i ako ima, da i njega doda u novi niz bez obzira što je ostatak pri dijeljenju 0, jer je u pitanju prost broj
    }

    stranica.innerHTML += "<p style ='display: inline' >prosti brojevi su: </p>" + nizProstihBrojeva + "<br>"

}
prostiBrojevi();

function neparniIndeks() {
    var indeks = []; //kreiram prazan niz u koji ću smjestiti vrijednosti sa neparnim indeksom; kreirala sam ga da mi bude lakše ispisati novi niz, tj. niz samo onih brojeva koji imaju neparan indeks; kako god sam drugačije pokušala ispisivalo bi mi tačne vrijednosti,ali liniju po liniju, izgledalo je neuredno
    for (var i = 1; i < niz.length; i = i + 2) {    //i kreće od 1 jer je 1 prvi prirodan neparan broj i uvećava se za 2 (i=i+2), pa tako petlja prolazi kroz indekse 1, 3, 5,... (samo neparni indeksi)
        indeks = indeks + niz[i] + ", "; //indeks je na početku prazan niz, a kako petlja prolazi kroz niz, neparni indeksi (određeni uslovom) se dodaju u niz indeks i dodala sam zarez u stringu da brojevi ne budu spojeni

    }
    stranica.innerHTML += "<p style ='display: inline' >2. d) Brojevi sa neparnim indeksom su: </p>" + indeks + "<br>" // ispis niza indeks koji sadrži brojeve sa neparnim indeksima

}
neparniIndeks()

function odNajveceg() {
    var sortiranNiz = []

    for (var i = 0; i < niz.length; i++) {
        sortiranNiz = niz.sort((a, b) => b - a); //.sort() metoda sortira samo nizove stringova, a kad sortira niz brojeva, treba joj "pomoćna" funkcija za poređenje; kako petlja prolazi kroz niz, njegovi članovi postaju argumenti a i b i tako se porede dok petlja ne završi
        // vraća pozitivnu vrijednost ako je prvi argument (a) manji od drugog argumenta (b),tj. ako je broj b na poziciji ispred broja a (b > a); ako su jednaki vraća 0 (ako pozicija ostaje ista) i negativnu vrijednost ako je a > b, tj. ako je broj a na nekoj poziciji ispred broja b; 
    }
    stranica.innerHTML += "<p style ='display: inline' >2. e) Niz sortiran od najmanjeg do najvećeg broja: </p>" + sortiranNiz + "<br>"
}
odNajveceg()



//prva grupa

function dvocifreniBrojevi() {
    var dvocifreniBrojevi = [];
    for (var i = 0; i < niz.length; i++) {
        if (niz[i] >= 10 && niz[i] <= 99) { // brojevi veći ili jednaki 10 i manji ili jednaki 99 su dvocifreni, pa to i navodim u uslovu 
            dvocifreniBrojevi = dvocifreniBrojevi + niz[i] + ", "
        }
    }
    stranica.innerHTML += "<p style ='display: inline' >1. a) Dvocifreni brojevi su: </p>" + dvocifreniBrojevi + "<br>"
}
dvocifreniBrojevi();

function aritmetickaSredina() {
    var arsr = 0;
    for (var i = 0; i < niz.length; i++) {
        arsr = arsr + niz[i] / niz.length //zbir vrijednosti svih članova niza dijelim sa brojem članova niza (niz.length)
    }
    stranica.innerHTML += "<p style ='display: inline' >1. b) Srednja vrijednost niza iznosi  </p>" + arsr + "<br>"
}
aritmetickaSredina();

function parniIndeksi() {
    var indeks = [];
    for (var i = 0; i < niz.length; i = i + 2) {   //za razliku od zadatka sa neparnim indeksom, ovdje i kreće od 0 i uvećava se za 2 pri svakom prolasku kroz petlju, pa tako u prazan niz indeks upisuje samo brojeve sa parnim indeksima
        indeks = indeks + niz[i] + ", ";

    }
    stranica.innerHTML += "<p style ='display: inline' >1. d) Brojevi sa parnim indeksom su: </p>" + indeks + "<br>" // ispis niza indeks koji sadrži brojeve sa neparnim indeksima

}
parniIndeksi();

function sortiraj() {
    var sortiranNiz = []

    for (var i = 0; i < niz.length; i++) {
        sortiranNiz = niz.sort((a, b) => a - b); // ponovo petlja prolazi kroz niz, njegovi članovi postaju argumenti a i b i porede se
        // vraća negativnu vrijednost ako je prvi argument (a) manji od drugog argumenta (b),tj. ako je broj a na poziciji ispred broja b; vratiće 0 ako su jednaki, tj. ako se pozicija broja ne promijeni i pozitivnu vrijednost ako je a > b, tj. ako je broj b na nekoj poziciji ispred broja a; 
    }
    stranica.innerHTML += "<p style ='display: inline' >1. e) Niz sortiran od najmanjeg do najvećeg broja: </p>" + sortiranNiz + "<br>"
}
sortiraj();
