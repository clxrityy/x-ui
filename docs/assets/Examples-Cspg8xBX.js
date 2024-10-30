import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as c}from"./index-FeUjBnvO.js";import{ae as f}from"./index-WJYbE2PD.js";import{r as a}from"./index-uubelm5h.js";/* empty css              */import{B as o}from"./index-C6_2eF8n.js";import"./index-CNlJH9dE.js";import{I as j}from"./index-CC-598jT.js";import"./index-BxkSbrzJ.js";import{S as g}from"./index-DeCrKfJT.js";import"./select-lpfxzZh0.js";import{I as m}from"./config-BFQgS3XC.js";import"./iframe-BqvJ3TjI.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./index-Cl4abcyk.js";import"./cn-BM_CldAA.js";import"./index-CJ20TBUW.js";const u=()=>{const[n,t]=a.useState(""),[i,s]=a.useState(!1),[p,l]=a.useState(!1),h=()=>{s(!0),setTimeout(()=>{s(!1),l(!0)},1e3)},x=()=>{s(!0),l(!1),setTimeout(()=>{s(!1),t("")},1e3)};return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-6",children:[e.jsxs("div",{className:"flex flex-row gap-3 items-center justify-center",children:[e.jsx(j,{placeholder:"Enter your name",value:n,onChange:r=>{r.preventDefault(),t(r.target.value)}}),e.jsx(o,{onClick:h,variant:"default",size:"default",disabled:i||!n.length,children:i?e.jsx(m.LOADING,{className:"animate-spin"}):"Display"})]}),p?e.jsxs("div",{className:"flex flex-col gap-3 items-center justify-center",children:[e.jsxs("p",{className:"text-lg font-semibold",children:["Hello, ",n,"!"]}),e.jsx(o,{variant:"destructive",onClick:x,children:"Remove"})]}):i?e.jsx(m.LOADING,{className:"animate-spin"}):null]})};u.__docgenInfo={description:"",methods:[],displayName:"ButtonAndInputExample"};function d(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Examples"}),`
`,e.jsx(t.h1,{id:"examples",children:"Examples"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#button-and-input-example",children:"Button and Input Example"})}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("div",{className:"container",children:e.jsxs("div",{className:"example",children:[e.jsx(t.h2,{id:"button-and-input-example",children:"Button and Input Example"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(t.p,{children:"The input field accepts text value (name)"}),e.jsx("li",{className:"sub-li",children:e.jsxs(t.p,{children:["The button is ",e.jsx(t.strong,{children:"disabled"})," when the input field is empty"]})}),e.jsx("li",{className:"sub-li",children:e.jsxs(t.p,{children:["When the input is changed, the given value is stored with the ",e.jsx(t.code,{children:"useState()"})," hook"]})})]}),e.jsxs("li",{children:[e.jsx(t.p,{children:"The button is clicked to set the name"}),e.jsx("li",{className:"sub-li",children:e.jsxs(t.p,{children:["The button is ",e.jsx(t.strong,{children:"disabled"})," when the loading state is true"]})}),e.jsx("li",{className:"sub-li",children:e.jsx(t.p,{children:"The loading state is set to true when the button is clicked"})}),e.jsx("li",{className:"sub-li",children:e.jsx(t.p,{children:"The loading state is set to false after 1 second (or 1000ms)"})}),e.jsx("li",{className:"sub-li",children:e.jsx(t.p,{children:"The submitted state is set to true after the loading state is set to false"})})]}),e.jsx("li",{children:e.jsx(t.p,{children:"The name is displayed after the button is clicked"})}),e.jsxs("li",{children:[e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"remove"})," button is displayed after the name is set"]}),e.jsx("li",{className:"sub-li",children:e.jsx(t.p,{children:"Upon click, the name is removed and the submitted state is set to false"})})]})]}),e.jsx("div",{className:"component",children:e.jsx(u,{})}),e.jsx(g,{previewText:"View code",className:"mx-auto",children:e.jsx("div",{className:"snippet",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useState } from 'react'
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
`})})})})]})}),`
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
            max-width: 50%;
            overflow-x: auto;
            margin-left: auto;
            margin-right: auto;
        }

        .sub-li {
            margin-left: 1rem;
            list-style-type: circle;
        }
    `})]})}function H(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{H as default};
