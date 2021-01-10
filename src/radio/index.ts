import { css, customElement, html, LitElement } from "lit-element";
import { prefix } from "@constants";

@customElement(`${prefix}-radio`)
export class Radio extends LitElement {
  static get styles() {
    return css`
      .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
      }

      .container:hover input ~ .checkmark {
        background-color: #ccc;
      }

      .container input:checked ~ .checkmark {
        background-color: #2196F3;
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      .container input:checked ~ .checkmark:after {
        display: block;
      }

      .container .checkmark:after {
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
      }
    `;
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