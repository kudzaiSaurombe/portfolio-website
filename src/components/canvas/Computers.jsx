import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

const Computers = ({ isMobile, scrollY }) => {
    const group = useRef();
    const { scene, animations } = useGLTF("./trippy_tube/scene.gltf");
    const { actions, mixer } = useAnimations(animations, group);

    useEffect(() => {
        if (actions["Animation"]) {
            actions["Animation"].play().setLoop(THREE.LoopRepeat, Infinity);
        }
    }, [actions]);

    useFrame((state, delta) => {
        if (mixer) {
            mixer.update(delta);
        }

        // Scroll-based transformations
        if (group.current) {
            const scrollRange = 500;
            const scrollRotation = (scrollY / scrollRange) * Math.PI * 2;
            group.current.rotation.y = scrollRotation;

            const minScale = 1.0;
            const maxScale = 5.5;
            const scrollScale = 1 + (scrollY / scrollRange) * (maxScale - minScale);
            group.current.scale.set(scrollScale, scrollScale, scrollScale);
        }
    });

    return (
        <group ref={group}>
            <hemisphereLight intensity={3} groundColor="black" />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={4} castShadow shadow-mapSize={1024} />
            <pointLight intensity={1} />
            <primitive
                object={scene}
                scale={isMobile ? 0.9 : 0.95}
                position={[0, -0.38, 0]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </group>
    );
};


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} scrollY={scrollY} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;