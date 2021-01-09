import { prefix } from "@/app-constants";
import { css, CSSResult, customElement, internalProperty, LitElement, html, TemplateResult } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement(`${prefix}-select`)
export class Select extends LitElement {
  @internalProperty() focused: boolean = false;

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
          margin: 0 -2px;
          background-color: var(--c-dark);
          z-index: 1;
          box-shadow: 0 16px 32px -1px rgba(0,0,0,0.5);
        }

        ::slotted(div) {
          cursor: pointer;
          padding: 1rem 1.5rem;
        }

        ::slotted(div:hover) {
          background-color: var(--c-bg);
        }

        ::slotted(div:last-child:hover) {
          border-bottom-left-radius: var(--br-md);
          border-bottom-right-radius: var(--br-md);
        }
    `;
  }

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

  render(): TemplateResult {
    return html`
      ${this.focused ? this._focusedFieldset : ''}
      <field-wrapper color="primary" label="Select">
        <input @focus="${this._onFocus}" @blur="${this._onBlur}" />
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

  _onBlur(e: any) {
    this.focused = false;
  }

  _onFocus(e: any) {
    this.focused = true;
  }
}