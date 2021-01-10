import { css, customElement, html, LitElement, property } from "lit-element";
import { prefix } from "@constants";
import { style } from "@/checkbox/style";
@customElement(`${prefix}-radio`)
export class Radio extends LitElement {
  @property() name!: string;
  @property() label!: string;
  static get styles() {
    return [
      style,
      css`
        .checkmark {
          border-radius: 50%;
        }

        .container .checkmark:after {
          top: 9px;
          left: 9px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
        }`
    ];
  }
  render() {
    return html`
      <label class="container">
        <input type="radio" name=${this.name}>
        <span class="checkmark"></span>
        <slot>${this.label}</slot>
      </label>
    `;
  }
}