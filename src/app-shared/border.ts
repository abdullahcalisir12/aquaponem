import { css } from 'lit-element';

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
