import { customElement, html, css, property, TemplateResult, CSSResultArray } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { VariantManager, textStyles } from '@shared';
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

const getTag = (tag: string): TemplateResult => {
  const t: string = Object.keys(allowedTags).includes(tag) ? tag : 'p';
  const template: string = `<${t}><slot></slot></${t}>`;
  return html`
    ${unsafeHTML(template)}
  `;
}

@customElement(`${prefix}-text`)
export class Text extends VariantManager {
  
  @property() color: string|null = null;
  @property() tag: keyof typeof allowedTags = 'p';

  static get styles(): CSSResultArray{
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

  render(): TemplateResult{
    return this.withVariant(getTag(this.tag));
  }
}
