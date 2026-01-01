import React, { useRef, useState, useEffect } from 'react';
import './Logo3D.css';
import logoIcon from '../assets/logo-icon.svg';

const Logo3D = () => {
    const logoRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
    const [position, setPosition] = useState(0);

    useEffect(() => {
        let animationFrame;
        let startTime = Date.now();

        const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;

            // Subtle oscillating rotation that returns to center (not continuous)
            setRotation({
                x: Math.sin(elapsed * 0.3) * 0.08, // Gentle tilt forward/back
                y: Math.sin(elapsed * 0.4) * 0.1,  // Gentle tilt left/right
                z: Math.sin(elapsed * 0.25) * 0.05 // Minimal roll
            });

            // Slower, more subtle floating
            setPosition(Math.sin(elapsed * 0.6) * 6);

            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [hovered]);

    const scale = hovered ? 1.08 : 1; // Very subtle scale change

    return (
        <div className="logo3d-container">
            {/* Floating particles */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>

            <img
                ref={logoRef}
                src={logoIcon}
                alt="CretoWorks"
                className="logo3d-image"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    transform: `
            perspective(1000px)
            rotateX(${rotation.x}rad)
            rotateY(${rotation.y}rad)
            rotateZ(${rotation.z}rad)
            translateY(${position}px)
            scale(${scale})
          `,
                    transition: 'transform 0.1s linear'
                }}
            />
        </div>
    );
};

export default Logo3D;
