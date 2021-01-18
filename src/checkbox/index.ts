import { CSSResultArray, customElement, html, LitElement, property } from "lit-element";
import { prefix } from "@constants";
import { style } from "./style";
import { ifDefined } from "lit-html/directives/if-defined";
@customElement(`${prefix}-checkbox`)
export class Checkbox extends LitElement {
  @property() name!: string;
  @property() label!: string;
  @property({ type: Boolean, reflect: true}) checked: boolean = false;
  static get styles(): CSSResultArray{
    return [
      style,
    ];
  }
  render() {
    return html`
      <label class="container">
        <input type="checkbox" name=${ifDefined(this.name)} .checked=${this.checked}>
        <span class="checkmark"></span>
        <slot>${this.label}</slot>
      </label>
    `;
  }
}