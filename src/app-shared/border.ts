import { css, CSSResult } from 'lit-element';

type borderRadius = {
  none: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  full: string,
}

const defaultBorderRadius: borderRadius = {
  none: '0',
  sm: '.25rem',
  md: '.5rem',
  lg: '.75rem',
  xl: '1rem',
  full: '9999px',
}

type borderWidth = {
  none: string,
  1: string,
  2: string,
  3: string,
  4: string,
}

const defaultBorderWidth: borderWidth = {
  none: '0',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
}

export const borderRadius: CSSResult= css`
  :host {
    --br-none: 0;
    --br-sm: .25rem;
    --br-md: .5rem;
    --br-lg: .75rem;
    --br-xl: 1rem;
    --br-full: 9999px;
  }
`;

export const borderWidth: CSSResult= css`
  :host {
    --bw-none: 0;
    --bw-1: 1px;
    --bw-2: 2px;
    --bw-3: 3px;
    --bw-4: 4px;
  }
`;
