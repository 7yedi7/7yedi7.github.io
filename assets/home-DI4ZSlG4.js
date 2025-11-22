import{j as e,r as c,T as D,d as P,R as b,u as te,W as re,G as ae,a as se,t as oe,b as ne,c as ie,e as le,f as ce}from"./index-CjKq2ruq.js";import{s as de,a as _e,b as ue,c as ge,d as pe,e as me,f as ye,g as fe,h as he,i as be,j as xe,k as ke,l as ve,m as we,n as je,o as Ne,p as Se,q as $e,r as Ce,t as ze,u as Ee,v as Re,w as Me,x as Ie,y as Oe,z as Le,A as Te,B as De,C as Pe,D as Ue,E as He,F as Fe,G as We,H as Be,I as Ae,J as qe,K as Ve,L as Ge,M as Je,N as Ye,O as Ke,P as Xe,Q as Ze,R as Qe,S as et,T as tt,U as rt,V as at,W as st,X as ot,Y as g,Z as U,_ as u,$ as nt}from"./page-Dmr5Z6e9.js";import"./vendor-BzrpNAyj.js";import"./lodash-DU5GzXJ0.js";const it=({closeFunction:t})=>e.jsx("div",{className:"flex items-center justify-center h-screen bg-neutral-900 overflow-hidden relative",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{style:{"--a":0},className:"btn-sensor sensor-n"}),e.jsx("div",{style:{"--a":45},className:"btn-sensor sensor-ne"}),e.jsx("div",{style:{"--a":90},className:"btn-sensor sensor-e"}),e.jsx("div",{style:{"--a":135},className:"btn-sensor sensor-se"}),e.jsx("div",{style:{"--a":180},className:"btn-sensor sensor-s"}),e.jsx("div",{style:{"--a":225},className:"btn-sensor sensor-sw"}),e.jsx("div",{style:{"--a":270},className:"btn-sensor sensor-w"}),e.jsx("div",{style:{"--a":315},className:"btn-sensor sensor-nw"}),e.jsxs("button",{className:"ms-4 btn-button bg-white border-4 border-white rounded-full p-8 relative z-10 cursor-pointer",children:[e.jsx("div",{className:"btn-lid absolute inset-0 rounded-full"}),e.jsx("div",{className:"btn-pupil bg-black border-[10px] border-sky-300 rounded-full w-10 h-10 transition-all duration-200 ease-out relative"})]}),e.jsxs("button",{className:"btn-button bg-white border-4 border-white rounded-full p-8 relative z-10 cursor-pointer ml-16",children:[e.jsx("div",{className:"btn-lid absolute inset-0 rounded-full"}),e.jsx("div",{className:"btn-pupil bg-black border-[10px] border-sky-300 rounded-full w-10 h-10 transition-all duration-200 ease-out relative"})]}),e.jsxs("div",{className:"mt-8 text-gray-200 text-xl text-center",children:["20 sekunt 20 metr ",e.jsx("br",{})," uzaklykdakay islendik jisime ",e.jsx("br",{})," seredip gözüňizi çaltlyk bilen gyrpyň! ",e.jsx("br",{}),e.jsx("div",{className:" mt-2 border absolute left-30 border-gray-50 px-4 py-1 rounded-2xl cursor-pointer z-50 bg-neutral-900",onClick:t,children:"Çykmak"})]})]})}),C=[`<!doctype html>
      <html>
      <head>
      <meta charset="utf-8" />
       <title>Turkmen Runtime</title>
       <style>
      html, body { margin: 0; padding: 0; height: 100%; color: white; }
      #scene { position: relative; width: 100%; height: 100%; }
      .obj { position: absolute; border: 2px solid white; border-radius: 8px; }
     </style>
     </head>
      <body>
    <div id="scene"></div>
    <script>
      (function(){
        const scene = document.getElementById('scene');

    window.sahypa = scene;

    

    window.figura = function({
      x = 0,
      y = 0,
      width = 80,
      height = 80,
      arkaFon = "green",
      size,
      tekst = "",
      textColor = "black",
      fontFamily = "monospace",
      fontSize = 32,
      border,
      borderRadius = 0,
      borderColor = "white",
      borderWidth = 0,
      padding = 4,
      align = "center",
      verticalAlign = "center",
      fontWeight,
      fontStyle,
      image = "",
      zIndex = 1,
      animasiya = 0.2,
      display = "flex",
      opacity = 1,
      } = {}) {
      const el = document.createElement("div");
      el.className = "obj";
      el.style.background = arkaFon;
      el.style.color = textColor;
      el.style.opacity = opacity;
      el.style.fontSize = fontSize + "px";
      el.style.fontWeight = fontWeight;
      if (size !== undefined && size !== null) {
      el.style.width = el.style.height = size + "px";
      } else {
      el.style.width = (width ?? 80) + "px";
      el.style.height = (height ?? 80) + "px";
      }

      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.position = "absolute";
      el.style.zIndex = zIndex;
      el.style.border = border ?? borderWidth + "px solid " + borderColor;
      el.style.borderRadius = typeof borderRadius === "number" ? borderRadius + "px" : borderRadius;

      el.style.display = display;
      el.style.alignItems =
        verticalAlign === "top"
          ? "flex-start"
          : verticalAlign === "bottom"
          ? "flex-end"
          : "center";
      el.style.justifyContent =
        align === "left"
          ? "flex-start"
          : align === "right"
          ? "flex-end"
          : "center";
      el.style.overflow = "hidden";
      el.style.boxSizing = "border-box";

      if (image ) {
        const img = document.createElement("img");
        if (image === "surat_1"){
              img.src = "${de}";
        } else if (image === "surat_2"){
              img.src = "${_e}";
        } else if (image === "surat_3"){
              img.src = "${ue}";
        } else if (image === "surat_4"){
              img.src = "${ge}";
        } else if (image === "surat_5"){
              img.src = "${pe}";
        } else if (image === "surat_6"){
              img.src = "${me}";
        } else if (image === "surat_7"){
              img.src = "${ye}";
        } else if (image === "surat_8"){
              img.src = "${fe}";
        } else if (image === "surat_9"){
              img.src = "${he}";
        } else if (image === "surat_10"){
              img.src = "${be}";
        } else if (image === "surat_11"){
              img.src = "${xe}";
        } else if (image === "surat_12"){
              img.src = "${ke}";
        } else if (image === "surat_13"){
              img.src = "${ve}";
        } else if (image === "surat_14") {
    img.src = "${we}";
} else if (image === "surat_15") {
    img.src = "${je}";
} else if (image === "surat_16") {
    img.src = "${Ne}";
} else if (image === "surat_17") {
    img.src = "${Se}";
} else if (image === "surat_18") {
    img.src = "${$e}";
} else if (image === "surat_19") {
    img.src = "${Ce}";
} else if (image === "surat_20") {
    img.src = "${ze}";
} else if (image === "surat_21") {
    img.src = "${Ee}";
} else if (image === "surat_22") {
    img.src = "${Re}";
} else if (image === "surat_23") {
    img.src = "${Me}";
} else if (image === "surat_24") {
    img.src = "${Ie}";
} else if (image === "surat_25") {
    img.src = "${Oe}";
} else if (image === "surat_26") {
    img.src = "${Le}";
} else if (image === "surat_27") {
    img.src = "${Te}";
} else if (image === "surat_28") {
    img.src = "${De}";
} else if (image === "surat_29") {
    img.src = "${Pe}";
} else if (image === "surat_30") {
    img.src = "${Ue}";
} else if (image === "surat_31") {
    img.src = "${He}";
} else if (image === "surat_32") {
    img.src = "${Fe}";
} else if (image === "surat_33") {
    img.src = "${We}";
} else if (image === "surat_34") {
    img.src = "${Be}";
} else if (image === "surat_35") {
    img.src = "${Ae}";
} else if (image === "surat_36") {
    img.src = "${qe}";
} else if (image === "surat_37") {
    img.src = "${Ve}";
} else if (image === "surat_38") {
    img.src = "${Ge}";
} else if (image === "surat_39") {
    img.src = "${Je}";
} else if (image === "surat_40") {
    img.src = "${Ye}";
} else if (image === "surat_41") {
    img.src = "${Ke}";
} else if (image === "surat_42") {
    img.src = "${Xe}";
} else if (image === "surat_43") {
    img.src = "${Ze}";
} else if (image === "surat_44") {
    img.src = "${Qe}";
} else if (image === "surat_45") {
    img.src = "${et}";
} else if (image === "surat_46") {
    img.src = "${tt}";
} else if (image === "surat_47") {
    img.src = "${rt}";
} else if (image === "surat_48") {
    img.src = "${at}";
} else if (image === "surat_49") {
    img.src = "${st}";
} else if (image === "surat_50") {
    img.src = "${ot}";
}
 
        else {
        img.src = image
        }
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        img.style.borderRadius =
        typeof borderRadius === "number" ? borderRadius + "px" : borderRadius;



        img.style.zIndex = "1";
        el.appendChild(img);
        el._img = img;
      }


        el.style.transition = "all " + animasiya + " linear";








    // ✅ Text layer (always on top)
      const text = document.createElement("div");
      text.textContent = tekst;
      text.style.position = "relative";
      text.style.zIndex = "2";
      text.style.width = "100%";
      text.style.textAlign = "center";
      text.style.color = textColor;
      text.style.fontFamily = fontFamily;
      text.style.fontSize = fontSize + "px";
      text.style.fontWeight = fontWeight ? "fontWeight" : "normal";
      text.style.fontStyle = fontStyle ? "fontStyle" : "normal";
      el.appendChild(text);

      scene.appendChild(el);

      // ============ helpers ============
      el.data = {};
      el.tekst = function (key, val) {
        if (arguments.length === 1) {
          el.textContent = String(key);
          return;
        }
        el.data[key] = val;
        el.textContent = Object.entries(el.data)
          .map(([k, v]) => k + ": " + v)
          .join("\\n");
      };



      el.uytget = function(updates = {}) {
      for (const [key, val] of Object.entries(updates)) {
        if (key === "width") el.style.width = val + "px";
        else if (key === "height") el.style.height = val + "px";
        else if (key === "arkaFon") el.style.background = val;
        else if (key === "color") el.style.color = val;
        else if (key === "display") el.style.display = val;
        else if (key === "opacity") el.style.opacity = val;

        else el[key] = val;
      }
      };





      el.get = function (key) {
        return el.data[key];
      };

      el.clear = function () {
        el.data = {};
        el.textContent = tekst;
      };


      Object.defineProperty(el, "x", {
        get() {
          return parseFloat(el.style.left) || 0;
        },
        set(v) {
          el.style.left = (Number(v) || 0) + "px";
        },
      });
      Object.defineProperty(el, "y", {
        get() {
          return parseFloat(el.style.top) || 0;
        },
        set(v) {
          el.style.top = (Number(v) || 0) + "px";
        },
      });

      el.move = function (dx, dy) {
        el.x += dx;
        el.y += dy;
      };

      el.renk = function (c) {
        el.style.background = c;
      };
      el.color = el.renk;

      el.tekst = function (t) {
        el.textContent = t;
      };

      el.beyikligi = el.style.width;


      el._onClick = null;
      el.onClick = function (fn) {
        el._onClick = fn;
      };

    el.surat = function (url) {
      if (!el._img) {
        el._img = document.createElement("img");
        el._img.style.width = "100%";
        el._img.style.height = "100%";
        el._img.style.objectFit = "cover";
        el._img.style.borderRadius = borderRadius + "px";
        el._img.style.position = "absolute";
        el._img.style.top = "0";
        el._img.style.left = "0";
        el._img.style.zIndex = "0";
        el.style.position = "absolute"; // so absolute image stays inside
        el.appendChild(el._img);
      }
      el._img.src = url;
    };

      el.addEventListener("click", function () {
        try {
          if (typeof el._onClick === "function") {
            el._onClick();
          } else {
            parent.postMessage(
              {
                source: "turkmen-runtime",
                payload: { type: "log", args: [el.textContent + " basyldy"] },
              },
              "*"
            );
          }
        } catch (err) {
          parent.postMessage(
            {
              source: "turkmen-runtime",
              payload: { type: "error", args: [err.message] },
            },
            "*"
          );
        }
      });

      return el;
    };



    window.tekstMeydanca = function({
        x = 0,
        y = 0,
        width = 350,
        height = 60,
        baslangycTekst = "Bir zat ýaz...",
        textColor = "black",
        arkaFon = "white",
        borderColor = "gray",
        borderRadius = 8,
        fontSize = 32,
        fontFamily = "monospace",
        padding,
        fontWeight,
        fontStyle,
        zIndex = 1,
        opacity = 1,
        tekst,
    } = {}) {
      const el = document.createElement("input");
      el.type = "text";
      el.placeholder = baslangycTekst;
      el.style.position = "absolute";
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.width = (width ?? size ?? 100) + "px";
      el.style.height = (height ?? size ?? 100) + "px";
      el.style.background = arkaFon;
      el.style.color = textColor;
      el.style.border = "1px solid " + borderColor;
      el.style.borderRadius = typeof borderRadius === "number" ? borderRadius + "px" : borderRadius;
      el.style.padding = "4px";
      el.style.fontSize = fontSize + "px";
      el.style.fontFamily = "monospace";
      el.name = tekst;

      scene.appendChild(el);

      // helper to read value
      el.al = function() {
        return el.value;
      };

      // helper to set value
      el.yaz = function(text) {
        el.value = text;
      };

      // helper to clear
      el.arassala = function() {
        el.value = "";
      };

      el.onChange = (e) => {
        el.value = e.target.value;
      };

      return el;
    };


            const send = (type, args) => {
              const payload = { type, args: args.map(a=>{
                try { return typeof a === 'object' ? JSON.parse(JSON.stringify(a)) : a; } catch (e) { return String(a); }
              }) };
              parent.postMessage({ source: 'turkmen-runtime', payload }, '*');
            };

            ['log','info','warn','error'].forEach(fn=>{
              const orig = console[fn];
              console[fn] = function(...args){ send(fn, args); orig.apply(console, args); }
            });

            window.addEventListener('message', async (ev) => {
              if (!ev.data || ev.data.source !== 'turkmen-parent') return;
              try {
                const code = ev.data.code;
                const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
                const fn = new AsyncFunction(code);
                Promise.resolve(fn()).catch(err=>{
                  parent.postMessage({ source:'turkmen-runtime', payload: { type: 'error', args: [err.message] }}, '*');          
                });
              } catch (err) {
                parent.postMessage({ source:'turkmen-runtime', payload: { type: 'error', args: [err.message] }}, '*');    
              }
            });
          })();
        `],lt={guty:"let",hemiselik:"const",eger:"if",bolmasa:"else",netije:"return",for_each:"for",gaytala:"while",konsol:"console",yaz:"log",funksiya:"function","=>":"=>",tipUytgeyan:"typeof",dogry:"true",yalnys:"false",bellenenWagtSon:"setTimeout",bellenenWagtDowamynda:"setInterval",bellenenWagtyArassala:"clearInterval",uzynlyk:"length",bos:"null",bolmek:"split",ekran:"display",hemmeHarplarKici:"toLowerCase",hemmeHarplarUly:"toUpperCase",goy:"set",renk:"color",basylanda:"onClick",uzynlygy:"width",beyikligi:"height",kwadrat:"size",ady:"name",tekstRenk:"textColor",tekstOlceg:"fontSize",tekstStil:"fontStyle",tekstYogynlyk:"fontWeight",gysaran:"italic",yogyn:"bold",Soz:"String",gapyrgaRadius:"borderRadius",gapyrgaRenk:"borderColor",gapyrgaGalynlygy:"borderWidth",gapyrga:"border",ickiAralyk:"padding",yok:"none",gorunmeyan:"transparent",gyzyl:"red",gok:"blue",sary:"yellow",ak:"white",gara:"black",yasyl:"green",uzynlygy:"width",beyikligi:"height",surat:"image",gorunyan:"opacity",hadysanyDinle:"addEventListener",ekran:"window"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],dt=g("copy",ct);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],ut=g("eye-closed",_t);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pt=g("eye",gt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]],yt=g("fullscreen",mt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],ht=g("grid-2x2-check",ft);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]],xt=g("grid-2x2-x",bt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",key:"nrt1m3"}],["path",{d:"M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"99hgts"}],["path",{d:"m6 21 5-5",key:"1wyjai"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],vt=g("image-play",kt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],jt=g("image",wt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z",key:"1da4q6"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],St=g("monitor-cloud",Nt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],Ct=g("notebook",$t);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Et=g("play",zt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Mt=g("save",Rt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ot=g("upload",It),Lt=""+new URL("index-DfCNHfOg.txt",import.meta.url).href,Tt=({Icon:t,LightTextColor:a="#555f6e",DarkTextColor:r="#f5f5f5"})=>{const{darkMode:s}=c.useContext(D);return e.jsx(Dt,{children:e.jsx("div",{className:`${s?"btn-smallDark":"btn-small"} relative`,children:e.jsx("div",{className:`${s?"btn-small-contentDark":"btn-btn-small-content"} `,children:e.jsxs("span",{className:`${s?"spanTextDark":"spanText"} `,children:[t&&e.jsx(t,{style:{color:s?r:a},className:"w-5 h-5"}),t==U?e.jsx("input",{className:"opacity-0 absolute top-0 left-0 z-10 p-3 cursor-pointer",type:"color",value:"#44db1a"}):null]})})})})},Dt=P.div`
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

`,Pt=()=>{const t=async()=>{const r=await(await fetch(Lt)).text(),s=new Blob([r],{type:"text/html"}),_=URL.createObjectURL(s),l=document.createElement("a");l.href=_,l.download="yedi.html",l.click(),URL.revokeObjectURL(_)};return e.jsx("button",{onClick:t,className:"p-2",children:e.jsx(u,{Icon:St})})};var H={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=b.createContext&&b.createContext(H),Ut=["attr","size","title"];function Ht(t,a){if(t==null)return{};var r=Ft(t,a),s,_;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(_=0;_<l.length;_++)s=l[_],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}function Ft(t,a){if(t==null)return{};var r={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(a.indexOf(s)>=0)continue;r[s]=t[s]}return r}function j(){return j=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},j.apply(this,arguments)}function T(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(_){return Object.getOwnPropertyDescriptor(t,_).enumerable})),r.push.apply(r,s)}return r}function N(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?T(Object(r),!0).forEach(function(s){Wt(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function Wt(t,a,r){return a=Bt(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function Bt(t){var a=At(t,"string");return typeof a=="symbol"?a:a+""}function At(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function F(t){return t&&t.map((a,r)=>b.createElement(a.tag,N({key:r},a.attr),F(a.child)))}function qt(t){return a=>b.createElement(Vt,j({attr:N({},t.attr)},a),F(t.child))}function Vt(t){var a=r=>{var{attr:s,size:_,title:l}=t,p=Ht(t,Ut),m=_||r.size||"1em",y;return r.className&&(y=r.className),t.className&&(y=(y?y+" ":"")+t.className),b.createElement("svg",j({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,p,{className:y,style:N(N({color:t.color||r.color},r.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&b.createElement("title",null,l),t.children)};return L!==void 0?b.createElement(L.Consumer,null,r=>a(r)):a(H)}function Gt(t){return qt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}const z=({codeBigScreen:t})=>e.jsx("div",{className:"absolute top-2 -right-4 opacity-0 w-18 h-18 group-hover:opacity-100 rounded-4xl transition-opacity duration-200 bg-white dark:bg-transparent",onClick:t,children:e.jsx(Tt,{Icon:yt})}),Jt=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"ps-2 dark:text-gray-100 text-gray-800",children:[e.jsx("div",{className:"border-b  dark:text-gray-200 border-gray-200 py-1",children:"Yazan kodunyzyn netijesi su yere cykar"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"_________________________________________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"_________________________________________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"____________________##############_______________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"________________________________#________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"_______________________________#_________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"______________________________#__________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"_____________________________#___________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"____________________________#____________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"___________________________#_____________________________"}),e.jsx("div",{className:"border-b dark:border-0 border-gray-200 py-1",children:"_________________________________________________________"})]})}),Yt=({doanim:t})=>e.jsx(Kt,{doanim:t,children:e.jsx("div",{className:"loader"})}),Kt=P.div`
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #0071e2;
    width: 100%;
    height: var(--height-of-loader);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(5, 255, 213, 1) 0%,
      rgba(39, 59, 242, 1) 50%,
      rgba(132, 35, 250, 1) 100%
    );
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 
    10px 5px 15px rgba(5, 255, 213, 0.6), 
    /* Noticeable blue/purple glow (from middle/end of gradient) */
    10px 5px 25px rgba(39, 59, 242, 0.7),
    10px 5px 40px rgba(132, 35, 250, 0.5);
    );

    animation: ${t=>t.doanim?"moving 1s ease-in-out forwards":"none"};

    --animation-key: ${t=>t.doanim?"start":"stop"};
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
`;function Xt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Zt(t,a,r={caseSensitive:!1}){let s=t;const _=Object.entries(a).filter(([l,p])=>l!==""&&p!=="");_.sort((l,p)=>p[0].length-l[0].length);for(const[l,p]of _){const m=Xt(l),y=r.caseSensitive?"g":"gi",w=new RegExp(`(?<![\\w$])${m}(?![\\w$])`,y);s=s.replace(w,x=>{if(!r.caseSensitive&&/[A-ZÇÝĞÜŞÖ]/i.test(x)){if(x.toUpperCase()===x)return p.toUpperCase();if(x[0]===x[0].toUpperCase())return p[0].toUpperCase()+p.slice(1)}return p})}return s}function Qt(t,a){if(!t||!t.message)return"Näbelli ýalňyşlyk.";let r=t.message;for(const[s,_]of Object.entries(a)){const l=new RegExp(`\\b${_}\\b`,"g");r=r.replace(l,s)}return r=r.replace(/is not defined/g,"kesgitlenmedik üýtgeýän").replace(/Cannot read property/g,"Özlügi okap bolmaýar").replace(/Unexpected token/g,"Nädogry nyşan tapyldy").replace(/Unexpected number/g,"Nädogry san").replace(/Unexpected identifier/g,"Nädogry belgi tapyldy").replace(/Invalid or unexpected token/g,"Nädogry ýa-da garaşylmadyk nyşan").replace(/has already been declared/g,"eýýäm girizildi").replace(/Identifier/g,"Guty").replace(/SyntaxError/g,"Sýntaks ýalňyşlygy").replace(/ReferenceError/g,"Salgylanma ýalňyşlygy").replace(/TypeError/g,"Tip ýalňyşlygy"),`Ýalňyşlyk: ${r}`}const or=()=>{console.count();const{darkMode:t,setDarkMode:a}=c.useContext(D),r=te(),[s,_]=c.useState(lt),[l,p]=b.useState(0),[m,y]=c.useState(()=>localStorage.getItem("inputCode")||`// Ýönekeý mysal: ululyk we konsol yazmagy görkezýär
uytgeyan san = 0;
for (uytgeyan i = 0; i < 100; i++) {
  konsol.yaz(i);
}


























`),[w,x]=c.useState(""),[E,er]=c.useState(!0),[S,R]=c.useState([]),[k,W]=c.useState(()=>localStorage.getItem("eyeSafe")==="true"),[M,I]=c.useState(!1),f=c.useRef(null),O=c.useRef(null),[v,B]=c.useState(()=>localStorage.getItem("mathLine")==="true");c.useEffect(()=>{const o=O.current;o&&(o.scrollTop=o.scrollHeight)},[S]),c.useEffect(()=>{localStorage.setItem("mathLine",v)},[v]),c.useEffect(()=>{localStorage.setItem("eyeSafe",k)},[k]),c.useEffect(()=>{if(!k)return;const o=localStorage.getItem("lastEyeExercise"),d=Date.now(),n=1200*1e3,i=o?Math.max(0,n-(d-o)):n;console.log(i);const h=setTimeout(()=>{I(!0),localStorage.setItem("lastEyeExercise",Date.now())},i);return()=>clearTimeout(h)},[M,k]),c.useEffect(()=>{t?(document.documentElement.classList.add("dark"),localStorage.theme="dark"):(document.documentElement.classList.remove("dark"),localStorage.theme="light")},[t]),c.useEffect(()=>{const o=Zt(m,s,{caseSensitive:E});x(o),localStorage.setItem("inputCode",m)},[m,s,E]),c.useEffect(()=>{function o(d){!d.data||d.data.source!=="turkmen-runtime"||R(n=>{const i={...d.data.payload};return i.type==="error"&&(i.args=i.args.map(h=>Qt({message:h},s))),[...n,i]})}return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[]);function A(o){C.push("<\/script>"),C.push("</body></html>");const d=C.join(`
`),n=new Blob([d],{type:"text/html"}),i=URL.createObjectURL(n);f.current&&(f.current.src=i);const h=()=>{f.current.contentWindow.postMessage({source:"turkmen-parent",code:o},"*"),setTimeout(()=>URL.revokeObjectURL(i),2e3),f.current.removeEventListener("load",h)};f.current.addEventListener("load",h)}function q(){p(o=>o+1),R([]),A(w)}function V(){navigator.clipboard.writeText(m).catch(()=>{})}function G(){const o=prompt("Export edilyan file adyny yaz"),d=new Blob([w],{type:"text/javascript"}),n=URL.createObjectURL(d),i=document.createElement("a");i.href=n,i.download=`${o}.js`,i.click(),URL.revokeObjectURL(n)}function J(){const o=prompt("Export edilyan file adyny yaz"),d=new Blob([m],{type:"text/plain"}),n=URL.createObjectURL(d),i=document.createElement("a");i.href=n,i.download=`${o}.yedi`,i.click(),URL.revokeObjectURL(n)}function Y(){const o=document.createElement("input");o.type="file",o.accept=".txt,.js,.yedi,.code",o.onchange=d=>{const n=d.target.files[0];if(!n)return;const i=new FileReader;i.onload=h=>{const ee=h.target.result;y(ee)},i.readAsText(n)},o.click()}function $(o){const d=typeof o=="string"?document.querySelector(o):o.current||o;d&&(document.fullscreenElement?(f.current.style.zoom=.409,document.exitFullscreen().catch(()=>{})):(f.current.style.zoom=1,d.requestFullscreen().catch(n=>console.warn("Fullscreen failed:",n))))}function K(){$(document.querySelector(".code-big-container"))}function X(){$(document.querySelector(".code-view-container"))}function Z(){$(document.querySelector(".code-output-container"))}function Q(){I(!1),localStorage.setItem("lastEyeExercise",Date.now())}return M?e.jsx(it,{closeFunction:Q}):e.jsxs("div",{className:"w-full h-screen overflow-hidden dark:bg-[#10172a] bg-[#e8e8e8]",children:[e.jsxs("div",{className:"w-full sticky z-1",children:[e.jsxs("header",{style:{background:`${t?"linear-gradient(270deg,rgba(16, 24, 42, 1) 0%, rgba(16, 24, 42, 1) 31%, rgba(53, 68, 102, 1) 45%, rgba(53, 68, 102, 1) 52%, rgba(16, 24, 42, 1) 67%, rgba(16, 24, 42, 1) 100%)":"linear-gradient(270deg,rgba(232, 232, 232, 1) 0%, rgba(232, 232, 232, 1) 31%, rgba(252, 252, 255, 1) 45%, rgba(252, 252, 255, 1) 52%, rgba(232, 232, 232, 1) 67%, rgba(232, 232, 232, 1) 100%)"}`},className:"flex items-center flex-shrink-0 justify-between z-10 w-full px-2 py-1",children:[e.jsxs("div",{className:"flex-wrap gap-2 md:gap-4 items-center ",children:[e.jsx("button",{onClick:q,className:"p-2",title:"Run",children:e.jsx(u,{Icon:Et,LightTextColor:"#47c624",DarkTextColor:"#3cf609"})}),e.jsx("button",{onClick:V,className:"p-2",title:"Run",children:e.jsx(u,{Icon:dt})}),e.jsx("button",{onClick:J,className:"p-2",title:"Run",children:e.jsx(u,{Icon:Mt})}),e.jsx("button",{onClick:Y,className:"p-2",title:"Run",children:e.jsx(u,{Icon:Ot})}),e.jsx("button",{onClick:G,className:"p-2",title:"Run",children:e.jsx(u,{Icon:Gt})}),e.jsx("button",{onClick:()=>r("/imageTo64Code"),className:"p-2",title:"Run",children:e.jsx(u,{Icon:vt})}),e.jsx("button",{className:"p-2 rounded-lg transition-color",title:"Run",children:e.jsx(u,{Icon:U})}),e.jsx("button",{onClick:()=>r("/images"),className:"p-2",title:"Run",children:e.jsx(u,{Icon:jt})})]}),e.jsx("div",{className:"w-6 h-10 me-24",children:e.jsx("img",{onClick:()=>r("/about"),className:"w-full h-full",src:t?re:ae,alt:"img"})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>W(!k),className:"p-2",title:t?"Switch to light mode":"Switch to dark mode",children:k?e.jsx(u,{Icon:pt}):e.jsx(u,{Icon:ut})}),e.jsx("button",{onClick:()=>B(!v),className:"p-2",title:t?"Switch to light mode":"Switch to dark mode",children:v?e.jsx(u,{Icon:ht}):e.jsx(u,{Icon:xt})}),e.jsx("button",{onClick:()=>r("/documentation"),className:"p-2",children:e.jsx(u,{Icon:Ct})}),e.jsx(Pt,{}),e.jsx(nt,{checked:t,onChange:()=>a(!t)})]})]}),e.jsx(Yt,{doanim:l},l)]}),e.jsx("div",{className:"w-full h-[92%] flex flex-col absolute top-16 left-0 bg-[#202937]",children:e.jsxs("div",{className:"flex flex-col md:flex-row h-full w-full",children:[e.jsxs("div",{className:"relative md:w-[65%] h-[50vh] md:h-full w-full overflow-auto group code-big-container dark:bg-[#202937] bg-white",children:[e.jsx(se,{value:m,theme:t?le:ce,extensions:[oe,t?ne:ie],onChange:o=>y(o)}),e.jsx(z,{codeBigScreen:K})]}),e.jsxs("div",{className:"w-full h-full md:w-[45%] md:h-full  border-s-4 dark:border-gray-950 border-gray-300",children:[e.jsxs("div",{className:"code-view-container overflow-hidden w-full h-[50%] group relative",children:[e.jsx("iframe",{title:"sandbox",ref:f,sandbox:"allow-scripts allow-forms allow-same-origin allow-popups allow-downloads allow-top-navigation-by-user-activation",style:{height:"100%",width:"100%",backgroundColor:`${t?"#4c5564":"#fff"}`,backgroundImage:`
    linear-gradient(to right, ${t?"rgba(200, 200, 200, 0.5)":"rgba(0, 0, 0, 0.2) "}, ${v?"1px":"0"}, transparent 2px),
    linear-gradient(to bottom, ${t?"rgba(200, 200, 200, 0.5)":"rgba(0, 0, 0, 0.2) "}, ${v?"1px":"0"}, transparent 2px)
  `,backgroundSize:"30px 30px",backgroundRepeat:"repeat"}}),e.jsx(z,{codeBigScreen:X})]}),e.jsxs("div",{ref:O,className:"code-output-container border-t-4 dark:bg-[#384152] dark:text-gray-100 bg-white border-gray-300 dark:border-gray-950  font-mono text-sm overflow-auto w-full h-[50%] group relative pb-12",children:[S.length===0?e.jsx(Jt,{}):S.map((o,d)=>e.jsx("div",{className:"border-b text-gray-800 dark:text-gray-100 dark:border-0 border-gray-200 py-1",children:o.type==="log"?e.jsxs("span",{children:[":"," ",o.args.map(n=>typeof n=="object"?JSON.stringify(n):String(n)).join(" ")]}):o.type==="error"?e.jsxs("span",{style:{backgroundColor:`${t?"":"red"}`,color:`${t?"red":"transparent"}`,textShadow:`${t?"":"2px 2px 2px rgba(255, 255, 255, 0.5)"}`,WebkitBackgroundClip:"text",MozBackgroundClip:"text",BackgroundClip:"text",fontSize:"1.4rem"},children:[" ",o.args.map(n=>typeof n=="object"?JSON.stringify(n):String(n)).join(" ")]}):e.jsxs("span",{children:[o.type,":"," ",o.args.map(n=>typeof n=="object"?JSON.stringify(n):String(n)).join(" ")]})},d)),e.jsx(z,{codeBigScreen:Z})]})]})]})})]})};export{or as default};
