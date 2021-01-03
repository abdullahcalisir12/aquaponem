import { LitElement, html, customElement } from 'lit-element';
import { themeColors, appStyles } from '@shared';
import { prefix } from '@constants';
@customElement(`${prefix}-theme`)
export class Theme extends LitElement {

  static get styles() {
    return [
      themeColors,
      appStyles
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
