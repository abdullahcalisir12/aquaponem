import { css, CSSResult, LitElement, property } from 'lit-element';

export class VariantManager extends LitElement {
  @property() color!: string;
  @property() 'bg-color'!: string;

  updated(changedProperties: Map<string, string>) {
    if (this.color && changedProperties.has('color')) {
      this._updateColor('--color', this.color);
    };
    if (this['bg-color'] && changedProperties.has('bg-color')) {
      this._updateColor('--bg-color', this['bg-color']);
    };
  }

  private _updateColor(property: string, value: string): void {
    const c = Object.keys(sharedColors).includes(value) ? `var(--c-${value})` : value;
    this.style.setProperty(property, c);
  }
}

export const sharedColors = {
  primary: '#0072B5',
  secondary: '#e9897e',
  tertiary: '#e0b589',
  neutral: '#939597',
  warning: '#fdac53',
  danger: '#d2386c',
  success: '#00a170',
  info: '#926aa6',
  disabled: 'lightgrey',
  'on-primary': '#0072b5',
  'on-secondary': '#e9897e',
  'on-tertiary': '#e0b589',
  'on-neutral': '#939597',
  'on-warning': '#fdac53',
  'on-danger': '#d2386c',
  'on-success': '#00a170',
  'on-info': '#926aa6',
  'on-disabled': 'black',
  'surface': '#F5F7FD',
  'on-surface': '#09122F',
  'bg': '#EDF1FF',
  'on-bg': '#282D3C',
  'light': '#efe1ce',
  'dark': '#363945',
  'on-light': '#efe1ce',
  'on-dark': '#363945',
  'on-btn': '#F5F7FD',
};

export const themeColors: CSSResult = css`
  :host {
    --c-surface: #F5F7FD;
    --c-on-surface: #09122F;
    --c-bg: #EDF1FF;
    --c-on-bg: #282D3C;
    --c-light: #efe1ce;
    --c-dark: #363945;
    --c-on-light: #efe1ce;
    --c-on-dark: #363945;
    --c-on-btn: #F5F7FD;
  }

  :host([dark]) {
    --c-surface: #09122F;
    --c-on-surface: #F5F7FD;
    --c-bg: #282D3C;
    --c-on-bg: #EDF1FF;
    --c-light: #efe1ce;
    --c-dark: #363945;
    --c-on-light: #efe1ce;
    --c-on-dark: #363945;
    --c-on-btn: #09122F;
  }
`;

export const colors: CSSResult = css`
  :host {
    --c-primary: #0072B5;
    --c-secondary: #e9897e;
    --c-tertiary: #e0b589;
    --c-neutral: #939597;
    --c-warning: #fdac53;
    --c-danger: #d2386c;
    --c-success: #00a170;
    --c-info: #926aa6;
    --c-on-primary: #0072b5;
    --c-on-secondary: #e9897e;
    --c-on-tertiary: #e0b589;
    --c-on-neutral: #939597;
    --c-on-warning: #fdac53;
    --c-on-danger: #d2386c;
    --c-on-success: #00a170;
    --c-on-info: #926aa6;
  }
`;
