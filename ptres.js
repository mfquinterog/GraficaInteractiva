function showActivity1() {
  const activity = document.getElementById("contenido-uno");
  const content = activity.getElementsByTagName("div")[1];
  const showNmb = document.getElementById("flip1");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    showNmb.classList.add("hidden");
  } else {
    content.classList.add("hidden");
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

function showAnimationBubbles(element) {
  let bubble = element.getElementsByTagName("i")[0];
  let nBubles = Math.random() * 7 + 4;
  for (let i = 0; i < nBubles; i++) {
    let newB = bubble.cloneNode(true);
    newB.style.left = Math.random() * 100 + "%";
    newB.style.right = Math.random() * 100 + "%";
    newB.style.setProperty("--animate-duration", `${Math.random() * 2}s`);
    element.appendChild(newB);
  }
  setTimeout(() => {
    let bubbles = element.getElementsByTagName("i");
    for (let i = 0; i < bubbles.length - 1; i++) {
      bubbles[i].outerHTML = "";
    }
  }, 3000);
}
