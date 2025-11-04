"use client";

import { onHover, renderSquares } from "@/utils/three";
import { useEffect, useRef } from "react";
import {
  Mesh,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";

const Background = ({ direction }: { direction: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    const aspect = w / h;
    const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 2;

    const scene = new Scene();
    const raycaster = new Raycaster();
    const mouse = new Vector2();

    const squares: Mesh[] = [];
    const hoverState = {
      currentlyCloseHovered: new Set(),
      currentlyFarHovered: new Set(),
    };

    renderSquares(squares, scene, camera, w, h);

    const handleMouseMove = (e: MouseEvent) => {
      onHover(e, raycaster, mouse, camera, hoverState, squares, w, h);
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
      // use captured container to avoid ref changes between render and cleanup
      try {
        container.removeChild(renderer.domElement);
      } catch (e) {
        console.error(e);

        // ignore if already removed
      }
    };
  }, []);

  return (
    <div
      className={`background absolute top-0 inset-0 -z-10 ${
        direction === "t"
          ? "mask-t-from-[#000000]/40"
          : "mask-b-from-[#000000]/40"
      } pointer-events-none overflow-hidden`}
      ref={containerRef}
    />
  );
};

export default Background;
