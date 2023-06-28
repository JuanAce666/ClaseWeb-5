//declarar funcion
/*function operacion(n1,n2, signo){
    if(signo == "+"){
        return n1 + n2
    }else if (signo == "-"){
        return n1 - n2;
    }else if (signo == "*"){
        return n1 * n2;
    }else if (signo == "/"){
        return n1 / n2;
    }else{
        return "El signo"+signo+"no es valido"
    }
}
function resultado(num1,num2,sig, resultado) {
    if(isNaN(resultado)){
        alert(resultado);
    }else{
        alert("la operacion "+num1+" " +sig+ " "+num2+" es "+resultado);
        console.log("La operacion "+num1+" " +sig+ " "+num2+" Es "+resultado);
    }
}
var num1 = parseInt(prompt("Digite un numero"))
var num2 = parseInt(prompt("Digite otro numero"))
var s = prompt("Digite el signo de la operacion")
//ejecutar funcion
var resultado = operacion(num1,num2, s);
resultados(num1,num2,s,resultado)
//declarar funcion anonima
/*(function() {
    alert("Hola anonimo");
})();
//funciones de flecha*/

function saludar(nombre) {
    document.write("Hola "+nombre+"<br>");
}
var nombres = parseInt(prompt("Digite cantidad de nombres"))
function pedirNombre( numeroNombres) {
    for(var x = 1; x <= numeroNombres; x++){
        var nom = prompt("Digite un nombre");
        saludar(nom);
    }
}
pedirNombre(nombres);

