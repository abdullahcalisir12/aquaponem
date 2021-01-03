import { html, customElement, property } from 'lit-element';

import { prefix } from '@constants';
import { Base } from './base';

@customElement(`${prefix}-link`)
export class Link extends Base {

  @property() href: string = '#';
  @property() label: string = 'anchor';

  render() {
    return html`
      <a
        aria-label=${this.label}
        href="${this.href}"
        class="${this.classes}"
        style="${this.styles}"
      >
        <slot></slot>
      </a>
    `;
  }
}
