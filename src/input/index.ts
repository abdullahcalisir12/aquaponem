import { prefix } from "@constants";
import { html, customElement, LitElement, property, TemplateResult, css, internalProperty} from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { ifDefined } from "lit-html/directives/if-defined";
import { style } from './style';

@customElement(`${prefix}-input`)
export class Input extends LitElement {
  @property({ type: Boolean, reflect: true }) multiline = false;
  @property() label!: string;
  @property() color!: string;
  @property() value: string = '';
  @property() name!: string;

  @internalProperty() focused: boolean = false;
  @internalProperty() valid: boolean = false;
  @internalProperty() error: boolean = false;
  @internalProperty() disabled: boolean = false;

  static get styles() {
    return [
      style,
      css`
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

        textarea + span {
          top: 1.5rem;
        }
      `
    ];
  }

  renderTextarea() {
    return html`
      <textarea
        @focus=${this._focus}
        @blur=${this._blur}
        @input=${this._input}
        name=${ifDefined(this.name)}
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
        name=${ifDefined(this.name)}
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