import { customElement, LitElement, html, css, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { textStyles } from '@shared';
import { prefix } from '@constants';

enum allowedTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p'
}

@customElement(`${prefix}-text`)
export class Text extends LitElement {
  @property() tag: keyof typeof allowedTags = 'p';
  @property() variant: string = '';

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        p, h1, h2, h3, h4, h5, h6 {
          margin: var(--spc-0);
          color: var(--color);
        }
      `,
      textStyles,
    ];
  }

  render() {
    const tag = Object.keys(allowedTags).includes(this.tag) ? this.tag : 'p';
    const style = this.variant ? `style="--color: var(--c-${this.variant});"` : '';
    const template = `<${tag} ${style}><slot></slot></${tag}>`;

    return html`${
      unsafeHTML(template)
    }`;
  }
}
