import { css } from "frontity";

const globalStyle = css`
  body {
    font-family: var(--body-family);
    text-rendering: optimizeLegibility;
    background-color: var(--background-brand);
    color: var(--color-text);
    font-weight: 300;
    background-position: 0 0;
    font-feature-settings: "kern", "liga", "clig", "calt";
    transition: background-color 500ms;
  }

  * {
    box-sizing: border-box;
  }

  [tabIndex="-1"] {
    outline: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
  strong {
    font-weight: 600;
  }
  code {
    background-color: var(--background-brand-dark);
    font-family: var(--system-family);
  }

  pre code {
    background-color: initial;
    font-family: inherit;
  }

  pre {
    font-family: Courier, Monaco, monospace;
    background-color: var(--background-brand-dark);
    --padding-top: 0.5;
    --padding-bottom: 0.5;
    --padding-right: 0.5;
    --padding-left: 0.5;
    --font-size: -0.15;
  }

  p,
  ul,
  ol,
  pre {
    --margin-bottom: 1;
  }
  ul,
  ol {
    --padding-left: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-family);
    font-weight: 700;
    --font-size: 1;
    --margin-top: 2;
    --margin-bottom: 1;
  }

  h1 {
    --margin-top: 0;
    --padding-top: 2;
    --font-size: 7;
    --line-height: 2;
  }

  h2 {
    --font-size: 4;
    --line-height: 1.5;
  }

  @media (min-width: 880px) {
    h1 {
      --font-size: 5;
      --line-height: 2.8;
      --margin-bottom: 0.5;
    }
    h2 {
      --font-size: 2;
      --line-height: 1.6;
    }
  }

  .entry-content > *:not(.alignfull) {
    max-width: var(--container-normal);
    width: var(--container-percentage);
    margin-left: auto;
    margin-right: auto;
  }
  .entry-content > .alignwide {
    max-width: var(--container-wide);
  }

  .link,
  .entry-content a {
    font-weight: 500;
    text-decoration: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid var(--color-brand);
    transition: all 0.1s;
    border-radius: 1px;
  }
  .link:hover,
  .entry-content a:hover {
    background-color: var(--color-brand-light);
    border-color: var(--color-brand-light);
  }

  .entry-content h2 a {
    border-bottom: 2px solid transparent;
  }

  ::-moz-selection {
    background-color: var(--selection);
  }
  ::selection {
    background-color: var(--selection);
  }

  .aligncenter {
    text-align: center;
  }
  figcaption {
    --font-size: -0.4;
    --line-height: 1;
    font-style: italic;
    color: var(--color-text-light);
    text-align: center;
    --margin-bottom: 1.5;
    --padding-top: 0.5;
    width: 100% !important;
  }

  img {
    vertical-align: middle;
    object-fit: cover;
    object-position: center;
    max-width: 100%;
    height: auto;
  }

  iframe {
    display: block;
    margin: auto;
  }

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      --margin-left: 2;
    }

    .alignleft {
      float: left;
      --margin-right: 2;
    }
  }
  @media (min-width: 620px) {
    .wp-block-columns {
      display: flex;

      > *:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }

  .wp-block-quote {
    --margin-bottom: 3;
  }

  .wp-block-quote p {
    font-style: italic;
    font-family: Georgia, "Times New Roman", Times, serif;
    --font-size: 1;
    --line-height: 1.25;
    --margin-bottom: 0.25;
  }
  .wp-block-quote cite {
    --font-size: -0.4;
    opacity: 0.8;
    font-style: normal;
  }
  .gist .highlight * {
    font-size: inherit;
    line-height: inherit;
  }
  .gist-meta * {
    font-size: inherit;
  }
  .cp_embed_iframe[src*="codepen.io"] {
    min-height: calc(280px + 30vh);
  }
`;

export default globalStyle;
