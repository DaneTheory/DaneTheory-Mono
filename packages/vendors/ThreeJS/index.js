import * as THREE from './lib/three.module'


const THREEJS = () => {
  try {
    console.log(`ThreeJS Lib imported!`)

    const {
      EventDispatcher,
      MOUSE,
      Quaternion,
      Vector2,
      Vector3,
      Matrix4,
    	Object3D
    } = THREE

    return {
      EventDispatcher,
      MOUSE,
      Quaternion,
      Vector2,
      Vector3,
      Matrix4,
    	Object3D,
      ...THREE
    }
  }
  catch(error) {
    console.error(error)
    throw error
  }
}

const ThreeJS = THREEJS()
// console.log(ThreeJS)


export default ThreeJS
