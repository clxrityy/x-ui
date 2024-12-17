import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as h}from"./index-ChEI-nsM.js";import{ae as N}from"./index-B0JWw4X-.js";import{r as l}from"./index-DRjF_FHU.js";/* empty css              */import{B as c}from"./index-DOFGcnJs.js";import"./index-DJ9vUAmW.js";import{I as v}from"./index-DUn17nzv.js";import"./index-ClMaQ2F-.js";import{S as r}from"./index-BmWAlSny.js";import"./select-qJBBoYtH.js";import"./index-DtZfWEl7.js";import"./index-BDkih_bi.js";import"./index-BFcWgzs5.js";import"./index-WJqsCRz_.js";import"./index-CGIf58mz.js";import"./index-De_HMa7Y.js";import{u as b}from"./index-CdKEXlmN.js";import{u as y}from"./index-DP5mv8yi.js";import{I as d}from"./config-BoCb0Jrg.js";import"./iframe-B02A_kY7.js";import"../sb-preview/runtime.js";import"./index-uWwxbAOW.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";import"./index-zwPzWEGF.js";import"./cn-CytzSlOG.js";import"./index-CwARidZJ.js";const x=()=>{const[s,n]=l.useState(""),[t,i]=l.useState(!1),[f,a]=l.useState(!1),j=()=>{i(!0),setTimeout(()=>{i(!1),a(!0)},1e3)},g=()=>{i(!0),a(!1),setTimeout(()=>{i(!1),n("")},1e3)};return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-6",children:[e.jsxs("div",{className:"flex flex-row gap-3 items-center justify-center",children:[e.jsx(v,{placeholder:"Enter your name",value:s,onChange:o=>{o.preventDefault(),n(o.target.value)}}),e.jsx(c,{onClick:j,variant:"default",size:"default",disabled:t||!s.length,children:t?e.jsx(d.LOADING,{className:"animate-spin"}):"Display"})]}),f?e.jsxs("div",{className:"flex flex-col gap-3 items-center justify-center",children:[e.jsxs("p",{className:"text-lg font-semibold",children:["Hello, ",s,"!"]}),e.jsx(c,{variant:"destructive",onClick:g,children:"Remove"})]}):t?e.jsx(d.LOADING,{className:"animate-spin"}):null]})},p=()=>{const s=b();return e.jsxs("div",{className:"flex flex-col gap-6 items-center",children:[e.jsx("h3",{children:"Screen Size"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Width:"})," ",e.jsx("span",{className:"font-mono",children:s==null?void 0:s.width})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Height:"})," ",e.jsx("span",{className:"font-mono",children:s==null?void 0:s.height})]})]})]})},u=()=>{const{data:s,error:n,loading:t}=y("https://api.ipify.org?format=json");return e.jsxs("div",{className:"flex flex-col gap-6 items-center justify-center mx-auto",children:[e.jsx("h3",{className:"text-3xl font-bold",children:"Random API Fetch"}),e.jsxs("p",{children:["Fetching your IP address from"," ",e.jsx("a",{href:"https://api.ipify.org/",className:"text-blue-500 hover:underline hover:text-blue-600 focus:text-blue-700",target:"_blank",rel:"noreferrer",children:"api.ipify.org"})]}),e.jsxs("ul",{children:[t?e.jsx("li",{children:e.jsx("span",{children:"Loading..."})}):e.jsx("pre",{className:"font-mono font-light bg-gray-100/50 px-2 py-2 rounded-md",children:JSON.stringify(s,null,2)}),n&&e.jsxs("li",{className:"text-red-600",children:[e.jsx("strong",{children:"Error:"}),e.jsx("pre",{className:"font-mono font-light bg-red-100/50 px-2 py-2 rounded-md",children:n})]})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"ButtonAndInputExample"};p.__docgenInfo={description:"",methods:[],displayName:"UseScreenSizeExample"};u.__docgenInfo={description:"",methods:[],displayName:"UseFetchhookExample"};function m(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Examples"}),`
`,e.jsx(n.h1,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button-and-input-example",children:"Button and Input Example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#use-screen-size-hook-example",children:"Use screen size hook example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#use-fetch-hook-example",children:"Use fetch hook example"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"example",children:[e.jsx(n.h2,{id:"button-and-input-example",children:"Button and Input Example"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(n.p,{children:"The input field accepts text value (name)"}),e.jsx("li",{className:"sub-li",children:e.jsxs(n.p,{children:["The button is ",e.jsx(n.strong,{children:"disabled"})," when the input field is empty"]})}),e.jsx("li",{className:"sub-li",children:e.jsxs(n.p,{children:["When the input is changed, the given value is stored with the ",e.jsx(n.code,{children:"useState()"})," hook"]})})]}),e.jsxs("li",{children:[e.jsx(n.p,{children:"The button is clicked to set the name"}),e.jsx("li",{className:"sub-li",children:e.jsxs(n.p,{children:["The button is ",e.jsx(n.strong,{children:"disabled"})," when the loading state is true"]})}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"The loading state is set to true when the button is clicked"})}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"The loading state is set to false after 1 second (or 1000ms)"})}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"The submitted state is set to true after the loading state is set to false"})})]}),e.jsx("li",{children:e.jsx(n.p,{children:"The name is displayed after the button is clicked"})}),e.jsxs("li",{children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"remove"})," button is displayed after the name is set"]}),e.jsx("li",{className:"sub-li",children:e.jsx(n.p,{children:"Upon click, the name is removed and the submitted state is set to false"})})]})]}),e.jsx("div",{className:"component",children:e.jsx(x,{})}),e.jsx(r,{previewText:"View code",className:"mx-auto",children:e.jsx("div",{className:"snippet",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "@clxrity/x-ui/dist/style.css"
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
`]}),e.jsx(p,{}),e.jsx(r,{previewText:"View code",className:"mx-auto",children:e.jsx("div",{className:"snippet",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useScreenSize } from '@clxrity/x-ui'

export const UseScreenSizeExample = () => {
    const screenSize = useScreenSize()

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <p>Width: {screenSize.width}px</p>
            <p>Height: {screenSize.height}px</p>
        </div>
    )
}
`})})})})]}),e.jsx(n.hr,{}),e.jsxs("div",{className:"example",children:[e.jsx(n.h2,{id:"use-fetch-hook-example",children:"Use fetch hook example"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"useFetch()"})," hook is used to fetch data from an API"]}),`
`,e.jsx(n.li,{children:"The hook returns the data, error, and loading state."}),`
`,e.jsxs(n.li,{children:["Data is fetched from ",e.jsx(n.code,{children:"https://api.ipify.org"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The API returns the IP address of the user"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"The data is displayed in real-time"}),`
`]}),e.jsx("div",{className:"component",children:e.jsx(u,{})}),e.jsx(r,{previewText:"View code",className:"mx-auto",children:e.jsx("div",{className:"snippet",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const UseFetchhookExample = () => {
    const { data, error, loading } = useFetch('https://api.ipify.org?format=json')

    return (
        <div className="flex flex-col gap-6 items-center justify-center mx-auto">
            <h3 className="text-3xl font-bold">Random API Fetch</h3>
            <p>
                Fetching your IP address from{' '}
                <a
                    href="https://api.ipify.org/"
                    className="text-blue-500 hover:underline hover:text-blue-600 focus:text-blue-700"
                    target="_blank"
                    rel="noreferrer"
                >
                    api.ipify.org
                </a>
            </p>
            <ul>
            {
                loading ? (
                    <li>
                        <span>Loading...</span>
                    </li>
            ) :
                    <pre className="font-mono font-light bg-gray-100/50 px-2 py-2 rounded-md">
                        {JSON.stringify(data, null, 2)}
                    </pre>

            }
            {error && (
                <li className="text-red-600">
                    <strong>Error:</strong>
                    <pre className="font-mono font-light bg-red-100/50 px-2 py-2 rounded-md">
                        {error}
                    </pre>
                </li>
            )}
        </ul>
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
    `})]})}function Z(s={}){const{wrapper:n}={...h(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(m,{...s})}):m(s)}export{Z as default};
