import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';

@customElement(`${prefix}-col`)
export class Column extends LitElement {
  @property() size: number = 12;

  static get styles() {
    return css`
      :host {
        display: block;
        margin: calc(var(--gutters-v) / 2) calc(var(--gutters-h) / 2);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('flex', `1 1 calc(${this.size} / var(--total-col) * 100% - var(--gutters-h))`);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

}
