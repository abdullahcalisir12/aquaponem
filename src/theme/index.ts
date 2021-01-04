import { LitElement, html, customElement, css } from 'lit-element';

import { prefix } from '@constants';
import { themeColors } from '@shared';
@customElement(`${prefix}-theme`)
export class Theme extends LitElement {

  static get styles() {
    return [
      themeColors,
      css`
        :host {
          display: block;
          min-height: 100%;
          color: var(--c-on-bg);
          background-color: var(--c-bg);
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
