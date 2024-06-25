import{j as z}from"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";const k=({label:s,size:v="normal",allCaps:B=!1,color:S,fontColor:T,backgroundColor:q="transparent"})=>z.jsx("span",{className:`${v} ${S} label`,style:{color:T,backgroundColor:q},children:B?s.toUpperCase():s});k.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color",defaultValue:{value:"'transparent'",computed:!1}}}};const A={title:"UI/labels/MyLabel",component:k,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},o={args:{label:"Custom color label",fontColor:"#5517ac"}},l={args:{size:"h1",label:"Background label",fontColor:"white",backgroundColor:"black"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allCaps: true
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,y,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    fontColor: '#5517ac'
  }
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'Background label',
    fontColor: 'white',
    backgroundColor: 'black'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const _=["Basic","AllCaps","Secondary","CustomColor","BackgroundColor"];export{a as AllCaps,l as BackgroundColor,e as Basic,o as CustomColor,r as Secondary,_ as __namedExportsOrder,A as default};
