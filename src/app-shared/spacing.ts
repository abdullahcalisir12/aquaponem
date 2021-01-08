import { css, CSSResult } from 'lit-element';

const defaultSpacings = {
  0: '0',
  1: '.25rem',
  2: '.5rem',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

export const spacing: CSSResult = css`
  :host {
    --spc-0: 0;
    --spc-1: .25rem;
    --spc-2: .5rem;
    --spc-3: .75rem;
    --spc-4: 1rem;
    --spc-5: 1.25rem;
    --spc-6: 1.5rem;
    --spc-7: 1.75rem;
    --spc-8: 2rem;
    --spc-10: 2.5rem;
    --spc-12: 3rem;
    --spc-14: 3.5rem;
    --spc-16: 4rem;
    --spc-20: 5rem;
    --spc-24: 6rem;
    --spc-28: 7rem;
    --spc-32: 8rem;
    --spc-36: 9rem;
    --spc-40: 10rem;
    --spc-48: 12rem;
    --spc-56: 14rem;
    --spc-64: 16rem;
    --spc-72: 18rem;
    --spc-80: 20rem;
    --spc-96: 24rem;
  }
`;
