import { LitElement, html, customElement } from 'lit-element';

import { prefix } from '@constants';
import { themeColors, appStyles } from '@shared';
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
