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
          border-bottom: none !important;
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
        }

        .options {
          border-top: 1px solid var(--color);
          margin: 0rem 1.5rem;
        }

        .options ::slotted(option) {
          margin: 1rem 0;
        }
      </style>
    `;
  }

  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._handleClick);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    return this.withFieldWrapper(html`
      ${this._selectStyles}
      ${this.focused ? this._focusedFieldset : ''}
      <div
        class="select-container">
        <div class="select">
          <div class="selected">Selected Value</div>
          <i>V</i>
        </div>
        <div class="options-container">
          <div class="options">
            <slot></slot>
          </div>
        </div>
      </div>
    `);
  }

  _handleClick() {
    this.focused = true;
  }
}