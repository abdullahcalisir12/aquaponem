import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { buttonStyles } from '@shared';
import { prefix } from '@constants';

@customElement(`${prefix}-btn`)
export class Button extends LitElement {

  @property() variant: string = 'primary';
  @property() size: string = 'base';
  @property() round: string = 'md';
  @property() label: string = 'button';

  static get styles() {
    return [
      buttonStyles
    ];
  }

  render() {
    return html`
      <button
        aria-label=${this.label}
        class="${classMap({ [`btn-s-${this.size}`]: true })}"
        style="--color: var(--c-${this.variant}); --btn-br: var(--br-${this.round})"
      >
        <slot></slot>
      </button>
    `;
  }
}
