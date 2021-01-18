import { css, customElement, html, LitElement, property } from "lit-element";
import { prefix } from "@constants";
import { style } from "@/checkbox/style";
import { ifDefined } from "lit-html/directives/if-defined";
@customElement(`${prefix}-radio`)
export class Radio extends LitElement {
  @property() name!: string;
  @property() label!: string;
  @property({ type: Boolean, reflect: true}) checked: boolean = false;
  static get styles() {
    return [
      style,
      css`
        .checkmark, .checkmark:after  {
          border-radius: 50%;
        }`
    ];
  }

  _change() {
    if (this.name) {
      const a = document.getElementsByName(this.name);
      a.forEach(a => a.removeAttribute('checked'));
    }
    this.setAttribute("checked", '');
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.checked) this._change();
  }

  render() {
    return html`
      <label class="container">
        <input type="radio" name=${ifDefined(this.name)} .checked=${this.checked} @change=${this._change}>
        <span class="checkmark"></span>
        <slot>${this.label}</slot>
      </label>
    `;
  }
}