import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as d}from"./index-CcnH5Kt0.js";import{ae as h}from"./index-BjY6hZKb.js";import{r as i}from"./index-RYns6xqu.js";import{B as l}from"./index-TPsH7ju7.js";import"./index-BsTQa2dI.js";import{I as g}from"./index-BCci90R-.js";import"./index-BnxYoK66.js";import"./index-ChTYph08.js";import{I as m}from"./config-BZ39vrOF.js";import"./iframe-CeeUBbUc.js";import"../sb-preview/runtime.js";import"./index-BwmuJAIN.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./cn-BM_CldAA.js";const p=()=>{const[n,t]=i.useState(""),[a,s]=i.useState(!1),[u,o]=i.useState(!1),x=()=>{s(!0),setTimeout(()=>{s(!1),o(!0)},1e3)},f=()=>{s(!0),o(!1),setTimeout(()=>{s(!1),t("")},1e3)};return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-6",children:[e.jsxs("div",{className:"flex flex-row gap-3 items-center justify-center",children:[e.jsx(g,{placeholder:"Enter your name",value:n,onChange:r=>{r.preventDefault(),t(r.target.value)}}),e.jsx(l,{onClick:x,variant:"default",size:"default",disabled:a,children:a?e.jsx(m.LOADING,{className:"animate-spin"}):"Display"})]}),u?e.jsxs("div",{className:"flex flex-col gap-3 items-center justify-center",children:[e.jsxs("p",{className:"text-lg font-semibold",children:["Hello, ",n,"!"]}),e.jsx(l,{variant:"destructive",onClick:f,children:"Remove"})]}):a?e.jsx(m.LOADING,{className:"animate-spin"}):null]})};p.__docgenInfo={description:"",methods:[],displayName:"ButtonAndInputExample"};function c(n){const t={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Examples"}),`
`,e.jsx(t.h1,{id:"examples",children:"Examples"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("div",{className:"container",children:e.jsxs("div",{className:"example",children:[e.jsx("h2",{className:"heading",children:e.jsx(t.p,{children:"Button and Input Example"})}),e.jsx("div",{className:"component",children:e.jsx(p,{})}),e.jsx("div",{className:"snippet",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useState } from 'react'
import { Button, Input } from '@clxrity/x-ui'
import { ICONS } from '../config'

export const ButtonAndInputExample = () => {
    const [name, setName] = useState<string>('')
    const [loading, setIsLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleClick = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setSubmitted(true)
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
                <Button onClick={handleClick} variant="default" size="default" disabled={loading}>
            {   loading ? <ICONS.LOADING className="animate-spin" /> : 'Set Name'}
            </Button>
        </div>
        {submitted && name && (
            <div className="flex flex-row gap-3 items-center justify-center">
                <p className="text-lg font-semibold">Hello, {name}!</p>
            </div>
        )}
        </div>
    )
}
`})})})]})}),`
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
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
        }
    `})]})}function _(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{_ as default};
