import { css, CSSResult, customElement, internalProperty, LitElement, html, TemplateResult, property, queryAll, query } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { prefix } from "@constants";

@customElement(`${prefix}-select`)
export class Select extends LitElement {
  @property() label!: string;
  @property() color!: string;
  @internalProperty() focused: boolean = false;
  @property() value: string = '';

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
    window.addEventListener('click', () => this.focused = false);
    super.connectedCallback();
  }

  disconnectedCallback() {
    window.removeEventListener('click', () => this.focused = false);
    super.disconnectedCallback();
  }

  _onBlur() {
    this.focused = false;
  }

  _onFocus() {
    this.focused = true;
  }

  _onInput(e: { target: HTMLInputElement }) {
    this.value = e.target.value;
  }

  _onOptionClick(e: { target: HTMLInputElement }) {
    this.value = e.target.value;
    this.focused = false;
  }

  _stop(e: MouseEvent) {
    e.stopPropagation();
  }

  render(): TemplateResult {
    return html`
      ${this.focused ? this._focusedFieldset : ''}
      <field-wrapper color=${this.color} legend=${this.label} @click=${this._stop}>
        <input @focus=${this._onFocus} .value=${this.value} @input=${this._onInput} />
        <div class="select-container">
          <div class="options-container ${classMap({open: this.focused})}">
            <div class="options">
              <slot @option-click=${this._onOptionClick}></slot>
            </div>
          </div>
        </div>
      </field-wrapper>
    `;
  }

  static get styles(): CSSResult{
    return css`
      :host {
        display: block;
      }
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
        padding-bottom: .5rem;
        margin: 0 -2px;
        background-color: var(--bg-color);
        z-index: 1;
        box-shadow: 0 16px 32px -1px rgba(0,0,0,0.5);
      }
    `;
  }
}