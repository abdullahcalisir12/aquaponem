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

  public get styles(): TemplateResult {
    return this.withVariant(html`
      <style>
        :host {
          --btn-br: var(--br-${this.round})
        }
      </style>
  `);
  }
}