import { LitElement, html, css, customElement } from 'lit-element';
import { prefix } from '../constant';

@customElement(`${prefix}-card`)
export class Card extends LitElement {

  static get styles() {
    return [
      css`
        :host {
          display: block;
          border-radius: 10px;
        }

        .card {
          display: flex;
        }

        .body {
          flex: 1;
        }
      `,
    ];
  }

  render() {
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
