import { LitElement, html, customElement } from 'lit-element';
import { colors, appStyles, fontFamily, fontWeight, spacing, borderRadius, borderWidth } from '@shared';
import { prefix } from '@constants';

@customElement(`${prefix}-app`)
export class App extends LitElement {

  static get styles() {
    return [
      colors,
      appStyles,
      fontFamily,
      fontWeight,
      spacing,
      borderRadius,
      borderWidth
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
