
//efecto de imagenes
function rotarImagen() {
    document.getElementById('columna2').getElementsByTagName('img')[0].style.transform = "rotate(10deg)";
}
function noRotarImagen() {
    document.getElementById('columna2').getElementsByTagName('img')[0].style.transform = "";
};
function traslacion(){
    document.getElementById('columna3').getElementsByTagName('img')[0].style.transform = "translate(20px,5px)";
    document.getElementById('columna3').getElementsByTagName('img')[0].style.filter="drop-shadow(2px 2px 2px #82c3a6)";
    document.getElementById('columna3').getElementsByTagName('img')[0].style.webkitFilter="drop-shadow(2px 2px 2px #82c3a6)";
    
}
function noTraslacion(){
    document.getElementById('columna3').getElementsByTagName('img')[0].style.transform = "";
    document.getElementById('columna3').getElementsByTagName('img')[0].style.filter="";
    document.getElementById('columna3').getElementsByTagName('img')[0].style.webkitFilter="";
}

document.getElementById('left').onmouseover = rotarImagen;
document.getElementById('left').onmouseout = noRotarImagen;

document.getElementById('right').onmouseover = traslacion;
document.getElementById('right').onmouseout = noTraslacion;