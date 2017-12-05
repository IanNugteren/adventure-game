var title = document.getElementById ('title');
var image = document.getElementById ('img');
var content = document.getElementById ('content');
var options = document.getElementById ('options');
var keyfound = false;

// function keycheck

function keycheck () {
    lvl13();
    keyfound = true;
    alert('Je hebt de sleutel opgepakt');
}

// function game over

function gameover () {
    content.innerHTML = 'Game over want er kwam een boot langs en die heb jij niet gezien dit was je enige kans voor een boot ';
    options.innerHTML = '';
    title.innerHTML = "GAME OVER";
    image.src = "img/gameover.jpg";
    console.log('GAME OVER');
}

function gameover2 () {
    content.innerHTML = 'Game over want het seinpistool ontploft zo in je gezicht en je bent nu dood.';
    options.innerHTML = '';
    title.innerHTML = 'GAME OVER';
    image.src = 'img/gameover.jpg';
    console.log('GAME OVER');
}

function gameover3 () {
    content.innerHTML = 'Opeens hoor je geklop op de deur van de wc je geeft geen antwoord het geklop wordt steeds harder op een gegeven moment hoor je zelfs heel de deur kraken na 2 minuten heeft hij heel de deur gesloopt hij sleurt je naar je naar de onderkant van de boot. Jullie zijn nu aan de onderkant van de boot en hij tilt je op hangt je op aan een stop na 1 minuut hangen ben je dood. ';
    options.innerHTML = '';
    title.innerHTML = 'GAME OVER';
    image.src = 'img/gameover3.jpg';
    console.log('GAME OVER');
}

function gameover4 () {
    content.innerHTML = 'Je wordt wakker op een tafel. de man die je knock out heeft geslagen zegt tegen je dat hij een kat in je heeft geplaatst en dat de kat nu langzaam uit je probeert tekomen via je buik. Opeens voel je zoveel pijn en komt de kat uit je buik. En zo wordt je langzaam vermoordt. GAME OVER';
    options.innerHTML = '';
    title.innerHTML = 'GAME OVER';
    image.src = 'img/gameover4.jpg';
    console.log('GAME OVER');
}
//  lvls

window.onload = function intro () {
    content.innerHTML = 'Je bent in de vakantie een stukje gaan varen in turkije Je had het zo leuk dat je niet door had dat je zo ver van de kust af bent gekomen dat je de kust niet eens meer kan zien. Oftewel je bent verdwaald. En je energie begint ook aardig op te raken je hebt totaal geen kracht meer om te roeien. Je denkt bij jezelf wat moet ik nu doen ?';
    options.innerHTML = '';
    title.innerHTML = "Adventure game";
    image.src = "img/boot.jpg";
    console.log('Adventure game');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Probeer het land te zoeken met het laatste beetje energie die je nog hebt.';
    option1.setAttribute ('onclick','lvl2()');
    options.appendChild (option1);

    var option2 = document.createElement ('li');
    option2.innerHTML = 'Wachten tot er misschien een andere boot voorbij komt varen.';
    option2.setAttribute ('onclick','lvl3()');
    options.appendChild (option2);
}

function lvl2 () {
    content.innerHTML = 'Je probeert land te zoeken met het laatste beetje benzine die je hebt. Je vaart voor ongeveer 30 minuten alleen heb je nog steeds niks gevonden. Opeens valt je boot uit de benzine is op.';
    options.innerHTML = '';
    title.innerHTML = 'Wat nu?' ;
    image.src = 'img/verdwaald.jpg';
    console.log('Wat nu ?');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'je besluit te wachten op een boot die misschien langs komt varen'; 
    option1.setAttribute ('onclick', 'lvl4()');
    options.appendChild (option1);
}

function lvl3 () {
    content.innerHTML = 'Je wacht nu al meer dan 1 uur alleen is er nog geen boot dus je besluit toch maar naar land te zoeken met het laatste beetje energie die je nog hebt alleen vindt je niks en heb je echt totaal geen energie meer.'
    options.innerHTML = '';
    title.innerHTML = 'Lekker wachten'
    image.src = 'img/zoeken.jpg' 
    console.log('Lekker wachten');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'je besluit te wachten op een boot die misschien langs komt varen';
    option1.setAttribute ('onclick', 'lvl4()');
    options.appendChild (option1);

}

function lvl4 () {
    content.innerHTML = 'Je bent ondertussen al 2 dagen aan het wachten op een andere boot en je hebt nog niks gevonden het ete en drinken begint nu ook op te raken. Je denkt bij jezelf wat moet ik nu doen ?!';
    options.innerHTML = '';
    title.innerHTML = 'Wat moet ik nu doen ?!'; 
    image.src = 'img/watnu.jpg';
    console.log('Wat moet ik nu doen ?')

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Je hebt al 2 dagen niet geslapen omdat je de hele tijd aan het zoeken ben voor een boot. Dus je besluit maar te gaan slapen zodat je weer beter kan na denken en zodat je misschien wat energie terug krijgt.';
    option1.setAttribute ('onclick', 'gameover()');
    options.appendChild (option1);

    var option2 = document.createElement ('li');
    option2.innerHTML = 'Je besluit om te blijven zoeken naar een boot.';
    option2.setAttribute ('onclick', 'lvl6()');
    options.appendChild (option2);
}

function lvl6 () {
    content.innerHTML = 'Je besloot om te blijven zoeken naar een boot er kwam een dikke cruise langs alleen zien ze jou nog niet je hebt nog een seinpistool maar die is al best wel oud dus misschien werkt die niet goed of je kan schreeuwen en zwaaien en hopen dat ze het merken.';
    options.innerHTML = ''; 
    title.innerHTML = 'Eindelijk!';
    image.src = 'img/cruise.jpg';
    console.log('Eindelijk!');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Je besluit het seinpistool te pakken en af te schieten in de lucht.'; 
    option1.setAttribute ('onclick', 'gameover2()');
    options.appendChild (option1);

    var option2 = document.createElement ('li');
    option2.innerHTML = 'Je besluit te zwaaien en te schreeuwen.'; 
    option2.setAttribute ('onclick', 'lvl7()');
    options.appendChild (option2);
}

function lvl7 () {
    content.innerHTML  = 'Je besloot om te zwaaien en te schreeuwen blijkbaar zagen ze het het ziet er naar uit dat ze naar je toe komen .';
    options.innerHTML = '';
    title.innerHTML = 'werd tijd!';
    image.src = 'img/zwaaien.jpg';
    console.log('Werd tijd !');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Continue';
    option1.setAttribute ('onclick', 'lvl8()');
    options.appendChild (option1);
}


function lvl8 () {
    content.innerHTML = 'De man op de cruise is eindelijk alleen ziet hij er niet heel vriendelijk uit. Hij helpt je om aan boord te komen. De man vroeg wat er was gebeurt en ik legde het uit. Na een tijdje te staan praatte zij hij dat hij me weer naar land zou brengen. In de tussen tijd kon je relaxen. Wat zou ik is doen dacht je bij jezelf.'; 
    options.innerHTML = '';
    title.innerHTML = 'Ik ben gered';
    image.src = '';
    console.log('Ik ben gered');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'vraag of dat je misschien ergens kan gaan slapen omdat je heel erg moe bent.';
    option1.setAttribute ('onclick', 'lvl9()');
    options.appendChild (option1);

    var option2 = document.createElement ('li');
    option2.innerHTML = 'Vraag waar de wc is want je moet echt heel nodig scheiten.';
    option2.setAttribute ('onclick', 'lvl10()');
    options.appendChild (option2);
}

function lvl9 () {
    content.innerHTML = 'Hij zegt ja is goed hij legt uit waar de kamer hij zei wel dat de deur opslot dus hij zei waar de sleutel van de kamer ligt ergens in de keuken zei hij.';
    options.innerHTML = '';
    title.innerHTML = 'Eindelijk slapen.';
    image.src = 'img/binnenkant.jpg';
    console.log('Eindelijk slapen');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'loop naar de keuken voor de sleutel.';
    option1.setAttribute ('onclick', 'lvl12()');
    options.appendChild (option1);

    var option2 = document.createElement ('li');
    option2.innerHTML = 'loop gelijk door naar de kamer zonder de sleutel.';
    option2.setAttribute ('onclick', 'lvl13()');
    options.appendChild (option2);

}

function lvl10 () {
    content.innerHTML = 'Hij legt uit waar de wc is. jij loopt er heen. Alleen kom je ondertussen allemaal bloed sporen tegen. Wat ga je doen ?'; 
    options.innerHTML = ''; 
    title.innerHTML = 'Lekker scheiten of toch niet ?';
    image.src = 'img/bloed.jpg';
    console.log('Lekker scheiten of toch niet ?');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Ga gewoon naar de wc.';
    option1.setAttribute ('onclick', 'gameover3()');
    options.appendChild (option1);

    var option2 = document.createElement ('li');
    option2.innerHTML = 'Volg de bloedsporen die richting de onderkant van de boot gaan.'; 
    option2.setAttribute ('onclick', 'lvl11()');
    options.appendChild (option2);
}

function lvl11 () {
    content.innerHTML = 'Je komt uit op een hele enge martelings kamer opeens hoor je iemand naar je toe lopen en word je knock out geslagen.';
    options.innerHTML = '';
    title.innerHTML = 'Dat doet best wel pijn';
    image.src = 'img/marteling.jpg';
    console.log('Dat doet best wel pijn');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Continue';
    option1.setAttribute ('onclick', 'gameover4()');
    options.appendChild (option1);
}

function lvl12 () {
    content.innerHTML = 'Je bent in de keuken pak de sleutel op.';
    options.innerHTML = '';
    title.innerHTML = 'Keuken';
    image.src = 'img/keuken.jpg';
    console.log('Keuken');

    var option1 = document.createElement ('li');
    option1.innerHTML = 'Pak de sleutel en loop naar de kamer';
    option1.setAttribute ('onclick', 'keycheck()' );
    options.appendChild (option1);
}

function lvl13 () {
    if (keyfound == true) {
        content.innerHTML = 'je hebt de sleutel en je kan de deur open doen en lekker slapen.' ;
        options.innerHTML = '';
        title.innerHTML = 'lekker slapen';
        image.src = 'img/deur.jpg';
        console.log('lekker slapen');
        
        var option1 = document.createElement ('li');
        option1.innerHTML = 'Doe de deur open met de sleutel je hebt opgepakt en ga slapen';
        option1.setAttribute ('onclick' , 'lvl14()');
        options.appendChild (option1);
    } else {
        content.innerHTML = 'je hebt de sleutel niet je kan helaas niet deur open maken dus je kan niet gaan slapen.' ;
        options.innerHTML = '';
        title.innerHTML = 'lekker niet slapen';
        image.src = 'img/anderedeur.jpg';
        console.log('lekker niet slapen');
        
        var option1 = document.createElement ('li');
        option1.innerHTML = 'Ga terug naar de keuken om als nog de sleutel op te pakken';
        option1.setAttribute ('onclick' , 'lvl12()');
        options.appendChild (option1);
    }
}
    
function lvl14 () {
    content.innerHTML = 'Na 1 dag slapen word je wakker gemaakt en krijg je te horen dat jullie weer aan land zijn en dat je eindelijk weer bij de bewoonde wereld bent.';
    options.innerHTML = '';
    title.innerHTML = 'Eindelijk weer terug ';
    image.src = 'img/haven.jpg';
    console.log('Eindelijk weer terug');
    
    var option1 = document.createElement ('li');
    option1.innerHTML = 'End game';
    option1.setAttribute ('onclick', 'endgame()');
    options.appendChild (option1);
}

function endgame () {
    content.innerHTML = 'End game'
    options.innerHTML ='';
    title.innerHTML = 'End game';
    image.src = 'img/endgame.jpg';
    console.log('end game');
}
    

