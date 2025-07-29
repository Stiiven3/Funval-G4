

  let switchBtn = document.querySelector("#switch");
  let img = document.querySelector("#myImage");

 switchBtn.addEventListener("click", () => {
    let imagen1 = "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22512340/maxresdefault.jpg?quality=90&strip=all&crop=21.875,0,56.25,100";
    let imagen2 = "https://http2.mlstatic.com/D_NQ_NP_804579-MLU69733526413_052023-O.webp";

    if (img.getAttribute("src") === imagen1) {
      img.setAttribute("src", imagen2);
    } else {
      img.setAttribute("src", imagen1);
    }

  });
