import { prefix } from '../constant';
import { customElement, LitElement, html, css, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { textStyles } from '../theme/typography';

type allowedTags = {
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  p: undefined
}

@customElement(`${prefix}-text`)
export class Text extends LitElement {
  @property() tag: keyof allowedTags = 'p';
  @property() variant: string = '';

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        p, h1, h2, h3, h4, h5, h6 {
          margin: 0;
          color: var(--color);
        }
      `,
      textStyles,
    ];
  }

  render() {
    const template = `<${this.tag}><slot></slot></${this.tag}>`
    return html`
      <div style="--color: var(--c-${this.variant})">
        ${unsafeHTML(template)}
      </div>
    `;
  }
}
