import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';

import { buttonStyles } from '@app/theme/button';
import { prefix } from '@app/constant';

@customElement(`${prefix}-link`)
export class Link extends LitElement {

  @property() href: string = '#';
  @property() variant: string = 'primary';
  @property() size: string = 'base';
  @property() round: string = 'base';
  @property() label: string = 'anchor';

  static get styles() {
    return [
      buttonStyles
    ];
  }

  render() {
    return html`
      <a
        aria-label=${ifDefined(this.label)}
        class="${classMap({ [`btn-s-${this.size}`]: true, [`btn-r-${this.round}`]: true })}"
        href="${this.href}"
        style="--color: var(--c-${this.variant});">
        <slot></slot>
      </a>
    `;
  }
}
