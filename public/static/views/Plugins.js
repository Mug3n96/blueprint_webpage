/* example view which contains links to other views */
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Plugins");
  }

  data = [
    {
      title: "Anti Offline Raid",
      text: "Plugin which makes offline raiding much harder",
      link: "antiofflineraid"
    },
    {
      title: "Remover Tool",
      text: "Removes with \"/remove\" commando structures.",
      link: "removertool"
    },
    {
      title: "Info Panel",
      text: "Some aditional HUD-elements",
      link: "infopanel"
    },
    {
      title: "Dangerous Treasures",
      text: "Player will fight for a high tier loot treasure.",
      link: "dangeroustreasures"
    },
    {
      title: "Visual Cupboard",
      text: "\"/showsphere\" to show cupboard radius.",
      link: "visualcupboard"
    },
    {
      title: "Stack Size Controller",
      text: "Some resources are stackable up to 10 times.",
      link: "stacksizecontroller"
    },
    {
      title: "Gather Manager",
      text: "gathering of basic resources is doubled.",
      link: "gathermanager"
    }

  ];

  dataToHtml(data) {
    let html = "";
    data.forEach(elem => {
        html = html + `
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">${elem.title}</h3>
            <h5>${elem.text}</h5>
          </header>
          <a href="/plugins/${elem.link}" 
            class="article-button plugin" data-link>read more</a>
        </article>\n`;
    });
    return html;
  }

  async getHtml() {
    return `
      <h1 class="title-plugins">Plugins</h1>
      <div class="articles-container plugin">
        ${this.dataToHtml(this.data)}
      </di>
    `;
  }
}
