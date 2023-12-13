function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';

}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault(); /*reload yapmasın diye yapıyor*/ 
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('username').trim();/*trim boşlkları alır*/ 

    if (!enteredPlayername){
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;

    }


}