import { html, customElement, property } from 'lit-element';

import { Base } from './base';
import { prefix } from '@constants';

@customElement(`${prefix}-btn`)
export class Button extends Base {

  @property() label: string = 'button';

  render() {
    return html`
      ${this.styles}
      <button
        aria-label=${this.label}
        class="${this.classes}"
      >
        <slot></slot>
      </button>
    `;
  }
}