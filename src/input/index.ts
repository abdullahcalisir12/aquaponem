import { prefix } from "@constants";
import { html, customElement, LitElement, property, TemplateResult, css, internalProperty} from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement(`${prefix}-input`)
export class Input extends LitElement {
  @property({ type: Boolean, reflect: true }) multiline = false;
  @property() label!: string;
  @property() color!: string;
  @property() value: string = '';

  @internalProperty() focused: boolean = false;
  @internalProperty() valid: boolean = false;
  @internalProperty() error: boolean = false;
  @internalProperty() disabled: boolean = false;

  static get styles() {
    return css`
      :host {
        display: block;
      }

      label {
        display: flex;
        position: relative;
        font-size: 1.25rem;
        border: 2px solid var(--c-neutral);
        border-radius: var(--br-md);
      }

      label.focused, label.filled {
        border-color: var(--c-primary);
      }

      label.success {
        border-color: var(--c-success);
      }

      label.error {
        border-color: var(--c-danger);
      }

      label.disabled {
        border-color: var(--c-disabled);
      }

      input, textarea {
        all: unset;
        display: block;
        height: 100%;
        width: 100%;
        padding: 0 1.5rem;
        height: 56px;
        box-sizing: content-box;
      }

      textarea {
        height: 100px;
        padding: 1rem 1.5rem;
      }

      label span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) !important;
        left: 1.5rem;
        font-size: 1.25rem;
        transition: top 0.3s ease, font-size 0.3s, color 0.3s;
        color: var(--c-neutral);
      }

      textarea + span {
        top: 1.5rem;
      }

      label.focused span, label.filled span {
        padding: 0 .5rem;
        top: 0;
        left: 1rem;
        font-size: 1rem;
        color: var(--c-primary);
        background-color: var(--bg-color);
      }

      label.success span {
        color: var(--c-success);
      }

      label.error span {
        color: var(--c-danger);
      }

      label.disabled span {
        color: var(--c-disabled);
      }
    `;
  }

  renderTextarea() {
    return html`
      <textarea
        @focus=${this._focus}
        @blur=${this._blur}
        @input=${this._input}
        .value=${this.value}
      ></textarea>
    `;
  }

  renderInput() {
    return html`
      <input
        @focus=${this._focus}
        @blur=${this._blur}
        @input=${this._input}
        .value=${this.value}
      />
    `;
  }

  render(): TemplateResult {
    return html`
      <label
        class=${classMap({
          focused: this.focused,
          filled: this.value,
          success: this.valid,
          error: this.error,
          disabled: this.disabled
        })}
      >
        ${this.multiline ? this.renderTextarea() : this.renderInput() } 
        <span>${this.label}</span>
      </label>
    `;
  }

  _focus() {
    this.focused = true;
  }

  _blur() {
    this.focused = false;
  }

  _input(e: any) {
    this.value = e.target?.value;
  }
}