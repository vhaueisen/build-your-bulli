import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ambientTexture from "./../3d/textures/Ambient.exr";

var EngineEventHandler = function (options) {
  var target = document.createTextNode(null);
  this.addEventListener = target.addEventListener.bind(target);
  this.removeEventListener = target.removeEventListener.bind(target);
  this.dispatchEvent = target.dispatchEvent.bind(target);
};
export const EngineEvent = new EngineEventHandler();
var plane;

export const Engine = {
  progress: 0,
  cameras: [
    {
      position: { x: -2.25, y: 1, z: -3 },
      rotation: [0, 0, 0],
      target: { x: 0, y: 0, z: 0 },
    },
    {
      position: { x: -0.33, y: 1.15, z: 0.79 },
      rotation: [2.47, -0.47, -2.8],
      target: { x: 0, y: 1.17, z: 1.3 },
    },
  ],
  transparentKey: "transparent_shader",
  gltfLoader: new GLTFLoader(),
  exrLoader: new EXRLoader(),
  scene: null,
  renderer: null,
  glass: null,
  pmremGenerator: null,
  size: null,
  camera: null,
  modelscale: 1,
  offsetY: -0.5,
  controls: null,
  cube: null,
};

Engine.glass = new THREE.MeshPhysicalMaterial({
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

export function Render(ref, machine) {
  Engine.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  Engine.size = {
    w: ref.mount.offsetWidth,
    h: window.innerWidth < 768 ? 0.75 * window.innerHeight : window.innerHeight,
  };
  Engine.scene = new THREE.Scene();
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

  Engine.controls = new OrbitControls(
    Engine.camera,
    Engine.renderer.domElement
  );
  Engine.controls.enableDamping = true;
  Engine.controls.minPolarAngle = Math.PI / 2 - 0.75;
  Engine.controls.maxPolarAngle = Math.PI / 2 - 0.2;
  Engine.controls.rotateSpeed = 0.3;
  Engine.controls.enablePan = false;
  ToggleCamera(0);
  let exrCubeRenderTarget, exrBackground;
  THREE.DefaultLoadingManager.onLoad = function () {
    Engine.pmremGenerator.dispose();
  };
  Engine.renderer.shadowMap.enabled = true;
  Engine.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  const directionalLight = new THREE.DirectionalLight(0xfff0f0, 0.75);

  const planeGeometry = new THREE.PlaneGeometry(128, 128, 4, 4);
  const planeMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.175,
  });
  plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotateX(-Math.PI / 2);
  plane.receiveShadow = true;
  plane.position.y = Engine.offsetY;
  Engine.scene.add(plane);

  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 128; // default
  directionalLight.shadow.mapSize.height = 128; // default
  directionalLight.shadow.camera.near = 0.05; // default
  directionalLight.shadow.camera.far = 10; // default
  directionalLight.shadow.shadowDarkness = 1;
  Engine.scene.add(directionalLight);

  Engine.exrLoader.setDataType(THREE.UnsignedByteType).load(
    ambientTexture,
    function (texture) {
      exrCubeRenderTarget = Engine.pmremGenerator.fromEquirectangular(texture);
      exrBackground = exrCubeRenderTarget.texture;
      texture.dispose();
      plane.material.envMap = exrBackground;
      Engine.gltfLoader.load(
        machine.model.bundle,
        function (gltf) {
          gltf.scene.scale.set(
            Engine.modelscale,
            Engine.modelscale,
            Engine.modelscale
          );
          gltf.scene.position.y = Engine.offsetY;
          gltf.scene.castShadow = true;
          gltf.scene.traverse((node) => {
            if (node.isMesh) {
              node.castShadow = true;
              if (node.name.includes(Engine.transparentKey))
                node.material = Engine.glass;
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
        },
        function (progress) {
          ref.setState({
            progress:
              (1 / 30) * 100 +
              ((29 / 30) * 100 * progress.loaded) / machine.model.size,
          });
        }
      );
    },
    function (progress) {
      ref.setState({
        progress: ((1 / 30) * 100 * progress.loaded) / progress.total,
      });
    }
  );
  Engine.pmremGenerator.compileEquirectangularShader();
  Engine.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  Engine.renderer.outputEncoding = THREE.sRGBEncoding;
  Engine.renderer.toneMappingExposure = 0.895;

  tick();
  return Engine.renderer.domElement;
}

export function ChangeObjectVisibility(names, state) {
  [].concat(names || []).forEach((n) => {
    var object = Engine.scene.getObjectByName(n);
    if (object != null) object.visible = state;
  });
}

export function ChangeObjectColor(names, color) {
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
  const setColor = (child, color) => {
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
  };
  [].concat(names || []).forEach((n) => {
    Engine.scene.traverse(function (child) {
      if (child.material && child.material.name === n) {
        if (color === "chrome") {
          child.material.metalnessMap = null;
          child.material.roughnessMap = null;
          child.material.metalness = 0.8;
          child.material.roughness = 0.075;
          child.material.color = new THREE.Color("rgb(219,224,225)");
        } else if (color === "secondary") {
          setColor(child, global.sColor.color);
        } else if (color === "primary") {
          setColor(child, global.pColor.color);
        } else {
          setColor(child, color);
        }
      }
    });
  });
}

export function saveAsImage() {
  ToggleCamera(0);
  plane.visible = false;
  Engine.renderer.render(Engine.scene, Engine.camera);
  customized = Engine.renderer.domElement.toDataURL();
  plane.visible = true;
}

export var customized = "";

export function ToggleCamera(i) {
  if (i === 1) {
    Engine.controls.minDistance = 0.005;
    Engine.controls.maxDistance = 0.2;
  } else {
    if (window.innerWidth < 768)
      Engine.cameras[0].position = { x: 4.0, y: 1, z: 6 };
    else Engine.cameras[0].position = { x: 3, y: 1, z: 4 };

    Engine.controls.minDistance = 3.75;
    Engine.controls.maxDistance = 6;
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
  // console.log(
  //   Engine.camera.position,
  //   Engine.camera.rotation,
  //   Engine.controls.target
  // );
  //composer.render();
  //composer.render();
  requestAnimationFrame(tick);
};

function onWindowResize(ref) {
  if (!ref.mount) return;
  Engine.size = {
    w: ref.mount.offsetWidth,
    h: window.innerWidth < 768 ? 0.75 * window.innerHeight : window.innerHeight,
  };
  Engine.camera.aspect = Engine.size.w / Engine.size.h;
  Engine.camera.updateProjectionMatrix();

  Engine.renderer.setSize(Engine.size.w, Engine.size.h);
}
