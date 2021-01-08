import { html, css, customElement } from 'lit-element';
import { prefix } from '@constants';
import { VariantManager } from '@/app-shared';

@customElement(`${prefix}-card`)
export class Card extends VariantManager {

  static get styles() {
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

  render() {
    return this.withVariant(html`
      <div class="card">
        <slot name="header"></slot>
        <div class="body">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `);
  }
}
