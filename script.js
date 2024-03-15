function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

function borrar(){
    document.getElementById('pantalla').value = '';
}   

function resultado(){
    const cuenta = document.getElementById('pantalla').value;
    const resultado = eval(cuenta);
    document.getElementById('pantalla').value = resultado;
}