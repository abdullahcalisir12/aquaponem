import { html, css, customElement, CSSResultArray, TemplateResult } from 'lit-element';
import { prefix } from '@constants';
import { VariantManager } from '@shared';

@customElement(`${prefix}-card`)
export class Card extends VariantManager {

  static get styles(): CSSResultArray {
    return [
      css`
        :host {
          display: block;
        }

        .card {
          display: flex;
          flex-direction: column;
          background-color: var(--color);
          border-radius: var(--br-lg);
          padding: var(--spc-5) var(--spc-6);
        }

        ::slotted([slot="header"]) {
          margin-bottom: var(--spc-3);
        }

        .body {
          flex: 1;
        }

        ::slotted([slot="footer"]) {
          margin-top: var(--spc-3);
        }
      `,
    ];
  }

  render(): TemplateResult{
    return html`
      <div class="card">
        <slot name="header"></slot>
        <div class="body">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
