import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';

@customElement(`${prefix}-row`)
export class Row extends LitElement {
  @property() column: number = 12;
  @property() gutters: string = '0';

  static get styles() {
    return css`
      :host {
        display: block;
      }

      slot {
        display: flex;
        flex-wrap: wrap;
      }
    `;
  }

  render() {
    return html`
      <div style="--total-col: ${this.column}; --gutters: ${this.gutters.split(',').map(g => `${g}px`).join(' ')}">
        <slot></slot>
      </div>
    `;
  }
}
