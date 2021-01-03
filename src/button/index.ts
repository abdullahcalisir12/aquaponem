import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';

import { buttonStyles } from '../theme/button';
import { prefix } from '../constant';

@customElement(`${prefix}-btn`)
export class Button extends LitElement {

  @property() variant: string = 'primary';
  @property() size: string = 'base';
  @property() round: string = 'base';
  @property() label: string = 'button';

  static get styles() {
    return [
      buttonStyles
    ];
  }

  render() {
    return html`
      <button
        aria-label=${ifDefined(this.label)}
        class="${classMap({ [`btn-s-${this.size}`]: true, [`btn-r-${this.round}`]: true })}"  
        style="--color: var(--c-${this.variant});"
      >
        <slot></slot>
      </button>
    `;
  }
}
