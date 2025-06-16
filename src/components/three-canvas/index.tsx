import { theme } from "@/styles/theme";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const vh = window.innerHeight / 100;
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);

    const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(gridHelper);

    scene.background = new THREE.Color(theme.primary);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;

    const meshes: THREE.Group<THREE.Object3DEventMap>[] = [];
    const baseCols = 20;
    const rows = 10;
    const cols = baseCols * 2;
    const space = 2;
    const halfWidth = (cols * space) / 2;
    const initialXPos: number[] = [];

    camera.position.x = 73.40360288037701;
    camera.position.y = 4.537251093062395;
    camera.position.z = 18.84803448375567;

    controls.target = new THREE.Vector3(
      46.55936946652872,
      -27.585465132670265,
      -13.740498130100654
    );

    controls.update();

    let mixers: THREE.AnimationMixer[] = [];

    const loader = new GLTFLoader();

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(theme["mesh-material"]),
    });
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.7);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    scene.add(ambientLight);
    scene.add(directionalLight);

    const loopStartLinePoints = [];
    const loopEndLinePoints = [];

    loopStartLinePoints[0] = new THREE.Vector3(halfWidth, 0, -5);
    loopStartLinePoints[1] = new THREE.Vector3(halfWidth, 0, 25);

    loopEndLinePoints[0] = new THREE.Vector3(halfWidth * 2, 0, -5);
    loopEndLinePoints[1] = new THREE.Vector3(halfWidth * 2, 0, 25);

    const loopLineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const loopStartGeometry = new THREE.BufferGeometry().setFromPoints(
      loopStartLinePoints
    );
    const loopEndGeometry = new THREE.BufferGeometry().setFromPoints(
      loopEndLinePoints
    );

    const loopStartLine = new THREE.Line(loopStartGeometry, loopLineMaterial);
    const loopEndLine = new THREE.Line(loopEndGeometry, loopLineMaterial);

    scene.add(loopStartLine);
    scene.add(loopEndLine);

    const loadMesh = (index: number) => {
      const col = index % cols;
      const row = Math.floor(index / cols);

      loader.load("assets/v-logo.glb", (gltf) => {
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        meshes[index] = gltf.scene;

        const initialX = col * space;
        initialXPos[index] = initialX;

        gltf.scene.position.x = initialX;
        gltf.scene.position.z = row * space + (col % 2 === 0 ? space / 2 : 0);

        const mixer = new THREE.AnimationMixer(gltf.scene);
        mixers.push(mixer);

        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, "ScaleAction");

        if (clip) {
          const action = mixer.clipAction(clip);

          if (col % 2 === 0) {
            action.time = clip.duration / 2;
          } else {
            action.time = 0;
          }

          action.play();
        }

        scene.add(gltf.scene);
      });
    };

    async function init() {
      animate();

      for (let i = 0; i < rows * cols; i++) {
        loadMesh(i);
      }
    }

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const deltaTime = clock.getDelta();
      for (const mixer of mixers) {
        mixer.update(deltaTime);
      }

      meshes.map((mesh, index) => {
        if (mesh.position.x >= initialXPos[index] + halfWidth) {
          mesh.position.x -= halfWidth;
        } else {
          mesh.position.x += 0.01;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    }

    init();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      // Cleanup: dispose scene, renderer, etc.
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg"
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
}
