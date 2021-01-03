import { html, customElement, property } from 'lit-element';

import { Base } from './base';
import { prefix } from '@constants';

@customElement(`${prefix}-btn`)
export class Button extends Base {

  @property() label: string = 'button';

  render() {
    return html`
      <button
        aria-label=${this.label}
        class="${this.classes}"
        style="${this.styles}"
      >
        <slot></slot>
      </button>
    `;
  }
}