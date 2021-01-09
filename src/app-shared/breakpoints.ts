import { css, CSSResult } from 'lit-element';

type Breakpoints = {
  sm: string,
  md: string,
  lg: string,
  xl: string,
  '2xl': string,
}

export const defaultBreakpoints: Breakpoints = {
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px',
  '2xl': '1920px',
};

export const breakpoints: CSSResult = css`
  :host {
    --bp-sm: 768px;
    --bp-md: 1024px;
    --bp-lg: 1280px;
    --bp-xl: 1440px;
    --bp-2xl: 1920px;
  }
`;