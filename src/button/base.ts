import { LitElement, html, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { buttonStyles } from '@shared';

export class Base extends LitElement {
  @property() variant: string = 'primary';
  @property() size: string = 'base';
  @property() round: string = 'md';

  static get styles() {
    return [
      buttonStyles
    ];
  }

  public get classes() {
    return classMap({ [`btn-s-${this.size}`]: true });
  }

  public get styles() {
    return `--color: var(--c-${this.variant}); --btn-br: var(--br-${this.round})`;
  }
}