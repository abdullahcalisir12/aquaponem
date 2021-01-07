import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';

const getSize = (gutters: string) => {
  let [v, h] = gutters.split(',');
  h = h ? h : v;
  return html`
    <style>
      :host {
        --gutters-h: ${h}px;
        --gutters-v: ${v}px;
        margin: 0 ${Number(h) / -2}px;
      }
    </style>
  `;
};

@customElement(`${prefix}-row`)
export class Row extends LitElement {
  @property() column: number = 12;
  @property() gutters: string = '0';

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-wrap: wrap;
      }
    `;
  }

  render() {
    return html`
      ${getSize(this.gutters)}
      <slot style="--total-col: ${this.column};"></slot>
    `;
  }
}
