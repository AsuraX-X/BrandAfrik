import {
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Plane,
  PlaneGeometry,
  Raycaster,
  Scene,
  Vector2,
  Vector3,
} from "three";

import { animate as anime } from "animejs";

export const renderSquares = (
  squares: Mesh[],
  scene: Scene,
  camera: PerspectiveCamera,
  w: number,
  h: number
) => {
  // Clear existing squares
  if (squares.length > 0) {
    squares.forEach((square) => scene.remove(square));
    squares.length = 0; // Clear the array properly
  }

  // Calculate the visible area at Z=0 plane
  const distance = Math.abs(camera.position.z - 0);
  const vFOV = (camera.fov * Math.PI) / 180;

  // Calculate visible dimensions at Z=0
  const visibleHeight = 2 * Math.tan(vFOV / 2) * distance;
  const visibleWidth = visibleHeight * camera.aspect;

  // Add some padding so squares don't touch screen edges
  const padding = 0.1;
  const usableWidth = visibleWidth * (1.05 - padding);
  const usableHeight = visibleHeight * (1.075 - padding);

  // Target square size based on the reference (231 squares for full screen)
  // Calculate reference grid dimensions for 231 squares at reference aspect ratio
  const referenceSquareNum = 231;
  const referenceAspect = 1920 / 1080; // Full HD aspect ratio
  const referenceGridCols = Math.ceil(
    Math.sqrt(referenceSquareNum * referenceAspect)
  );
  const referenceGridRows = Math.ceil(referenceSquareNum / referenceGridCols);

  // Calculate target spacing based on reference
  const referenceVisibleWidth = visibleWidth; // Assume same camera settings
  const targetSpacing = referenceVisibleWidth / (referenceGridCols - 1);

  // Calculate grid dimensions for current screen
  const gridCols = Math.floor(usableWidth / targetSpacing) + 1;
  const gridRows = Math.floor(usableHeight / targetSpacing) + 1;
  const squareNum = gridCols * gridRows;

  // Calculate actual spacing
  const spacingX = usableWidth / (gridCols - 1);
  const spacingY = usableHeight / (gridRows - 1);
  const spacing = Math.min(spacingX, spacingY);

  console.log(
    `Creating ${squareNum} squares (${gridCols} cols × ${gridRows} rows)`
  );

  for (let index = 0; index < squareNum; index++) {
    const geometry = new PlaneGeometry();
    const material = new MeshBasicMaterial({ color: 0x404040 }); // Add visible color
    const square = new Mesh(geometry, material);

    square.scale.setScalar((w / h) * 0.015);
    square.userData.index = index;
    square.userData.scale = { x: square.scale.x, y: square.scale.y };

    // Calculate grid position
    const row = Math.floor(index / gridCols);
    const col = index % gridCols;

    const gridWidth = (gridCols - 1) * spacing;
    const gridHeight = (gridRows - 1) * spacing;

    // Position squares with equal spacing
    square.position.x = col * spacing - gridWidth / 2;
    square.position.y = row * spacing - gridHeight / 2;
    square.position.z = 0;

    square.userData.originalPosition = {
      x: square.position.x,
      y: square.position.y,
      z: square.position.z,
    };

    squares.push(square);
    scene.add(square);
  }
};

export const onHover = (
  event: MouseEvent,
  raycaster: Raycaster,
  mouse: Vector2,
  camera: PerspectiveCamera,
  hoverState: {
    currentlyCloseHovered: Set<any>;
    currentlyFarHovered: Set<any>;
  },
  squares: Mesh[],
  w: number,
  h: number
) => {
  const foundCloseSquares = new Set<Mesh>();
  const foundFarSquares = new Set<Mesh>();

  mouse.x = (event.clientX / w) * 2 - 1;
  mouse.y = -(event.clientY / h) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const planeZ = 0;
  const distance = (planeZ - camera.position.z) / raycaster.ray.direction.z;
  const intersectionPoint = camera.position
    .clone()
    .add(raycaster.ray.direction.multiplyScalar(distance));

  const hitRadiusWorld = 0.5;
  const hitRadiusWorld2 = 0.8;

  squares.forEach((square) => {
    const distanceToSquare = square.position.distanceTo(intersectionPoint);
    if (distanceToSquare < hitRadiusWorld) {
      foundCloseSquares.add(square);
    } else if (distanceToSquare < hitRadiusWorld2) {
      foundFarSquares.add(square);
    }
  });

  // Scale up close squares (largest)
  foundCloseSquares.forEach((square: Mesh) => {
    if (!hoverState.currentlyCloseHovered.has(square)) {
      const originSize = {
        x: square.userData.scale.x,
        y: square.userData.scale.y,
      };
      anime(square.scale, {
        x: [square.scale.x, originSize.x * 2.5],
        y: [square.scale.y, originSize.y * 2.5],
        duration: 500,
      });
    }
  });

  // Scale up far squares (medium)
  foundFarSquares.forEach((square) => {
    if (
      !hoverState.currentlyFarHovered.has(square) &&
      !hoverState.currentlyCloseHovered.has(square)
    ) {
      const originSize = {
        x: square.userData.scale.x,
        y: square.userData.scale.y,
      };
      anime(square.scale, {
        x: [square.scale.x, originSize.x * 1.5],
        y: [square.scale.y, originSize.y * 1.5],
        duration: 500,
      });
    }
  });

  // Scale down squares that moved from close to far
  hoverState.currentlyCloseHovered.forEach((square) => {
    if (foundFarSquares.has(square)) {
      const originSize = {
        x: square.userData.scale.x,
        y: square.userData.scale.y,
      };
      anime(square.scale, {
        x: [square.scale.x, originSize.x * 1.5],
        y: [square.scale.y, originSize.y * 1.5],
        duration: 500,
      });
    } else if (!foundCloseSquares.has(square)) {
      const originSize = {
        x: square.userData.scale.x,
        y: square.userData.scale.y,
      };
      anime(square.scale, {
        x: [square.scale.x, originSize.x],
        y: [square.scale.y, originSize.y],
        duration: 500,
      });
    }
  });

  // Scale down squares that are no longer in far zone
  hoverState.currentlyFarHovered.forEach((square) => {
    if (!foundFarSquares.has(square) && !foundCloseSquares.has(square)) {
      const originSize = {
        x: square.userData.scale.x,
        y: square.userData.scale.y,
      };
      anime(square.scale, {
        x: [square.scale.x, originSize.x],
        y: [square.scale.y, originSize.y],
        duration: 500,
      });
    }
  });

  hoverState.currentlyCloseHovered = foundCloseSquares;
  hoverState.currentlyFarHovered = foundFarSquares;
};

export const onHover2 = (
  event: MouseEvent,
  raycaster: Raycaster,
  mouse: Vector2,
  camera: PerspectiveCamera,
  squares: Mesh[],
  w: number,
  h: number
) => {
  const mouseWorldPos = new Vector3();
  const interactionRadius = 2.5; // Size of the circle around cursor
  const pushStrength = 0.1; // How far boxes get pushed
  const returnSpeed = 0.008;

  mouse.x = (event.clientX / w) * 2 - 1;
  mouse.y = -(event.clientY / h) * 2 + 1;

  // Update raycaster
  raycaster.setFromCamera(mouse, camera);

  // Get mouse position on the Z=0 plane
  const planeZ = new Plane(new Vector3(0, 0, 1), 0);
  raycaster.ray.intersectPlane(planeZ, mouseWorldPos);

  squares.forEach((square) => {
    const originalPos = square.userData.originalPosition;

    // Calculate distance from mouse to square
    const dx = square.position.x - mouseWorldPos.x;
    const dy = square.position.y - mouseWorldPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < interactionRadius) {
      // Calculate push direction (away from mouse)
      const angle = Math.atan2(dy, dx);
      const pushDistance = (1 - distance / interactionRadius) * pushStrength;

      // Set target position (pushed away from mouse)
      const targetX = originalPos.x + Math.cos(angle) * pushDistance;
      const targetY = originalPos.y + Math.sin(angle) * pushDistance;

      // Smoothly move to target position
      square.position.x += (targetX - square.position.x) * 0.2;
      square.position.y += (targetY - square.position.y) * 0.2;
    } else {
      // Return to original position
      square.position.x += (originalPos.x - square.position.x) * returnSpeed;
      square.position.y += (originalPos.y - square.position.y) * returnSpeed;
    }
  });
};
