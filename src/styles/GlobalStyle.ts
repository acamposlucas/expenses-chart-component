import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --soft-red: hsl(10, 79%, 65%);
        --cyan: hsl(186, 34%, 60%);
        --dark-brown: hsl(25, 47%, 15%);
        --medium-brown: hsl(28, 10%, 53%);
        --cream: hsl(27, 66%, 92%);
        --pale-orange: hsl(33, 100%, 98%);

        --fw-regular: 400;
        --fw-bold: 700;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: 'DM Sans', sans-serif;
        background-color: var(--cream);
        padding: 2rem 0;
    }
`;
