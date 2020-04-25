import { CSS3DObject, CSS3DSprite, CSS3DRenderer } from './lib/CSS3DRenderer'


const CSS3DRENDERERJS = () => {
  try {
    console.log(`CSS3DRendererJS Lib imported!`)
    return {
      CSS3DObject,
      CSS3DSprite,
      CSS3DRenderer
    }
  }
  catch(error) {
    console.error(error)
    throw error
  }
}

const CSS3DRendererJS = CSS3DRENDERERJS()
// console.log(CSS3DRendererJS)

export default CSS3DRendererJS
