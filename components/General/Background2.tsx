"use client";

import { onHover2, renderSquares } from "@/utils/three";
import { useEffect, useRef } from "react";
import {
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";

const Background2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);

    const aspect = w / h;
    const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 2;

    const scene = new Scene();
    const raycaster = new Raycaster();
    const mouse = new Vector2();

    const squares: any[] = [];
    const hoverState = {
      currentlyCloseHovered: new Set(),
      currentlyFarHovered: new Set(),
    };

    renderSquares(squares, scene, camera, w, h);

    const handleMouseMove = (e: MouseEvent) => {
      onHover2(e, raycaster, mouse, camera, squares, w, h);
    };

    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();

      renderer.setSize(newW, newH);

      // Re-render squares with new dimensions
      renderSquares(squares, scene, camera, newW, newH);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="sticky top-0 inset-0 -z-10 pointer-events-none overflow-hidden mask-radial-from-[#1a1a1a] mask-radial-to-60%"
      ref={containerRef}
    ></div>
  );
};

export default Background2;
