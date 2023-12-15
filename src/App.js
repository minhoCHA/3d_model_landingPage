import { useEffect } from 'react'
import { ScrollControls, Scroll, Environment, Sparkles, Backdrop, Float, Ring } from '@react-three/drei'
import { Robot } from './components/Robot';
import baffle from 'baffle'
import Navbar from './components/Navbar/Navbar';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap'


function App() {
  // Controls title effect
  useEffect(() => {
    const target = baffle('.title')
    target.set({
      characters: '░C█Y░B█E░R█E░X█P░L█O░R█E░R',
      speed: 100
    })
    
    target.start()
    target.reveal(1000, 1000)
  })

  return (
    <>
      {/* Set background color */}
      <color attach="background" args={['#333333']} />

      {/* Ambient light for the scene */}
      <ambientLight intensity={0.2} />

      {/* Spotlight for highlighting certain elements */}
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

      {/* Load a pre-built environment */}
      <Environment preset='warehouse' />

      {/* ScrollControls for managing scroll-based interactions */}
      <ScrollControls pages={6} damping={0.1}>

        {/* Display a 3D robot */}
        <Robot scale={0.8} />

        {/* Sparkles for added visual effects */}
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>

        {/* Backdrop for the scene */}
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50, 30, 10]}
          position={[4, -10, 0]}
        >
          <meshStandardMaterial color="#091d24" />
        </Backdrop>

        {/* Floating ring with rotation */}
        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
            <meshStandardMaterial color="#2a3a3f" />
          </Ring>
        </Float>

        {/* Scroll component for managing scroll events */}
        <Scroll html style={{ width: '100%' }}>
          {/* Navbar component for navigation */}
          <Navbar />

          {/* Title section with baffle effect */}
          <div className='row' style={{ position: 'absolute', top: `60vh`, left: '5%' }}>
            <p style={{ color: '#525bbf', fontSize: '3em' }}>ROBOT A.I.</p>
            <h1 className='title' style={{ color: '#cdcbca', fontSize: '4em' }}>Cyber Explorer</h1>
          </div>

          {/* First Content section */}
          <div className='row' style={{ position: 'absolute', top: `150vh`, left: `5%` }}>
            <div className='col' style={{ position: 'absolute', width: "600px" }}>
              <h2 style={{ maxWidth: "540px" }}>HIGH TECH ROBOT</h2>
              <p style={{ maxWidth: '540px' }}>
                The robot glided through the virtual currents, its metallic scales reflecting the neon glow of the digital ocean. With razor-sharp precision, it executed maneuvers that mirrored the grace of its biological counterparts, a cybernetic marvel in the depths of artificial seas.</p>
            </div>
          </div>

          {/* Second content section */}
          <div className='row' style={{ position: 'absolute', top: `230vh`, left: '60%' }}>
            <div className='col' style={{ position: 'absolute', width: "600px" }}>
              <h2 style={{ maxWidth: "540px" }}>The Robot A.I.</h2>
              <p style={{ maxWidth: '540px' }}>
                The robot A.I., adorned in sleek chrome, patrolled the digital currents with a binary heartbeat. Glinting metallic fins sliced through virtual waves, a testament to the fusion of nature's design and artificial ingenuity.</p>
            </div>
          </div>

          {/* Standalone heading */}
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Metallic predator!</h2>
        
        
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
