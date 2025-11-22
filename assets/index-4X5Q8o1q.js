import{d as s,r as n,T as i,j as t}from"./green-DYSCYCOM.js";import{P as l}from"./button-CD0rbIsn.js";const f=({Icon:o,LightTextColor:a="#555f6e",DarkTextColor:r="#f5f5f5"})=>{const{darkMode:e}=n.useContext(i);return t.jsx(p,{children:t.jsx("div",{className:`${e?"btn-smallDark":"btn-small"} relative`,children:t.jsx("div",{className:`${e?"btn-small-contentDark":"btn-btn-small-content"} `,children:t.jsxs("span",{className:`${e?"spanTextDark":"spanText"} `,children:[o&&t.jsx(o,{style:{color:e?r:a},className:"w-5 h-5"}),o==l?t.jsx("input",{className:"opacity-0 absolute top-0 left-0 z-10 p-3 cursor-pointer",type:"color",value:"#44db1a"}):null]})})})})},p=s.div`
  .btn-small {
    position: relative;
    padding: 0;
    width: 42px; /* Smaller width */
    height: 42px; /* Smaller height */
    border: 2px solid #888888;
    outline: none;
    background-color: #f4f5f6;
    border-radius: 50%; /* Adjusted border-radius */
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
    border-radius: 50%;
    transition: 0.3s ease-in-out; /* Smooth animation */
    z-index: 1;
  }

  /* Icon hover effect: Floating effect */

  /* Hover effect on icon */
  .btn-small:hover {
    transform: translateY(-8px); /* Move the icon up slightly on hover */
  }

  .spanText {
    position: absolute;
    top: 20%;
    left: 26%;
  }

  /* Hover effect on text */
  .btn-small:hover {
    transform: translateY(-2px); /* Move the text up slightly on hover */
  }


// DarkMode 
/* Using HSL or brighter HEX codes makes the "pressed" effect more realistic */

.btn-smallDark {
    position: relative;
    padding: 0;
    width: 42px;
    height: 42px;
    /* Dark Mode Background Color */
    background-color: #2c323a; 
    /* Subtle Border (optional) */
    border: 2px solid #666a70; 
    outline: none;
    border-radius: 50%;
    /* Dark Mode Neumorphic Shadows */
    box-shadow: 
      -5px -5px 10px rgba(71, 79, 89, 0.4), /* Lighter highlight (top-left) */
      5px 5px 10px rgba(0, 0, 0, 0.6);      /* Darker shadow (bottom-right) */
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

/* Hover animation */
.btn-smallDark:hover {
    transform: scale(1.1);
    box-shadow: 
      -6px -6px 15px rgba(71, 79, 89, 0.5), 
      6px 6px 15px rgba(0, 0, 0, 0.8);
}

/* Active click animation (pressed state) */
.btn-smallDark:active {
    transform: scale(0.95);
    /* Inset shadows make it look physically pressed down */
    box-shadow: 
      inset 4px 4px 8px rgba(0, 0, 0, 0.4),          /* Dark inset shadow */
      inset -4px -4px 8px rgba(71, 79, 89, 0.2);     /* Light inset highlight */
}

.btn-small-contentDark {
    position: relative;
    display: grid;
    padding: 10px;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* Subtle inner shadow for the content area */
    box-shadow: inset 0px -4px 0px #1a1e22, 0px -4px 0px #3c424a; 
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    z-index: 1;
}

.spanTextDark {
    position: absolute;
    top: 20%;
    left: 26%;
    /* Light text color for contrast on dark background */
    color: #b0b0b0; 
}

/* Hover effects for icons/text (attached to the main button hover) */
.btn-smallDark:hover,
.btn-smallDark:hover  > * /* assuming content children */ {
  transform: translateY(-2px); /* Move the text/icons up slightly on hover */
}

`,h=""+new URL("index-DfCNHfOg.txt",import.meta.url).href;export{f as B,h as I};
