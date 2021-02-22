const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");

//UI
const ui=new UI();

//All Event Download
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm)
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url = urlElement.value;

    if(title==="" || director === "" || url === ""){
        //eror
    }else{
        const newFilm=new Film(title,director,url)
        ui.addFilmToUI(newFilm);
    }
    ui.clearInput(titleElement,urlElement,directorElement);
    e.preventDefault();
}