import { CSSResultArray, customElement, html, LitElement, property } from "lit-element";
import { prefix } from "@constants";
import { style } from "./style";
@customElement(`${prefix}-checkbox`)
export class Checkbox extends LitElement {
  @property() name!: string;
  @property() label!: string;
  static get styles(): CSSResultArray{
    return [
      style,
    ];
  }
  render() {
    return html`
      <label class="container">
        <input type="checkbox" name=${this.name}>
        <span class="checkmark"></span>
        <slot>${this.label}</slot>
      </label>
    `;
  }
}