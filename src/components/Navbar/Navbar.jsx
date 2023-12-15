import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Navbar.css';
import Robot_Logo from "../../assets/images/Robot_Logo.png";

function Navbar() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a ref for the navbar element
    const navbarRef = useRef(null);

    // useEffect hook to initialize GSAP animations and ScrollTrigger
    useEffect(() => {
        // Animation to show/hide the navbar
        const showNav = gsap.fromTo(
            navbarRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.4
        }).progress(1);

        // ScrollTrigger to control the animation based on scroll direction
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                // Check scroll direction and play/reverse the animation accordingly
                self.direction === -1 ?
                    showNav.play()
                    : showNav.reverse();
            }
        });
    }, []);

    return (
        <div className="header" ref={navbarRef}>
            <img id="logo" src={Robot_Logo} alt="Robot_Logo" />
            <ul id="navlist">
                <li id=""><a href="#" className="button-cta-normal">
                    About
                </a></li>
                <li id=""><a href="#" className="button-cta-normal">
                    Services
                </a></li>
                <li id=""><a href="#" className="button-cta-animation with-ripple">
                    Learn More
                </a></li>
            </ul>
        </div>
    );
}

export default Navbar;
