import { css, CSSResult, customElement, internalProperty, LitElement, html, TemplateResult, property } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { prefix } from "@constants";

@customElement(`${prefix}-select`)
export class Select extends LitElement {
  @property() label: string = '';
  @property() color: string = '';
  @internalProperty() focused: boolean = false;
  @internalProperty() value: string = '';
  @internalProperty() options: NodeListOf<HTMLButtonElement>|undefined;

  private get _focusedFieldset(): TemplateResult {
    return html`
      <style>
        field-wrapper::part(fieldset) {
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }
      </style>
    `;
  }

  connectedCallback() {
    this.options = this.querySelectorAll(`${prefix}-option`);
    this.options?.forEach(option => {
      option.addEventListener('option-clicked', (e: any) => {
        this.value = e.detail.value;
        this._onBlur();
      });
    })
    super.connectedCallback();
  }

  disconnectedCallback() {
    this.options?.forEach(option => {
      option.removeEventListener('option-clicked', (e) => {console.log(e)});
    })
    super.disconnectedCallback();
  }

  _onBlur(e: any = undefined) {
    setTimeout(() => {
      this.focused = false;
    }, 150);
  }

  _onFocus(e: any) {
    this.focused = true;
  }

  _onInput(e: any) {
    this.value = e.target.value;
  }

  render(): TemplateResult {
    return html`
      ${this.focused ? this._focusedFieldset : ''}
      <field-wrapper color=${this.color} legend=${this.label}>
        <input @focus=${this._onFocus} @blur=${this._onBlur} .value=${this.value} @input=${this._onInput} />
        <div class="select-container">
          <div class="options-container ${classMap({open: this.focused})}">
            <div class="options">
              <slot></slot>
            </div>
          </div>
        </div>
      </field-wrapper>
    `;
  }

  static get styles(): CSSResult{
    return css`
        .options-container {
          display: none;
        }

        .options-container.open {
          display: block;
          position: absolute;
          width: 100%;
          top: 100%;
          left: 0;
          border: solid var(--color);
          border-width: 0 2px 2px;
          border-radius:  0 0 var(--br-md) var(--br-md);
          padding: .5rem 0;
          margin: 0 -2px;
          background-color: var(--bg-color);
          z-index: 1;
          box-shadow: 0 16px 32px -1px rgba(0,0,0,0.5);
        }
    `;
  }
}