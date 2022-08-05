import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

* {
  scrollbar-width: thin;
  scrollbar-color: #5126EA #B0A6F0;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 5px;
  width: 5px;
}
*::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #B0A6F0;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B0A6F0;
}

*::-webkit-scrollbar-track:active {
  background-color: #B0A6F0;
}

*::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #5126EA;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #4529E6;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #4529E6;
}
`;
