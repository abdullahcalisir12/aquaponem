import { customElement, LitElement, html, css, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { sharedColors, textStyles } from '@shared';
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

const getColor = (color: string|null) => {
  if (color === null) return;
  const c = Object.keys(sharedColors).includes(color) ? `var(--c-${color})` : color;
  return html`
    <style>
      :host {
        --color: ${c};
      }
    </style>
  `;
}

const getTag = (tag: string) => {
  const t = Object.keys(allowedTags).includes(tag) ? tag : 'p';
  const template = `<${t}><slot></slot></${t}>`;
  return html`
    ${unsafeHTML(template)}
  `;
}

@customElement(`${prefix}-text`)
export class Text extends LitElement {
  
  @property() color: string|null = null;
  @property() tag: keyof typeof allowedTags = 'p';

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
    return html`
      ${getColor(this.color)}
      ${getTag(this.tag)}
    `;
  }
}
