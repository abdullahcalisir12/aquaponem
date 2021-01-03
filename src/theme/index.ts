import { LitElement, html, css, customElement } from 'lit-element';
import { themeColors } from '@shared';
import { prefix } from '@constants';
@customElement(`${prefix}-theme`)
export class Theme extends LitElement {

  static get styles() {
    return [
      themeColors,
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
