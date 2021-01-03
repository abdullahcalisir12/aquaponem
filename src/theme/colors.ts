import { css } from 'lit-element';

export const themeColors = css`
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

export const colors = css`
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