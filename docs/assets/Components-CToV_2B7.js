import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as i}from"./index-ChEI-nsM.js";import{ae as s}from"./index-B0JWw4X-.js";/* empty css              */import"./index-DOFGcnJs.js";import"./index-DJ9vUAmW.js";import"./index-DUn17nzv.js";import"./index-ClMaQ2F-.js";import"./index-BmWAlSny.js";import"./select-qJBBoYtH.js";import{L as r}from"./index-DtZfWEl7.js";import"./index-BDkih_bi.js";import{S as a}from"./index-BFcWgzs5.js";import"./index-WJqsCRz_.js";import"./index-CGIf58mz.js";import"./index-De_HMa7Y.js";import"./index-DRjF_FHU.js";import"./iframe-B02A_kY7.js";import"../sb-preview/runtime.js";import"./index-uWwxbAOW.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";import"./index-zwPzWEGF.js";import"./cn-CytzSlOG.js";import"./index-CwARidZJ.js";import"./config-BoCb0Jrg.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/README"}),`
`,e.jsx(n.h1,{id:"components",children:"Components"}),`
`,e.jsx(n.p,{children:"Components are separated into two main categories:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Base"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"These are base minimal components that are used to build more complex components, and/or used in utilization of other components."}),`
`,e.jsx(n.li,{children:"Included in these components are simple styles that can be easily overridden."}),`
`,e.jsx(n.li,{children:"These components are designed to be used in a variety of ways, and can be customized to fit your needs."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enhanced"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"These are more complex components that are built and/or styled to be used in a specific way."}),`
`,e.jsx(n.li,{children:"A lot of these components are designed heavily with custom CSS, and while they can be customized, you can not change the core design of the component without modifying the source code."}),`
`,e.jsx(n.li,{children:"Enhanced components are separated into various categories where you can find multiple variations of an idea."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"base-vs-enhanced-loader",children:"Base vs Enhanced (loader)"}),`
`,e.jsx(n.h3,{id:"base",children:"Base"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "@clxrity/x-ui/dist/style.css";
import { Loader } from "@clxrity/x-ui";

export const Component = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "25px" }}>
            <Loader size={40} />
        </div>
    )
}
`})}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"25px"},children:e.jsx(r,{size:40})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"enhanced",children:"Enhanced"}),`
`,e.jsx(n.h4,{id:"stack-loader",children:e.jsx(n.a,{href:"https://clxrityy.github.io/x-ui/?path=/story/components-enhanced-loaders-stackloader--default",rel:"nofollow",children:e.jsx(n.strong,{children:"Stack Loader"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "@clxrity/x-ui/dist/style.css";
import { StackLoader } from "@clxrity/x-ui";

export const Component = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75px" }}>
            <StackLoader />
        </div>
    )
}
`})}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"75px"},children:e.jsx(a,{})})]})}function A(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{A as default};
