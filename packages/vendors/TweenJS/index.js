import TWEEN from './lib/tween.module'


const TWEENJS = () => {
  try {
    console.log(`TweenJS Lib imported!`)
    return TWEEN
  }
  catch(error) {
    console.error(error)
    throw error
  }
}

const TweenJS = TWEENJS()
// console.log(TweenJS)


export default TweenJS
