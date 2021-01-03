import { LitElement, html, css, customElement } from 'lit-element';
import { prefix } from '@app/constant';
import { themeColors, colors } from '@app/theme/colors';

@customElement(`${prefix}-theme`)
export class Theme extends LitElement {

  static get styles() {
    return [
      themeColors,
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
