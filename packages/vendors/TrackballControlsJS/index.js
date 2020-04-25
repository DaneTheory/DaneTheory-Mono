import { TrackballControls } from './lib/TrackballControls'


const TRACKBALLCONTROLSJS = () => {
  try {
    console.log(`TrackballControlsJS Lib imported!`)
    return TrackballControls
  }
  catch(error) {
    console.error(error)
    throw error
  }
}

const TrackballControlsJS = TRACKBALLCONTROLSJS()
// console.log(TrackballControlsJS)

export default TrackballControlsJS
