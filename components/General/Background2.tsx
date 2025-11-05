"use client";

import { onHover2, renderSquares } from "@/utils/three";
import { useEffect, useRef } from "react";
import {
  Mesh,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";

const Background2 = () => {
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

    renderSquares(squares, scene, camera, w, h);

    const handleMouseMove = (e: MouseEvent) => {
      onHover2(e, raycaster, mouse, camera, squares, w, h);
    };

    // Track whether the mouse listener is currently attached (so we can add/remove on resize)
    let mouseListenerAttached = false;
    const isMobile = () => window.innerWidth < 768;

    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();

      renderer.setSize(newW, newH);

      // Re-render squares with new dimensions
      renderSquares(squares, scene, camera, newW, newH);
    };

    // Attach mousemove only when not on mobile
    if (!isMobile()) {
      window.addEventListener("mousemove", handleMouseMove);
      mouseListenerAttached = true;
    }
    window.addEventListener("resize", () => {
      // call original resize handler
      handleResize();

      const nowMobile = isMobile();
      if (nowMobile && mouseListenerAttached) {
        window.removeEventListener("mousemove", handleMouseMove);
        mouseListenerAttached = false;
      } else if (!nowMobile && !mouseListenerAttached) {
        window.addEventListener("mousemove", handleMouseMove);
        mouseListenerAttached = true;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
  if (mouseListenerAttached) window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
      renderer.dispose();
      // use the captured container and dom element to avoid ref changes between render/cleanup
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
      className="sticky top-0 inset-0 -z-10 pointer-events-none max-h-screen  overflow-hidden mask-radial-from-[#1a1a1a] mask-radial-to-60%"
      ref={containerRef}
    ></div>
  );
};

export default Background2;
