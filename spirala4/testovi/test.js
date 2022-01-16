let brojVjezbi = 5;
let brojVjezbiVeci = 16;
let assert = chai.assert;
describe("iscrtajVjezbe()", function () {
  describe("iscrtajZadatke()", function () {
    it("Broj vježbi mora biti jednak parametaru brojVjezbi", function () {
      iscrtajVjezbe(document.getElementById("container-vjezbe"), {
        brojVjezbi: brojVjezbi,
        brojZadataka: [3, 1, 9, 12, 6],
      });
      let vjezbe = document.getElementsByClassName("vjezbe").length;
      assert.equal(brojVjezbi, vjezbe, "Broj vježbi mora biti 5");
    });

    it("Ne smije iscrtavati ako je broj vježbi veći od 15", function () {
      iscrtajVjezbe(document.getElementById("test-vjezbe"), {
        brojVjezbi: brojVjezbiVeci,
        brojZadataka: [3, 1, 9, 12, 6],
      });
      let brojDivova = document.getElementById("test-vjezbe").children.length;
      assert(brojDivova == 0, "Broj vježbi mora biti između 1 i 15");
    });

    it("Broj zadataka u vježbi 1 mora biti 3", function () {
      iscrtajZadatke(document.getElementById("vjezba1"), 3);
      let vjezba1 = document.getElementById("vjezba1");
      let zadaci = vjezba1.nextSibling.children.length;
      assert.equal(zadaci, 3, "Broj zadataka mora biti 3");
    });

    it("Nakon klika na vježbu 4, zadaci u vježbi 1 moraju biti sakriveni", function () {
      iscrtajZadatke(document.getElementById("vjezba4"), 12);
      let vjezba1 = document.getElementById("vjezba1");
      let zadaci = vjezba1.nextSibling.style.display;
      assert.equal(zadaci, "none", "Zadaci u vježbi 1 su sakriveni");
    });

    it("Nakon ponovo klika na vježbu 4, zadaci u vježbi 4 moraju biti sakriveni", function () {
      iscrtajZadatke(document.getElementById("vjezba4"), 12);
      let vjezba4 = document.getElementById("vjezba4");
      let zadaci = vjezba4.nextSibling.style.display;
      assert.equal(zadaci, "none", "Zadaci u vježbi 4 su sakriveni");
    });

    it("Nakon klika na vježbu 1, sve ostale vježbe moraju biti sakrivene", function () {
      iscrtajZadatke(document.getElementById("vjezba1"), 3);
      let brojac = 0;
      for (let i = 1; i <= brojVjezbi; i++) {
        if (document.getElementById("zadaci" + i).style.display == "none") {
          brojac++;
        }
      }
      assert.equal(
        brojac,
        brojVjezbi - 1,
        "Svi zadaci, osim u vježbi 1, su sakriveni"
      );
    });
  });
});
