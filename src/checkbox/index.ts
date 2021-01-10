import { css, CSSResultArray, customElement, html, LitElement } from "lit-element";
import { prefix } from "@constants";
import { style } from "./style";
@customElement(`${prefix}-checkbox`)
export class Checkbox extends LitElement {
  static get styles(): CSSResultArray{
    return [
      style,
      css`
        .container .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      `
    ];
  }
  render() {
    return html`
      <label class="container">
        One
        <input type="checkbox" checked>
        <span class="checkmark"></span>
      </label>
    `;
  }
}