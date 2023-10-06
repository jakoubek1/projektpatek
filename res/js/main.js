const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfcookies = 0;

//.onclik - na kliknutí 
// () => funkce 
//{} - scope
cookie.onclick = () => {
    //Zvednout cislo o 1 
     // numberOfcookies = numberOfcookies + 1;
     // numberofcookies +=+1;
     //++ inkrement
     numberOfcookies++;
     //Zobrazit v odstavci
counter.innerText = "song: "+ numberOfcookies;


}