import { LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { sharedColors } from '@shared';
import { buttonStyles } from './style';

export class Base extends LitElement {
  @property() round: string = 'md';
  @property() size: string = 'base';
  @property() color: string|null = null;

  static get styles() {
    return [
      buttonStyles
    ];
  }

  public get classes() {
    return classMap({ [`btn-s-${this.size}`]: true });
  }

  public get styles() {
    const color = this.color && Object.keys(sharedColors).includes(this.color) ? `var(--c-${this.color})` : this.color;
    return `
      --color: ${color};
      --btn-br: var(--br-${this.round})
    `;
  }
}