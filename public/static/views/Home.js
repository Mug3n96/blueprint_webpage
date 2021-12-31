/* example view */
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
      <article class="article home">
        <header class="article-header__container">
          <h1 class="article-header__title">Welcome!</h1>
          <h3 class="article-header__subtitle">[EU|GER] Dio's Mansion</h3>
          <h5 class="article-header__subtitle">IP: 173.212.227.88:28015</h5>
        </header>
        <p>If you are looking for a <span class="akzent-secondary">fair</span> and <span class="akzent-secondary">nontoxic</span> server, you came to the <span class="akzent-secondary">right</span> place! We will <span class="akzent-secondary">involve</span> players as much as we can into the <span class="akzent-secondary">decisions</span>.</p>
        <p>If you don't like smth about the <span class="akzent-secondary">serversetting</span> or you know a <span class="akzent-secondary">good</span> plugin which you would love to see on this server, just tell us that. If we or the <span class="akzent-secondary">players</span> are not against it, we will include <span class="akzent-secondary">your</span> idea into the server.</p>
        <ul>
          <li>server exists <span class="akzent-secondary">since</span> 13.02.2021</li>
          <li>Wipe Day: 13.02.2021</li>
          <li>
            the <span next <span class="akzent-secondary">Wipe Day</span> will be discussed with the <span class="akzent-secondary">players</span>, but not before 1.05.2021
          </li>
          <li><span class="akzent-secondary">Minicopter</span> spawning every <span class="akzent-secondary">2 km</span> (hurry up and get <span class="akzent-secondary">one</span> :P)</li>
          <li>resource gathering <span class="akzent-secondary">x2</span></li>
          <li>stacksize of <span class="akzent-secondary">chosen</span> resources <span class="akzent-secondary">x10</span></li>
          <li>"Anti Offline Raid" plugin</li>
          <li><span class="akzent-secondary">no</span> admin abuse</li>
          <li>active admins</li>
        </ul>
        <p>The server is really new and we would <span class="akzent-secondary">love</span> to see players populating the server! Be one of the <span class="akzent-secondary">first ones</span> to join the community! :)</p>
      </article>
    `;
  }
}
