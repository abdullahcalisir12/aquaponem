import { css } from 'lit-element';

const defaultBorderRadius = {
  'none': '0',
  'sm': '.25rem',
  'md': '.5rem',
  'lg': '.75rem',
  'xl': '1rem',
  'full': '9999px',
}

const defaultBorderWidth = {
  none: '0',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
}

export const borderRadius = css`
  :host {
    --br-none: 0;
    --br-sm: .25rem;
    --br-md: .5rem;
    --br-lg: .75rem;
    --br-xl: 1rem;
    --br-full: 9999px;
  }
`;

export const borderWidth = css`
  :host {
    --bw-none: 0;
    --bw-1: 1px;
    --bw-2: 2px;
    --bw-3: 3px;
    --bw-4: 4px;
  }
`;
