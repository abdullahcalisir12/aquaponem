import { html, customElement, property, TemplateResult } from 'lit-element';

import { prefix } from '@constants';
import { Base } from './base';

@customElement(`${prefix}-link`)
export class Link extends Base {

  @property() href: string = '#';
  @property() label: string = 'anchor';

  render(): TemplateResult{
    return html`
      ${this.styles}
      <a
        aria-label=${this.label}
        href="${this.href}"
        class="${this.classes}"
      >
        <slot></slot>
      </a>
    `;
  }
}
