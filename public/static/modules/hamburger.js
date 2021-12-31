export default class Hamburger {
  constructor(burger, nav) {
    this.burger = burger;
    this.nav = nav;
  }

  init() {
    this.burger.addEventListener("click", () => {
      if (this.nav.classList.contains("active")) {
        this.nav.classList.remove("active");
        this.nav.classList.add("disabled");
      } else {
        this.nav.classList.remove("disabled");
        this.nav.classList.add("active");
      }
    });
    document.querySelectorAll("a").forEach((elem) =>
      elem.addEventListener("click", () => {
        this.nav.classList.remove("active");
        this.nav.classList.add("disabled");
      })
    );
  }
}
