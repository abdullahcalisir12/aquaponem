import { prefix } from "@/app-constants";
import { FieldWrapper } from "@/app-shared";
import { customElement, property } from "lit-element";
import { html, TemplateResult } from "lit-html";

@customElement(`${prefix}-input`)
export class Input extends FieldWrapper {
  @property({ type: Boolean, reflect: true }) multiline = false;

  render(): TemplateResult {
    if (this.multiline) {
      return this.withFieldWrapper(html`<textarea></textarea>`);
    }
    return this.withFieldWrapper(html`
      <input />
    `);
  }
}