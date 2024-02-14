let codes=[
    {
        id: 1,
        css: `<style>
        .button1 {
            --glow-color: rgb(255, 255, 255);
            --glow-spread-color: rgba(191, 123, 255, 0.781);
            --enhanced-glow-color: rgb(231, 206, 255);
            --btn-color: rgb(100, 61, 136);
            border: .25em solid var(--glow-color);
            padding: 1em 3em;
            color: var(--glow-color);
            font-size: 15px;
            font-weight: bold;
            background-color: var(--btn-color);
            border-radius: 1em;
            outline: none;
            box-shadow: 0 0 1em .25em var(--glow-color),
                   0 0 4em 1em var(--glow-spread-color),
                   inset 0 0 .75em .25em var(--glow-color);
            text-shadow: 0 0 .5em var(--glow-color);
            position: relative;
            transition: all 0.3s;
           }
           
           .button1::after {
            pointer-events: none;
            content: "";
            position: absolute;
            top: 120%;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: var(--glow-spread-color);
            filter: blur(2em);
            opacity: .7;
            transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
           }
           
           .button1:hover {
            color: var(--btn-color);
            background-color: var(--glow-color);
            box-shadow: 0 0 1em .25em var(--glow-color),
                   0 0 4em 2em var(--glow-spread-color),
                   inset 0 0 .75em .25em var(--glow-color);
           }
           
           .button1:active {
            box-shadow: 0 0 0.6em .25em var(--glow-color),
                   0 0 2.5em 2em var(--glow-spread-color),
                   inset 0 0 .5em .25em var(--glow-color);
           }
           </style>`,
        html: `<button class="button1"> Button
        </button>`,
        fulCode: "Ful Code1",

    },
    {
        id: 2,
        css: `<style>
        .button3 {
          --😀: #644dff;
          --😀😀: #4836bb;
          --😀😀😀: #654dff63;
          cursor: pointer;
          width: 184px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 1.125em;
          font-weight: 800;
          letter-spacing: 2px;
          color: #fff;
          background: var(--😀);
          border: 2px solid var(--😀😀);
          border-radius: .75rem;
          box-shadow: 0 8px 0 var(--😀😀);
          transform: skew(-10deg);
          transition: all .1s ease;
          filter: drop-shadow(0 15px 20px var(--😀😀😀));
        }
        
        .button3:active {
          letter-spacing: 0px;
          transform: skew(-10deg) translateY(8px);
          box-shadow: 0 0 0 var(--😀😀😀);
        }
           </style>`,
        html: `<button class="button3"> BUTTON
        </button>`,
        fulCode: "Ful Code2",

    },

    {
        id: 3,
        css: `<style>@keyframes snow {
          0% {
            opacity: 0;
            transform: translateY(0px);
          }
        
          20% {
            opacity: 1;
          }
        
          100% {
            opacity: 1;
            transform: translateY(650px);
          }
        }
        
        @keyframes astronaut {
          0% {
            transform: rotate(0deg);
          }
        
          100% {
            transform: rotate(360deg);
          }
        }
        
        .boxx-of-star1,
        .boxx-of-star2,
        .boxx-of-star3,
        .boxx-of-star4 {
          width: 100%;
          position: absolute;
          z-index: 10;
          left: 0;
          top: 0;
          transform: translateY(0px);
          height: 700px;
        }
        
        .boxx-of-star1 {
          animation: snow 5s linear infinite;
        }
        
        .boxx-of-star2 {
          animation: snow 5s -1.64s linear infinite;
        }
        
        .boxx-of-star3 {
          animation: snow 5s -2.30s linear infinite;
        }
        
        .boxx-of-star4 {
          animation: snow 5s -3.30s linear infinite;
        }
        
        .star {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #FFF;
          position: absolute;
          z-index: 10;
          opacity: 0.7;
        }
        
        .star:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #FFF;
          position: absolute;
          z-index: 10;
          top: 80px;
          left: 70px;
          opacity: .7;
        }
        
        .star:after {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #FFF;
          position: absolute;
          z-index: 10;
          top: 8px;
          left: 170px;
          opacity: .9;
        }
        
        .star-position1 {
          top: 30px;
          left: 20px;
        }
        
        .star-position2 {
          top: 110px;
          left: 250px;
        }
        
        .star-position3 {
          top: 60px;
          left: 570px;
        }
        
        .star-position4 {
          top: 120px;
          left: 900px;
        }
        
        .star-position5 {
          top: 20px;
          left: 1120px;
        }
        
        .star-position6 {
          top: 90px;
          left: 1280px;
        }
        
        .star-position7 {
          top: 30px;
          left: 1480px;
        }
        
        .astronaut {
          width: 250px;
          height: 300px;
          position: absolute;
          z-index: 11;
          top: calc(50% - 150px);
          left: calc(50% - 125px);
          animation: astronaut 5s linear infinite;
        }
        
        .schoolbag {
          width: 100px;
          height: 150px;
          position: absolute;
          z-index: 1;
          top: calc(50% - 75px);
          left: calc(50% - 50px);
          background-color: #94b7ca;
          border-radius: 50px 50px 0 0 / 30px 30px 0 0;
        }
        
        .head {
          width: 97px;
          height: 80px;
          position: absolute;
          z-index: 3;
          background: -webkit-linear-gradient(left, #e3e8eb 0%, #e3e8eb 50%, #fbfdfa 50%, #fbfdfa 100%);
          border-radius: 50%;
          top: 34px;
          left: calc(50% - 47.5px);
        }
        
        .head:after {
          content: "";
          width: 60px;
          height: 50px;
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% - 30px);
          background: -webkit-linear-gradient(top, #15aece 0%, #15aece 50%, #0391bf 50%, #0391bf 100%);
          border-radius: 15px;
        }
        
        .head:before {
          content: "";
          width: 12px;
          height: 25px;
          position: absolute;
          top: calc(50% - 12.5px);
          left: -4px;
          background-color: #618095;
          border-radius: 5px;
          box-shadow: 92px 0px 0px #618095;
        }
        
        .body {
          width: 85px;
          height: 100px;
          position: absolute;
          z-index: 2;
          background-color: #fffbff;
          border-radius: 40px / 20px;
          top: 105px;
          left: calc(50% - 41px);
          background: -webkit-linear-gradient(left, #e3e8eb 0%, #e3e8eb 50%, #fbfdfa 50%, #fbfdfa 100%);
        }
        
        .panel {
          width: 60px;
          height: 40px;
          position: absolute;
          top: 20px;
          left: calc(50% - 30px);
          background-color: #b7cceb;
        }
        
        .panel:before {
          content: "";
          width: 30px;
          height: 5px;
          position: absolute;
          top: 9px;
          left: 7px;
          background-color: #fbfdfa;
          box-shadow: 0px 9px 0px #fbfdfa, 0px 18px 0px #fbfdfa;
        }
        
        .panel:after {
          content: "";
          width: 8px;
          height: 8px;
          position: absolute;
          top: 9px;
          right: 7px;
          background-color: #fbfdfa;
          border-radius: 50%;
          box-shadow: 0px 14px 0px 2px #fbfdfa;
        }
        
        .arm {
          width: 80px;
          height: 30px;
          position: absolute;
          top: 121px;
          z-index: 2;
        }
        
        .arm-left {
          left: 30px;
          background-color: #e3e8eb;
          border-radius: 0 0 0 39px;
        }
        
        .arm-right {
          right: 30px;
          background-color: #fbfdfa;
          border-radius: 0 0 39px 0;
        }
        
        .arm-left:before,
        .arm-right:before {
          content: "";
          width: 30px;
          height: 70px;
          position: absolute;
          top: -40px;
        }
        
        .arm-left:before {
          border-radius: 50px 50px 0px 120px / 50px 50px 0 110px;
          left: 0;
          background-color: #e3e8eb;
        }
        
        .arm-right:before {
          border-radius: 50px 50px 120px 0 / 50px 50px 110px 0;
          right: 0;
          background-color: #fbfdfa;
        }
        
        .arm-left:after,
        .arm-right:after {
          content: "";
          width: 30px;
          height: 10px;
          position: absolute;
          top: -24px;
        }
        
        .arm-left:after {
          background-color: #6e91a4;
          left: 0;
        }
        
        .arm-right:after {
          right: 0;
          background-color: #b6d2e0;
        }
        
        .leg {
          width: 30px;
          height: 40px;
          position: absolute;
          z-index: 2;
          bottom: 70px;
        }
        
        .leg-left {
          left: 76px;
          background-color: #e3e8eb;
          transform: rotate(20deg);
        }
        
        .leg-right {
          right: 73px;
          background-color: #fbfdfa;
          transform: rotate(-20deg);
        }
        
        .leg-left:before,
        .leg-right:before {
          content: "";
          width: 50px;
          height: 25px;
          position: absolute;
          bottom: -26px;
        }
        
        .leg-left:before {
          left: -20px;
          background-color: #e3e8eb;
          border-radius: 30px 0 0 0;
          border-bottom: 10px solid #6d96ac;
        }
        
        .leg-right:before {
          right: -20px;
          background-color: #fbfdfa;
          border-radius: 0 30px 0 0;
          border-bottom: 10px solid #b0cfe4;
        }</style>`,
        html: `<div class="box-of-star1">
        <div class="star star-position1"></div>
        <div class="star star-position2"></div>
        <div class="star star-position3"></div>
        <div class="star star-position4"></div>
        <div class="star star-position5"></div>
        <div class="star star-position6"></div>
        <div class="star star-position7"></div>
      </div>
      <div class="box-of-star2">
        <div class="star star-position1"></div>
        <div class="star star-position2"></div>
        <div class="star star-position3"></div>
        <div class="star star-position4"></div>
        <div class="star star-position5"></div>
        <div class="star star-position6"></div>
        <div class="star star-position7"></div>
      </div>
      <div class="box-of-star3">
        <div class="star star-position1"></div>
        <div class="star star-position2"></div>
        <div class="star star-position3"></div>
        <div class="star star-position4"></div>
        <div class="star star-position5"></div>
        <div class="star star-position6"></div>
        <div class="star star-position7"></div>
      </div>
      <div class="box-of-star4">
        <div class="star star-position1"></div>
        <div class="star star-position2"></div>
        <div class="star star-position3"></div>
        <div class="star star-position4"></div>
        <div class="star star-position5"></div>
        <div class="star star-position6"></div>
        <div class="star star-position7"></div>
      </div>
      <div data-js="astro" class="astronaut">
        <div class="head"></div>
        <div class="arm arm-left"></div>
        <div class="arm arm-right"></div>
        <div class="body">
          <div class="panel"></div>
        </div>
        <div class="leg leg-left"></div>
        <div class="leg leg-right"></div>
        <div class="schoolbag"></div>
      </div>`,
        fulCode: "Ful Code3",

    },
    {
        id: 4,
        css: `<style>
        .button4 {
          text-decoration: none;
          position: relative;
          border: none;
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          color: #fff;
          width: 9em;
          height: 3em;
          line-height: 2em;
          text-align: center;
          background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
          background-size: 300%;
          border-radius: 30px;
          z-index: 1;
        }
        
        .button4:hover {
          animation: ani 8s linear infinite;
          border: none;
        }
        
        @keyframes ani {
          0% {
            background-position: 0%;
          }
        
          100% {
            background-position: 400%;
          }
        }
        
        .button4:before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          z-index: -1;
          background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
          background-size: 400%;
          border-radius: 35px;
          transition: 1s;
        }
        
        .button4:hover::before {
          filter: blur(20px);
        }
        
        .button4:active {
          background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        }
        </style>`,
        html: `<button class="button4">HOVER ME</button>
        `,
        fulCode: `Ful Code4`,

    },
    {
      id: 5,
      css: `<style>
      .button5 {
        all: unset;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0.6em 2em;
        border: mediumspringgreen solid 0.15em;
        border-radius: 0.25em;
        color: mediumspringgreen;
        font-size: 1.5em;
        font-weight: 600;
        cursor: pointer;
        overflow: hidden;
        transition: border 300ms, color 300ms;
        user-select: none;
      }
      
      .button5 p {
        z-index: 1;
      }
      
      .button5:hover {
        color: #212121;
      }
      
      .button5:active {
        border-color: teal;
      }
      
      .button5::after, .button5::before {
        content: "";
        position: absolute;
        width: 9em;
        aspect-ratio: 1;
        background: mediumspringgreen;
        opacity: 50%;
        border-radius: 50%;
        transition: transform 500ms, background 300ms;
      }
      
      .button5::before {
        left: 0;
        transform: translateX(-8em);
      }
      
      .button5::after {
        right: 0;
        transform: translateX(8em);
      }
      
      .button5:hover:before {
        transform: translateX(-1em);
      }
      
      .button5:hover:after {
        transform: translateX(1em);
      }
      
      .button5:active:before,
      .button5:active:after {
        background: teal;
      }
      </style>`,
      html: `<button class="button5">
      <p>Button</p>
    </button>`,
      fulCode: `Ful Code4`,

  },

    {
        id: 6,
        css: `<style>
        .pencil {
            display: block;
            width: 10em;
            height: 10em;
          }
          
          .pencil__body1,
          .pencil__body2,
          .pencil__body3,
          .pencil__eraser,
          .pencil__eraser-skew,
          .pencil__point,
          .pencil__rotate,
          .pencil__stroke {
            animation-duration: 3s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          
          .pencil__body1,
          .pencil__body2,
          .pencil__body3 {
            transform: rotate(-90deg);
          }
          
          .pencil__body1 {
            animation-name: pencilBody1;
          }
          
          .pencil__body2 {
            animation-name: pencilBody2;
          }
          
          .pencil__body3 {
            animation-name: pencilBody3;
          }
          
          .pencil__eraser {
            animation-name: pencilEraser;
            transform: rotate(-90deg) translate(49px,0);
          }
          
          .pencil__eraser-skew {
            animation-name: pencilEraserSkew;
            animation-timing-function: ease-in-out;
          }
          
          .pencil__point {
            animation-name: pencilPoint;
            transform: rotate(-90deg) translate(49px,-30px);
          }
          
          .pencil__rotate {
            animation-name: pencilRotate;
          }
          
          .pencil__stroke {
            animation-name: pencilStroke;
            transform: translate(100px,100px) rotate(-113deg);
          }
          
          /* Animations */
          @keyframes pencilBody1 {
            from,
              to {
              stroke-dashoffset: 351.86;
              transform: rotate(-90deg);
            }
          
            50% {
              stroke-dashoffset: 150.8;
           /* 3/8 of diameter */
              transform: rotate(-225deg);
            }
          }
          
          @keyframes pencilBody2 {
            from,
              to {
              stroke-dashoffset: 406.84;
              transform: rotate(-90deg);
            }
          
            50% {
              stroke-dashoffset: 174.36;
              transform: rotate(-225deg);
            }
          }
          
          @keyframes pencilBody3 {
            from,
              to {
              stroke-dashoffset: 296.88;
              transform: rotate(-90deg);
            }
          
            50% {
              stroke-dashoffset: 127.23;
              transform: rotate(-225deg);
            }
          }
          
          @keyframes pencilEraser {
            from,
              to {
              transform: rotate(-45deg) translate(49px,0);
            }
          
            50% {
              transform: rotate(0deg) translate(49px,0);
            }
          }
          
          @keyframes pencilEraserSkew {
            from,
              32.5%,
              67.5%,
              to {
              transform: skewX(0);
            }
          
            35%,
              65% {
              transform: skewX(-4deg);
            }
          
            37.5%, 
              62.5% {
              transform: skewX(8deg);
            }
          
            40%,
              45%,
              50%,
              55%,
              60% {
              transform: skewX(-15deg);
            }
          
            42.5%,
              47.5%,
              52.5%,
              57.5% {
              transform: skewX(15deg);
            }
          }
          
          @keyframes pencilPoint {
            from,
              to {
              transform: rotate(-90deg) translate(49px,-30px);
            }
          
            50% {
              transform: rotate(-225deg) translate(49px,-30px);
            }
          }
          
          @keyframes pencilRotate {
            from {
              transform: translate(100px,100px) rotate(0);
            }
          
            to {
              transform: translate(100px,100px) rotate(720deg);
            }
          }
          
          @keyframes pencilStroke {
            from {
              stroke-dashoffset: 439.82;
              transform: translate(100px,100px) rotate(-113deg);
            }
          
            50% {
              stroke-dashoffset: 164.93;
              transform: translate(100px,100px) rotate(-113deg);
            }
          
            75%,
              to {
              stroke-dashoffset: 439.82;
              transform: translate(100px,100px) rotate(112deg);
            }
          }
          </style>`,
        html: `<svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" class="pencil">
        <defs>
            <clipPath id="pencil-eraser">
                <rect height="30" width="30" ry="5" rx="5"></rect>
            </clipPath>
        </defs>
        <circle transform="rotate(-113,100,100)" stroke-linecap="round" 
        stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" 
        stroke-width="2" stroke="currentColor" fill="none" r="70" class="pencil__stroke"></circle>
        <g transform="translate(100,100)" class="pencil__rotate">
            <g fill="none">
                <circle transform="rotate(-90)" stroke-dashoffset="402" 
                stroke-dasharray="402.12 402.12" stroke-width="30" 
                stroke="hsl(223,90%,50%)" r="64" class="pencil__body1"></circle>
                <circle transform="rotate(-90)" stroke-dashoffset="465" 
                stroke-dasharray="464.96 464.96" stroke-width="10" 
                stroke="hsl(223,90%,60%)" r="74" class="pencil__body2"></circle>
                <circle transform="rotate(-90)" stroke-dashoffset="339" 
                stroke-dasharray="339.29 339.29" stroke-width="10" 
                stroke="hsl(223,90%,40%)" r="54" class="pencil__body3"></circle>
            </g>
            <g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
                <g class="pencil__eraser-skew">
                    <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
                    <rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
                    <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
                    <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
                    <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
                    <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
                    <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
                </g>
            </g>
            <g transform="rotate(-90) translate(49,-30)" class="pencil__point">
                <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
                <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
                <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
            </g>
        </g>
    </svg>`,
        fulCode: "Ful Code6",

    },
    {
      id: 7,
      css: `<style>
      /* The switch - the box around the slider */
.switch {
 font-size: 17px;
 position: relative;
 display: inline-block;
 width: 62px;
 height: 35px;
}

/* Hide default HTML checkbox */
.switch input {
 opacity: 1;
 width: 0;
 height: 0;
}

/* The slider */
.slider {
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0px;
 background: #fff;
 transition: .4s;
 border-radius: 30px;
 border: 1px solid #ccc;
}

.slider:before {
 position: absolute;
 content: "";
 height: 1.9em;
 width: 1.9em;
 border-radius: 16px;
 left: 1.2px;
 top: 0;
 bottom: 0;
 background-color: white;
 box-shadow: 0 2px 5px #999999;
 transition: .4s;
}

input:checked + .slider {
 background-color: #5fdd54;
 border: 1px solid transparent;
}

input:checked + .slider:before {
 transform: translateX(1.5em);
}</style>`,
      html: `<label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>`,
      fulCode: `Ful Code4`,

  },
  {
    id: 8,
    css: `<style>
    @keyframes square-animation {
      0% {
       left: 0;
       top: 0;
      }
     
      10.5% {
       left: 0;
       top: 0;
      }
     
      12.5% {
       left: 32px;
       top: 0;
      }
     
      23% {
       left: 32px;
       top: 0;
      }
     
      25% {
       left: 64px;
       top: 0;
      }
     
      35.5% {
       left: 64px;
       top: 0;
      }
     
      37.5% {
       left: 64px;
       top: 32px;
      }
     
      48% {
       left: 64px;
       top: 32px;
      }
     
      50% {
       left: 32px;
       top: 32px;
      }
     
      60.5% {
       left: 32px;
       top: 32px;
      }
     
      62.5% {
       left: 32px;
       top: 64px;
      }
     
      73% {
       left: 32px;
       top: 64px;
      }
     
      75% {
       left: 0;
       top: 64px;
      }
     
      85.5% {
       left: 0;
       top: 64px;
      }
     
      87.5% {
       left: 0;
       top: 32px;
      }
     
      98% {
       left: 0;
       top: 32px;
      }
     
      100% {
       left: 0;
       top: 0;
      }
     }
     
     .loader3 {
      position: relative;
      width: 96px;
      height: 96px;
      transform: rotate(45deg);
     }
     
     .loader3-square {
      position: absolute;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      margin: 2px;
      border-radius: 0px;
      background: cyan;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      animation: square-animation 10s ease-in-out infinite both;
     }
     
     .loader3-square:nth-of-type(0) {
      animation-delay: 0s;
     }
     
     .loader3-square:nth-of-type(1) {
      animation-delay: -1.4285714286s;
     }
     
     .loader3-square:nth-of-type(2) {
      animation-delay: -2.8571428571s;
     }
     
     .loader3-square:nth-of-type(3) {
      animation-delay: -4.2857142857s;
     }
     
     .loader3-square:nth-of-type(4) {
      animation-delay: -5.7142857143s;
     }
     
     .loader3-square:nth-of-type(5) {
      animation-delay: -7.1428571429s;
     }
     
     .loader3-square:nth-of-type(6) {
      animation-delay: -8.5714285714s;
     }
     
     .loader3-square:nth-of-type(7) {
      animation-delay: -10s;
     }
    </style>`,
    html: `<div class="loader3">
    <div class="loader3-square"></div>
    <div class="loader3-square"></div>
    <div class="loader3-square"></div>
    <div class="loader3-square"></div>
    <div class="loader3-square"></div>
    <div class="loader3-square"></div>
    <div class="loader3-square"></div>
    </div>`,
    fulCode: `Ful Code4`,

},
{
  id: 9,
  css: `<style>
  .toggle1-containerA {
    --active-color: #1868e3;
    --inactive-color: #d3d3d6;
    position: relative;
    aspect-ratio: 292 / 142;
    height: 1.875em;
  }
  
  .toggle1-input1 {
    appearance: none;
    margin: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  
  .toggle1 {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  
  .toggle1-background {
    fill: var(--inactive-color);
    transition: fill .4s;
  }
  
  .toggle1-input:checked + .toggle1 .toggle1-background {
    fill: var(--active-color);
  }
  
  .toggle1-circle-center {
    transform-origin: center;
    transition: transform .6s;
  }
  
  .toggle1-input:checked + .toggle1 .toggle1-circle-center {
    transform: translateX(150px);
  }
  
  .toggle1-circle {
    transform-origin: center;
    transition: transform .45s;
    backface-visibility: hidden;
  }
  
  .toggle1-circle.left {
    transform: scale(1);
  }
  
  .toggle1-input1:checked + .toggle1 .toggle1-circle.left {
    transform: scale(0);
  }
  
  .toggle1-circle.right {
    transform: scale(0);
  }
  
  .toggle1-input1:checked + .toggle1 .toggle1-circle.right {
    transform: scale(1);
  }
  
  .toggle1-icon {
    transition: fill .4s;
  }
  
  .toggle1-icon.on {
    fill: var(--inactive-color);
  }
  
  .toggle1-input1:checked + .toggle1 .toggle1-icon.on {
    fill: #fff;
  }
  
  .toggle1-icon.off {
    fill: #eaeaec;
  }
  
  .toggle1-input1:checked + .toggle1 .toggle1-icon.off {
    fill: var(--active-color);
  }
  </style>`,
  html: `<div class="toggle1-containerA">
  <input type="checkbox" class="toggle1-input1">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" class="toggle1">
    <path d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878
     0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 
     31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 
     112 146 112C119 112 110.212 142 71 142Z" class="toggle1-background">
     </path>
    <rect rx="6" height="64" width="12" y="39" x="64" class="toggle1-icon on"></rect>
    <path d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046
     51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 
     91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 
     221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 
     103Z" fill-rule="evenodd" class="toggle1-icon off"></path>
    <g filter="url('#goo')">
      <rect fill="#fff" rx="29" height="58" width="116" y="42" x="13" class="toggle1-circle-center"></rect>
      <rect fill="#fff" rx="58" height="114" width="114" y="14" x="14" class="toggle1-circle left"></rect>
      <rect fill="#fff" rx="58" height="114" width="114" y="14" x="164" class="toggle1-circle right"></rect>
    </g>
    <filter id="goo">
      <feGaussianBlur stdDeviation="10" result="blur" in="SourceGraphic"></feGaussianBlur>
      <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
    </filter>
  </svg>
</div>`,
  fulCode: `Ful Code4`,

},
{
  id: 10,
  css: `<style>
  .button6 {
    position: relative;
    padding: 15px 45px;
    background: #fec195;
    font-size: 17px;
    font-weight: 500;
    color: #181818;
    cursor: pointer;
    border: 1px solid #fec195;
    border-radius: 8px;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
  }
  
  .button6:hover {
    border: 1px solid #f3b182;
    background: linear-gradient(
      85deg,
      #fec195,
      #fcc196,
      #fabd92,
      #fac097,
      #fac39c
    );
    animation: wind 2s ease-in-out infinite;
  }
  
  @keyframes wind {
    0% {
      background-position: 0% 50%;
    }
  
    0% {
      background-position: 50% 100%;
    }
  
    0% {
      background-position: 0% 50%;
    }
  }
  
  .icon-1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    transform-origin: 0 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
  }
  
  .button6:hover .icon-1 {
    animation: slay-1 3s cubic-bezier(0.52, 0, 0.58, 1) infinite;
    transform: rotate(10deg);
  }
  
  @keyframes slay-1 {
    0% {
      transform: rotate(10deg);
    }
  
    50% {
      transform: rotate(-5deg);
    }
  
    100% {
      transform: rotate(10deg);
    }
  }
  
  .icon-2 {
    position: absolute;
    top: 0;
    left: 25px;
    width: 12px;
    transform-origin: 50% 0;
    transform: rotate(10deg);
    transition: all 1s ease-in-out;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }
  
  .button6:hover .icon-2 {
    animation: slay-2 3s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite;
    transform: rotate(0);
  }
  
  @keyframes slay-2 {
    0% {
      transform: rotate(0deg);
    }
  
    50% {
      transform: rotate(15deg);
    }
  
    100% {
      transform: rotate(0);
    }
  }
  
  .icon-3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    transform-origin: 50% 0;
    transform: rotate(-5deg);
    transition: all 1s ease-in-out;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }
  
  .button6:hover .icon-3 {
    animation: slay-3 2s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite;
    transform: rotate(0);
  }
  
  @keyframes slay-3 {
    0% {
      transform: rotate(0deg);
    }
  
    50% {
      transform: rotate(-5deg);
    }
  
    100% {
      transform: rotate(0);
    }
  }
  
  </style>`,
  html: `<button class="button6">
  Button
  <div class="icon-1">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 26.3 65.33"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; 
      image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M13.98 52.87c0.37,-0.8 0.6,-1.74 0.67,-2.74 1.01,1.1 2.23,2.68 1.24,3.87 
          -0.22,0.26 -0.41,0.61 -0.59,0.97 -2.95,5.89 3.44,10.87 2.98,0.78 
          0.29,0.23 0.73,0.82 1.03,1.18 0.33,0.4 0.7,0.77 1,1.15 0.29,0.64 
          -0.09,2.68 1.77,4.91 5.42,6.5 5.67,-2.38 0.47,-4.62 -0.41,-0.18 
          -0.95,-0.26 -1.28,-0.54 -0.5,-0.41 -1.23,-1.37 -1.66,-1.9 0.03,
          -0.43 -0.17,-0.13 0.11,-0.33 4.98,1.72 8.4,-1.04 2.38,-3.16 
          -1.98,-0.7 -2.9,-0.36 -4.72,0.16 -0.63,-0.58 -2.38,-3.82 
          -2.82,-4.76 1.21,0.56 1.72,1.17 3.47,1.3 6.5,0.5 2.31,-4.21 
          -2.07,-4.04 -1.12,0.04 -1.62,0.37 -2.49,0.62l-1.25 -3.11c0.03,
          -0.26 0.01,-0.18 0.1,-0.28 1.35,0.86 1.43,1 3.25,1.45 2.35,0.15 
          3.91,-0.15 1.75,-2.4 -1.22,-1.27 -2.43,-2.04 -4.22,-2.23l-2.08
           0.13c-0.35,-0.58 -0.99,-2.59 -1.12,-3.3l-0.01 -0.01 -0 -0 -0 
           -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 
           -0 -0 -0 -0 -0 -0 -0c-0.24,-0.36 1.88,1.31 2.58,1.57 1.32,0.49
            2.6,0.33 3.82,0 -0.37,-1.08 -1.17,-2.31 -2.13,-3.11 -1.79,-1.51
             -3.07,-1.41 -5.22,-1.38l-0.93 -4.07c0.41,-0.57 1.41,0.9 2.82,1.36
              0.96,0.31 1.94,0.41 3,0.14 2,-0.52 -2.25,-4.4 -4.53,-4.71 -0.7,-0.1
               -1.23,-0.04 -1.92,-0.03 -0.46,-0.82 -0.68,-3.61 -0.92,-4.74
                0.8,0.88 1.15,1.54 2.25,2.23 0.8,0.5 1.58,0.78 2.57,0.85 
                2.54,0.18 -0.1,-3.47 -0.87,-4.24 -1.05,-1.05 -2.34,-1.59
                 -4.32,-1.78l-0.33 -3.49c0.83,0.67 1.15,1.48 2.3,2.16 1.07,0.63 
                 2.02,0.89 3.58,0.79 0.15,-1.34 -1.07,-3.39 -2.03,-4.3 
                 -1.05,-0.99 -2.08,-1.47 -3.91,-1.68l-0.07 -3.27 0.32 
                 -0.65c0.44,0.88 1.4,1.74 2.24,2.22 0.69,0.39 2.4,1.1
                  3.44,0.67 0.31,-1.92 -1.84,-4.49 -3.5,-5.29 -0.81,-0.39 
                  -1.61,-0.41 -2.18,-0.68 -0.12,-1.28 0.27,-3.23 0.37,-4.55l-0.89
                   0c-0.06,1.28 -0.35,3.12 -0.34,4.31 -0.44,0.45 -0.37,0.42 
                   -0.96,0.64 -3.88,1.49 -4.86,6.38 -3.65,7.34 1.42,-0.31 3.69,
                   -2.14 4.16,-3.66 0.23,0.5 0.1,2.36 0.05,3.05 -1.23,0.4
                    -2.19,1.05 -2.92,1.82 -1.17,1.24 -2.36,4.04 -1.42,5.69
                     1.52,0.09 4.07,-2.49 4.49,-4.07l0.29 3.18c-2.81,0.96 
                     -5.01,3.68 -4.18,7.43 2.06,-0.09 3.78,-2.56 4.66,-4.15 
                     0.23,1.45 0.67,3.06 0.74,4.52 -1.26,0.93 -2.37,1.8
                      -2.97,3.55 -0.48,1.4 -0.49,3.72 0.19,4.55 0.59,0.71 
                      2.06,-1.17 2.42,-1.67 1,-1.35 0.81,-1.92 1.29,-2.46l0.7
                       3.44c-0.49,0.45 -0.94,0.55 -1.5,1.19 -1.93,2.23 -2.14,4.33
                        -1.01,6.92 0.72,0.09 2.04,-1.4 2.49,-2.06 0.65,-0.95 0.79,-1.68
                         1.14,-2.88l0.97 2.92c-0.2,0.55 -1.84,1.32 -2.6,3.62 -0.54,1.62 
                         -0.37,3.86 0.67,4.93 0.58,-0.09 1.85,-1.61 2.2,-2.19 0.66,-1.09
                          0.66,-1.64 1,-2.93l1.32 3.18c-0.23,0.72 -1.63,1.72 -1.82,4.18 
                          -0.17,2.16 1.11,6.88 3.13,2.46zm-4.09 -16.89l-0 -0 -0 -0 -0 -0
                           -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 0.01 0.01z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="icon-2">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 11.67 37.63"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision;
       image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          d="M7.63 35.26c-0.02,0.13 0.01,0.05 -0.06,0.14 -0,0 -0.08,0.07
           -0.11,0.1 -0.42,0.25 -0.55,0.94 -0.23,1.4 0.68,0.95 2.66,0.91
            3.75,0.21 0.2,-0.13 0.47,-0.3 0.57,-0.49 0.09,-0.02 0.04,0.03 
            0.11,-0.07l-1.35 -1.24c-0.78,-0.78 -1.25,-1.9 -2.07,-0.62 -0.11,0.18
             -0.06,0.16 -0.22,0.26 -0.4,-0.72 -0.95,-1.79 -1.26,-2.59 0.82,0.02
              1.57,-0.12 2.16,-0.45 0.49,-0.27 1.15,-0.89 1.33,-1.4 0.1,-0.06
               0.02,0.01 0.06,-0.1 -0.24,-0.16 -0.87,-0.37 -1.19,-0.52 -0.4,-0.19
                -0.73,-0.39 -1.09,-0.62 -0.25,-0.16 -0.85,-0.6 -1.18,-0.3 -0.35,0.32
                 -0.32,0.83 -0.53,1.17 -0.71,-0.3 -0.55,-0.26 -0.84,-1.22 -0.15,-0.5
                  -0.31,-1.12 -0.41,-1.66l0.03 -0.13c0.56,0.23 1.28,0.37 
                  1.99,0.28 0.56,-0.07 1.33,-0.42 1.62,-0.71l0.1 -0.1c-0.74,-0.68
                   -1.09,-1.2 -1.65,-1.99 -1.09,-1.52 -1.2,-0.28 -1.92,0.17
                    -0.26,-0.79 -0.73,0.2 -0.12,-2.76 0.06,-0.3 0.19,-0.7 0.2,-0.98 
                    0.18,0.08 0.01,-0.01 0.11,0.08 0.05,0.05 0.07,0.07 0.1,0.12 0.94,1.17 
                    3.63,0.82 4.21,0.01 0.13,-0.02 0.06,0.03 0.1,-0.1 -1.14,-0.81 -1.91,-2.89
                     -2.58,-2.67 -0.29,0.09 -0.78,0.63 -0.93,0.87 -0.54,-0.48 -0.36,-0.63
                      -0.38,-0.81 0.01,-0.01 0.03,-0.04 0.03,-0.03 0.01,0.02 0.36,-0.35
                       0.45,-0.6 0.13,-0.35 0.04,-0.65 -0.05,-0.95 0.06,-0.41 0.33,-1.33
                        0.28,-1.71 0.22,-0.05 0.19,0.05 0.45,0.17 0.47,0.23 1.17,0.33 
                        1.7,0.32 0.62,-0 1.74,-0.39 1.94,-0.75 0.14,-0.02 0.05,0.06 0.13,-0.09
                         -1.05,-1.1 -0.7,-0.64 -1.62,-1.92 -0.58,-0.81 -0.9,-1.27 -1.9,0.12
                          -0.44,-0.5 -0.64,-0.69 -0.66,-1.24 0.02,-0.31 0.15,-0.36 0.08,-0.73
                           -0.04,-0.24 -0.14,-0.41 -0.29,-0.59l-0.47 -2.54c0.09,-0.14 -0.09,-0.1
                            0.2,-0.05 0.06,0.01 0.19,0.05 0.3,0.07 0.54,0.09 1.47,0.01 1.95,-0.15
                             0.57,-0.19 1.53,-0.8 1.68,-1.18 0.16,-0.07 0.05,0.02 0.15,-0.13
                              -0.12,-0.15 -0.95,-0.65 -1.15,-0.8 -1.43,-1.08 -2.21,-2.77
                               -3.16,-0.38 -0.2,-0.1 -0.75,-0.55 -0.83,-0.74 -0.15,-0.35
                                -0.21,-0.81 -0.37,-1.15l-0.1 -0.25c-0.03,-0.3 -0.44,-1.33
                                 -0.57,-1.64 -0.2,-0.51 -0.47,-1.09 -0.64,-1.6l-0.55 0c0.14,0.42
                                  0.36,0.84 0.53,1.28 0.12,0.3 0.19,0.35 0.06,0.66l-0.21
                                   0.52c-0.01,0.01 -0.01,0.02 -0.02,0.03 -0.06,0.1 -0.03,0.05
                                    -0.06,0.09 -1.44,-1.03 -1.66,-0.73 -2.07,0.46 -0.16,0.46
                                     -0.3,0.93 -0.5,1.36l-0.64 1.28c0.06,0.07 -0,0.03 0.1,0.03
                                      0.05,0.05 0.02,0.03 0.1,0.08l0.49 0.14c0.23,0.05 0.44,0.09
                                       0.66,0.1 0.55,0.04 0.94,-0.06 1.35,-0.19 0.54,-0.18 1.09,-0.44
                                        1.5,-0.82 0.15,-0.14 0.24,-0.3 0.4,-0.41l0.46 1.66c0.03,0.74
                                         -0.09,0.6 0.27,1.21 0.01,0.01 0.01,0.02 0.02,0.03 0.01,0.01
              0.01,0.02 0.02,0.04l0.07 0.11c-0.02,0.22 0.19,1.01 0.24,1.29
       0.09,0.46 -0.21,0.79 -0.3,1.2 -0.55,-0.23 -1.25,-1.06 -1.66,-0.23
           -0.12,0.25 -0.17,0.36 -0.26,0.62 -0.33,1.01 -0.63,1.61
         -1.06,2.43l0.12 0.04 0.23 0.11c0.06,0.02 0.17,0.04 0.25,0.06
          0.17,0.04 0.34,0.08 0.52,0.09 0.29,0.02 0.93,0.07
         1.12,-0.13 0.42,0.01 1.24,-0.49 1.51,-0.71 0.01,0.01
      0.03,0 0.04,0.02l0.09 0.06c-0.04,0.29 0.02,0.41 0.03,0.7l-0.05
      1.41c-0.06,1.12 -0.29,1.06 -0.76,1.69 -0.08,-0.07
          -0.03,-0.01 -0.11,-0.11 -0.03,-0.03 -0.06,-0.08 
      -0.09,-0.11 -0.2,-0.25 -0.38,-0.54 -0.7,-0.69 
          -0.7,-0.32 -1.52,1.73 -2.82,2.61 0.04,0.2 -0.01,0.06
     0.1,0.11 0.25,0.3 1,0.67 1.5,0.78 0.35,0.08
      0.71,0.08 1.09,0.05 0.25,-0.02 0.82,-0.16 0.92,-0.13
         -0.16,0.69 -0.35,1.35 -0.52,2.03 -0.25,1 
        -0.03,0.77 -0.98,1.53 -0.3,-0.31 -0.33,-0.77 -0.77,-1.02
     -0.42,-0.25 -0.91,0.35 -1.12,0.55 -0.33,0.32
               -0.58,0.6 -0.97,0.89 -0.19,0.14 -0.34,0.26
            -0.53,0.4 -0.14,0.11 -0.43,0.29 -0.53,0.4 0.1,0.15
           -0.02,0.06 0.15,0.13 0.09,0.22 0.35,0.38 
     0.54,0.52 0.22,0.16 0.43,0.29 0.69,0.39 0.43,0.17 
       1.32,0.31 1.87,0.23l0.23 -0.05c0.01,-0 0.03,-0.02
          0.04,-0.02 0.01,-0 0.02,-0.01 0.03,-0.02
           0.32,0.05 0.52,-0.18 0.79,-0.24l-0.02
     0.66c0,0.77 -0.24,0.75 0.16,1.51l0.04 
               0.07c0,0.01 0.01,0.03 0.02,0.04 -0.05,0.35
                0.18,1.03 0.24,1.4 -0.23,0.18 -0.34,0.33
      -0.51,0.41 -0.75,-1.17 -0.82,-1.52
         -1.92,-0.43 -0.32,0.31 -0.59,0.57
            -0.95,0.86 -0.23,0.19 -0.95,0.65 
              -1.05,0.81l0.13 0.1c0.88,1.15 3.14,1.5
            4.1,0.82 0.47,-0.34 0.54,-0.56 0.52,-1.34l0.67
        1.84c0.03,0.16 0.06,0.28 0.12,0.42 0.03,0.06
           0.05,0.12 0.09,0.17 0.1,0.15 0.03,0.06 0.13,0.14
             -0,0.29 0.14,0.22 0.06,0.56 -0.03,0.13 -0.14,0.43
             -0.19,0.53 -1.94,-1.27 -1.57,-0.02 -2.28,1.76
       -0.16,0.41 -0.37,0.77 -0.53,1.2 0.09,0.08 0.01,0.03
            0.15,0.03 0.29,0.33 1.66,0.28 2.36,-0.01 0.48,-0.2
          0.96,-0.46 1.3,-0.82 0.15,-0.16 0.16,-0.3 0.38,-0.33
        0.14,0.08 0.17,0.19 0.27,0.36zm-3.62 -12.85c0.13,
             -0.01 0.31,-0.15 0.55,-0.19 -0.01,0.45 0.02,0.74
        -0.34,0.45 -0.06,-0.05 -0.09,-0.06 -0.12,-0.09
     -0.09,-0.1 -0.04,-0.01 -0.09,-0.17zm1.92 
         -12.29l-0.04 0.13c-0.07,-0.02 -0.17,-0.02
       -0.21,-0.03 -0.27,-0.08 -0.09,0.04
    -0.16,-0.16 0.12,-0.08 0.18,-0.23 0.34,
           -0.35l0.08 0.4zm1.33 3.05l-0.4 0.17c-0,-0.08
         -0,-0.15 -0.02,-0.23 -0.02,-0.09 -0.03,-0.07
        -0.05,-0.11l0.07 -0.16c0.21,0.11 0.28,0.16
      0.4,0.32zm-1.54 6.48l0.16 -0.51c0.17,0.07
           0.25,0.14 0.36,0.29l-0.52 0.22zm0.28
      10.88l-0.09 -0.38 0.37 0.07c-0.02,0.1
           -0.03,0.13 -0.09,0.19
     -0.13,0.15 0.01,0.06 
           -0.19,0.12zm-1.05 
    -5.97c0.06,0.12 0.16,0.16 0.26,0.23 -0.09,0.14 -0.22,0.18 -0.37,0.21 
    -0,-0.02 -0.02,-0.27 -0.02,-0.27 0.04,-0.19 -0.06,-0.09 0.13,-0.16zm1.03
     -8.01c-0.09,-0.02 -0.15,-0.02 -0.22,-0.07 -0.21,-0.13 -0.08,-0.02 -0.14,
     -0.18 0.15,-0.05 0.21,-0.15 0.45,-0.24l-0.08 0.48zm0.57 16.58l-0.45 -0c0.02,
     -0.18 0.12,-0.3 0.26,-0.42l0.18 0.42zm-1.45 -3.7l-0.19 -0.23c-0.06,-0.07 
     -0.1,-0.13 -0.17,-0.19 -0.24,-0.23 -0.29,-0.14 -0.36,-0.36l0.46 -0.19c0.07,
     0.14 0.25,0.78 0.26,0.97zm0.37 -23.67l-0.12 -0.57 0.54 0.21c-0.07,0.16 -0.27,0.31
      -0.41,0.36zm-1.46 -3.02c-0.07,0.01 -0.19,-0.04 -0.3,-0.06 -0.04,-0.01 -0.14,-0.02
       -0.18,-0.03 -0.15,-0.07 -0.06,0.04 -0.14,-0.13 0.11,-0.07 0.2,-0.27 0.37,-0.4 0.13,
       0.13 0.2,0.43 0.24,0.62z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
  <div class="icon-3">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 25.29 76.92"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
         
    d="M19.14 6.58c0.09,0.1 -0.02,0.03 0.17,0.15 0.04,0.03 0.19,0.09
     0.27,0.13l0.16 0.02c0.12,0.14 0.02,0.06 0.22,0.18 0.63,0.37
      1.81,0.52 2.51,0.53 0.42,-0.26 0.61,-1.58 0.55,-2.27
       -0.11,-1.17 -1.02,-3.42 -2.17,-3.76 -0.84,-0.25
        -1.19,0.02 -1.4,0.7 -0.03,0.1 -0.05,0.19 -0.09,
        0.28l-0.18 0.25c-0.18,-0.36 -0.77,-0.97 -1.2,-1.18
         -0.64,-0.31 -0.36,-0.26 -0.84,-1.59l-0.75 0c0.2,0.63
          0.44,1.27 0.61,1.92 0.17,0.64 0.47,1.46 0.58,2.05
           -0.21,0.36 -0.43,0.5 -0.31,1.1 0.11,0.51 0.35,0.71
            0.76,0.9 0.13,0.31 0.36,1.33 0.39,1.78 -0.68,0.24 
            -1.38,0.85 -1.62,1.43 -0.45,-0.47 -0.29,-1.59 -1.59,-1.22
             -0.8,0.22 -1.09,0.8 -1.45,1.52 -0.58,1.18 -0.96,2.15
              -0.6,3.58 0.04,0.17 0.13,0.4 0.19,0.55 0.11,0.29 
              0.09,0.34 0.35,0.44 1.74,-0.01 2.96,-0.82 4.13,-1.55
               0.22,-0.13 0.65,-0.39 0.79,-0.62 0.74,-1.2 -0.74,-2.14
                -1.7,-2.43 -0.01,-0.51 1.07,-0.87 1.7,-0.82 0.21,1.74
                 0.56,3.5 0.61,5.33 0.05,2.05 0.01,3.68 -0.08,5.71
                  -1.2,0.52 -0.99,0.65 -1.77,1.46 -0.39,-0.45 -0.22,-1.6 -1.59,-1.18 -0.79,0.24 -0.91,0.63
                  -1.42,1.55 -0.78,1.41 -0.95,2.66 -0.36,4.15 0.14,0.35 0.06,0.36 0.36,0.37 0.78,-0 1.47,-0.18
                   2.09,-0.43 0.51,-0.2 1.26,-0.76 1.69,-0.86 -0.18,0.3 -0.34,0.91 -0.48,1.25l-1.54 3.5c-1.75,0.08
                    -1.26,0.29 -2.27,0.59 0.1,-1.15 0.1,-1.69 -1.1,-1.78 -0.7,-0.05 -1.5,0.65 -1.91,0.96 -1.04,0.82
                     -1.93,1.81 -1.94,3.77 0.09,0.22 -0.03,0.09 0.18,0.11 0.24,0.36 1.4,0.49 1.94,0.58l0.19 -0.01 0.71
                      -0.01 0.08 -0.02 1.74 -0.17c0.25,0.04 0.03,-0.07 0.19,0.09l-2.62 4.74c-0.28,0.51 -0.56,1.2 -0.86,1.61 -0.44,-0.02
                       -0.69,-0.14 -1.18,-0.08 -0.38,0.04 -0.72,0.17 -1.08,0.22 0.1,-0.53 0.78,-1.5 -0.62,-1.96 -0.79,-0.26 -1.74,0.32 
                       -2.33,0.6 -2.12,1.02 -2.81,3.28 -2.36,3.38 0.01,0.01 0.03,0.02 0.03,0.04l0.11 0.1c0.42,0.34 1.16,0.64
                        1.66,0.79 0.65,0.19 1.73,0.31 2.43,0.38 3,0.28 1.16,-2.8 1.09,-3.14 0.86,0.12 1.3,-0.05 1.81,0.56 
                        -0.08,0.35 -0.53,1.2 -0.71,1.6 -0.74,1.61 -1.24,3.24 -1.73,4.96 -0.92,0.11 -1.11,0.44 -1.77,0.69
                         0.01,-1.08 0.1,-1.68 -1.14,-1.71 -0.55,-0.01 -0.8,0.17 -1.11,0.41 -1.43,1.08 -2.52,2.24 -2.53,4.15
                          -0,0.62 0.11,0.48 0.22,0.54 0.63,0.38 1.79,0.44 2.67,0.35 0.47,-0.05 0.97,-0.11 1.43,-0.2l0.98
                           -0.22c0.38,-0.08 0.14,-0.15 0.26,0.06 -0.08,0.78 -0.66,2.6 -0.56,3.29 -0.13,0.14 -0.07,0.08
                            -0.17,0.29 -0.06,0.13 -0.08,0.18 -0.12,0.33 -0.07,0.3 -0.02,0.6 -0.03,0.92 -0.09,0.94 
                            -0.17,0.52 -0.78,0.94 -0.32,0.22 -0.57,0.55 -0.86,0.82 -0.29,-0.69 -0.22,-1.44 -1.39,-1.13
                             -0.93,0.25 -1.93,2.19 -2.03,3.16 -0.06,0.56 0.02,1.84 0.39,2.08 2,0.02 2.64,-0.6 4.08,
                             -1.25l-0.01 0.28c-0.06,0.58 -0.22,2.09 -0.14,2.62 -0.44,0.37 -0.46,1.03 -0.12,1.49 
                             -0.08,3.97 0.16,2.73 -0.77,3.57 -0.24,0.21 -0.37,0.4 -0.62,0.62 -0.36,-0.53 -0.09,-1.43
                              -1.37,-1.13 -0.98,0.23 -1.92,2.22 -2.06,3.14 -0.07,0.47 -0.07,1.79 0.41,2.09 0.86,0.04
                               1.94,-0.12 2.51,-0.52l0.16 -0.08c0.6,-0.17 1.39,-0.67 1.84,-0.94 0.12,0.18 0.04,0.07
                                0.14,0.1 -0.18,0.38 -0.31,0.07 -0.71,0.58 -0.67,0.86 0.33,1.72 0.89,2.31 0.6,0.64 
                                1.71,1.63 2.94,1.88 0.38,-0.11 0.92,-1.2 1.04,-1.69 0.21,-0.86 0.15,-1.53 -0.05,-2.41
                                 -0.22,-0.94 -0.24,-1.38 -1.01,-1.81 -0.93,-0.52 -1.19,0.28 -1.59,0.76 -0.21,-0.33
                                  -0.33,-0.79 -0.58,-1.12 -0.48,-0.62 -0.48,-0.13 -0.5,-1.22 -0.02,-1.09 0.05,-2.25
                                   0.01,-3.32 0.37,0.22 0.89,0.86 1.37,1.21 0.51,0.37 1.05,0.65 1.76,0.82 0.32,-0.02
    0.92,-1.21 1.04,-1.68 0.22,-0.87 0.15,-1.53 -0.04,-2.41 -0.19,-0.86 -0.3,-1.41
     -0.96,-1.79 -1.06,-0.6 -1.26,0.38 -1.71,0.74 -0.22,-0.8 -0.65,-1.34 -1.19,-1.71l0.5
      -4.35 0.38 0.28c0.23,0.25 0.6,0.67 0.87,0.82 0.07,0.1 0.05,0.1 0.19,0.21 0.18,0.23
    0.66,0.57 0.92,0.6 0.1,0.13 -0.01,0.03 0.16,0.16 0.08,0.06 0.1,0.07 0.18,0.11
      0.14,0.07 0.26,0.1 0.44,0.15l0.45 0.17c0.35,0.08 0.75,-0.74 0.91,-1.05 0.21,-0.4
     0.41,-1.07 0.43,-1.57 -0,-0.28 0.04,-0.67 -0.1,-0.85l0.03 -0.17c-0,-0.04 -0.01,-0.13
    -0.01,-0.15 -0.05,-0.13 -0.03,-0.1 -0.09,-0.17 0.06,-0.51 -0.25,-1.75 -0.94,-2.22
    -1.11,-0.74 -1.37,0.09 -1.86,0.69l-0.12 -0.2c-0.28,-0.56 -0.41,-1.06 -1,-1.45 
   0.04,-1.21 1.29,-5.03 1.31,-5.65 0.07,0.06 0.05,0.04 0.12,0.13 0.63,0.83 0.41,0.6
   1.22,1.38 0.76,0.74 1.67,1.73 2.95,1.92 0.28,0.13 0.55,-0.41 0.69,-0.64 0.21,
       -0.34 0.36,-0.64 0.47,-1.02 0.36,-1.24 0.14,-3.92 -1.03,-4.6 -1.23,-0.72 -1.67,0.89
     -1.75,0.72 -0.01,-0.01 -0.03,0.02 -0.04,0.03 -0.19,-0.33 -0.3,-0.68 -0.49,-1 -0.22,-0.38
     -0.47,-0.51 -0.68,-0.79 0.39,-1.04 1.05,-2.29 1.59,-3.3 0.57,-1.06 1.2,-2.15 1.7,-3.17
    1.43,-0.02 1.51,0.55 1.8,0.6 -0.1,0.19 -0.02,0.07 -0.16,0.2 -0.01,0.01 -0.21,0.13
  -0.23,0.15 -0.8,0.47 -1.8,0.96 -1.37,2.09 0.14,0.37 0.42,0.53 0.75,0.73 1.23,0.73
      2.46,1.53 4.32,1.53 0.28,-0.08 0.25,-0.15 0.35,-0.44 0.22,-0.63 0.33,-1.22 0.26,-1.93
      -0.11,-1.05 -1.06,-3.33 -2.21,-3.65 -1.31,-0.37 -1.17,0.6 -1.56,1.21l-0.2 -0.19c-0.84,
      -0.96 -0.61,-0.56 -1.27,-1.09 0.16,-0.47 0.7,-1.32 0.98,-1.82 1.05,-1.91 1.94,-3.59 2.84,
             1-5.61 0.73,0.01 1.23,0.31 1.57,0.68 -0.26,0.25 -1.37,0.7 -1.67,1.19 -0.51,0.8
     -0.07,1.45 0.63,1.87 1.15,0.7 2.56,1.58 4.34,1.55 0.33,-0.09 0.46,-0.67 0.52,-0.98 0.28,-1.4
     -0.01,-2.34 -0.66,-3.5 -0.49,-0.87 -0.67,-1.3 -1.44,-1.54 -1.15,-0.36 -1.27,0.44
       -1.56,1.23 -0.65,-0.55 0.03,-0.23 -1.38,-1.25 0.22,-0.6 1.08,-2.59 1.06,-3.14
          0.38,-0.35 0.52,-0.78 0.43,-1.4 0.22,-0.75 0.67,-4.16 0.53,-5 0.32,0.09 0.75,0.4
             1.06,0.57 0.35,0.2 0.71,0.39 1.06,0.57 0.73,0.38 1.61,0.62 2.65,0.61 0.58,-0.21
            0.64,-1.82 0.61,-2.32 -0.04,-0.79 -0.45,-1.64 -0.77,-2.19 -0.39,-0.68 -0.64,-1.3
            -1.45,-1.52 -1.33,-0.36 -1.16,0.63 -1.55,1.24 -0.67,-0.66 -0.61,-0.87 -1.64,-1.37
        -0.06,-2.55 -0.87,-5.97 -0.9,-6.74l0.15 -0.03 0.01 -0.03zm-14.34 62.71l-0.02
               1.23c-0.17,-0.13 -0.38,-0.3 -0.62,-0.45 -0.2,-0.13 -0.4,-0.21 -0.59,-0.39 0.26,
         -0.28 0.65,-0.51 1.16,-0.55l0.07 0.15zm14.26 -66.46c-0.03,0.28 0.03,0.13
      -0.15,0.29 -0.01,0.01 -0.24,0.12 -0.24,0.13 -0.22,0.12 -0.24,0.17
      -0.54,0.21 0.01,-0.4 -0.17,-0.77 -0.25,-1.14 0.63,0.03 0.9,0.46
         1.18,0.51zm-14.86 55.33c0.15,-0.05 0.34,-0.22 0.51,-0.31 0.29,-0.15
        0.4,-0.14 0.78,-0.16 -0.03,0.41 -0.14,0.81 -0.08,1.19 -0.26,0.14
    -0.08,0.13 -0.34,-0.03 -0.26,-0.16 -0.76,-0.47 -0.88,-0.69zm2.5
                       -3.73c0.16,-0.41 0.11,-0.97 0.32,-1.32 0.3,0.08 0.44,0.22 0.64,0.41
                       0.2,0.19 0.27,0.36 0.41,0.49 -0.16,0.21 0.06,0.08 -0.33,0.21 -0.1,0.03
                               -0.26,0.05 -0.36,0.08 -0.23,0.05 -0.43,0.12 -0.68,0.14zm0.14
                        8.74l-1.08 0.27c-0.09,-0.08 -0.07,0.14 -0.08,-0.17l0.07 -1.1c0.51,0.12
                             0.97,0.57 1.09,1.01zm-0.43 8.78c-0.17,0.02 -0.31,0.07 
                      -0.44,0.1 -0.01,0 -0.23,0.03 -0.24,0.03 -0.22,-0.04 0,0.16
                   -0.14,-0.1l-0.01 -0.9c0.37,0.15 0.68,0.48 0.83,0.88zm7.48
                            -41.68c0.31,-0.02 0.51,-0.13 0.93,-0.12 0.35,0 0.54,0.09
              0.82,0.17 -0.11,0.53 -0.59,0.91 -0.64,1.43 -0.25,-0.04
                   -0.12,0.01 -0.27,-0.15l-0.84 -1.31zm4.93 -8.23c-0.27,-0
                     -0.43,-0.17 -0.68,-0.32 -0.41,-0.23 -0.51,-0.16
                     -0.64,-0.47 0.15,-0.04 0.4,-0.31 0.62,-0.42 0.29,-0.15
                    0.49,-0.18 0.85,-0.23 0.05,0.51 -0.12,0.95
                       -0.14,1.43zm-12.94 26.21c0.63,-0.04 0.61,-0.21 1.47,-0.11l-0.33
                1.55c-0.33,-0.14 -0.22,-0.21 -0.62,-0.71 -0.32,-0.39 -0.42,-0.39
                          -0.52,-0.74zm15.47 -33.38c-0.15,0.29 -0.36,0.33 -0.67,0.51
                        -0.26,0.15 -0.4,0.29 -0.69,0.42 -0.01,-0.23 0.02,-0.53
                              -0.08,-0.67l0.03 -0.86c0.33,0.01 0.6,0.1 0.83,0.21
                                  0.22,0.11 0.42,0.34 0.58,0.38zm-12.41 30.37c0.14,
                  -0.37 0.45,-1.36 0.68,-1.6 0.66,0.19 1.09,0.56 1.31,1.14
       -0.34,0.04 -0.75,0.16 -1.08,0.25 -0.9,0.24 -0.77,0.49 -0.91,0.21z"
          class="fil0"
        ></path>
      </g>
    </svg>
  </div>
</button>
`,
  fulCode: `Ful Code4`,

},
{
  id: 11,
  css: `<style>
  .loader1 {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 0 auto;
  }
  
  .loader1:before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #2a9d8f;
    animation: loading-bounce 0.5s ease-in-out infinite alternate;
  }
  
  .loader1:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 #2a9d8f, -35px 50px 0 #2a9d8f, -70px 95px 0 #2a9d8f;
    animation: loading-step 1s ease-in-out infinite;
  }
  
  @keyframes loading-bounce {
    0% {
      transform: scale(1, 0.7);
    }
  
    40% {
      transform: scale(0.8, 1.2);
    }
  
    60% {
      transform: scale(1, 1);
    }
  
    100% {
      bottom: 140px;
    }
  }
  
  @keyframes loading-step {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
              0 10px 0 #f2f2f2,
              -35px 50px 0 #f2f2f2,
              -70px 90px 0 #f2f2f2;
    }
  
    100% {
      box-shadow: 0 10px 0 #f2f2f2,
              -35px 50px 0 #f2f2f2,
              -70px 90px 0 #f2f2f2,
              -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
     </style>`,
  html: `<div class="loader1"></div>`,
  fulCode: "Ful Code1",

},
{
  id: 12,
  css: `<style>
  .main {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  
  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }
  
  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }
  
  .card1 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 90px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .instagram {
    margin-top: 1.5em;
    margin-left: 1.2em;
    fill: #cc39a4;
  }
  
  .card2 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 90px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .twitter {
    margin-top: 1.5em;
    margin-left: -.9em;
    fill: #03A9F4;
  }
  
  .card3 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 5px 90px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .github {
    margin-top: -.6em;
    margin-left: 1.2em;
  }
  
  .card4 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 90px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .discord {
    margin-top: -.9em;
    margin-left: -1.2em;
    fill: #8c9eff;
  }
  
  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #cc39a4;
  }
  
  .card1:hover .instagram {
    fill: white;
  }
  
  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03A9F4;
  }
  
  .card2:hover .twitter {
    fill: white;
  }
  
  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
  }
  
  .card3:hover .github {
    fill: white;
  }
  
  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
  }
  
  .card4:hover .discord {
    fill: white;
  }
     </style>`,
  html: `<div class="main">
  <div class="up">
    <button class="card1">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0,0,256,256" width="30px" height="30px" fill-rule="nonzero" class="instagram">
      <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
      stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
       font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path
        d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 
        6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,
        -6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,
        2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609
         -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,
         9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,
         0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,
         -0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,
         -6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,
         4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
    </button>
    <button class="card2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" 
      class="twitter"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,
      2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,
      9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,
      1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,
      0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,
      0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,
      0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,
      21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
    </button>
  </div>
  <div class="down">
    <button class="card3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" class="github">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051
           c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526
            c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,
            0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,
            1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,
            10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,
            9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,
            0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,
            20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,
            15C27,8.373,21.627,3,15,3z"></path></svg>
    </button>
    <button class="card4">
      <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" 
      class="discord"><path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,
      39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,
      8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,
      10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,
      5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,
      1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,
      1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path></svg>
    </button>
  </div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 13,
  css: `<style>
  .cubes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
  }
  
  .loop {
    transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
  }
  
  @keyframes s {
    to {
      transform: scale3d(0.2, 0.2, 0.2);
    }
  }
  
  .item {
    margin: -1.5625em;
    width: 3.125em;
    height: 3.125em;
    transform-origin: 50% 50% -1.5625em;
    box-shadow: 0 0 0.125em currentColor;
    background: currentColor;
    animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
  }
  
  .item:before,
  .item:after {
    position: absolute;
    width: inherit;
    height: inherit;
    transform-origin: 0 100%;
    box-shadow: inherit;
    background: currentColor;
    content: "";
  }
  
  .item:before {
    bottom: 100%;
    transform: rotateX(90deg);
  }
  
  .item:after {
    left: 100%;
    transform: rotateY(90deg);
  }
  
  .item:nth-child(1) {
    margin-top: 6.25em;
    color: #fe1e52;
    animation-delay: -1.2s;
  }
  
  .item:nth-child(1):before {
    color: #ff6488;
  }
  
  .item:nth-child(1):after {
    color: #ff416d;
  }
  
  .item:nth-child(2) {
    margin-top: 3.125em;
    color: #fe4252;
    animation-delay: -1s;
  }
  
  .item:nth-child(2):before {
    color: #ff8892;
  }
  
  .item:nth-child(2):after {
    color: #ff6572;
  }
  
  .item:nth-child(3) {
    margin-top: 0em;
    color: #fe6553;
    animation-delay: -0.8s;
  }
  
  .item:nth-child(3):before {
    color: #ffa499;
  }
  
  .item:nth-child(3):after {
    color: #ff8476;
  }
  
  .item:nth-child(4) {
    margin-top: -3.125em;
    color: #fe8953;
    animation-delay: -0.6s;
  }
  
  .item:nth-child(4):before {
    color: #ffb999;
  }
  
  .item:nth-child(4):after {
    color: #ffa176;
  }
  
  .item:nth-child(5) {
    margin-top: -6.25em;
    color: #feac54;
    animation-delay: -0.4s;
  }
  
  .item:nth-child(5):before {
    color: #ffce9a;
  }
  
  .item:nth-child(5):after {
    color: #ffbd77;
  }
  
  .item:nth-child(6) {
    margin-top: -9.375em;
    color: #fed054;
    animation-delay: -0.2s;
  }
  
  .item:nth-child(6):before {
    color: #ffe49a;
  }
  
  .item:nth-child(6):after {
    color: #ffda77;
  }
     </style>`,
  html: `<div class="loop cubes">
  <div class="item cubes"></div>
  <div class="item cubes"></div>
  <div class="item cubes"></div>
  <div class="item cubes"></div>
  <div class="item cubes"></div>
  <div class="item cubes"></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 14,
  css: `<style>
  .button7 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: .3s;
    overflow: hidden;
    position: relative;
  }
  
  .svgIcon {
    width: 12px;
    transition-duration: .3s;
  }
  
  .svgIcon path {
    fill: white;
  }
  
  .button7:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: .3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
  }
  
  .button7:hover .svgIcon {
    width: 50px;
    transition-duration: .3s;
    transform: translateY(60%);
  }
  
  .button7::before {
    position: absolute;
    top: -20px;
    content: "Delete";
    color: white;
    transition-duration: .3s;
    font-size: 2px;
  }
  
  .button7:hover::before {
    font-size: 13px;
    opacity: 1;
    transform: translateY(30px);
    transition-duration: .3s;
  }
     </style>`,
  html: `<button class="button7">
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 
  32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 
  6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6
   45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>`,
  fulCode: "Ful Code1",

},
{
  id: 15,
  css: `<style>
  .loader5 {
    width: 64px;
    height: 64px;
    position: relative;
    background: #FFF;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .loader5:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    transform: rotate(45deg) translate(30%, 40%);
    background: #ff9371;
    box-shadow: 32px -34px 0 5px #ff3d00;
    animation: slide 2s infinite ease-in-out alternate;
  }
  
  .loader5:after {
    content: "";
    position: absolute;
    left: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff3d00;
    transform: rotate(0deg);
    transform-origin: 35px 145px;
    animation: rotate 2s infinite ease-in-out;
  }
  
  @keyframes slide {
    0% , 100% {
      bottom: -35px
    }
  
    25% , 75% {
      bottom: -2px
    }
  
    20% , 80% {
      bottom: 2px
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(-15deg)
    }
  
    25% , 75% {
      transform: rotate(0deg)
    }
  
    100% {
      transform: rotate(25deg)
    }
  }
    
     </style>`,
  html: `<div class="loader5"></div>`,
  fulCode: "Ful Code1",

},
{
  id: 16,
  css: `<style>
  .btn1 {
    --color1: #1a8516;
    --color2: #236b19;
    perspective: 1000px;
    padding: 1em 1em;
    background: linear-gradient(var(--color1), var(--color2));
    border: none;
    outline: none;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #fff;
    text-shadow: 0 10px 10px #000;
    cursor: pointer;
    transform: rotateX(70deg) rotateZ(30deg);
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  
  .btn1::before {
    content: "";
    width: 100%;
    height: 15px;
    background-color: var(--color2);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotateX(90deg);
    transform-origin: bottom;
  }
  
  .btn1::after {
    content: "";
    width: 15px;
    height: 100%;
    background-color: var(--color1);
    position: absolute;
    top: 0;
    right: 0;
    transform: rotateY(-90deg);
    transform-origin: right;
  }
  
  .btn1:hover {
    transform: rotateX(30deg) rotateZ(0);
  }
  
     </style>`,
  html: `
  <button class="btn1">3D button</button>`,
  fulCode: "Ful Code1",

},
{
  id: 17,
  css: `<style>
  .button8 {
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(44, 44, 44);
    border-radius: 50%;
    cursor: pointer;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
    border: none;
  }
  
  .bell {
    width: 18px;
  }
  
  .bell path {
    fill: white;
  }
  
  .button8:hover {
    background-color: rgb(56, 56, 56);
  }
  
  .button8:hover .bell {
    animation: bellRing 0.9s both;
  }
  
  /* bell ringing animation keyframes*/
  @keyframes bellRing {
    0%,
    100% {
      transform-origin: top;
    }
  
    15% {
      transform: rotateZ(10deg);
    }
  
    30% {
      transform: rotateZ(-10deg);
    }
  
    45% {
      transform: rotateZ(5deg);
    }
  
    60% {
      transform: rotateZ(-5deg);
    }
  
    75% {
      transform: rotateZ(2deg);
    }
  }
  
  .button8:active {
    transform: scale(0.8);
  }
  
     </style>`,
  html: `<button class="button8">
  <svg viewBox="0 0 448 512" class="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5
   61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8
    416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 
    384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104
     104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104
      104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3
       18.7-45.3z"></path></svg>
</button>`,
  fulCode: "Ful Code1",

},
{
  id: 17,
  css: `<style>
  .button9 {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: red;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  
  .button9:focus,
  .button9:hover {
    color: cyan;
  }
  
  .button9:focus:after,
  .button9:hover:after {
    width: 100%;
    left: 0%;
  }
  
  .button9:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
     </style>`,
  html: `<button class='button9'>
  Hover Over
</button>`,
  fulCode: "Ful Code1",

},
{
  id: 18,
  css: `<style>
  .loader6 {
    display: flex;
    position: relative;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    height: 55px;
    width: 200px;
    overflow: hidden;
  }
  
  .containerL {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
    position: relative;
    align-items: center;
  }
  
  .carousel {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    position: absolute;
    width: 100%;
    transform-origin: center;
    animation-delay: 2s;
  }
  
  .loader6 .containerL:nth-child(3) {
    justify-content: flex-start;
    justify-items: flex-start;
    animation: scroll-up 4s infinite ease-in-out;
    animation-delay: 3s;
  }
  
  .loader6 .containerL:nth-child(2) {
    justify-content: flex-end;
    justify-items: flex-end;
    animation: scroll-down 4s infinite ease-in-out;
    animation-delay: 3s;
  }
  
  .loader6 .containerL:nth-child(1) {
    justify-content: flex-end;
    justify-items: flex-end;
    animation: scroll-down 3s infinite ease-in-out;
    animation-delay: 3s;
  }
  
  .love {
    background: red;
    display: flex;
    width: 30px;
    height: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    left: 8px;
    margin: 0.8rem 4px;
    transform: rotate(45deg);
    animation-delay: 2s;
  }
  
  .love::before, .love::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: red;
  }
  
  .love::before {
    left: -16px;
  }
  
  .love::after {
    top: -16px;
  }
  
  .death {
    display: flex;
    width: 100%;
    height: 55px;
    position: relative;
    align-items: center;
    justify-content: center;
    animation: rotation 3s infinite ease-in-out;
    animation-delay: 1s;
  }
  
  .death:after {
    content: '';
    height: 63px;
    position: absolute;
    border-left: 12px solid red;
    transform: rotate(45deg);
    border-radius: 8px;
    top: -4px;
  }
  
  .death:before {
    content: '';
    height: 60px;
    position: absolute;
    border-left: 12px solid red;
    transform: rotate(-45deg);
  }
  
  .loader6:hover {
    animation: none;
  }
  
  .robots {
    display: flex;
    width: 100%;
    height: 55px;
    justify-content: space-between;
    background-color: #ff0000;
    border-radius: 0 8px 8px;
    padding: 8px;
    animation-delay: 5s;
  }
  
  .robots::after {
    content: '';
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-radius: 50%;
    animation-delay: 2s;
    animation: blink 0.5s 2 forwards;
  }
  
  .robots::before {
    content: '';
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-radius: 50%;
    animation-delay: 2s;
    animation: blink 0.5s 2 forwards;
  }
  
  @keyframes scroll-up {
    0% {
      transform: translateY(0);
      filter: blur(0);
    }
  
    30% {
      transform: translateY(-150%);
      filter: blur(10px);
    }
  
    60% {
      transform: translateY(0);
      filter: blur(0px);
    }
  }
  
  @keyframes scroll-down {
    0% {
      transform: translateY(0);
      filter: blur(0);
    }
  
    30% {
      transform: translateY(150%);
      filter: blur(10px);
    }
  
    60% {
      transform: translateY(0);
      filter: blur(0px);
    }
  }
  
  @keyframes rotation {
    20%, 100% {
      transform: rotate(180deg);
    }
  }
  
  @keyframes blink {
    0% {
      height: 0;
    }
  
    20% {
      height: 12px;
    }
  
    100% {
      height: 12px;
    }
  }
     </style>`,
  html: `<div class="loader6">
  <div class="containerL">
    <div class="carousel">
      <div class="love"></div>
      <div class="love"></div>
      <div class="love"></div>
      <div class="love"></div>
      <div class="love"></div>
      <div class="love"></div>
      <div class="love"></div>
    </div> 
  </div>
  <div class="containerL">
    <div class="carousel">
      <div class="death"></div>
      <div class="death"></div>
      <div class="death"></div>
      <div class="death"></div>
      <div class="death"></div>
      <div class="death"></div>
      <div class="death"></div>
    </div> 
  </div>
  <div class="containerL">
    <div class="carousel">
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
    </div> 
  </div>
</div>

  `,
  fulCode: "Ful Code1",

},
{
  id: 19,
  css: `<style>
  .input1 {
    display: none
  }
  
  .on,.off {
    position: absolute;
    text-align: center;
    text-shadow: inset 1px 1px 1px black;
    width: 100%;
  }
  
  .on {
    color: #fff;
    top: 10px;
    transition: all 0.1s;
    font-family: sans-serif
  }
  
  .off {
    color: #636161;
    bottom: 5px;
    transition: all 0.1s;
    transform: scaleY(0.85);
  }
  
  .but {
    background-color: #000;
    border-radius: 400px 400px 400px 400px / 400px 400px 300px 300px;
    border-bottom-width: 0px;
    box-shadow: inset 8px 6px 5px -7px rgba(0,0,0,1)
      ,inset -8px 6px 5px -7px rgba(0,0,0,1)
      ,inset 0 -3px 2px -2px rgba(200,200,200,.5)
      ,0 3px 3px -2px rgba(0,0,0,1)
      ,inset 0 -230px 60px -200px rgba(255,255,255,.2)
      ,inset 0 220px 40px -200px rgba(0,0,0,.3);
    display: block;
    font-size: 17px;
    height: 60px;
    position: relative;
    transition: all 0.2s;
    width: 40px;
  }
  
  .back {
    background-color: #000;
    background-image: -webkit-linear-gradient(0deg, transparent 30%, transparent 65%)
      ,-webkit-linear-gradient(0deg, rgba(245, 245, 245, 0) 30%, rgba(150,150,150,.1) 50%, rgba(150,150,150,0) 70%);
    border-radius: 115px;
    box-sizing: border-box;
    height: 85px;
    padding: 4px 4px;
    transition: all 0.2s;
    width: 50px;
  }
  
  .input1:checked + .back .on,input:checked + .back .off {
    text-shadow: inset 1px 1px 1px black;
  }
  
  .input1:checked + .back .on {
    color: rgb(141, 141, 141);
    top: 10px;
    transform: scaleY(0.85);
  }
  
  .input1:checked + .back .off {
    color: #fff;
    bottom: 5px;
    transform: scaleY(1);
  }
  
  .input1:checked + .back .but {
    background: #232323;
    background-image: -webkit-radial-gradient(55% 18%,circle closest-corner,rgba(0,0,0,.3) ,rgba(0,0,0,0));
    border-radius: 410px 410px 410px 410px / 310px 310px 410px 410px;
    box-shadow: inset 8px -4px 5px -7px rgba(0,0,0,1)
      ,inset -8px -4px 5px -7px rgba(0,0,0,1)
      , 0 -3px 8px -4px rgba(250,250,250,.4)
      ,inset 0 3px 4px -2px rgba(10,10,10,1)
      ,inset 0 280px 40px -200px rgba(0,0,0,.2)
      ,inset 0 -200px 40px -200px rgba(180,180,180,.2);
    margin-top: 20px;
  }
  
  .input1:checked + .back {
    background-image: -webkit-linear-gradient(90deg, black 30%, transparent 65%)
      ,-webkit-linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,.4) 50%, rgba(150,150,150,0) 100%);
    box-shadow: 28px 28px 28px -28px rgba(0,0,0,.1)
      ,-28px 28px 28px -22px rgba(0,0,0,.1)
      ,0 30px 30px 0px rgba(0,0,0,.2)
      ,inset 0 1px 2px 0 rgba(0,0,0,.6);
    padding: 2px 4px;
  }
  
  .l,.r {
    margin: 0 auto;
    text-align: center;
  }
  
  .round,#onoff,.back,.but,.on,.off {
    user-select: none;
  }
     </style>`,
  html: `<label class="switch">
  <div class="round"><input class="input1" name="onoff" id="onoff" type="checkbox">
      <div class="back"><label for="onoff" class="but"><span class="on">0</span><span class="off">I</span></label></div>
  </div>
</label>`,
  fulCode: "Ful Code1",

},
{
  id: 20,
  css: `<style>
  .spinner {
    width: 70.4px;
    height: 70.4px;
    --clr: rgb(247, 197, 159);
    --clr-alpha: rgb(247, 197, 159,.1);
    animation: spinner 1.6s infinite ease;
    transform-style: preserve-3d;
  }
  
  .spinner > div {
    background-color: var(--clr-alpha);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 3.5px solid var(--clr);
  }
  
  .spinner div:nth-of-type(1) {
    transform: translateZ(-35.2px) rotateY(180deg);
  }
  
  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }
  
  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }
  
  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }
  
  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }
  
  .spinner div:nth-of-type(6) {
    transform: translateZ(35.2px);
  }
  
  @keyframes spinner {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }
  
    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }
  
    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
     </style>`,
  html: `<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 21,
  css: `<style>
  .loader10 {
    position: relative;
    width: 75px;
    height: 100px;
  }
  
  .loader10__bar {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 50%;
    background: rgb(0, 0, 0);
    transform-origin: center bottom;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  }
  
  .loader10__bar:nth-child(1) {
    left: 0px;
    transform: scale(1, 0.2);
    -webkit-animation: barUp1 4s infinite;
    animation: barUp1 4s infinite;
  }
  
  .loader10__bar:nth-child(2) {
    left: 15px;
    transform: scale(1, 0.4);
    -webkit-animation: barUp2 4s infinite;
    animation: barUp2 4s infinite;
  }
  
  .loader10__bar:nth-child(3) {
    left: 30px;
    transform: scale(1, 0.6);
    -webkit-animation: barUp3 4s infinite;
    animation: barUp3 4s infinite;
  }
  
  .loader10__bar:nth-child(4) {
    left: 45px;
    transform: scale(1, 0.8);
    -webkit-animation: barUp4 4s infinite;
    animation: barUp4 4s infinite;
  }
  
  .loader10__bar:nth-child(5) {
    left: 60px;
    transform: scale(1, 1);
    -webkit-animation: barUp5 4s infinite;
    animation: barUp5 4s infinite;
  }
  
  .loader10__ball {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 10px;
    height: 10px;
    background: rgb(44, 143, 255);
    border-radius: 50%;
    -webkit-animation: ball624 4s infinite;
    animation: ball624 4s infinite;
  }
  
  @keyframes ball624 {
    0% {
      transform: translate(0, 0);
    }
  
    5% {
      transform: translate(8px, -14px);
    }
  
    10% {
      transform: translate(15px, -10px);
    }
  
    17% {
      transform: translate(23px, -24px);
    }
  
    20% {
      transform: translate(30px, -20px);
    }
  
    27% {
      transform: translate(38px, -34px);
    }
  
    30% {
      transform: translate(45px, -30px);
    }
  
    37% {
      transform: translate(53px, -44px);
    }
  
    40% {
      transform: translate(60px, -40px);
    }
  
    50% {
      transform: translate(60px, 0);
    }
  
    57% {
      transform: translate(53px, -14px);
    }
  
    60% {
      transform: translate(45px, -10px);
    }
  
    67% {
      transform: translate(37px, -24px);
    }
  
    70% {
      transform: translate(30px, -20px);
    }
  
    77% {
      transform: translate(22px, -34px);
    }
  
    80% {
      transform: translate(15px, -30px);
    }
  
    87% {
      transform: translate(7px, -44px);
    }
  
    90% {
      transform: translate(0, -40px);
    }
  
    100% {
      transform: translate(0, 0);
    }
  }
  
  @-webkit-keyframes barUp1 {
    0% {
      transform: scale(1, 0.2);
    }
  
    40% {
      transform: scale(1, 0.2);
    }
  
    50% {
      transform: scale(1, 1);
    }
  
    90% {
      transform: scale(1, 1);
    }
  
    100% {
      transform: scale(1, 0.2);
    }
  }
  
  @keyframes barUp1 {
    0% {
      transform: scale(1, 0.2);
    }
  
    40% {
      transform: scale(1, 0.2);
    }
  
    50% {
      transform: scale(1, 1);
    }
  
    90% {
      transform: scale(1, 1);
    }
  
    100% {
      transform: scale(1, 0.2);
    }
  }
  
  @-webkit-keyframes barUp2 {
    0% {
      transform: scale(1, 0.4);
    }
  
    40% {
      transform: scale(1, 0.4);
    }
  
    50% {
      transform: scale(1, 0.8);
    }
  
    90% {
      transform: scale(1, 0.8);
    }
  
    100% {
      transform: scale(1, 0.4);
    }
  }
  
  @keyframes barUp2 {
    0% {
      transform: scale(1, 0.4);
    }
  
    40% {
      transform: scale(1, 0.4);
    }
  
    50% {
      transform: scale(1, 0.8);
    }
  
    90% {
      transform: scale(1, 0.8);
    }
  
    100% {
      transform: scale(1, 0.4);
    }
  }
  
  @-webkit-keyframes barUp3 {
    0% {
      transform: scale(1, 0.6);
    }
  
    100% {
      transform: scale(1, 0.6);
    }
  }
  
  @keyframes barUp3 {
    0% {
      transform: scale(1, 0.6);
    }
  
    100% {
      transform: scale(1, 0.6);
    }
  }
  
  @-webkit-keyframes barUp4 {
    0% {
      transform: scale(1, 0.8);
    }
  
    40% {
      transform: scale(1, 0.8);
    }
  
    50% {
      transform: scale(1, 0.4);
    }
  
    90% {
      transform: scale(1, 0.4);
    }
  
    100% {
      transform: scale(1, 0.8);
    }
  }
  
  @keyframes barUp4 {
    0% {
      transform: scale(1, 0.8);
    }
  
    40% {
      transform: scale(1, 0.8);
    }
  
    50% {
      transform: scale(1, 0.4);
    }
  
    90% {
      transform: scale(1, 0.4);
    }
  
    100% {
      transform: scale(1, 0.8);
    }
  }
  
  @-webkit-keyframes barUp5 {
    0% {
      transform: scale(1, 1);
    }
  
    40% {
      transform: scale(1, 1);
    }
  
    50% {
      transform: scale(1, 0.2);
    }
  
    90% {
      transform: scale(1, 0.2);
    }
  
    100% {
      transform: scale(1, 1);
    }
  }
  
  @keyframes barUp5 {
    0% {
      transform: scale(1, 1);
    }
  
    40% {
      transform: scale(1, 1);
    }
  
    50% {
      transform: scale(1, 0.2);
    }
  
    90% {
      transform: scale(1, 0.2);
    }
  
    100% {
      transform: scale(1, 1);
    }
  }
     </style>`,
  html: `<div class="loader10">
  <div class="loader10__bar"></div>
  <div class="loader10__bar"></div>
  <div class="loader10__bar"></div>
  <div class="loader10__bar"></div>
  <div class="loader10__bar"></div>
  <div class="loader10__ball"></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 22,
  css: `<style>
  .cube-loader {
    position: relative;
  /* u can choose any size */
    width: 75px;
    height: 75px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 4s linear infinite;
  }
  
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0);
    }
  
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }
  
  .cube-loader .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    /* top: 0;
    left: 0; */
    transform-style: preserve-3d;
  }
  
  .cube-loader .cube-wrapper .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    /* top: 0;
    left: 0; */
                                       /* width 75px / 2 = 37.5px */
    transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
    background: linear-gradient(
      to bottom,
      hsl(330, 3.13%, 25.1%) 0%,
      hsl(177.27, 21.71%, 32.06%) 5.5%,
      hsl(176.67, 34.1%, 36.88%) 12.1%,
      hsl(176.61, 42.28%, 40.7%) 19.6%,
      hsl(176.63, 48.32%, 43.88%) 27.9%,
      hsl(176.66, 53.07%, 46.58%) 36.6%,
      hsl(176.7, 56.94%, 48.91%) 45.6%,
      hsl(176.74, 62.39%, 50.91%) 54.6%,
      hsl(176.77, 69.86%, 52.62%) 63.4%,
      hsl(176.8, 76.78%, 54.08%) 71.7%,
      hsl(176.83, 83.02%, 55.29%) 79.4%,
      hsl(176.85, 88.44%, 56.28%) 86.2%,
      hsl(176.86, 92.9%, 57.04%) 91.9%,
      hsl(176.88, 96.24%, 57.59%) 96.3%,
      hsl(176.88, 98.34%, 57.93%) 99%,
      hsl(176.89, 99.07%, 58.04%) 100%
    );
  }
  
  .cube-top {
    position: absolute;
    width: 75px;
    height: 75px;
    background: hsl(330, 3.13%, 25.1%) 0%;
                        /* width 75px / 2 = 37.5px */
    transform: rotateX(90deg) translateZ(37.5px);
    transform-style: preserve-3d;
  }
  
  .cube-top::before {
    content: '';
    position: absolute;
  /* u can choose any size */
    width: 75px;
    height: 75px;
    background: hsl(176.61, 42.28%, 40.7%) 19.6%;
    transform: translateZ(-90px);
    filter: blur(10px);
    box-shadow: 0 0 10px #323232,
                0 0 20px hsl(176.61, 42.28%, 40.7%) 19.6%,
                0 0 30px #323232,
                0 0 40px hsl(176.61, 42.28%, 40.7%) 19.6%;
  }
  
     </style>`,
  html: `<div class="cube-loader">
  <div class="cube-top"></div>
  <div class="cube-wrapper">
    <span style="--i:0" class="cube-span"></span>
    <span style="--i:1" class="cube-span"></span>
    <span style="--i:2" class="cube-span"></span>
    <span style="--i:3" class="cube-span"></span>
  </div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 23,
  css: `<style>
  .typewriter {
    --blue: #5C86FF;
    --blue-dark: #275EFE;
    --key: #fff;
    --paper: #EEF0FD;
    --text: #D3D4EC;
    --tool: #FBC56C;
    --duration: 3s;
    position: relative;
    -webkit-animation: bounce05 var(--duration) linear infinite;
    animation: bounce05 var(--duration) linear infinite;
  }
  
  .typewriter .slide {
    width: 92px;
    height: 20px;
    border-radius: 3px;
    margin-left: 14px;
    transform: translateX(14px);
    background: linear-gradient(var(--blue), var(--blue-dark));
    -webkit-animation: slide05 var(--duration) ease infinite;
    animation: slide05 var(--duration) ease infinite;
  }
  
  .typewriter .slide:before, .typewriter .slide:after,
  .typewriter .slide i:before {
    content: "";
    position: absolute;
    background: var(--tool);
  }
  
  .typewriter .slide:before {
    width: 2px;
    height: 8px;
    top: 6px;
    left: 100%;
  }
  
  .typewriter .slide:after {
    left: 94px;
    top: 3px;
    height: 14px;
    width: 6px;
    border-radius: 3px;
  }
  
  .typewriter .slide i {
    display: block;
    position: absolute;
    right: 100%;
    width: 6px;
    height: 4px;
    top: 4px;
    background: var(--tool);
  }
  
  .typewriter .slide i:before {
    right: 100%;
    top: -2px;
    width: 4px;
    border-radius: 2px;
    height: 14px;
  }
  
  .typewriter .paper {
    position: absolute;
    left: 24px;
    top: -26px;
    width: 40px;
    height: 46px;
    border-radius: 5px;
    background: var(--paper);
    transform: translateY(46px);
    -webkit-animation: paper05 var(--duration) linear infinite;
    animation: paper05 var(--duration) linear infinite;
  }
  
  .typewriter .paper:before {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    top: 7px;
    border-radius: 2px;
    height: 4px;
    transform: scaleY(0.8);
    background: var(--text);
    box-shadow: 0 12px 0 var(--text), 0 24px 0 var(--text), 0 36px 0 var(--text);
  }
  
  .typewriter .keyboard {
    width: 120px;
    height: 56px;
    margin-top: -10px;
    z-index: 1;
    position: relative;
  }
  
  .typewriter .keyboard:before, .typewriter .keyboard:after {
    content: "";
    position: absolute;
  }
  
  .typewriter .keyboard:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    background: linear-gradient(135deg, var(--blue), var(--blue-dark));
    transform: perspective(10px) rotateX(2deg);
    transform-origin: 50% 100%;
  }
  
  .typewriter .keyboard:after {
    left: 2px;
    top: 25px;
    width: 11px;
    height: 4px;
    border-radius: 2px;
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key),
     75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px
      10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    -webkit-animation: keyboard05 var(--duration) linear infinite;
    animation: keyboard05 var(--duration) linear infinite;
  }
  
  @keyframes bounce05 {
    85%, 92%, 100% {
      transform: translateY(0);
    }
  
    89% {
      transform: translateY(-4px);
    }
  
    95% {
      transform: translateY(2px);
    }
  }
  
  @keyframes slide05 {
    5% {
      transform: translateX(14px);
    }
  
    15%, 30% {
      transform: translateX(6px);
    }
  
    40%, 55% {
      transform: translateX(0);
    }
  
    65%, 70% {
      transform: translateX(-4px);
    }
  
    80%, 89% {
      transform: translateX(-12px);
    }
  
    100% {
      transform: translateX(14px);
    }
  }
  
  @keyframes paper05 {
    5% {
      transform: translateY(46px);
    }
  
    20%, 30% {
      transform: translateY(34px);
    }
  
    40%, 55% {
      transform: translateY(22px);
    }
  
    65%, 70% {
      transform: translateY(10px);
    }
  
    80%, 85% {
      transform: translateY(0);
    }
  
    92%, 100% {
      transform: translateY(46px);
    }
  }
  
  @keyframes keyboard05 {
    5%, 12%, 21%, 30%, 39%, 48%, 57%, 66%, 75%, 84% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    9% {
      box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    18% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 2px 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    27% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 12px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    36% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 12px 0 var(--key), 60px 12px 0 var(--key), 68px 12px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    45% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key), 22px 10px 0 var(--key)
      , 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 
      0 var(--key), 83px 10px 0 var(--key);
    }
  
    54% {
      box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    63% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 12px 0 var(--key);
    }
  
    72% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 2px 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  
    81% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 
      var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 
      37px 12px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 
      var(--key), 83px 10px 0 var(--key);
    }
  }
     </style>`,
  html: `<div class="typewriter">
  <div class="slide"><i></i></div>
  <div class="paper"></div>
  <div class="keyboard"></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 24,
  css: `<style>
  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes counter-clockwise {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(-360deg);
    }
  }
  
  .gearbox {
    background: #111;
    height: 150px;
    width: 200px;
    position: relative;
    border: none;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
  }
  
  .gearbox .overlay {
    border-radius: 6px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    box-shadow: inset 0px 0px 20px black;
    transition: background 0.2s;
  }
  
  .gearbox .overlay {
    background: transparent;
  }
  
  .gear {
    position: absolute;
    height: 60px;
    width: 60px;
    box-shadow: 0px -1px 0px 0px #888888, 0px 1px 0px 0px black;
    border-radius: 30px;
  }
  
  .gear.large {
    height: 120px;
    width: 120px;
    border-radius: 60px;
  }
  
  .gear.large:after {
    height: 96px;
    width: 96px;
    border-radius: 48px;
    margin-left: -48px;
    margin-top: -48px;
  }
  
  .gear.one {
    top: 12px;
    left: 10px;
  }
  
  .gear.two {
    top: 61px;
    left: 60px;
  }
  
  .gear.three {
    top: 110px;
    left: 10px;
  }
  
  .gear.four {
    top: 13px;
    left: 128px;
  }
  
  .gear:after {
    content: "";
    position: absolute;
    height: 36px;
    width: 36px;
    border-radius: 36px;
    background: #111;
    top: 50%;
    left: 50%;
    margin-left: -18px;
    margin-top: -18px;
    z-index: 3;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1), inset 0px 0px 10px rgba(0, 0, 0, 0.1),
     inset 0px 2px 0px 0px #090909, inset 0px -1px 0px 0px #888888;
  }
  
  .gear-inner {
    position: relative;
    height: 100%;
    width: 100%;
    background: #555;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .large .gear-inner {
    border-radius: 60px;
  }
  
  .gear.one .gear-inner {
    animation: counter-clockwise 3s infinite linear;
  }
  
  .gear.two .gear-inner {
    animation: clockwise 3s infinite linear;
  }
  
  .gear.three .gear-inner {
    animation: counter-clockwise 3s infinite linear;
  }
  
  .gear.four .gear-inner {
    animation: counter-clockwise 6s infinite linear;
  }
  
  .gear-inner .bar {
    background: #555;
    height: 16px;
    width: 76px;
    position: absolute;
    left: 50%;
    margin-left: -38px;
    top: 50%;
    margin-top: -8px;
    border-radius: 2px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .large .gear-inner .bar {
    margin-left: -68px;
    width: 136px;
  }
  
  .gear-inner .bar:nth-child(2) {
    transform: rotate(60deg);
  }
  
  .gear-inner .bar:nth-child(3) {
    transform: rotate(120deg);
  }
  
  .gear-inner .bar:nth-child(4) {
    transform: rotate(90deg);
  }
  
  .gear-inner .bar:nth-child(5) {
    transform: rotate(30deg);
  }
  
  .gear-inner .bar:nth-child(6) {
    transform: rotate(150deg);
  }
     </style>`,
  html: `
  <div class="gearbox">
  <div class="overlay"></div>
    <div class="gear one">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="gear two">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="gear three">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="gear four large">
      <div class="gear-inner">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
`,
  fulCode: "Ful Code1",

},
{
  id: 25,
  css: `<style>
  .loader7 {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    width: 160px;
    height: 100px;
    margin-left: -80px;
    margin-top: -50px;
    border-radius: 5px;
    background: #1e3f57;
    animation: dot1_ 3s cubic-bezier(0.55,0.3,0.24,0.99) infinite;
  }
  
  .loader7:nth-child(2) {
    z-index: 11;
    width: 150px;
    height: 90px;
    margin-top: -45px;
    margin-left: -75px;
    border-radius: 3px;
    background: #3c517d;
    animation-name: dot2_;
  }
  
  .loader7:nth-child(3) {
    z-index: 12;
    width: 40px;
    height: 20px;
    margin-top: 50px;
    margin-left: -20px;
    border-radius: 0 0 5px 5px;
    background: #6bb2cd;
    animation-name: dot3_;
  }
  
  @keyframes dot1_ {
    3%,97% {
      width: 160px;
      height: 100px;
      margin-top: -50px;
      margin-left: -80px;
    }
  
    30%,36% {
      width: 80px;
      height: 120px;
      margin-top: -60px;
      margin-left: -40px;
    }
  
    63%,69% {
      width: 40px;
      height: 80px;
      margin-top: -40px;
      margin-left: -20px;
    }
  }
  
  @keyframes dot2_ {
    3%,97% {
      height: 90px;
      width: 150px;
      margin-left: -75px;
      margin-top: -45px;
    }
  
    30%,36% {
      width: 70px;
      height: 96px;
      margin-left: -35px;
      margin-top: -48px;
    }
  
    63%,69% {
      width: 32px;
      height: 60px;
      margin-left: -16px;
      margin-top: -30px;
    }
  }
  
  @keyframes dot3_ {
    3%,97% {
      height: 20px;
      width: 40px;
      margin-left: -20px;
      margin-top: 50px;
    }
  
    30%,36% {
      width: 8px;
      height: 8px;
      margin-left: -5px;
      margin-top: 49px;
      border-radius: 8px;
    }
  
    63%,69% {
      width: 16px;
      height: 4px;
      margin-left: -8px;
      margin-top: -37px;
      border-radius: 10px;
    }
  }
     </style>`,
  html: `<div class="containerQ">
	<div class="loader7"></div>
	<div class="loader7"></div>
	<div class="loader7"></div>
</div>
`,
  fulCode: "Ful Code1",

},
{
  id: 26,
  css: `<style>
  .loader8 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
   }
   
   .loader8:before, .loader8:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
   }
   
   .loader8:before {
    animation: before8 2s infinite;
   }
   
   .loader8:after {
    animation: after6 2s infinite;
   }
   
   @keyframes before8 {
    0% {
     width: 0.5em;
     box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
   
    35% {
     width: 2.5em;
     box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }
   
    70% {
     width: 0.5em;
     box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }
   
    100% {
     box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
   }
   
   @keyframes after6 {
    0% {
     height: 0.5em;
     box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
   
    35% {
     height: 2.5em;
     box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }
   
    70% {
     height: 0.5em;
     box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }
   
    100% {
     box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
   }
   
   .loader8 {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
   }
     </style>`,
  html: `
  <div class="loader8"></div>`,
  fulCode: "Ful Code1",

},
{
  id: 27,
  css: `<style>
  .socket {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
  }
  
  .hex-brick {
    background: #000000;
    width: 30px;
    height: 17px;
    position: absolute;
    top: 5px;
    animation-name: fade00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fade00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
  }
  
  .h2 {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
  }
  
  .h3 {
    transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
  }
  
  .gel {
    height: 30px;
    width: 30px;
    transition: all .3s;
    -webkit-transition: all .3s;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .center-gel {
    margin-left: -15px;
    margin-top: -15px;
    animation-name: pulse00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    -webkit-animation-name: pulse00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
  }
  
  .c1 {
    margin-left: -47px;
    margin-top: -15px;
  }
  
  .c2 {
    margin-left: -31px;
    margin-top: -43px;
  }
  
  .c3 {
    margin-left: 1px;
    margin-top: -43px;
  }
  
  .c4 {
    margin-left: 17px;
    margin-top: -15px;
  }
  
  .c5 {
    margin-left: -31px;
    margin-top: 13px;
  }
  
  .c6 {
    margin-left: 1px;
    margin-top: 13px;
  }
  
  .c7 {
    margin-left: -63px;
    margin-top: -43px;
  }
  
  .c8 {
    margin-left: 33px;
    margin-top: -43px;
  }
  
  .c9 {
    margin-left: -15px;
    margin-top: 41px;
  }
  
  .c10 {
    margin-left: -63px;
    margin-top: 13px;
  }
  
  .c11 {
    margin-left: 33px;
    margin-top: 13px;
  }
  
  .c12 {
    margin-left: -15px;
    margin-top: -71px;
  }
  
  .c13 {
    margin-left: -47px;
    margin-top: -71px;
  }
  
  .c14 {
    margin-left: 17px;
    margin-top: -71px;
  }
  
  .c15 {
    margin-left: -47px;
    margin-top: 41px;
  }
  
  .c16 {
    margin-left: 17px;
    margin-top: 41px;
  }
  
  .c17 {
    margin-left: -79px;
    margin-top: -15px;
  }
  
  .c18 {
    margin-left: 49px;
    margin-top: -15px;
  }
  
  .c19 {
    margin-left: -63px;
    margin-top: -99px;
  }
  
  .c20 {
    margin-left: 33px;
    margin-top: -99px;
  }
  
  .c21 {
    margin-left: 1px;
    margin-top: -99px;
  }
  
  .c22 {
    margin-left: -31px;
    margin-top: -99px;
  }
  
  .c23 {
    margin-left: -63px;
    margin-top: 69px;
  }
  
  .c24 {
    margin-left: 33px;
    margin-top: 69px;
  }
  
  .c25 {
    margin-left: 1px;
    margin-top: 69px;
  }
  
  .c26 {
    margin-left: -31px;
    margin-top: 69px;
  }
  
  .c27 {
    margin-left: -79px;
    margin-top: -15px;
  }
  
  .c28 {
    margin-left: -95px;
    margin-top: -43px;
  }
  
  .c29 {
    margin-left: -95px;
    margin-top: 13px;
  }
  
  .c30 {
    margin-left: 49px;
    margin-top: 41px;
  }
  
  .c31 {
    margin-left: -79px;
    margin-top: -71px;
  }
  
  .c32 {
    margin-left: -111px;
    margin-top: -15px;
  }
  
  .c33 {
    margin-left: 65px;
    margin-top: -43px;
  }
  
  .c34 {
    margin-left: 65px;
    margin-top: 13px;
  }
  
  .c35 {
    margin-left: -79px;
    margin-top: 41px;
  }
  
  .c36 {
    margin-left: 49px;
    margin-top: -71px;
  }
  
  .c37 {
    margin-left: 81px;
    margin-top: -15px;
  }
  
  .r1 {
    animation-name: pulse00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .2s;
    -webkit-animation-name: pulse00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: .2s;
  }
  
  .r2 {
    animation-name: pulse00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .4s;
    -webkit-animation-name: pulse00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: .4s;
  }
  
  .r3 {
    animation-name: pulse00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .6s;
    -webkit-animation-name: pulse00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: .6s;
  }
  
  .r1 > .hex-brick {
    animation-name: fade00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .2s;
    -webkit-animation-name: fade00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: .2s;
  }
  
  .r2 > .hex-brick {
    animation-name: fade00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .4s;
    -webkit-animation-name: fade00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: .4s;
  }
  
  .r3 > .hex-brick {
    animation-name: fade00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .6s;
    -webkit-animation-name: fade00;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: .6s;
  }
  
  @keyframes pulse00 {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  
    50% {
      -webkit-transform: scale(0.01);
      transform: scale(0.01);
    }
  
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  
  @keyframes fade00 {
    0% {
      background: #252525;
    }
  
    50% {
      background: #000000;
    }
  
    100% {
      background: #353535;
    }
  }
  
     </style>`,
  html: `
  <div class="socket">
    <div class="gel center-gel">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c1 r1">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c2 r1">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c3 r1">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c4 r1">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c5 r1">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c6 r1">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    
    <div class="gel c7 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    
    <div class="gel c8 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c9 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c10 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c11 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c12 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c13 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c14 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c15 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c16 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c17 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c18 r2">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c19 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c20 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c21 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c22 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c23 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c24 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c25 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c26 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c28 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c29 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c30 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c31 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c32 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c33 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c34 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c35 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c36 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    <div class="gel c37 r3">
      <div class="hex-brick h1"></div>
      <div class="hex-brick h2"></div>
      <div class="hex-brick h3"></div>
    </div>
    
  </div>
`,
  fulCode: "Ful Code1",

},
{
  id: 28,
  css: `<style>
  .wheel-and-hamster {
    --dur: 1s;
    position: relative;
    width: 12em;
    height: 12em;
    font-size: 14px;
  }
  
  .wheel,
  .hamster,
  .hamster div,
  .spoke {
    position: absolute;
  }
  
  .wheel,
  .spoke {
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .wheel {
    background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
    z-index: 2;
  }
  
  .hamster {
    animation: hamster var(--dur) ease-in-out infinite;
    top: 50%;
    left: calc(50% - 3.5em);
    width: 7em;
    height: 3.75em;
    transform: rotate(4deg) translate(-0.8em,1.85em);
    transform-origin: 50% 0;
    z-index: 1;
  }
  
  .hamster__head {
    animation: hamsterHead var(--dur) ease-in-out infinite;
    background: hsl(30,90%,55%);
    border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
    box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
      0.75em -1.55em 0 hsl(30,90%,90%) inset;
    top: 0;
    left: -2em;
    width: 2.75em;
    height: 2.5em;
    transform-origin: 100% 50%;
  }
  
  .hamster__ear {
    animation: hamsterEar var(--dur) ease-in-out infinite;
    background: hsl(0,90%,85%);
    border-radius: 50%;
    box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
    top: -0.25em;
    right: -0.25em;
    width: 0.75em;
    height: 0.75em;
    transform-origin: 50% 75%;
  }
  
  .hamster__eye {
    animation: hamsterEye var(--dur) linear infinite;
    background-color: hsl(0,0%,0%);
    border-radius: 50%;
    top: 0.375em;
    left: 1.25em;
    width: 0.5em;
    height: 0.5em;
  }
  
  .hamster__nose {
    background: hsl(0,90%,75%);
    border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
    top: 0.75em;
    left: 0;
    width: 0.2em;
    height: 0.25em;
  }
  
  .hamster__body {
    animation: hamsterBody var(--dur) ease-in-out infinite;
    background: hsl(30,90%,90%);
    border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
    box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
      0.15em -0.5em 0 hsl(30,90%,80%) inset;
    top: 0.25em;
    left: 2em;
    width: 4.5em;
    height: 3em;
    transform-origin: 17% 50%;
    transform-style: preserve-3d;
  }
  
  .hamster__limb--fr,
  .hamster__limb--fl {
    clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
    top: 2em;
    left: 0.5em;
    width: 1em;
    height: 1.5em;
    transform-origin: 50% 0;
  }
  
  .hamster__limb--fr {
    animation: hamsterFRLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
    transform: rotate(15deg) translateZ(-1px);
  }
  
  .hamster__limb--fl {
    animation: hamsterFLLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
    transform: rotate(15deg);
  }
  
  .hamster__limb--br,
  .hamster__limb--bl {
    border-radius: 0.75em 0.75em 0 0;
    clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
    top: 1em;
    left: 2.8em;
    width: 1.5em;
    height: 2.5em;
    transform-origin: 50% 30%;
  }
  
  .hamster__limb--br {
    animation: hamsterBRLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
    transform: rotate(-25deg) translateZ(-1px);
  }
  
  .hamster__limb--bl {
    animation: hamsterBLLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
    transform: rotate(-25deg);
  }
  
  .hamster__tail {
    animation: hamsterTail var(--dur) linear infinite;
    background: hsl(0,90%,85%);
    border-radius: 0.25em 50% 50% 0.25em;
    box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
    top: 1.5em;
    right: -0.5em;
    width: 1em;
    height: 0.5em;
    transform: rotate(30deg) translateZ(-1px);
    transform-origin: 0.25em 0.25em;
  }
  
  .spoke {
    animation: spoke var(--dur) linear infinite;
    background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
      linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
  }
  
  /* Animations */
  @keyframes hamster {
    from, to {
      transform: rotate(4deg) translate(-0.8em,1.85em);
    }
  
    50% {
      transform: rotate(0) translate(-0.8em,1.85em);
    }
  }
  
  @keyframes hamsterHead {
    from, 25%, 50%, 75%, to {
      transform: rotate(0);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(8deg);
    }
  }
  
  @keyframes hamsterEye {
    from, 90%, to {
      transform: scaleY(1);
    }
  
    95% {
      transform: scaleY(0);
    }
  }
  
  @keyframes hamsterEar {
    from, 25%, 50%, 75%, to {
      transform: rotate(0);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(12deg);
    }
  }
  
  @keyframes hamsterBody {
    from, 25%, 50%, 75%, to {
      transform: rotate(0);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(-2deg);
    }
  }
  
  @keyframes hamsterFRLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(50deg) translateZ(-1px);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(-30deg) translateZ(-1px);
    }
  }
  
  @keyframes hamsterFLLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(-30deg);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(50deg);
    }
  }
  
  @keyframes hamsterBRLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(-60deg) translateZ(-1px);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(20deg) translateZ(-1px);
    }
  }
  
  @keyframes hamsterBLLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(20deg);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(-60deg);
    }
  }
  
  @keyframes hamsterTail {
    from, 25%, 50%, 75%, to {
      transform: rotate(30deg) translateZ(-1px);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(10deg) translateZ(-1px);
    }
  }
  
  @keyframes spoke {
    from {
      transform: rotate(0);
    }
  
    to {
      transform: rotate(-1turn);
    }
  }
     </style>`,
  html: `<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 29,
  css: `<style>
  .pyramid-loader {
    position: relative;
    width: 300px;
    height: 300px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }
  
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }
  
  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }
  
  .pyramid-loader .wrapper .side {
    width: 70px;
    height: 70px;
  /* you can choose any gradient or color you want */
    /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  
  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }
  
  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }
  
  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }
  
  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }
  
  .pyramid-loader .wrapper .shadow {
    width: 60px;
    height: 60px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
  }
     </style>`,
  html: `<div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>  
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 30,
  css: `<style>
  #wifi-loader {
    --background: #62abff;
    --front-color: #4f29f0;
    --back-color: #c3c8de;
    --text-color: #414856;
    width: 64px;
    height: 64px;
    border-radius: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #wifi-loader svg {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #wifi-loader svg circle {
    position: absolute;
    fill: none;
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: rotate(-100deg);
    transform-origin: center;
  }
  
  #wifi-loader svg circle.back {
    stroke: var(--back-color);
  }
  
  #wifi-loader svg circle.front {
    stroke: var(--front-color);
  }
  
  #wifi-loader svg.circle-outer {
    height: 86px;
    width: 86px;
  }
  
  #wifi-loader svg.circle-outer circle {
    stroke-dasharray: 62.75 188.25;
  }
  
  #wifi-loader svg.circle-outer circle.back {
    animation: circle-outer135 1.8s ease infinite 0.3s;
  }
  
  #wifi-loader svg.circle-outer circle.front {
    animation: circle-outer135 1.8s ease infinite 0.15s;
  }
  
  #wifi-loader svg.circle-middle {
    height: 60px;
    width: 60px;
  }
  
  #wifi-loader svg.circle-middle circle {
    stroke-dasharray: 42.5 127.5;
  }
  
  #wifi-loader svg.circle-middle circle.back {
    animation: circle-middle6123 1.8s ease infinite 0.25s;
  }
  
  #wifi-loader svg.circle-middle circle.front {
    animation: circle-middle6123 1.8s ease infinite 0.1s;
  }
  
  #wifi-loader svg.circle-inner {
    height: 34px;
    width: 34px;
  }
  
  #wifi-loader svg.circle-inner circle {
    stroke-dasharray: 22 66;
  }
  
  #wifi-loader svg.circle-inner circle.back {
    animation: circle-inner162 1.8s ease infinite 0.2s;
  }
  
  #wifi-loader svg.circle-inner circle.front {
    animation: circle-inner162 1.8s ease infinite 0.05s;
  }
  
  #wifi-loader .text {
    position: absolute;
    bottom: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: lowercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;
  }
  
  #wifi-loader .text::before, #wifi-loader .text::after {
    content: attr(data-text);
  }
  
  #wifi-loader .text::before {
    color: var(--text-color);
  }
  
  #wifi-loader .text::after {
    color: var(--front-color);
    animation: text-animation76 3.6s ease infinite;
    position: absolute;
    left: 0;
  }
  
  @keyframes circle-outer135 {
    0% {
      stroke-dashoffset: 25;
    }
  
    25% {
      stroke-dashoffset: 0;
    }
  
    65% {
      stroke-dashoffset: 301;
    }
  
    80% {
      stroke-dashoffset: 276;
    }
  
    100% {
      stroke-dashoffset: 276;
    }
  }
  
  @keyframes circle-middle6123 {
    0% {
      stroke-dashoffset: 17;
    }
  
    25% {
      stroke-dashoffset: 0;
    }
  
    65% {
      stroke-dashoffset: 204;
    }
  
    80% {
      stroke-dashoffset: 187;
    }
  
    100% {
      stroke-dashoffset: 187;
    }
  }
  
  @keyframes circle-inner162 {
    0% {
      stroke-dashoffset: 9;
    }
  
    25% {
      stroke-dashoffset: 0;
    }
  
    65% {
      stroke-dashoffset: 106;
    }
  
    80% {
      stroke-dashoffset: 97;
    }
  
    100% {
      stroke-dashoffset: 97;
    }
  }
  
  @keyframes text-animation76 {
    0% {
      clip-path: inset(0 100% 0 0);
    }
  
    50% {
      clip-path: inset(0);
    }
  
    100% {
      clip-path: inset(0 0 0 100%);
    }
  }
   
     </style>`,
  html: `<div id="wifi-loader">
  <svg class="circle-outer" viewBox="0 0 86 86">
      <circle class="back" cx="43" cy="43" r="40"></circle>
      <circle class="front" cx="43" cy="43" r="40"></circle>
      <circle class="new" cx="43" cy="43" r="40"></circle>
  </svg>
  <svg class="circle-middle" viewBox="0 0 60 60">
      <circle class="back" cx="30" cy="30" r="27"></circle>
      <circle class="front" cx="30" cy="30" r="27"></circle>
  </svg>
  <svg class="circle-inner" viewBox="0 0 34 34">
      <circle class="back" cx="17" cy="17" r="14"></circle>
      <circle class="front" cx="17" cy="17" r="14"></circle>
  </svg>
  <div class="text" data-text="Searching"></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 31,
  css: `<style>
  .loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  .loading svg polyline#back {
    fill: none;
    stroke: #ff4d5033;
  }
  
  .loading svg polyline#front {
    fill: none;
    stroke: #ff4d4f;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }
  
  @keyframes dash_682 {
    72.5% {
      opacity: 0;
    }
  
    to {
      stroke-dashoffset: 0;
    }
  }
  
     </style>`,
  html: `<div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 32,
  css: `<style>
  .loader9 {
    width: 120px;
    height: 150px;
    background-color: gray;
    background-repeat: no-repeat;
    background-image: linear-gradient(#ddd 50%, #bbb 51%),
      linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
      radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
      radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
      radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%);
    background-position: 0 20px, 45px 0, 8px 6px, 55px 3px, 75px 3px, 95px 3px;
    background-size: 100% 4px, 1px 23px, 30px 8px, 15px 15px, 15px 15px, 15px 15px;
    position: relative;
    border-radius: 6%;
    animation: shake 3s ease-in-out infinite;
    transform-origin: 60px 180px;
  }
  
  .loader9:before {
    content: "";
    position: absolute;
    left: 5px;
    top: 100%;
    width: 7px;
    height: 5px;
    background: #aaa;
    border-radius: 0 0 4px 4px;
    box-shadow: 102px 0 #aaa;
  }
  
  .loader9:after {
    content: "";
    position: absolute;
    width: 95px;
    height: 95px;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    background-color: #bbdefb;
    background-image: linear-gradient( to right, #0004 0%, #0004 49%, #0000 50%, #0000 100% ),
      linear-gradient(135deg, #64b5f6 50%, #607d8b 51%);
    background-size: 30px 100%, 90px 80px;
    border-radius: 50%;
    background-repeat: repeat, no-repeat;
    background-position: 0 0;
    box-sizing: border-box;
    border: 10px solid #DDD;
    box-shadow: 0 0 0 4px #999 inset, 0 0 6px 6px #0004 inset;
    animation: spin 3s ease-in-out infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
  
    50% {
      transform: rotate(360deg)
    }
  
    75% {
      transform: rotate(750deg)
    }
  
    100% {
      transform: rotate(1800deg)
    }
  }
  
  @keyframes shake {
    65%, 80%, 88%, 96% {
      transform: rotate(0.5deg)
    }
  
    50%, 75%, 84%, 92% {
      transform: rotate(-0.5deg)
    }
  
    0%, 50%, 100% {
      transform: rotate(0)
    }
  }
     </style>`,
  html: `<div class="loader9"></div>`,
  fulCode: "Ful Code1",

},
{
  id: 33,
  css: `<style>
  .🤚 {
    --skin-color: #E4C560;
    --tap-speed: 0.6s;
    --tap-stagger: 0.1s;
    position: relative;
    width: 80px;
    height: 60px;
    margin-left: 80px;
  }
  
  .🤚:before {
    content: '';
    display: block;
    width: 180%;
    height: 75%;
    position: absolute;
    top: 70%;
    right: 20%;
    background-color: black;
    border-radius: 40px 10px;
    filter: blur(10px);
    opacity: 0.3;
  }
  
  .🌴 {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--skin-color);
    border-radius: 10px 40px;
  }
  
  .👍 {
    position: absolute;
    width: 120%;
    height: 38px;
    background-color: var(--skin-color);
    bottom: -18%;
    right: 1%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-20deg);
    border-radius: 30px 20px 20px 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-left: 2px solid rgba(0, 0, 0, 0.1);
  }
  
  .👍:after {
    width: 20%;
    height: 60%;
    content: '';
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    bottom: -8%;
    left: 5px;
    border-radius: 60% 10% 10% 30%;
    border-right: 2px solid rgba(0, 0, 0, 0.05);
  }
  
  .👉 {
    position: absolute;
    width: 80%;
    height: 35px;
    background-color: var(--skin-color);
    bottom: 32%;
    right: 64%;
    transform-origin: 100% 20px;
    animation-duration: calc(var(--tap-speed) * 2);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transform: rotate(10deg);
  }
  
  .👉:before {
    content: '';
    position: absolute;
    width: 140%;
    height: 30px;
    background-color: var(--skin-color);
    bottom: 8%;
    right: 65%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-60deg);
    border-radius: 20px;
  }
  
  .👉:nth-child(1) {
    animation-delay: 0;
    filter: brightness(70%);
    animation-name: tap-upper-1;
  }
  
  .👉:nth-child(2) {
    animation-delay: var(--tap-stagger);
    filter: brightness(80%);
    animation-name: tap-upper-2;
  }
  
  .👉:nth-child(3) {
    animation-delay: calc(var(--tap-stagger) * 2);
    filter: brightness(90%);
    animation-name: tap-upper-3;
  }
  
  .👉:nth-child(4) {
    animation-delay: calc(var(--tap-stagger) * 3);
    filter: brightness(100%);
    animation-name: tap-upper-4;
  }
  
  @keyframes tap-upper-1 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(0.4);
    }
  
    40% {
      transform: rotate(50deg) scale(0.4);
    }
  }
  
  @keyframes tap-upper-2 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(0.6);
    }
  
    40% {
      transform: rotate(50deg) scale(0.6);
    }
  }
  
  @keyframes tap-upper-3 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(0.8);
    }
  
    40% {
      transform: rotate(50deg) scale(0.8);
    }
  }
  
  @keyframes tap-upper-4 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(1);
    }
  
    40% {
      transform: rotate(50deg) scale(1);
    }
  }
  
     </style>`,
  html: `<div class="🤚">
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="🌴"></div>		
	<div class="👍"></div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 34,
  css: `<style>
  .containerZ {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .tree {
    position: relative;
    width: 50px;
    height: 50px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg);
    animation: treeAnimate 5s linear infinite;
  }
  
  @keyframes treeAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
  
    100% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }
  
  .tree div {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(25px * var(--x))) translateZ(0px);
  }
  
  .tree div.branch span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #69c069, #77dd77);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-bottom: 5px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(28.5px);
  }
  
  .tree div.stem span {
    position: absolute;
    top: 110px;
   /* updated top value */
    left: calc(50% - 7.5px);
    width: 15px;
    height: 50%;
    background: linear-gradient(90deg, #bb4622, #df7214);
    border-bottom: 5px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(7.5px);
  }
  
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    filter: blur(20px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-65px);
  }
  
     </style>`,
  html: `<div class="containerZ">
  <div class="tree">
    <div class="branch" style="--x:0">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div class="branch" style="--x:1">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div class="branch" style="--x:2">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div class="branch" style="--x:3">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div class="stem">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <span class="shadow"></span>
  </div>
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 35,
  css: `<style>
  .containerF {
    width: 7em;
    height: 7em;
    position: relative;
  }
  
  .buttonF {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #090909;
    background-color: transparent;
    background-image: linear-gradient(145deg, #171717, #444245);
    box-sizing: border-box;
    box-shadow: inset 2px 2px 0 #7d7c7e, inset -2px -2px 0px #1c1c1c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .containerF input {
    display: none;
  }
  
  .buttonF::before {
    position: absolute;
    content: "";
    width: 7.25em;
    height: 7.25em;
    border-radius: inherit;
    background-color: transparent;
    background-image: linear-gradient(145deg, #262626, #606060);
    z-index: -1;
    box-shadow: 11px 11px 22px #141414, -11px -11px 22px #525252;
  }
  
  .buttonF .icon {
    width: 60px;
    height: 60px;
    display: inline-block;
  }
  
  .buttonF .icon svg {
    height: 100%;
    width: 100%;
    fill: #a5a5a5;
  }
  
  .containerF  input:checked + .buttonF {
    box-shadow: inset -2px -2px 0 #5e5e5e,inset 2px 2px 0 #1c1c1c;
    border: 4px solid rgba(77, 124, 255, 0.281);
    animation: animeBorder .3s linear alternate-reverse infinite;
  }
  
  .containerF input:checked + .buttonF .icon svg {
    fill: rgb(77, 124, 255);
    animation: animeFill .3s linear alternate-reverse infinite;
  }
  
  @keyframes animeFill {
    to {
      fill: rgba(77, 124, 255, 0.642);
    }
  }
  
  @keyframes animeBorder {
    to {
      border-color: rgba(77, 124, 255, 0.137);
    }
  }
     </style>`,
  html: `<div class="containerF">
  <input id="checkbox" type="checkbox">
   <label class="buttonF" for="checkbox">
    <span class="icon">
     <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
     <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
      stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
      <path d="M17.35 12.7901C17.1686 12.7907 16.9935 12.7229 16.86 12.6001C15.5322
       11.411 13.8124 10.7534 12.03 10.7534C10.2476 10.7534 8.52779 11.411 7.19999 
       12.6001C7.12649 12.6658 7.04075 12.7164 6.94767 12.749C6.85459 12.7816 6.756
        12.7955 6.65755 12.7899C6.55909 12.7843 6.4627 12.7594 6.37389 12.7165C6.28508
         12.6736 6.2056 12.6137 6.13999 12.5401C6.0109 12.3892 5.94595 12.1939 5.95904 
         11.9958C5.97212 11.7977 6.06219 11.6126 6.20999 11.4801C7.80752 10.0423 9.88072
          9.2467 12.03 9.2467C14.1793 9.2467 16.2525 10.0423 17.85 11.4801C17.9978 11.6126
           18.0879 11.7977 18.1009 11.9958C18.114 12.1939 18.0491 12.3892 17.92 12.5401C17.8469
            12.6181 17.7586 12.6806 17.6606 12.7236C17.5627 12.7665 17.457 12.7892 17.35 12.7901Z"
             fill=""></path> <path d="M20 10C19.811 9.99907 19.6292 9.92777 19.49 9.80002C17.4685
              7.87306 14.7828 6.79812 11.99 6.79812C9.19719 6.79812 6.51153 7.87306 4.48999
               9.80002C4.42116 9.88186 4.33563 9.94804 4.23912 9.99411C4.14262 10.0402 4.03738
                10.0651 3.93046 10.0672C3.82354 10.0692 3.71742 10.0484 3.61921 10.0061C3.521
                 9.96375 3.43298 9.90092 3.36105 9.82179C3.28911 9.74267 3.23493 9.64907 3.20214
                  9.54729C3.16934 9.4455 3.15869 9.33788 3.17091 9.23164C3.18312 9.1254 3.21791 
                  9.023 3.27294 8.93131C3.32798 8.83962 3.40198 8.76076 3.48999 8.70002C5.78577 
                  6.52533 8.82774 5.31329 11.99 5.31329C15.1522 5.31329 18.1942 6.52533 20.49
                   8.70002C20.5994 8.80134 20.6761 8.93298 20.7103 9.07811C20.7446 9.22324
                    20.7348 9.37527 20.6822 9.5148C20.6296 9.65433 20.5366 9.77502 20.4151
                     9.86145C20.2936 9.94787 20.1491 9.99612 20 10Z" fill=""></path> 
                     <path d="M9.38 15.64C9.26356 15.64 9.14873 15.6129 9.04459 
                     15.5608C8.94044 15.5088 8.84986 15.4332 8.78 15.34C8.7196 
                     15.2617 8.67551 15.1721 8.65032 15.0765C8.62513 14.9809 
                     8.61936 14.8812 8.63334 14.7834C8.64732 14.6855 8.68078
                      14.5914 8.73173 14.5067C8.78268 14.4219 8.8501 14.3483 
                      8.93 14.29C9.81277 13.6145 10.8934 13.2485 12.005 
                      13.2485C13.1166 13.2485 14.1972 13.6145 15.08 
                      14.29C15.1588 14.3491 15.2252 14.4232 15.2754 
                      14.5079C15.3255 14.5926 15.3585 14.6865 
                      15.3725 14.784C15.3864 14.8815 15.381 
                      14.9807 15.3565 15.0762C15.3321 15.1716 
                      15.2891 15.2612 15.23 15.34C15.1091 15.497 14.9316 15.6005 14.7355
                       15.6285C14.5394 15.6565 14.34 15.6068 14.18 15.49C13.5548 15.014 
                       12.7908 14.7561 12.005 14.7561C11.2192 14.7561 10.4551 
                       15.014 9.83 15.49C9.69921 15.5855 9.54193 15.6379 9.38 15.64Z" 
                       fill=""></path> <path d="M12 18.75C11.8011 18.75 11.6103 18.671
                        11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25
                         17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011
                          17.25 12 17.25C12.1989 17.25 12.3897 17.329 12.5303 17.4697C12.671
                           17.6103 12.75 17.8011 12.75 18C12.75 18.1989 12.671 18.3897 12.5303
                            18.5303C12.3897 18.671 12.1989 18.75 12 18.75Z" fill=""></path>
                             </g></svg> 
   </span> 
   </label> 
</div>`,
  fulCode: "Ful Code1",

},
{
  id: 36,
  css: `<style>
  label, .bubble {
    display: block;
    -webkit-tap-highlight-color: transparent;
  }
  
  label {
    animation: float74 4s ease-in-out infinite;
  }
  
  .bubble, .bubble:before, .bubble:after {
    transition-duration: 0.2s;
  }
  
  .bubble, .bubble:after {
    border-radius: 50%;
  }
  
  .bubble {
    background-image: radial-gradient(8% 8% at 22% 28%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
      radial-gradient(8% 8% at 23% 27%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
      radial-gradient(8% 8% at 24% 26%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
      radial-gradient(8% 8% at 25% 25%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
      radial-gradient(8% 8% at 26% 24%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
      radial-gradient(8% 8% at 27% 23%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
      radial-gradient(8% 8% at 28% 22%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%);
    box-shadow: 0 -0.06em 0.1em hsl(0,90%,100%) inset,
      0 -0.15em 0.4em hsl(0,90%,45%) inset,
      0 0.05em 0.05em hsl(0,90%,45%) inset,
      0.05em 0 0.1em hsl(0,90%,100%) inset,
      -0.05em 0 0.1em hsl(0,90%,100%) inset,
      0 0.1em 0.4em hsl(0,90%,60%) inset;
    cursor: pointer;
    position: relative;
    width: 3em;
    height: 3em;
    transform-style: preserve-3d;
    transition-property: box-shadow, transform, width, height;
    transition-timing-function: ease-in-out, ease-in-out, var(--bubbleTiming), var(--bubbleTiming);
    will-change: transform;
    -webkit-appearance: none;
    appearance: none;
    z-index: 0;
  }
  
  .bubble:before, .bubble:after {
    content: "";
    display: block;
    position: absolute;
    transition-timing-function: var(--bubbleTiming);
  }
  
  .bubble:before {
    border-radius: 0.75em;
    box-shadow: 0 0 0 0.5em hsl(0,0%,100%) inset;
    filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));
    top: 50%;
    left: 50%;
    width: 1.5em;
    height: 1.5em;
    transform: translate3d(-50%,-50%,-1px);
    z-index: -1;
  }
  
  .bubble:after {
    background: radial-gradient(100% 100% at center,hsla(0,0%,0%,0) 35%,hsla(0,0%,0%,0.2) 48%,hsla(0,0%,0%,0) 50%);
    filter: blur(4px);
    top: 0.6em;
    left: 0.6em;
    width: 100%;
    height: 100%;
    transform: translate3d(0,0,-1px);
    z-index: -2;
  }
  
  .bubble:focus, .bubble:hover {
    transform: scale(1.1);
    outline: none;
  }
  
  .bubble:focus:active, .bubble:hover:active {
    width: 3.6em;
    height: 2.4em;
  }
  
  .bubble:focus:before, .bubble:hover:before {
    filter: drop-shadow(0.75em 0.75em 4px hsla(0,0%,0%,0.2));
  }
  
  .bubble:focus:after, .bubble:hover:after {
    transform: translate3d(0.15em,0.15em,-1px);
  }
  
  .bubble:checked {
    box-shadow: 0 -0.06em 0.1em hsl(120,90%,100%) inset,
      0 -0.15em 0.4em hsl(120,90%,45%) inset,
      0 0.05em 0.05em hsl(120,90%,45%) inset,
      0.05em 0 0.1em hsl(120,90%,100%) inset,
      -0.05em 0 0.1em hsl(120,90%,100%) inset,
      0 0.1em 0.4em hsl(120,90%,60%) inset;
  }
  
  .bubble:checked:before {
    border-radius: 0.25em;
    width: 0.5em;
  }
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    label {
      animation: none;
    }
  
    .bubble, .bubble:before, .bubble:after {
      transition-duration: 0s;
    }
  
    .bubble:focus, .bubble:hover {
      transform: scale(1);
    }
  
    .bubble:focus:active, .bubble:hover:active {
      width: 3em;
      height: 3em;
    }
  
    .bubble:focus:before, .bubble:hover:before {
      filter: drop-shadow(0.6em 0.6em 4px hsla(0,0%,0%,0.2));
    }
  
    .bubble:focus:after, .bubble:hover:after {
      transform: translate3d(0,0,-1px);
    }
  }
  /* Animations */
  @keyframes float74 {
    from, to {
      transform: translate(0,3%);
    }
  
    25% {
      transform: translate(-3%,0);
    }
  
    50% {
      transform: translate(0,-3%);
    }
  
    75% {
      transform: translate(3%,0);
    }
  }
     </style>`,
  html: `<label><input value="on" name="dummy" type="checkbox" class="bubble"></label>`,
  fulCode: "Ful Code1",

},
{
  id: 37,
  css: `<style>
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }
  
  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }
  
  .profile {
    background: #3b5998;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #29487d;
  }
  
  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  
  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }
  .icon .layer {
    width: 55px;
    height: 55px;
    border: 3px solid #1877f2;
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(24, 119, 242, 0.7), 0 0 20px rgba(24, 119, 242, 0.5);
  }
  
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 30px rgba(24, 119, 242, 1), 0 0 40px rgba(24, 119, 242, 0.7);
  }
  
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 0.3s;
  }
  
  .layer span,
  .text {
    color: #1877f2;
    border-color: #1877f2;
  }
  
  .icon:hover .layer span {
    box-shadow: -1px 1px 3px #1877f2;
  }
  
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }
  
  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }
  
  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }
  
  .facebookSVG {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1877f2;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      #1877f2 0%,
      #3b5998 25%,
      #1877f2 50%,
      #3b5998 75%,
      #1877f2 100%
    );
  }
  
  .user {
    display: flex;
    gap: 10px;
  }
  
  .img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #1877f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #1877f2;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
  }
  
  .about {
    color: #ccc;
    padding-top: 5px;
  }
  
     </style>`,
  html: `<div class="tooltip-container">
  <div class="tooltip">
    <div class="profile">
      <div class="user">
        <div class="img">Fb</div>
        <div class="details">
          <div class="name">User</div>
          <div class="username">@username</div>
        </div>
      </div>
      <div class="about">500+ Friends</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="#">
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="facebookSVG">
          <svg
            viewBox="0 0 40 40"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
              y2="407.5726"
              y1="406.6018"
              x2="-277.375"
              x1="-277.375"
              id="a"
            >
              <stop stop-color="#0062e0" offset="0"></stop>
              <stop stop-color="#19afff" offset="1"></stop>
            </linearGradient>
            <path
              d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
              fill="url(#a)"
            ></path>
            <path
              d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
              fill="#fff"
            ></path>
          </svg>
        </span>
      </div>
      <div class="text">Facebook</div>
    </a>
  </div>
</div>
`,
  fulCode: "Ful Code1",

},
{
  id: 38,
  css: `<style>
  
     </style>`,
  html: `Html`,
  fulCode: "Ful Code1",

},
{
  id: 39,
  css: `<style>
  
     </style>`,
  html: `Html`,
  fulCode: "Ful Code1",

},
{
  id: 40,
  css: `<style>
  
     </style>`,
  html: `Html`,
  fulCode: "Ful Code1",

},
{
  id: 41,
  css: `<style>
  
     </style>`,
  html: `Html`,
  fulCode: "Ful Code1",

},
];












document.body.style.cursor = 'url("./cursor/cursor.ico"), auto';

let center=document.getElementById("center");
let iconBtn =document.getElementById("btn");
let afterIcon =document.getElementById("afterIcon");
let btn = document.getElementById("bolum");
let posAbs =document.getElementById("posAbs");
iconBtn.addEventListener("click", function() {
    if (afterIcon.classList.contains("afterIcon")) {
        afterIcon.classList.remove("afterIcon");
    } else {
        afterIcon.classList.add("afterIcon");
    }
});

btn.addEventListener("click", function(){
    if (posAbs.classList.contains("afterIcon")) {
        posAbs.classList.remove("afterIcon");
    } else {
        posAbs.classList.add("afterIcon");
    }
})

let row=`
<div class="row">
    <div class="box">
        Salam
    </div>
    <div class="box">
        Salam
    </div>
    <div class="box">
        Salam
    </div>
</div>
`

function AddBox(numberOfTimes){
    var multipliedContent = "";
    for (var i = 0; i < numberOfTimes; i++) {
        multipliedContent += row;
    }
    center.innerHTML=multipliedContent;
}

let boxes=document.getElementsByClassName("box");
let k= codes.length/3;
console.log(k);
AddBox(k)
for(let i=0; i<codes.length;i++){
    let code=codes[i]
    boxes[i].innerHTML=`${code["html"]}${code["css"]}
    <button class="get-code">
    Code
    </button>`
}

let kots = document.getElementsByClassName("get-code");
let code_center = document.getElementById("code_center");
let box1=document.getElementById("box1");
let box_code =document.getElementById("box_code");
let css_inside =document.getElementById("code");
let btnHtmlAndCss=document.getElementsByClassName("buttonOfCode");
for (let i=0; i<codes.length;i++) {
    kots[i].addEventListener("click", function(){
        center.classList.add("displayNone");
        code_center.classList.add("displayFlex");
        let code=codes[i];
        box1.innerHTML=`${code["html"]}${code["css"]}`
        css_inside.textContent=`${code["css"]}`
        btnHtmlAndCss[0].addEventListener("click", function(){
           css_inside.textContent=`${code["html"]}`
           console.log("men html")
        })
        btnHtmlAndCss[1].addEventListener("click", function(){
          css_inside.textContent=`${code["css"]}`
          console.log("men html") 
       })
    });
}

