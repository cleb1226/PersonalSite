import{a as w,o as n,w as v,p as k,q as b,M as C,L as j,S as R,s as S,O as $,t as M}from"./chunk-QMGIS6GS-3S7rS9M4.js";import{g as A,a as E,u as U,s as B,c as O,b as F,m as N,d as P,e as u,k as m}from"./DefaultPropsProvider-B_X-1BXp.js";function T(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function H(t){return A("MuiSkeleton",t)}E("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const L=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:i,height:r}=t;return F({root:["root",a,s,o&&"withChildren",o&&!i&&"fitContent",o&&!r&&"heightAuto"]},H,e)},l=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,c=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,q=typeof l!="string"?u`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,I=typeof c!="string"?u`
        &::after {
          animation: ${c} 2s linear 0.5s infinite;
        }
      `:null,K=B("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(N(({theme:t})=>{const e=T(t.shape.borderRadius)||"px",a=X(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:P(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:s})=>s.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:s})=>s.hasChildren&&!s.width,style:{maxWidth:"fit-content"}},{props:({ownerState:s})=>s.hasChildren&&!s.height,style:{height:"auto"}},{props:{animation:"pulse"},style:q||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:I||{"&::after":{animation:`${c} 2s linear 0.5s infinite`}}}]}})),W=w.forwardRef(function(e,a){const s=U({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:r="span",height:p,style:f,variant:g="text",width:y,...d}=s,h={...s,animation:o,component:r,variant:g,hasChildren:!!d.children},x=L(h);return n.jsx(K,{as:r,ref:a,className:O(x.root,i),ownerState:h,...d,style:{width:y,height:p,...f}})}),V=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function G({children:t}){return n.jsxs("html",{lang:"en","data-theme":"dark",children:[n.jsxs("head",{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx(C,{}),n.jsx(j,{})]}),n.jsxs("body",{children:[t,n.jsx(R,{}),n.jsx(S,{})]})]})}const J=v(function(){return n.jsx("div",{className:"flex w-full h-full justify-center items center",children:n.jsx(W,{animation:"wave"})})}),Q=k(function(){return n.jsx($,{})}),Y=b(function({error:e}){let a="Oops!",s="An unexpected error occurred.",o;return M(e)&&(a=e.status===404?"404":"Error",s=e.status===404?"The requested page could not be found.":e.statusText||s),n.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[n.jsx("h1",{children:a}),n.jsx("p",{children:s}),o]})});export{Y as ErrorBoundary,J as HydrateFallback,G as Layout,Q as default,V as links};
