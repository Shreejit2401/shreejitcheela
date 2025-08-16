import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import MyPhoto from '../../../assets/images/me.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const photoRef = useRef()

  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .fromTo(
        photoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1,
        }
      )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={photoRef}
        src={MyPhoto}
        alt="JavaScript, Developer"
      />
    </div>
  )
}

export default Logo