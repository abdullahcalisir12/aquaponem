import { css, customElement, internalProperty, LitElement, html, TemplateResult, property, CSSResultArray } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { ifDefined } from "lit-html/directives/if-defined";
import { prefix } from "@constants";
import { style } from '@/input/style';

@customElement(`${prefix}-select`)
export class Select extends LitElement {
  @property() label!: string;
  @property() color!: string;
  @property() value: string = '';
  @property() name!: string;

  @internalProperty() selected!: HTMLInputElement;
  @internalProperty() focused: boolean = false;
  @internalProperty() valid: boolean = false;
  @internalProperty() error: boolean = false;
  @internalProperty() disabled: boolean = false;

  get _selectedOption(): HTMLInputElement {
    const slot = this.shadowRoot?.querySelector('slot');
    const childNodes = slot?.assignedNodes({flatten: true}) || [];
    return Array.prototype.find.call(childNodes, (node) => node.nodeType === Node.ELEMENT_NODE && node.value === this.value);
  }

  _input(e: { target: HTMLInputElement }) {
    this.value = e.target.value;
  }

  _toggle() {
    this.focused = !this.focused;
  }

  _onOptionClick(e: { target: HTMLInputElement }) {
    this.value = e.target.value;
    this.focused = false;
    this.selected = this._selectedOption;
  }

  _stop(e: any) {
    e.stopPropagation();
  }

  updated() {
    this.selected = this._selectedOption;
  }

  connectedCallback() {
    window.addEventListener('click', () => this.focused = false);
    super.connectedCallback();
  }

  disconnectedCallback() {
    window.removeEventListener('click', () => this.focused = false);
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    return html`
      <label
        class="${classMap({
          focused: this.focused,
          filled: this.value,
          success: this.valid,
          error: this.error,
          disabled: this.disabled
        })}"
        for="select"
        @click=${this._stop}>
        <input type="hidden" name=${ifDefined(this.name)} .value=${this.value} />
        <div class="select" @click=${this._toggle}>
          <div class="selected">${this.selected && this.selected.innerHTML}</div>
        </div>
        <div class="options ${classMap({ open: this.focused })}">
            <slot @option-click=${this._onOptionClick}></slot>
          </div>
        <span>${this.label}</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-down fa-w-14 fa-7x"><g class="fa-group"><path fill="currentColor" d="M224.1 284.64l-56.89 56.78-154-154.31a24 24 0 0 1 0-33.94l22.65-22.7a23.93 23.93 0 0 1 33.84 0z" class="fa-secondary"></path><path fill="currentColor" d="M435 187.15L241 381.48a23.94 23.94 0 0 1-33.84 0l-40-40 211.34-211a23.93 23.93 0 0 1 33.84 0L435 153.21a24 24 0 0 1 0 33.94z" class="fa-primary"></path></g></svg>
      </label>
    `;
  }

  static get styles(): CSSResultArray{
    return [
      style,
      css`
      .select {
        all: unset;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0 1.5rem;
        height: 56px;
        box-sizing: content-box;
      }

      svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        padding: 1rem;
        transition: transform 0.3s ease;
      }

      label.focused svg {
        transform: translateY(-50%) rotate(180deg);
      }

      svg {
        height: 16px;
        width: 16px;
      }

      .options {
        opacity: 0;
        visibility: hidden;
        transition: display .5s;
        transition: opacity .3s, visibility .3s ease-in-out;
        position: absolute;
        top: 52px;
        left: -2px;
        width: 100%;
        background-color: var(--bg-color);
        z-index: 1;
        border: solid var(--c-primary);
        border-width: 0 2px 2px;
        border-radius: 0px 0px var(--br-md) var(--br-md);
        box-shadow: 0 16px 32px -1px rgba(0,0,0,0.5);
        padding: .5rem 0;
      }

      .options.open {
        visibility: visible;
        opacity: 1;
      }

      .fa-primary, .fa-secondary {
        fill: var(--c-neutral);
      }

      label.focused .fa-primary, label.focused .fa-secondary,
      label.filled .fa-primary, label.filled .fa-secondary {
        fill: var(--c-primary);
      }

      label.success .fa-primary, label.success .fa-secondary {
        fill: var(--c-success);
      }

      label.error .fa-primary, label.error .fa-secondary {
        fill: var(--c-danger);
      }

      label.disabled .fa-primary, label.disabled .fa-secondary {
        fill: var(--c-disabled);
      }
    `];
  }
}