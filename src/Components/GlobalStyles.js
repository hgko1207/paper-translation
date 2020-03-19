import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        background-color: rgba(255, 255, 255, 1);
        color: #777;
    }
`;

export default globalStyles;
