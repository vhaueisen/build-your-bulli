import "./App.css";
import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import kombiModel from "./../3d/models/Kombi.glb";
import ambientTexture from "./../3d/textures/Ambient.exr";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.renderGame();
  }

  renderGame() {
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    const size = {
      w: this.mount.offsetWidth,
      h: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(75, size.w / size.h, 0.1, 100);

    renderer.setSize(size.w, size.h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.mount.appendChild(renderer.domElement);
    const cameras = [
      {
        position: { x: 0, y: 0, z: 3 },
        rotation: [0, 0, 0],
        target: { x: 0, y: 0, z: 0 },
      },
      {
        position: {
          x: -0.6547224399100854,
          y: 1.519212061877433,
          z: -0.3042745665050451,
        },
        rotation: [-2.050345262799172, 0.44502997357104607, 2.4501314070268014],
        target: {
          x: -0.9465079796554101,
          y: 0.9764329533839111,
          z: -0.022008988846454754,
        },
      },
    ];

    camera.position.x = cameras[0].position.x;
    camera.position.y = cameras[0].position.y;
    camera.position.z = cameras[0].position.z;
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enableDamping = true;

    // HDR
    let exrCubeRenderTarget, exrBackground;
    THREE.DefaultLoadingManager.onLoad = function () {
      pmremGenerator.dispose();
    };
    var refrence = this;

    new EXRLoader()
      .setDataType(THREE.UnsignedByteType)
      .load(ambientTexture, function (texture) {
        exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
        exrBackground = exrCubeRenderTarget.texture;
        texture.dispose();
        loader.load(kombiModel, function (gltf) {
          const modelscale = 1;
          gltf.scene.scale.set(modelscale, modelscale, modelscale);
          gltf.scene.position.y = -0.35;
          const glass = new THREE.MeshPhysicalMaterial({
            color: 0xb1becf,
            metalness: 0,
            roughness: 0,
            ior: 1.5,
            envMap: exrBackground,
            envMapIntensity: 1,
            transmission: 0.2,
            opacity: 0.35,
            side: THREE.DoubleSide,
            transparent: true,
          });
          gltf.scene.traverse((node) => {
            if (node.isMesh) {
              if (node.name.includes("transparent_shader"))
                node.material = glass;
              node.material.envMap = exrBackground;
            }
          });
          scene.add(gltf.scene);
          refrence.setState({
            loading: false,
          });
        });
      });

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMappingExposure = 0.85;

    this.Elements = [
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
    ];

    const tick = () => {
      this.controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
  }

  render() {
    return (
      <>
        <div className="col-lg-9 p-0 m-0 g-container">
          {this.state.loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border loader" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div ref={(ref) => (this.mount = ref)} />
        </div>
      </>
    );
  }

  // ToggleElement(name, state) {
  //   this.Elements.forEach((e) => {
  //     if (e.name === name) {
  //       e.contents.forEach((n) => {
  //         var object = scene.getObjectByName(n);
  //         object.visible = state;
  //       });
  //       e.state = state;
  //     }
  //   });
  // }

  // ToggleColor(name, color) {
  //   this.Elements.forEach((e) => {
  //     if (e.name === name) {
  //       e.contents.forEach((n) => {
  //         var object = scene.getObjectByName(n);
  //         if (object.isMesh) {
  //           const c = new THREE.Color(
  //             "rgb(" +
  //               color
  //                 .match(/[A-Za-z0-9]{2}/g)
  //                 .map(function (v) {
  //                   return parseInt(v, 16);
  //                 })
  //                 .join(",") +
  //               ")"
  //           );
  //           object.material.color = c;
  //         }
  //       });
  //     }
  //   });
  // }

  ToggleCamera(i) {
    // this.controls.reset();
    // camera.position.x = cameras[i].position.x;
    // camera.position.y = cameras[i].position.y;
    // camera.position.z = cameras[i].position.z;
    // camera.rotation.fromArray(cameras[i].rotation);
    // this.controls.target.x = cameras[i].target.x;
    // this.controls.target.y = cameras[i].target.y;
    // this.controls.target.z = cameras[i].target.z;
    // this.controls.update();
  }

  // function updateCanvas() {
  //   // Update sizes
  //   const scale = 0.97;
  //   sizes.width = document.getElementById("game").clientWidth * scale;
  //   sizes.height = document.getElementById("game").clientHeight * scale;

  //   // Update camera
  //   camera.aspect = sizes.width / sizes.height;
  //   camera.updateProjectionMatrix();

  //   // Update renderer
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // }

  // window.addEventListener("resize", () => {
  //   updateCanvas();
  // });
}

export default Game;
