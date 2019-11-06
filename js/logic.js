const clothingDojoModal = document.getElementById("clothing-dojo-modal");
const fconnectModal = document.getElementById("fconnect-modal");

// Get the button that opens the modal
const clothingDojoBtn = document.getElementById("clothing-dojo");
const fconnectBtn = document.getElementById("fconnect");

// Get the button that closes the modal
const clothingDojoCloseBtn = document.getElementsByClassName("modal-close")[0];
const fconnectCloseBtn = document.getElementsByClassName("modal-close")[1];

// When the user clicks on the button, open the modal
clothingDojoBtn.onclick = function () {
    clothingDojoModal.style.visibility = "visible";
    clothingDojoModal.style.opacity = "1";
}

fconnectBtn.onclick = function () {
    fconnectModal.style.visibility = "visible";
    fconnectModal.style.opacity = "1";
}


clothingDojoCloseBtn.onclick = function () {
    clothingDojoModal.style.visibility = "hidden";
    clothingDojoModal.style.opacity = "0";
}

fconnectCloseBtn.onclick = function () {
    fconnectModal.style.visibility = "hidden";
    fconnectModal.style.opacity = "0";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == clothingDojoModal) {
        clothingDojoModal.style.visibility = "hidden";
        clothingDojoModal.style.opacity = "0";
    } else if (event.target == fconnectModal) {
        fconnectModal.style.visibility = "hidden";
        fconnectModal.style.opacity = "0";
    }
}