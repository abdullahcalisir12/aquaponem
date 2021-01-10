import { css, customElement, html, LitElement } from "lit-element";
import { prefix } from "@constants";
import { style } from "@/checkbox/style";
@customElement(`${prefix}-radio`)
export class Radio extends LitElement {
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
        Two
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
    `;
  }
}