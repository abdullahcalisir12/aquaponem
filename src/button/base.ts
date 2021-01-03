import { LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { buttonStyles } from './style';

export class Base extends LitElement {
  @property() round: string = 'md';
  @property() size: string = 'base';
  @property() variant: string = 'primary';

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