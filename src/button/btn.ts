import { html, customElement, property, TemplateResult } from 'lit-element';

import { Base } from './base';
import { prefix } from '@constants';

@customElement(`${prefix}-btn`)
export class Button extends Base {

  @property() label: string = 'button';

  render(): TemplateResult {
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