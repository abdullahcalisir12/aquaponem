import { prefix } from "@constants";
import { css, CSSResult, customElement, property, LitElement, html, TemplateResult } from "lit-element";

@customElement(`${prefix}-option`)
export class Option extends LitElement {
  @property() value!: string;

  static get styles(): CSSResult{
    return css`
      :host {
        display: block;
      }
      .option {
        cursor: pointer;
        padding: 1rem 1.5rem;
      }

      .option:hover {
        background-color: var(--c-bg);
      }
    `;
  }

  _click() {
    let event = new CustomEvent('option-click', {
      detail: {
        message: 'option clicked',
      },
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  render(): TemplateResult {
    return html`
      <div class="option" @click=${this._click}>
        <slot></slot>
      </div>
    `;
  }
}