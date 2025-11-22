import{r as s,d as h,T as b,j as n}from"./green-BK3lF6_2.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),i=e=>{const t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},x=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim(),k=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:p="",children:a,iconNode:l,...c},d)=>s.createElement("svg",{ref:d,...y,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:x("lucide",p),...!a&&!k(c)&&{"aria-hidden":"true"},...c},[...l.map(([u,f])=>s.createElement(u,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(e,t)=>{const r=s.forwardRef(({className:o,...p},a)=>s.createElement(C,{ref:a,iconNode:t,className:x(`lucide-${m(i(e))}`,`lucide-${e}`,o),...p}));return r.displayName=i(e),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]],j=g("paint-roller",v),L=({Icon:e,LightTextColor:t="#555f6e",DarkTextColor:r="#f5f5f5"})=>{const{darkMode:o}=s.useContext(b);return n.jsx(A,{children:n.jsxs("div",{className:`${o?"btnDark":"btn"} relative`,children:[e&&n.jsx(e,{style:{color:o?r:t},className:"w-5 h-5"}),e==j?n.jsx("input",{className:"opacity-0 absolute top-0 left-0 z-10 p-3 cursor-pointer",type:"color",value:"#44db1a"}):null]})})},A=h.div`
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
`;export{L as B,j as P,g as c};
