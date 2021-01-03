import { LitElement, html, customElement } from 'lit-element';
import { colors, appStyles } from '@shared';
import { prefix } from '@constants';

@customElement(`${prefix}-app`)
export class App extends LitElement {

  static get styles() {
    return [
      colors,
      appStyles,
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
