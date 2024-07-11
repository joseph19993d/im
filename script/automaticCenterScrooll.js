
  const image = document.getElementById("slider-1");
  const scrollContainer = document.getElementById("rs-module");

  function centerScroll() {
    const midImageW = image.width / 2 - scrollContainer.clientWidth / 2;
    const midImageH = image.height / 2 - scrollContainer.clientHeight / 2;

    scrollContainer.scrollTo({
      top: midImageH,
      left: midImageW,
      behavior: "smooth",
    });
  }

  //   console.log("Scroll vertical:", midImageH);
  //   console.log("Scroll horizontal:", midImageW);
  //   console.log("Navegando al centro");
  // }

  // if (image && scrollContainer) {
  //   if (image.complete) {
  //     centerScroll();
  //   } else {
  //     image.addEventListener("load", centerScroll);
  //   }
  // }



//   window.addEventListener("resize", centerScroll);

//   document.addEventListener("DOMContentLoaded", () => {
//     if (image && scrollContainer) {
//       if (image.complete) {
//         centerScroll();
//       } else {
//         image.addEventListener("load", centerScroll);
//       }
//     }
  
//     window.addEventListener("resize", centerScroll);

// })