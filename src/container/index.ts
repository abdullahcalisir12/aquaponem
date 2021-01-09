import { LitElement, html, customElement, property, CSSResultArray, TemplateResult } from 'lit-element';
import { containerStyle } from './style';
import { prefix } from '@constants';
import { classMap } from 'lit-html/directives/class-map';

@customElement(`${prefix}-container`)
export class Container extends LitElement {
  @property() size: string = 'fluid';

  static get styles(): CSSResultArray{
    return [
      containerStyle,
    ];
  }

  render(): TemplateResult{
    return html`
      <div class=${classMap({
          container: true,
          [`container-${this.size}`]: true,
        })}>
        <slot></slot>
      </div>
    `;
  }
}
