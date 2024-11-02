import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{ae as r}from"./index-CxUrVaQ1.js";import"./index-uubelm5h.js";import"./iframe-DZoONFIH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";function t(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Home"}),`
`,e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"header",children:[e.jsx(n.h1,{id:"clxrityx-ui",children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@clxrity/x-ui",rel:"nofollow",children:"@clxrity/x-ui"})}),e.jsx(n.p,{children:"A personalized React UI component library."}),e.jsxs("div",{className:"badges",children:[e.jsx("div",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.npmjs.org/package/@clxrity/x-ui",rel:"nofollow",children:e.jsx(n.img,{src:"https://badgen.net/npm/v/@clxrity/x-ui",alt:"view on npm"})})})}),e.jsx("div",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/clxrityy/react-audio/network/dependents?dependent_type=REPOSITORY",rel:"nofollow",children:e.jsx(n.img,{src:"https://badgen.net/github/dependents-repo/clxrityy/react-audio",alt:"Gihub repo dependents"})})})}),e.jsx("div",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/clxrityy/x-ui/actions/workflows/main.yml",rel:"nofollow",children:e.jsx(n.img,{src:"https://github.com/clxrityy/x-ui/actions/workflows/main.yml/badge.svg",alt:"Node.js CI"})})})}),e.jsx("div",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/clxrityy/react-audio/blob/main/LICENSE",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/badge/license-MIT-brightgreen.svg",alt:"MIT license"})})})})]})]}),e.jsxs("div",{className:"installation",children:[e.jsx(n.h2,{id:"installation",children:"Installation"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i @clxrity/x-ui
`})})]}),e.jsxs("div",{children:[e.jsx(n.h2,{id:"usage",children:"Usage"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "@clxrity/x-ui/dist/style.css";
import { Button } from '@clxrity/x-ui';

const App = () => {
    return (
        <Button onClick={() => console.log('Hello, World!')}>
            Click me!
        </Button>
    );
};
`})}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Ensure you add ",e.jsx(n.code,{children:'"use client"'})," to use client-side features (including ",e.jsx(n.code,{children:"onClick()"}),") when using with ",e.jsx(n.a,{href:"https://nextjs.org/",rel:"nofollow",children:"Next.js"}),"."]}),`
`]})]})]}),`
`,e.jsx("style",{children:`
        .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            gap: 1rem;
        }

        .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 1rem;
        }

        .badges {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;
            margin-top: 10px;
        }

        .installation {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
        }
    `})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
