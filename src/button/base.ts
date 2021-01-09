import { CSSResultArray, html, property, TemplateResult } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { VariantManager } from '@shared';
import { buttonStyles } from './style';

export class Base extends VariantManager {
  @property() round: string = 'md';
  @property() size: string = 'base';

  static get styles(): CSSResultArray {
    return [
      buttonStyles
    ];
  }

  public get classes(): Object {
    return classMap({ [`btn-s-${this.size}`]: true });
  }

  updated(changedProperties: Map<string, string>) {
    if (this.round && changedProperties.has('round')) {
      this.style.setProperty('--btn-br', `var(--br-${this.round})`);
    };
    super.updated(changedProperties);
  }
}