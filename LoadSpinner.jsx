import { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Style from './LoadSpinner.module.css'


const LoadSpinner = props => {

  //set default prop values by deconstructing props object
  const {
    containerWidth = 200,
    spinnerColor = '#4f4f4f',
    spinnerOpacity = 0.5,
    spinnerNo = 10,
    spinnerRadius = 40,
    intervalSeconds = 2,
    rotateSpeedSeconds = 8
  } = props

  // calculate angle of seperation
  const sepAngle = (Math.PI * 2) / spinnerNo

  // set template refs  
  const spinnerContainer = useRef()
  // create an empty array of length of number of spinners
  const spinners = useRef(Array.from({ length: spinnerNo }))

  /* 
  * onMounted 
  * function to run when component mounted
  * to set styles and start animations
  */
  const onMounted = () => {
    // set container styles and rotation animations
    spinnerContainer.current.style.width = `${containerWidth}px`
    spinnerContainer.current.style.height = `${containerWidth}px`
    spinnerContainer.current.style.transition = 'all 5s ease-in-out'
  
    // set max width for transformation
    let maxWidth = containerWidth / 2
  
    // perform initial animation and start rotation
    setTimeout(() => {
      movePoints(maxWidth)
      spinnerContainer.current.animate([{ transform: 'rotate(360deg)' }], {
        duration: rotateSpeedSeconds * 1000,
        iterations: Infinity
      })
    }, 0)
   
    // set continuous in-out cycle
    setInterval(() => {
      maxWidth = maxWidth == 0 ? containerWidth / 2 : 0
      movePoints(maxWidth)
    }, (intervalSeconds+1) * 1000)
  }
  
  /*
   * MovePoints
   * Function to move spinner points to outside or inside of container
   * in a circular pattern
   */
  const movePoints = maxRadius => {
    // perform calculations and set styles for each spinner
    for (let i = 1; i <= spinnerNo; i++) {
      // Maths to calculate x and y position on circle
      let x = maxRadius * Math.sin(sepAngle * i)
      let y = maxRadius * Math.cos(sepAngle * i)
  
      //move spinner to center point of container and then transform to x and y pos
  
      spinners[i - 1].style.left = `${(containerWidth -
        spinnerRadius) /
        2}px`
      spinners[i - 1].style.top = `${(containerWidth -
        spinnerRadius) /
        2}px`
      spinners[i - 1].style.transform = `translate(${+x}px,${y}px)`
  
      // set styles and animation for spinners by accessing template ref
  
      spinners[i - 1].style.width = `${spinnerRadius}px`
      spinners[i - 1].style.height = `${spinnerRadius}px`
  
      spinners[i - 1].style.backgroundColor = spinnerColor
      spinners[i - 1].style.opacity = spinnerOpacity
      spinners[i - 1].style.position = 'absolute'
      spinners[i - 1].style.borderRadius = '50%'
      spinners[
        i - 1
      ].style.transition = `all ${intervalSeconds}s ease-in-out`
    }
  }

  // useEffect hook set with empty array to run when component first mounted
  useEffect(() => {
    onMounted()
  },[]
  )

  // return JSX and Teleport to HTML body
  return (
    ReactDOM.createPortal(
    <>
      <div className={Style.spinnerScreen}>
        <div ref={spinnerContainer}>
          <div>
            {Array.from({ length: spinnerNo }, (item, index) => (
              // set refs depending on the index value of the div
              <div key={index} ref={el => (spinners[index] = el)}>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>, document.body)
  )
}

export default LoadSpinner
