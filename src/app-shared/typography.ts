import { css } from 'lit-element';

export const textStyles = css`
  h1 {
    font-weight: var(--fw-s);
    font-size: var(--spc-12);
  }

  h2 {
    font-weight: var(--fw-s);
    font-size: var(--spc-10);
  }

  h3 {
    font-weight: var(--fw-s);
    font-size: var(--spc-10);
  }

  h4 {
    font-weight: var(--fw-s);
    font-size: var(--spc-7);
  }

  h5 {
    font-weight: var(--fw-m);
    font-size: var(--spc-6);
  }

  h6, p, :host(.text-md) * {
    font-weight: var(--fw-r);
    font-size: var(--spc-5);
  }

  :host(.text-sm) * {
    font-weight: var(--fw-r);
    font-size: var(--spc-4);
  }

  :host(.text-xs) * {
    font-weight: var(--fw-r);
    font-size: var(--spc-3);
  }
`;

export const fontFamily = css`
  :host {
    --f-family: 'Poppins';
  }
`;

export const fontWeight = css`
  :host {
    --fw-t: 200; /* thin */
    --fw-l: 300; /* light */
    --fw-r: 400; /* regular */
    --fw-m: 500; /* medium */
    --fw-s: 600; /* semibold */
    --fw-b: 700; /* bold */
  }
`;
