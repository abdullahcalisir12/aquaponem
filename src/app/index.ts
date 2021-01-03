import { LitElement, html, customElement } from 'lit-element';

import {
  colors,
  spacing,
  appStyles,
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
      appStyles,
      fontFamily,
      fontWeight,
      borderWidth,
      borderRadius,
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
