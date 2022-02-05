//funcion para mostrar el contenido y ocultar el titulo del cuadro
function showActivity1() {
  const activity = document.getElementById("contenido-uno");
  const content = activity.getElementsByTagName("div")[1];
  const showNmb = document.getElementById("flip1");
  if (content.classList.contains("hidden")) {
    //si la clase esta en oculto se quita
    content.classList.remove("hidden");
    showNmb.classList.add("hidden"); //se muestra cuando no esta el contenido
  } else {
    content.classList.add("hidden"); // se vuelve a mostrar lo oculto
    showNmb.classList.remove("hidden");
  }
}

function showActivity2() {
  const activity = document.getElementById("contenido-dos");
  const content = activity.getElementsByTagName("div")[1];
  const showNmb = document.getElementById("flip2");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    showNmb.classList.add("hidden");
  } else {
    content.classList.add("hidden");
    showNmb.classList.remove("hidden");
  }
}

function showActivity3() {
  const activity = document.getElementById("contenido-tres");
  const content = activity.getElementsByTagName("div")[1];
  const showNmb = document.getElementById("flip3");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    showNmb.classList.add("hidden");
  } else {
    content.classList.add("hidden");
    showNmb.classList.remove("hidden");
  }
}

function showActivity4() {
  const activity = document.getElementById("contenido-cuatro");
  const content = activity.getElementsByTagName("div")[1];
  const showNmb = document.getElementById("flip4");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    showNmb.classList.add("hidden");
  } else {
    content.classList.add("hidden");
    showNmb.classList.remove("hidden");
  }
}
//funcion para mostrar y replicar la animacion de la burbuja
function showAnimationBubbles(element) {
  let bubble = element.getElementsByTagName("i")[0]; //burbujas dentro del tag i
  let nBubles = Math.random() * 7 + 4; // genera n cantidad de burbujas
  for (let i = 0; i < nBubles; i++) {
    let newB = bubble.cloneNode(true);
    newB.style.left = Math.random() * 100 + "%"; //para moverlo un numero aleatorio a la izquierda
    newB.style.right = Math.random() * 100 + "%"; // para moverlo un numero aleatorio a la derecha
    newB.style.setProperty("--animate-duration", `${Math.random() * 2}s`); // para estabalecer el tiempo de la animacion
    element.appendChild(newB); //Para meterlo en el cuadro de la actividad
  }
  setTimeout(() => {
    //funcion que se ejecuta en 3 segundos para quitar todas las burbujas excepto una
    let bubbles = element.getElementsByTagName("i");
    for (let i = 0; i < bubbles.length - 1; i++) {
      bubbles[i].outerHTML = "";
    }
  }, 3000);
}
