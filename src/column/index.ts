import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';

@customElement(`${prefix}-col`)
export class Column extends LitElement {
  @property() size: number = 12;

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('flex', `1 1 calc(${this.size} / var(--total-col) * 100%)`);
    this.style.setProperty('margin', 'var(--gutters)');
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

}
