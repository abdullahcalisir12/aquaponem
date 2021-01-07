import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';

const getFlex = (size: number) => {
  return html`
    <style>
      :host {
        flex: 0 1 calc(${size} / var(--total-col) * 100% - var(--gutters-h))
      }
    </style>
  `;
}

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

  render() {
    return html`
      ${getFlex(this.size)}
      <slot></slot>
    `;
  }

}
