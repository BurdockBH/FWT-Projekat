function iscrtajVjezbe(divDOMelement, vjezbe) {
  let n = vjezbe.brojVjezbi;
  let b = vjezbe.brojZadataka;
  let number = /\d+/g;
  if (n >= 1 && n <= 15) {
    for (let i = 0; i < n; i++) {
      let div = document.createElement("div");
      div.setAttribute("id", "vjezba" + (i + 1));
      div.setAttribute("class", "vjezbe");
      div.onclick = function () {
        iscrtajZadatke(this, b[this.id.match(number) - 1]);
      };
      let p = document.createElement("p");
      p.innerText = "Vježba " + (i + 1);
      div.appendChild(p);
      divDOMelement.appendChild(div);
      let zadaci = document.createElement("div");
      zadaci.setAttribute("id", "zadaci" + (i + 1));
      zadaci.setAttribute("class", "zadaci");
      divDOMelement.appendChild(zadaci);
    }
  }
}

function iscrtajZadatke(vjezbaDOMelement, brojZadataka) {
  let br = vjezbaDOMelement.nextElementSibling.children.length;
  if (br == 0) {
    for (let j = 0; j < brojZadataka; j++) {
      let div2 = document.createElement("div");
      div2.setAttribute("id", "zadatak" + (j + 1));
      div2.setAttribute("class", "zadatak");

      div2.innerText = "Zadatak " + (j + 1);

      vjezbaDOMelement.nextElementSibling.appendChild(div2);
    }
  }

  let x = document.getElementsByClassName("zadaci");
  let i;
  for (i = 0; i < x.length; i++) {
    if (
      window.getComputedStyle(x[i]).display !==
      vjezbaDOMelement.nextElementSibling.style.display
    ) {
      x[i].style.display = "none";
    }
  }
  vjezbaDOMelement.nextElementSibling.style.display =
    vjezbaDOMelement.nextElementSibling.style.display == "none"
      ? "block"
      : "none";
}
