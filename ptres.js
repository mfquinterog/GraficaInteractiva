function showActivity1() {
  const activity = document.getElementById("contenido-uno");
  const content = activity.getElementsByTagName("div")[0];
  const showNmb = activity.getElementsByTagName("h4")[0];
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
  const content = activity.getElementsByTagName("div")[0];
  const showNmb = activity.getElementsByTagName("h4")[0];
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
  const content = activity.getElementsByTagName("div")[0];
  const showNmb = activity.getElementsByTagName("h4")[0];
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
  const content = activity.getElementsByTagName("div")[0];
  const showNmb = activity.getElementsByTagName("h4")[0];
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    showNmb.classList.add("hidden");
  } else {
    content.classList.add("hidden");
    showNmb.classList.remove("hidden");
  }
}
