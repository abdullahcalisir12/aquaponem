import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';

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

  connectedCallback() {
    super.connectedCallback();
    let [v, h] = this.gutters.split(',');
    h = h ? h : v;
    this.style.setProperty('--total-col', `${this.column}`);
    this.style.setProperty('--gutters-h', `${h}px`);
    this.style.setProperty('--gutters-v', `${v}px`);
    this.style.setProperty('margin', `0 ${Number(h) / -2}px`);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
