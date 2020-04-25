// import Foo from 'foo'
import Bar from '@danetheory/bar'
// import ThreeJS from '@danetheory/threejs'
// import TrackballControlsJS from '@danetheory/trackballcontrolsjs'
// import CSS3DRendererJS from '@danetheory/css3drendererjs'
// import TweenJS from '@danetheory/tweenjs'


export default () => (
  <>
  <Bar />
    <div id="container"></div>

    <div id="menu">
			<button id="table">TABLE</button>
			<button id="sphere">SPHERE</button>
			<button id="helix">HELIX</button>
			<button id="grid">GRID</button>
		</div>


    <style jsx>{`
      a {
        color: #8ff;
      }

      #menu {
        position: absolute;
        bottom: 20px;
        width: 100%;
        text-align: center;
      }

      .element {
        width: 120px;
        height: 160px;
        box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
        border: 1px solid rgba(127,255,255,0.25);
        font-family: Helvetica, sans-serif;
        text-align: center;
        line-height: normal;
        cursor: default;
      }

      .element:hover {
        box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
        border: 1px solid rgba(127,255,255,0.75);
      }

        .element .number {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 12px;
          color: rgba(127,255,255,0.75);
        }

        .element .symbol {
          position: absolute;
          top: 40px;
          left: 0px;
          right: 0px;
          font-size: 60px;
          font-weight: bold;
          color: rgba(255,255,255,0.75);
          text-shadow: 0 0 10px rgba(0,255,255,0.95);
        }

        .element .details {
          position: absolute;
          bottom: 15px;
          left: 0px;
          right: 0px;
          font-size: 12px;
          color: rgba(127,255,255,0.75);
        }

      button {
        color: rgba(127,255,255,0.75);
        background: transparent;
        outline: 1px solid rgba(127,255,255,0.75);
        border: 0px;
        padding: 5px 10px;
        cursor: pointer;
      }

      button:hover {
        background-color: rgba(0,255,255,0.5);
      }

      button:active {
        color: #000000;
        background-color: rgba(0,255,255,0.75);
      }
    `}</style>

    <style global jsx>{
      `
        body {
        	margin: 0;
        	background-color: #000;
        	color: #fff;
        	font-family: Monospace;
        	font-size: 13px;
        	line-height: 24px;
        	overscroll-behavior: none;
        }

        a {
        	color: #ff0;
        	text-decoration: none;
        }

        a:hover {
        	text-decoration: underline;
        }

        button {
        	cursor: pointer;
        	text-transform: uppercase;
        }

        canvas {
        	display: block;
        }

        #info {
        	position: absolute;
        	top: 0px;
        	width: 100%;
        	padding: 10px;
        	box-sizing: border-box;
        	text-align: center;
        	-moz-user-select: none;
        	-webkit-user-select: none;
        	-ms-user-select: none;
        	user-select: none;
        	pointer-events: none;
        	z-index: 1; /* TODO Solve this in HTML */
        }

        a, button, input, select {
        	pointer-events: auto;
        }

        .dg.ac {
        	-moz-user-select: none;
        	-webkit-user-select: none;
        	-ms-user-select: none;
        	user-select: none;
        	z-index: 2 !important; /* TODO Solve this in HTML */
        }

        #overlay {
        	position: absolute;
        	z-index: 2;
        	top: 0;
        	left: 0;
        	width: 100%;
        	height:100%;
        	display: flex;
        	align-items: center;
        	justify-content: center;
        	opacity: 1;
        	background-color: #000000;
        	color: #ffffff;
        }

        #overlay > div {
        	text-align: center;
        }

        #overlay > div > button {
        	height: 20px;
        	background: transparent;
        	color: #ffffff;
        	outline: 1px solid #ffffff;
        	border: 0px;
        	cursor: pointer;
        }

        #overlay > div > p {
        	color: #777777;
        	font-size: 12px;
        }
      `
    }</style>

  </>
)
