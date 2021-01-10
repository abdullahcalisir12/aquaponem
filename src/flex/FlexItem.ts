import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';
@customElement(`${prefix}-flex-item`)
export class FlexItem extends LitElement {
  @property() size: number = 12;
  @property() self!: string;
  @property() flex!: string;
  @property() order!: string;

  static get styles() {
    return css`
      :host {
        display: block;
        margin: calc(var(--gutters-v) / 2) calc(var(--gutters-h) / 2);
      }
    `;
  }

  updated(changedProperties: Map<string, string>) {
    if (this.size && changedProperties.has('size')) this.style.flex = `0 1 calc(${this.size} / var(--total-col) * 100% - var(--gutters-h)`;
    if (!this.size && this.flex && changedProperties.has('flex')) this.style.flex = this.flex;
    if (this.order && changedProperties.has('order')) this.style.order = this.order;
    if (this.self && changedProperties.has('self')) this.style.alignSelf = this.self;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

}
