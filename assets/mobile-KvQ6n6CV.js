import{d as c,r as s,j as e,G as d,c as x}from"./green-BK3lF6_2.js";import{I as f}from"./index-BtAV3BFT.js";import"./button-CWXbfgxc.js";const p=()=>{const[n,o]=s.useState(!1),l=async()=>{o(!n);const r=await(await fetch(f)).text(),i=new Blob([r],{type:"text/html"}),a=URL.createObjectURL(i),t=document.createElement("a");t.href=a,t.download="yedi.html",t.click(),URL.revokeObjectURL(a)};return e.jsx(m,{children:e.jsx("div",{className:"flex w-full h-screen justify-center items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"justify-center items-center mx-12 mb-4 -mt-12 text-center",children:["Telefonyňyz arkaly ýükläp alyp kompýuterde",e.jsx("span",{className:"text-green-700 font-black",children:" offline"})," ulanyp bilersiňiz!",e.jsx("br",{}),n?e.jsxs("span",{className:"text-red-400",children:[e.jsx("span",{className:"text-red-600 font-bold",children:" download "}),"basanyňyzdan son birazajyk garaşyň"]}):null]}),e.jsx("div",{className:"flex w-full justify-center items-center",children:e.jsx("button",{onClick:l,className:"btn-small",children:e.jsxs("div",{className:"btn-small-content",children:[e.jsx("div",{className:"btn-small-icon",children:e.jsx("img",{className:"w-7 h-7",src:d,alt:"GreenLogo"})}),e.jsx("p",{className:"btn-small-text",children:"download"})]})})})]})})})},m=c.div`
  .btn-small {
    position: relative;
    padding: 0;
    width: 100px; /* Smaller width */
    height: 100px; /* Smaller height */
    border: 2px solid #888888;
    outline: none;
    background-color: #f4f5f6;
    border-radius: 20px; /* Adjusted border-radius */
    box-shadow: -3px -10px 15px #ffffff, -3px -5px 8px #ffffff,
      -10px 0px 15px #ffffff, 3px 10px 12px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out; /* Smooth animation */
    cursor: pointer;
  }

  /* Hover animation: Scaling the button and adjusting shadow */
  .btn-small:hover {
    transform: scale(1.1); /* Button grows slightly */
    box-shadow: -3px -15px 20px #ffffff, -3px -10px 10px #ffffff,
      -10px 0px 15px #ffffff, 5px 15px 15px rgba(0, 0, 0, 0.3);
  }

  /* Active click animation */
  .btn-small:active {
    transform: scale(0.95); /* Button shrinks slightly */
    box-shadow: none; /* Shadow disappears when clicked */
  }

  .btn-small-content {
    position: relative;
    display: grid;
    padding: 10px; /* Smaller padding */
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    box-shadow: inset 0px -4px 0px #dddddd, 0px -4px 0px #f4f5f6;
    border-radius: 20px;
    transition: 0.3s ease-in-out; /* Smooth animation */
    z-index: 1;
  }

  /* Icon hover effect: Floating effect */
  .btn-small-icon {
    position: relative;
    display: flex;
    transform: translate3d(0px, -2px, 0px);
    grid-column: 4;
    align-self: start;
    justify-self: end;
    width: 16px; /* Smaller icon size */
    height: 16px;
    transition: 0.3s ease-in-out; /* Smooth hover animation */
  }

  /* Hover effect on icon */
  .btn-small:hover .btn-small-icon {
    transform: translateY(-8px); /* Move the icon up slightly on hover */
  }

  /* Icon styling */
  .btn-small-icon svg {
    width: 16px; /* Smaller icon */
    height: 16px;
    fill: #aaaaaa;
  }

  /* Text hover effect: Floating effect */
  .btn-small-text {
    position: relative;
    transform: translate3d(0px, -2px, 0px); /* Smaller translation */
    margin: 0;
    align-self: end;
    grid-column: 1 / 5;
    grid-row: 2;
    text-align: center;
    font-size: 16px; /* Smaller font size */
    background-color: #888888;
    color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    background-clip: text;
    transition: 0.3s ease-in-out;
  }

  /* Hover effect on text */
  .btn-small:hover .btn-small-text {
    transform: translateY(-5px); /* Move the text up slightly on hover */
  }
`;x.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(p,{})}));
