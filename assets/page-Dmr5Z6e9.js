import{r as i,T as f,j as t,d as x}from"./index-CjKq2ruq.js";const z="",A="",X="",M="",Y="",Z="",$="",E="",L="",D="",R="",W="",P="",S="",T="",U="",K="",O="",V="",q="",F="",G="",H="",I="",J="",Q="",tt="",st="",at="",ot="",et="",rt="",it="",nt="",ct="",lt="",xt="",dt="",pt="",ut="",ht="",mt="",ft="",wt="",bt="",gt="",yt="",vt="",_t="",jt="";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,e)=>e?e.toUpperCase():o.toLowerCase()),l=s=>{const a=b(s);return a.charAt(0).toUpperCase()+a.slice(1)},d=(...s)=>s.filter((a,o,e)=>!!a&&a.trim()!==""&&e.indexOf(a)===o).join(" ").trim(),g=s=>{for(const a in s)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:e,className:n="",children:r,iconNode:p,...c},u)=>i.createElement("svg",{ref:u,...y,width:a,height:a,stroke:s,strokeWidth:e?Number(o)*24/Number(a):o,className:d("lucide",n),...!r&&!g(c)&&{"aria-hidden":"true"},...c},[...p.map(([h,m])=>i.createElement(h,m)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(s,a)=>{const o=i.forwardRef(({className:e,...n},r)=>i.createElement(v,{ref:r,iconNode:a,className:d(`lucide-${w(l(s))}`,`lucide-${s}`,e),...n}));return o.displayName=l(s),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]],k=_("paint-roller",j),kt=({Icon:s,LightTextColor:a="#555f6e",DarkTextColor:o="#f5f5f5"})=>{const{darkMode:e}=i.useContext(f);return t.jsx(C,{children:t.jsxs("div",{className:`${e?"btnDark":"btn"} relative`,children:[s&&t.jsx(s,{style:{color:e?o:a},className:"w-5 h-5"}),s==k?t.jsx("input",{className:"opacity-0 absolute top-0 left-0 z-10 p-3 cursor-pointer",type:"color",value:"#44db1a"}):null]})})},C=x.div`
  .btn {
    color: #090909;
    padding: 0.5em;
    font-size: 18px;
    border-radius: 50%;
    background: #e8e8e8;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }

  .btn:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }

  .btn:hover {
    transform: translateY(-1px);
  }

  .btnDark {
    color: #e0e0e0;
    padding: 0.5em;
    font-size: 18px;
    border-radius: 50%;
    background: #10172a;
    cursor: pointer;
    border: 1px solid #10172a;
    box-shadow: 6px 6px 12px #000000, -6px -6px 12px #404654;
  }

  .btnDark:active {
    color: #999;
    box-shadow: inset 4px 4px 12px #000000, inset -4px -4px 12px #404654;
  }

    .btnDark:hover {
    transform: translateY(-1px);
  }
`,Ct=({checked:s,onChange:a})=>t.jsx(N,{children:t.jsxs("label",{className:"switch",children:[t.jsx("input",{id:"input",type:"checkbox",checked:s,onChange:a}),t.jsxs("div",{className:"slider round",children:[t.jsxs("div",{className:"sun-moon",children:[t.jsx("svg",{id:"moon-dot-1",className:"moon-dot",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"moon-dot-2",className:"moon-dot",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"moon-dot-3",className:"moon-dot",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"light-ray-1",className:"light-ray",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"light-ray-2",className:"light-ray",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"light-ray-3",className:"light-ray",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"cloud-1",className:"cloud-dark",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"cloud-2",className:"cloud-dark",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"cloud-3",className:"cloud-dark",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"cloud-4",className:"cloud-light",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"cloud-5",className:"cloud-light",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})}),t.jsx("svg",{id:"cloud-6",className:"cloud-light",viewBox:"0 0 100 100",children:t.jsx("circle",{cx:50,cy:50,r:50})})]}),t.jsxs("div",{className:"stars",children:[t.jsx("svg",{id:"star-1",className:"star",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})}),t.jsx("svg",{id:"star-2",className:"star",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})}),t.jsx("svg",{id:"star-3",className:"star",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})}),t.jsx("svg",{id:"star-4",className:"star",viewBox:"0 0 20 20",children:t.jsx("path",{d:"M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"})})]})]})]})}),N=x.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch #input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2196f3;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 0;
    overflow: hidden;
  }

  .sun-moon {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: yellow;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #input:checked + .slider {
    background-color: black;
  }

  #input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  #input:checked + .slider .sun-moon {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: white;
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }

  .moon-dot {
    opacity: 0;
    transition: 0.4s;
    fill: gray;
  }

  #input:checked + .slider .sun-moon .moon-dot {
    opacity: 1;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round .sun-moon {
    border-radius: 50%;
  }

  #moon-dot-1 {
    left: 10px;
    top: 3px;
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: 4;
  }

  #moon-dot-2 {
    left: 2px;
    top: 10px;
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 4;
  }

  #moon-dot-3 {
    left: 16px;
    top: 18px;
    position: absolute;
    width: 3px;
    height: 3px;
    z-index: 4;
  }

  #light-ray-1 {
    left: -8px;
    top: -8px;
    position: absolute;
    width: 43px;
    height: 43px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  #light-ray-2 {
    left: -50%;
    top: -50%;
    position: absolute;
    width: 55px;
    height: 55px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  #light-ray-3 {
    left: -18px;
    top: -18px;
    position: absolute;
    width: 60px;
    height: 60px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  .cloud-light {
    position: absolute;
    fill: #eee;
    animation-name: cloud-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }

  .cloud-dark {
    position: absolute;
    fill: #ccc;
    animation-name: cloud-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }

  #cloud-1 {
    left: 30px;
    top: 15px;
    width: 40px;
  }

  #cloud-2 {
    left: 44px;
    top: 10px;
    width: 20px;
  }

  #cloud-3 {
    left: 18px;
    top: 24px;
    width: 30px;
  }

  #cloud-4 {
    left: 36px;
    top: 18px;
    width: 40px;
  }

  #cloud-5 {
    left: 48px;
    top: 14px;
    width: 20px;
  }

  #cloud-6 {
    left: 22px;
    top: 26px;
    width: 30px;
  }

  @keyframes cloud-move {
    0% {
      transform: translateX(0px);
    }

    40% {
      transform: translateX(4px);
    }

    80% {
      transform: translateX(-4px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  .stars {
    transform: translateY(-32px);
    opacity: 0;
    transition: 0.4s;
  }

  .star {
    fill: white;
    position: absolute;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    animation-name: star-twinkle;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  #input:checked + .slider .stars {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  #star-1 {
    width: 20px;
    top: 2px;
    left: 3px;
    animation-delay: 0.3s;
  }

  #star-2 {
    width: 6px;
    top: 16px;
    left: 3px;
  }

  #star-3 {
    width: 12px;
    top: 20px;
    left: 10px;
    animation-delay: 0.6s;
  }

  #star-4 {
    width: 18px;
    top: 0px;
    left: 18px;
    animation-delay: 1.3s;
  }

  @keyframes star-twinkle {
    0% {
      transform: scale(1);
    }

    40% {
      transform: scale(1.2);
    }

    80% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }
`;export{Ct as $,tt as A,st as B,at as C,ot as D,et as E,rt as F,it as G,nt as H,ct as I,lt as J,xt as K,dt as L,pt as M,ut as N,ht as O,mt as P,ft as Q,wt as R,bt as S,gt as T,yt as U,vt as V,_t as W,jt as X,_ as Y,k as Z,kt as _,A as a,X as b,M as c,Y as d,Z as e,$ as f,E as g,L as h,D as i,R as j,W as k,P as l,S as m,T as n,U as o,K as p,O as q,V as r,z as s,q as t,F as u,G as v,H as w,I as x,J as y,Q as z};
