import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import kombiModel from "./../3d/models/Kombi.glb";
import ambientTexture from "./../3d/textures/Ambient.exr";

var EngineEventHandler = function (options) {
  // Create a DOM EventTarget object
  var target = document.createTextNode(null);

  // Pass EventTarget interface calls to DOM EventTarget object
  this.addEventListener = target.addEventListener.bind(target);
  this.removeEventListener = target.removeEventListener.bind(target);
  this.dispatchEvent = target.dispatchEvent.bind(target);

  // Room your your constructor code
};

// Create an instance of your event target
export const EngineEvent = new EngineEventHandler();

export const Engine = {
  Elements: [
    {
      name: "Bottom_Body",
      contents: ["Mesh003_1"],
      state: true,
    },
    {
      name: "Upper_Body",
      contents: ["Mesh003_4"],
      state: true,
    },
    {
      name: "transparent_shader",
      contents: [
        "pasted__transparent_shader_001",
        "pasted__transparent_shader_002",
      ],
      state: true,
    },
    {
      name: "wallet",
      contents: ["polySurface3"],
      state: true,
    },
  ],
  cameras: [
    {
      position: { x: 0, y: 1.25, z: 4.4 },
      rotation: [0, 0, 0],
      target: { x: 0, y: 0, z: 0 },
    },
    {
      position: {
        x: -0.33,
        y: 1.1,
        z: 0.79,
      },
      rotation: [2.47, -0.47, -2.8],
      target: {
        x: 0,
        y: 1.15,
        z: 1.3,
      },
    },
  ],
  transparentKey: "transparent_shader",
  gltfLoader: new GLTFLoader(),
  exrLoader: new EXRLoader(),
  scene: new THREE.Scene(),
  renderer: new THREE.WebGLRenderer({
    alpha: true,
  }),
  pmremGenerator: null,
  size: null,
  camera: null,
  modelscale: 1,
  offsetY: -0.35,
  glass: null,
  controls: null,
  cube: null,
};

export function Render(ref) {
  Engine.size = {
    w: ref.mount.offsetWidth,
    h: window.innerHeight,
  };
  Engine.pmremGenerator = new THREE.PMREMGenerator(Engine.renderer);
  Engine.camera = new THREE.PerspectiveCamera(
    75,
    Engine.size.w / Engine.size.h,
    0.1,
    100
  );
  window.addEventListener("resize", () => onWindowResize(ref));
  Engine.renderer.setSize(Engine.size.w, Engine.size.h);
  Engine.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  Engine.camera.position.x = Engine.cameras[0].position.x;
  Engine.camera.position.y = Engine.cameras[0].position.y;
  Engine.camera.position.z = Engine.cameras[0].position.z;
  Engine.controls = new OrbitControls(
    Engine.camera,
    Engine.renderer.domElement
  );
  Engine.controls.enableDamping = true;
  Engine.controls.minPolarAngle = 0.2;
  Engine.controls.maxPolarAngle = Math.PI / 2 - 0.2;
  Engine.controls.minDistance = 3.5;
  Engine.controls.maxDistance = 10;
  Engine.controls.enablePan = false;
  let exrCubeRenderTarget, exrBackground;
  THREE.DefaultLoadingManager.onLoad = function () {
    Engine.pmremGenerator.dispose();
  };
  Engine.exrLoader
    .setDataType(THREE.UnsignedByteType)
    .load(ambientTexture, function (texture) {
      exrCubeRenderTarget = Engine.pmremGenerator.fromEquirectangular(texture);
      exrBackground = exrCubeRenderTarget.texture;
      texture.dispose();
      Engine.gltfLoader.load(kombiModel, function (gltf) {
        gltf.scene.scale.set(
          Engine.modelscale,
          Engine.modelscale,
          Engine.modelscale
        );
        gltf.scene.position.y = Engine.offsetY;
        gltf.scene.traverse((node) => {
          if (node.isMesh) {
            if (node.name.includes(Engine.transparentKey))
              node.material = new THREE.MeshPhysicalMaterial({
                color: 0xb1becf,
                metalness: 0,
                roughness: 0,
                ior: 1.5,
                envMap: Engine.exrBackground,
                envMapIntensity: 1,
                transmission: 0.2,
                opacity: 0.35,
                side: THREE.DoubleSide,
                transparent: true,
              });
            node.material.envMap = exrBackground;
          }
        });
        Engine.scene.add(gltf.scene);
        ref.setState({
          loading: false,
        });
        // Dispatch loaded event
        var evt = new Event("Loaded");
        EngineEvent.dispatchEvent(evt);
        Engine.cube = exrCubeRenderTarget.texture;
      });
    });
  Engine.pmremGenerator.compileEquirectangularShader();
  Engine.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  Engine.renderer.outputEncoding = THREE.sRGBEncoding;
  Engine.renderer.toneMappingExposure = 0.85;
  tick();
  return Engine.renderer.domElement;
}

export function ChangeObjectVisibility(names, state) {
  [].concat(names || []).forEach((n) => {
    var object = Engine.scene.getObjectByName(n);
    if (object != null) object.visible = state;
  });
}

export function ChangeObjectColor(names, color, metallic) {
  [].concat(names || []).forEach((n) => {
    Engine.scene.traverse(function (child) {
      if (child.material && child.material.name === n) {
        child.material.color = new THREE.Color(
          "rgb(" +
            color
              .match(/[A-Za-z0-9]{2}/g)
              .map(function (v) {
                return parseInt(v, 16);
              })
              .join(",") +
            ")"
        );
      }
    });
  });
}

export function ChangeObjectColorMetallic(names, color) {
  [].concat(names || []).forEach((n) => {
    Engine.scene.traverse(function (child) {
      if (child.material && child.material.name === n) {
        if (color === "chrome") {
          child.material.metalnessMap = null;
          child.material.roughnessMap = null;
          child.material.metalness = 0.8;
          child.material.roughness = 0.075;
          child.material.color = new THREE.Color("rgb(219,224,225)");
        } else {
          child.material.color = new THREE.Color(
            "rgb(" +
              color
                .match(/[A-Za-z0-9]{2}/g)
                .map(function (v) {
                  return parseInt(v, 16);
                })
                .join(",") +
              ")"
          );
          child.material.metalnessMap = null;
          child.material.roughnessMap = null;
          child.material.metalness = 0.25;
          child.material.roughness = 0.18;
        }
      }
    });
  });
}

export function ToggleCamera(i) {
  if (i === 1) {
    Engine.controls.minDistance = 0.015;
    Engine.controls.maxDistance = 0.64;
  } else {
    Engine.controls.minDistance = 3.5;
    Engine.controls.maxDistance = 10;
  }
  Engine.controls.reset();
  Engine.camera.position.x = Engine.cameras[i].position.x;
  Engine.camera.position.y = Engine.cameras[i].position.y;
  Engine.camera.position.z = Engine.cameras[i].position.z;
  Engine.camera.rotation.fromArray(Engine.cameras[i].rotation);
  Engine.controls.target.x = Engine.cameras[i].target.x;
  Engine.controls.target.y = Engine.cameras[i].target.y;
  Engine.controls.target.z = Engine.cameras[i].target.z;
  Engine.controls.update();
}

export const tick = () => {
  Engine.controls.update();
  Engine.renderer.render(Engine.scene, Engine.camera);
  Engine.scene.background = Engine.cube;
  requestAnimationFrame(tick);
};

function onWindowResize(ref) {
  if (!ref.mount) return;
  Engine.size = {
    w: ref.mount.offsetWidth,
    h: window.innerHeight,
  };
  Engine.camera.aspect = Engine.size.w / Engine.size.h;
  Engine.camera.updateProjectionMatrix();

  Engine.renderer.setSize(Engine.size.w, Engine.size.h);
}
