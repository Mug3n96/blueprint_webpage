/* example view of a view which got clicked from a view, which contains multiple links to a view */
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Plugin");
  }

  data = [
    {
      title: "Anti Offline Raid",
      description:
        `This plugin should <span class="akzent-secondary">prevent</span> offline raiding to a certain degree. When players are <span class="akzent-secondary">more</span> than <span class="akzent-secondary">10 minutes afk</span> or <span class="akzent-secondary">offline</span>, the protection will kick in. It won't <span class="akzent-secondary">fully</span> protect you from offline raiding, it will <span class="akzent-secondary">dramatically</span> reduce the damage on the structures. In the <span class="akzent-secondary">most</span> szenarios the offline raider will not see a reason to <span class="akzent-secondary">waste resources</span> to raid a offlien base but for <span class="akzent-secondary">safety</span> build safe bases :P. Online raiding is <span class="akzent-secondary">not forbiden</span> so have fun! (But respect each other).`,
      configuration: `
        <ul>
          <li><span class="akzent-secondary">0</span> to <span class="akzent-secondary">1</span> hour <span class="akzent-secondary">0%</span> Damage on Structures</li>
          <li><span class="akzent-secondary">1</span> to <span class="akzent-secondary">24</span> hours <span class="akzent-secondary">10%</span> Damage on Structures</li>
          <li><span class="akzent-secondary">24</span> to <span class="akzent-secondary">48</span> hours <span class="akzent-secondary">20%</span> Damage on Structures</li>
          <li><span class="akzent-secondary">48</span> to <span class="akzent-secondary">168</span> hours <span class="akzent-secondary">100%</span> Damage on Structures</li>
          <li>From <span class="akzent-secondary">168</span> hours <span class="akzent-secondary">200%</span> Damage on Structures</li>
        </ul>
        <span>To see if a player is offline or afk use the <span class="akzent-secondary">/ao</span> command.</span>
      `,
      pluginAuthor: `<a class="article-button plugin" href="https://umod.org/user/calytic">calytic</a>`,
      linkToPlugin: `<a class="article-button plugin" href="https://umod.org/plugins/anti-offline-raid">Anti Offline Raid</a>`,
      link: "antiofflineraid",
    },
    {
      title: `Remover Tool`,
      description: `With the <span class="akzent-secondary">"Remover Tool"</span> plugin you can <span class="akzent-secondary">remove/pickup</span> structures which you placed (you have to pay a little <span class="akzent-secondary">fee</span>). To remove a structure write the <span class="akzent-secondary">/remove</span> command into your chat.`,
      configuration: `You can only pickup your placed structures, independent of your <span class="akzent-secondary">cupboard</span>. Players which are authorized to <span class="akzent-secondary">your</span> cupboard <span class="akzent-secondary">won't</span> be able to pickup structures. This <span class="akzent-secondary">prevents</span> an abbuse of the plugin.`,
      pluginAuthor: `<a class="article-button plugin" href="https://umod.org/user/Arainrr">Arainrr</a>`,
      linkToPlugin: `<a class="article-button plugin" href="https://umod.org/plugins/remover-tool">Remover Tool</a>`,
      link: `removertool`
    },
    {
      title: `Info Panel`,
      description: `Info Panel will show you some <span class="akzent-secondary">informations</span> about ingame events, time, playercount etc.`,
      configuration: `On the left top you can see the activity of the 4 <span class="akzent-secondary">main</span> events in the game and the <span class="akzent-secondary">clock.</span> On the bottom left you can see how many <span class="akzent-secondary">players</span> are online. On the top right you can see some <span class="akzent-secondary">custom</span> <span class="akzent-secondary">messages</span> which cycle through.`,
      pluginAuthor: `<a class="article-button plugin" href="https://umod.org/user/Default">Default</a>`,
      linkToPlugin: `<a class="article-button plugin" href="https://umod.org/plugins/info-panel">Info Panel</a>`,
      link: `infopanel`
    },
    {
      title: `Dangerous Treasures`,
      description: `This plugin will spawn randomly a <span class="akzent-secondary">sphere</span> somewhere on the map. The sphere will contain a <span class="akzent-secondary">treasure</span> with high tier loot and <span class="akzent-secondary">npcs</span>. If a player is able to get the <span class="akzent-secondary">items</span> from the treasure, the event will end. Be carefull <span class="akzent-secondary">other</span> players might be coming for the loot!`,
      configuration: `<span class="akzent-secondary">8</span> NPCs will spawn which will <span class="akzent-secondary">attack</span> players. The treasure will contain <span class="akzent-secondary">12</span> items. Each item will be one of a defined <span class="akzent-secondary">loottable.</span> The event will be announced in the <span class="akzent-secondary">chat</span> and shown on the <span class="akzent-secondary">map</span>. Right now only the <span class="akzent-secondary">admins</span> can trigger the event. With <span class="akzent-secondary">more</span> players the event will start without the help of an admin.`,
      pluginAuthor: `<a class="article-button plugin" href="https://umod.org/user/nivex">nivex</a>`,
      linkToPlugin: `<a class="article-button plugin" href="https://umod.org/plugins/dangerous-treasures">Dangerous Treasures</a>`,
      link: `dangeroustreasures`
    },
    {
      title: `Visual Cupboard`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `visualcupboard`
    },
    {
      title: `Stack Size Controller`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `stacksizecontroller`
    },
    {
      title: `Gather Manager`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `gathermanager`
    }
  ];

  findData() {
    let matchIndex = null;
    this.data.forEach((elem, index) => {
      if (elem.link === this.params.id) {
        matchIndex = index;
      }
    });

    if (matchIndex !== null) return this.data[matchIndex];
    else return null;
  }

  async getHtml() {
    const cont = this.findData();

    if (cont) {
      return `
        <h1 class="title-plugin">${cont.title}</h1>
        <div class="plugin-container">
          <div>
            <h3>Description:</h3>
            ${cont.description}
          </div>
          <div>
            <h3>Configuration:</h3>
            ${cont.configuration}
          </div>
          <div>
            <h3>Plugin:</h3>
            ${cont.linkToPlugin}
          </div>
          <div>
            <h3>Author of Plugin:</h3>
            ${cont.pluginAuthor}
          </div>
        </div>
      `;
    } else {
      window.location.href = "/404";
    }
  }
}
