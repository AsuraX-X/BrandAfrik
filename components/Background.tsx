"use client";

import { onHover, renderSquares } from "@/utils/three";
import { useEffect, useRef } from "react";
import * as three from "three";

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new three.WebGLRenderer({ alpha: true });
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

    const handleMouseMove = (e: MouseEvent) => {
      onHover(e, raycaster, mouse, camera, hoverState, squares, w, h);
    };

    // Listen to window instead of canvas
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="background absolute top-0 inset-0 -z-10 pointer-events-none overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/97.5 to-[#1a1a1a] pointer-events-none" />
    </div>
  );
};

export default Background;
