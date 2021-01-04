import { LitElement, html, customElement, css } from 'lit-element';

import {
  colors,
  spacing,
  fontFamily,
  fontWeight,
  borderWidth,
  borderRadius,
} from '@shared';
import { prefix } from '@constants';

@customElement(`${prefix}-app`)
export class App extends LitElement {

  static get styles() {
    return [
      colors,
      spacing,
      fontFamily,
      fontWeight,
      borderWidth,
      borderRadius,
      css`
        :host {
          display: block;
          min-height: 100vh;
        }
      `
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
