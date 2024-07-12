function showMenu() {
  const menu = document.getElementById("menu");
  const bgContainer = document.getElementById("rs-module");
  const buttonMenu = document.getElementById("buttonMenu");
  // animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  if (menu.style.display == "none") {
    menuButtonAnimationsInCome();

    // bgContainer.style.filter = "blur(10px)";
    setTimeout(() => {
      bgContainer.style.animationName = " blurizable";
      bgContainer.style.animationDuration = "0.5s";
      bgContainer.style.animationIterationCount = 1;
      bgContainer.style.animationFillMode = "forwards";
      menu.style.display = "block";
      buttonMenu.innerText = "close";
    }, 300);
  } else {
    menuButtonAnimationsOut();

    setTimeout(() => {
      bgContainer.style.animationName = " outBlur";
      bgContainer.style.animationDuration = "0.5s";
      bgContainer.style.animationIterationCount = 1;
      bgContainer.style.animationFillMode = "forwards";
      menu.style.display = "none";
      bgContainer.style.filter = "none";
      buttonMenu.innerText = "menu";
    }, 600); // 3000 milisegundos = 3 segundos
  }

  console.log("showMenu");
}

function menuButtonAnimationsInCome() {
  setTimeout(() => {
    elementAnimatioInCome("menuItemButton1");
  }, 50);

  setTimeout(() => {
    elementAnimatioInCome("menuItemButton2");
  }, 200);
}

function menuButtonAnimationsOut() {
  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton1");
  }, 50);

  setTimeout(() => {
    elementAnimatioOnOut("menuItemButton2");
  }, 200);
}

function elementAnimatioInCome(butonName) {
  const element = document.getElementById(butonName);
  element.style.animationName = "slide-in-left ";
  element.style.animationDuration = "0.5s";
  element.style.animationIterationCount = 1;
  element.style.animationFillMode = "forwards";
}

function elementAnimatioOnOut(butonName) {
  const element = document.getElementById(butonName);
  element.style.animationName = "slide-out-left ";
  element.style.animationDuration = "0.5s";
  element.style.animationIterationCount = 1;
  element.style.animationFillMode = "forwards";
}
