import { LitElement, html, css, customElement } from 'lit-element';
import { prefix } from '@constants';
import { colors } from '@shared';

@customElement(`${prefix}-app`)
export class App extends LitElement {

  static get styles() {
    return [
      colors,
      css`
        :host {
          display: block;
          min-height: 100vh;
          background-color: var(--c-bg);
          color: var(--c-on-bg);
        }
      `,
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
