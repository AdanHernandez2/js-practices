let estadoLicuadora = "apagada";
let botonLicuadora = document.querySelector('#blender-button-sound');
let sonidoLicuadora = document.querySelector('#blender-sound');
let licuadora = document.querySelector('#blender');

function controlarLicuadora() {
    if(estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        sonidoBrrBrr();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada";
        sonidoBrrBrr();
        licuadora.classList.remove("active");
    }
}
function sonidoBrrBrr() {
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}