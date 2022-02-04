//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el primer punto.
function Punto1() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/plaza.jpg" alt="punto uno"><br><span>Plaza Chorro de Quevedo</span><br><br> En la plazoleta del Chorro se llevan a cabo muchas de las actividades que se pueden hacer en la zona, en torno a esta actividades culturales como las presentaciones de cuentería se llevan a cabo';
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el segundo punto.
function Punto2() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/laben.jpeg" alt="punto dos"><br><span>La Bendita Chicheria</span><br><br> ';
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el tercer punto.
function Punto3() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/embudo.jpg" alt="punto tres"><br><span>Callejón Embudo</span><br><br> ';
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el cuarto punto.
function Punto4() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/gato.jpg" alt="punto cuatro"><br><span>El Gato Gris</span><br><br> ';
	document.getElementById("Info").scrollIntoView();
}