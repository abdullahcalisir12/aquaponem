import { prefix } from "@/app-constants";
import { FieldWrapper } from "@/app-shared";
import { customElement, internalProperty, queryAssignedNodes } from "lit-element";
import { html, TemplateResult } from "lit-html";

@customElement(`${prefix}-select`)
export class Select extends FieldWrapper {
  @internalProperty() focused: boolean = false;

  private get _selectStyles(): TemplateResult{
    return html`
      <style>
        .select-container {
          position: relative;
          width: 100%;
        }
        .select {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .options-container {
          display: none;
        }
      </style>
    `;
  }

  private get _focusedFieldset(): TemplateResult {
    return html`
      <style>
        fieldset {
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
          background-color: var(--c-dark) !important;
        }

        .options-container {
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
      </style>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', () => {
      this.focused = false;
    });
  }

  render(): TemplateResult {
    return this.withFieldWrapper(html`
      ${this._selectStyles}
      ${this.focused ? this._focusedFieldset : ''}
      <div
        class="select-container"
        @click="${this._handleClick}">
        <div class="select">
          <input />
        </div>
        <div class="options-container">
          <div class="options">
            <slot></slot>
          </div>
        </div>
      </div>
    `);
  }

  _handleClick(e: any) {
    e.stopPropagation();
    this.focused = true;
  }
}