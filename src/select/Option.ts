import { prefix } from "@constants";
import { css, CSSResult, customElement, property, LitElement, html, TemplateResult } from "lit-element";

@customElement(`${prefix}-option`)
export class Option extends LitElement {
  @property() value!: string;

  static get styles(): CSSResult{
    return css`
      .option {
        display: block;
        cursor: pointer;
        padding: 1rem 1.5rem;
      }

      .option:hover {
        background-color: var(--c-bg);
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="option" @click=${() => this._click(this.value)}>
        <slot></slot>
      </div>
    `;
  }

  _click(value: string) {
    let event = new CustomEvent('option-clicked', {
      detail: {
        message: 'Something important happened',
        value: value
      }
    });
    this.dispatchEvent(event);
  }
}