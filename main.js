var title = document.getElementById ('title');
var image = document.getElementById ('img');
var content = document.getElementById ('content');
var button1 = document.getElementById ('button1')
var button2 = document.getElementById ('button2')
var keyfound = false;

// function keycheck

function keycheck () {
    keyfound = true;
    lvl13();
    alert('Je hebt de sleutel opgepakt');
}

// function game over

function gameover () {
    content.innerHTML = 'Game over want er kwam een boot langs en die heb jij niet gezien dit was je enige kans voor een boot ';
    title.innerHTML = "GAME OVER";
    image.src = "img/gameover.jpg";
    console.log('GAME OVER');
    button1.style.display = 'none';
    button2.style.display = 'none';
}

function gameover2 () {
    content.innerHTML = 'Game over want het seinpistool ontploft zo in je gezicht en je bent nu dood.';
    title.innerHTML = 'GAME OVER';
    image.src = 'img/gameover.jpg';
    console.log('GAME OVER');
    button1.style.display = 'none';
    button2.style.display = 'none';
}

function gameover3 () {
    content.innerHTML = 'Opeens hoor je geklop op de deur van de wc je geeft geen antwoord het geklop wordt steeds harder op een gegeven moment hoor je zelfs heel de deur kraken na 2 minuten heeft hij heel de deur gesloopt hij sleurt je naar je naar de onderkant van de boot. Jullie zijn nu aan de onderkant van de boot en hij tilt je op hangt je op aan een stop na 1 minuut hangen ben je dood. ';
    title.innerHTML = 'GAME OVER';
    image.src = 'img/gameover3.jpg';
    console.log('GAME OVER');
    button1.style.display = 'none';
    button2.style.display = 'none';
}

function gameover4 () {
    content.innerHTML = 'Je wordt wakker op een tafel. de man die je knock out heeft geslagen zegt tegen je dat hij een kat in je heeft geplaatst en dat de kat nu langzaam uit je probeert tekomen via je buik. Opeens voel je zoveel pijn en komt de kat uit je buik. En zo wordt je langzaam vermoordt. GAME OVER';
    title.innerHTML = 'GAME OVER';
    image.src = 'img/gameover4.jpg';
    console.log('GAME OVER');
    button1.style.display = 'none';
    button2.style.display = 'none';
}
//  lvls
window.onload = function start () {
    content.innerHTML = 'Je bent op vakantie gegaan naar turkije en je besluit om een boot te huren en een dagje te gaan varen';
    title.innerHTML = 'Start game';
    image.src = 'img/turkije.jpg';
    console.log('Start game');
    button1.innerHTML = 'Start Game';
    button1.setAttribute ('onclick','intro()');
    button2.style.display = 'none';
}

function intro () {
    content.innerHTML = 'Je bent een stukje gaan varen in turkije Je had het zo leuk dat je niet door had dat je zo ver van de kust af bent gekomen dat je de kust niet eens meer kan zien. Oftewel je bent verdwaald. En je energie begint ook aardig op te raken je hebt totaal geen kracht meer om te roeien. Je denkt bij jezelf wat moet ik nu doen ?';
    title.innerHTML = "Adventure game";
    image.src = "img/boot.jpg";
    console.log('Adventure game');
    button1.innerHTML = 'Probeer het land te zoeken met het laatste beetje energie die je nog hebt.';
    button1.setAttribute ('onclick', 'lvl2()')
    button2.style.display = 'block';
    button2.innerHTML = 'Wachten tot er misschien een andere boot voorbij komt varen.';
    button2.setAttribute ('onclick', 'lvl3()')
}

function lvl2 () {
    content.innerHTML = 'Je probeert land te zoeken met het laatste beetje benzine die je hebt. Je vaart voor ongeveer 30 minuten alleen heb je nog steeds niks gevonden. Opeens valt je boot uit de benzine is op.';
    title.innerHTML = 'Wat nu?' ;
    image.src = 'img/verdwaald.jpg';
    console.log('Wat nu ?');
    button1.innerHTML = 'je besluit te wachten op een boot die misschien langs komt varen';
    button1.setAttribute ('onclick', 'lvl4()'); 
    button2.style.display = 'none';
}

function lvl3 () {
    content.innerHTML = 'Je wacht nu al meer dan 1 uur alleen is er nog geen boot dus je besluit toch maar naar land te zoeken met het laatste beetje energie die je nog hebt alleen vindt je niks en heb je echt totaal geen energie meer.'
    title.innerHTML = 'Lekker wachten'
    image.src = 'img/zoeken.jpg' 
    console.log('Lekker wachten');
    button1.innerHTML = 'je besluit te wachten op een boot die misschien langs komt varen';
    button1.setAttribute ('onclick', 'lvl4()');
    button2.style.display = 'none';
}

function lvl4 () {
    content.innerHTML = 'Je bent ondertussen al 2 dagen aan het wachten op een andere boot en je hebt nog niks gevonden het ete en drinken begint nu ook op te raken. Je denkt bij jezelf wat moet ik nu doen ?!';
    title.innerHTML = 'Wat moet ik nu doen ?!'; 
    image.src = 'img/watnu.jpg';
    console.log('Wat moet ik nu doen ?');
    button1.innerHTML = 'Je hebt al 2 dagen niet geslapen omdat je de hele tijd aan het zoeken ben voor een boot. Dus je besluit maar te gaan slapen zodat je weer beter kan na denken en zodat je misschien wat energie terug krijgt';
    button1.setAttribute ('onclick','gameover()');
    button2.style.display = 'block';
    button2.innerHTML = 'Je besluit om te blijven zoeken naar een boot.';
    button2.setAttribute ('onclick', 'lvl6()')
}

function lvl6 () {
    content.innerHTML = 'Je besloot om te blijven zoeken naar een boot er kwam een dikke cruise langs alleen zien ze jou nog niet je hebt nog een seinpistool maar die is al best wel oud dus misschien werkt die niet goed of je kan schreeuwen en zwaaien en hopen dat ze het merken.';
    title.innerHTML = 'Eindelijk!';
    image.src = 'img/cruise.jpg';
    console.log('Eindelijk!');
    button1.innerHTML = 'Je besluit het seinpistool te pakken en af te schieten in de lucht.';
    button1.setAttribute ('onclick','gameover2()')
    button2.innerHTML = 'Je besluit te zwaaien en te schreeuwen';
    button2.setAttribute ('onclick','lvl7()');
}

function lvl7 () {
    content.innerHTML  = 'Je besloot om te zwaaien en te schreeuwen blijkbaar zagen ze het het ziet er naar uit dat ze naar je toe komen .';
    title.innerHTML = 'werd tijd!';
    image.src = 'img/zwaaien.jpg';
    console.log('Werd tijd !');
    button1.innerHTML = 'Continue';
    button1.setAttribute ('onclick','lvl8()')
    button2.style.display = 'none';
}

function lvl8 () {
    content.innerHTML = 'De man op de cruise is eindelijk alleen ziet hij er niet heel vriendelijk uit. Hij helpt je om aan boord te komen. De man vroeg wat er was gebeurt en ik legde het uit. Na een tijdje te staan praatte zij hij dat hij me weer naar land zou brengen. In de tussen tijd kon je relaxen. Wat zou ik is doen dacht je bij jezelf.'; 
    title.innerHTML = 'Ik ben gered';
    image.src = '';
    console.log('Ik ben gered');
    button1.innerHTML = 'vraag of dat je misschien ergens kan gaan slapen omdat je heel erg moe bent.';
    button1.setAttribute ('onclick','lvl9()')
    button2.style.display = 'block';
    button2.innerHTML = 'vraag waar de wc is want je moet echt heel nodig';
    button2.setAttribute ('onclick','lvl10()')
}

function lvl9 () {
    content.innerHTML = 'Hij zegt ja is goed hij legt uit waar de kamer hij zei wel dat de deur opslot dus hij zei waar de sleutel van de kamer ligt ergens in de keuken zei hij.';
    title.innerHTML = 'Eindelijk slapen.';
    image.src = 'img/binnenkant.jpg';
    console.log('Eindelijk slapen');
    button1.innerHTML = 'Loop naar de keuken voor de sleutel.';
    button1.setAttribute ('onclick','lvl12()')
    button2.innerHTML = 'Loop gelijk door naar de kamer zonder de sleutel';
    button2.setAttribute ('onclick','lvl13()');
}

function lvl10 () {
    content.innerHTML = 'Hij legt uit waar de wc is. jij loopt er heen. Alleen kom je ondertussen allemaal bloed sporen tegen. Wat ga je doen ?'; 
    title.innerHTML = 'Lekker scheiten of toch niet ?';
    image.src = 'img/bloed.jpg';
    console.log('Lekker scheiten of toch niet ?');
    button1.innerHTML = 'ga gewoon naar de wc';
    button1.setAttribute ('onclick','gameover3()');
    button2.innerHTML = 'Volg de bloedsporen die richting de onderkant van de boot gaan';
    button2.setAttribute ('onclick','lvl11()');
}

function lvl11 () {
    content.innerHTML = 'Je komt uit op een hele enge martelings kamer opeens hoor je iemand naar je toe lopen en word je knock out geslagen.';
    title.innerHTML = 'Dat doet best wel pijn';
    image.src = 'img/marteling.jpg';
    console.log('Dat doet best wel pijn');
    button1.innerHTML = 'Continue';
    button1.setAttribute  ('onclick','gameover4()');
    button2.style.display = 'none';
}

function lvl12 () {
    content.innerHTML = 'Je bent in de keuken pak de sleutel op.';
    title.innerHTML = 'Keuken';
    image.src = 'img/keuken.jpg';
    console.log('Keuken');
    button1.innerHTML = 'pak de sleutel en loop naar de kamer';
    button1.setAttribute ('onclick','keycheck()');
    button2.style.display = 'none';
}

function lvl13 () {
    if (keyfound == true) {
        content.innerHTML = 'je hebt de sleutel en je kan de deur open doen en lekker slapen.' ;
        title.innerHTML = 'lekker slapen';
        image.src = 'img/deur.jpg';
        console.log('lekker slapen');
        button1.innerHTML = 'Doe de deur open met de sleutel je hebt opgepakt en ga slapen';
        button1.setAttribute ('onclick','lvl14()');
    } else {
        content.innerHTML = 'je hebt de sleutel niet je kan helaas niet deur open maken dus je kan niet gaan slapen.' ;
        title.innerHTML = 'lekker niet slapen';
        image.src = 'img/anderedeur.jpg';
        console.log('lekker niet slapen');
        button1.innerHTML = 'Ga terug naar de keuken om als nog de sleutel op te pakken';
        button1.setAttribute ('onclick','lvl12()')
        button2.style.display = 'none';
    }
}
    
function lvl14 () {
    content.innerHTML = 'Na 1 dag slapen word je wakker gemaakt en krijg je te horen dat jullie weer aan land zijn en dat je eindelijk weer bij de bewoonde wereld bent.';
    title.innerHTML = 'Eindelijk weer terug ';
    image.src = 'img/haven.jpg';
    console.log('Eindelijk weer terug');
    button1.innerHTML = 'End game'; 
    button1.setAttribute ('onclick','endgame()');
}

function endgame () {
    content.innerHTML = 'End game'
    title.innerHTML = 'End game';
    image.src = 'img/endgame.jpg';
    console.log('end game');
    button1.style.display = 'none';
}