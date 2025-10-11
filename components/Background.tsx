"use client";

import { onHover, renderSquares } from "@/utils/three";
import { useEffect, useRef } from "react";
import * as three from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new three.WebGLRenderer();
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);

    const aspect = w / h;
    const camera = new three.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 2;

    const scene = new three.Scene();
    const raycaster = new three.Raycaster();
    const mouse = new three.Vector2();

    const squares: any[] = [];
    const hoverState = {
      currentlyCloseHovered: new Set(),
      currentlyFarHovered: new Set(),
    };

    renderSquares(squares, scene, camera, w, h);


    renderer.domElement.addEventListener("mousemove", (e: MouseEvent) => {
      onHover(e, raycaster, mouse, camera, hoverState, squares, w, h);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="background fixed" ref={containerRef}>
    <div className="fixed w-full h-full bg-gradient-to-b from-transparent via-black/97.5 to-black pointer-events-none"/>
  </div>
};

export default Background;
