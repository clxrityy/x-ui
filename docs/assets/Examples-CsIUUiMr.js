import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as h}from"./index-FeUjBnvO.js";import{ae as g}from"./index-CxUrVaQ1.js";import{r as l}from"./index-uubelm5h.js";/* empty css              */import{B as o}from"./index-C6_2eF8n.js";import"./index-CNlJH9dE.js";import{I as N}from"./index-CC-598jT.js";import"./index-BxkSbrzJ.js";import{S as c}from"./index-BKf_ivNE.js";import"./select-lpfxzZh0.js";import{u as v}from"./index-CPLmahPw.js";import{I as d}from"./config-BFQgS3XC.js";import"./iframe-DZoONFIH.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./index-Cl4abcyk.js";import"./cn-BM_CldAA.js";import"./index-CJ20TBUW.js";const x=()=>{const[s,n]=l.useState(""),[i,t]=l.useState(!1),[u,a]=l.useState(!1),j=()=>{t(!0),setTimeout(()=>{t(!1),a(!0)},1e3)},f=()=>{t(!0),a(!1),setTimeout(()=>{t(!1),n("")},1e3)};return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-6",children:[e.jsxs("div",{className:"flex flex-row gap-3 items-center justify-center",children:[e.jsx(N,{placeholder:"Enter your name",value:s,onChange:r=>{r.preventDefault(),n(r.target.value)}}),e.jsx(o,{onClick:j,variant:"default",size:"default",disabled:i||!s.length,children:i?e.jsx(d.LOADING,{className:"animate-spin"}):"Display"})]}),u?e.jsxs("div",{className:"flex flex-col gap-3 items-center justify-center",children:[e.jsxs("p",{className:"text-lg font-semibold",children:["Hello, ",s,"!"]}),e.jsx(o,{variant:"destructive",onClick:f,children:"Remove"})]}):i?e.jsx(d.LOADING,{className:"animate-spin"}):null]})},p=()=>{const s=v();return e.jsxs("div",{className:"flex flex-col gap-6 items-center",children:[e.jsx("h3",{children:"Screen Size"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Width:"})," ",e.jsx("span",{className:"font-mono",children:s==null?void 0:s.width})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Height:"})," ",e.jsx("span",{className:"font-mono",children:s==null?void 0:s.height})]})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"ButtonAndInputExample"};p.__docgenInfo={description:"",methods:[],displayName:"UseScreenSizeExample"};function m(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Examples"}),`
`,e.jsx(n.h1,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button-and-input-example",children:"Button and Input Example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#use-screen-size-hook-example",children:"Use screen size hook example"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"example",children:[e.jsx(n.h2,{id:"button-and-input-example",children:"Button and Input Example"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(n.p,{children:"The input field accepts text value (name)"}),e.jsx("li",{className:"sub-li",children:e.jsxs(n.p,{children:["The button is ",e.jsx(n.strong,{children:"disabled"})," when the input field is empty"]})}),e.jsx("li",{className:"sub-li",children:e.jsxs(n.p,{children:["When the input is changed, the given value is stored with the ",e.jsx(n.code,{children:"useState()"})," hook"]})})]}),e.jsxs("li",{children:[e.jsx(n.p,{children:"The button is clicked to set the name"}),e.jsx("li",{className:"sub-li",children:e.jsxs(n.p,{children:["The button is ",e.jsx(n.strong,{children:"disabled"})," when the loading state is true"]})}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"The loading state is set to true when the button is clicked"})}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"The loading state is set to false after 1 second (or 1000ms)"})}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"The submitted state is set to true after the loading state is set to false"})})]}),e.jsx("li",{children:e.jsx(n.p,{children:"The name is displayed after the button is clicked"})}),e.jsxs("li",{children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"remove"})," button is displayed after the name is set"]}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"Upon click, the name is removed and the submitted state is set to false"})})]})]}),e.jsx("div",{className:"component",children:e.jsx(x,{})}),e.jsx(c,{previewText:"View code",className:"mx-auto",children:e.jsx("div",{className:"snippet",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "@clxrity/x-ui/dist/style.css"
import { useState } from 'react'
import { Button, Input } from '@clxrity/x-ui'
import { ICONS } from '../config'

export const ButtonAndInputExample = () => {
    const [name, setName] = useState<string>('')
    const [loading, setIsLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleSet = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setSubmitted(true)
        }, 1000)
    }

    const handleRemove = () => {
        setIsLoading(true)
        setSubmitted(false)
        setTimeout(() => {
            setIsLoading(false)
            setName('')
        }, 1000)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-row gap-3 items-center justify-center">
                <Input
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                        e.preventDefault()
                        setName(e.target.value)
                    }}
                />
                <Button onClick={handleSet} variant="default" size="default" disabled={loading || !name.length}>
                    {loading ? <ICONS.LOADING className="animate-spin" /> : 'Display'}
                </Button>
            </div>
            {submitted ? (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <p className="text-lg font-semibold">Hello, {name}!</p>
                    <Button variant={'destructive'} onClick={handleRemove}>
                        Remove
                    </Button>
                </div>
            ) : loading ? (
                <ICONS.LOADING className="animate-spin" />
            ) : null}
        </div>
    )
}
`})})})})]}),e.jsx(n.hr,{}),e.jsxs("div",{className:"example",children:[e.jsx(n.h2,{id:"use-screen-size-hook-example",children:"Use screen size hook example"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The screen size is displayed in pixels"}),`
`,e.jsx(n.li,{children:"Change the size of the window to see the screen size change"}),`
`,e.jsx(n.li,{children:"The screen size is updated in real-time"}),`
`]}),e.jsx(p,{}),e.jsx(c,{previewText:"View code",className:"mx-auto",children:e.jsx("div",{className:"snippet",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useScreenSize } from '@clxrity/x-ui'

export const UseScreenSizeExample = () => {
    const screenSize = useScreenSize()

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <p>Width: {screenSize.width}px</p>
            <p>Height: {screenSize.height}px</p>
        </div>
    )
}
`})})})})]})]}),`
`,e.jsx("style",{children:`
        .example {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin-top: 50px;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
        }

        .example .component {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        .example .heading {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .snippet {
            background-color: #f3f4f6;
            padding: 1rem;
            border-radius: 0.5rem;
            max-width: 85%;
            overflow-x: auto;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
        }

        .sub-li {
            margin-left: 1rem;
            list-style-type: circle;
        }
    `})]})}function V(s={}){const{wrapper:n}={...h(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(m,{...s})}):m(s)}export{V as default};
