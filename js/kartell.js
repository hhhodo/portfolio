import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

class App {
    constructor() {
        const divContainer = document.querySelector("#canvas");
        this._divContainer = divContainer;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);

        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupBackground();
        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

    _setupControls() {
        new OrbitControls(this._camera, this._divContainer);
    }

    _setupBackground() {
        // 배경 이미지 설정
        const textureLoader = new THREE.TextureLoader();
        const backgroundTexture = textureLoader.load('../images/kartell_bg.jpg');
        
        this._scene.background = backgroundTexture;
    }
    _setupModel() {
        //모델 불러오기
        new GLTFLoader().load("../images/finish.glb", (gltf)=>{
            const model = gltf.scene;
            this._scene.add(model);

            //scale설정
            model.scale.set(20, 20, 20);
            model.position.set(0,-15,0);
            model.parent.rotation.y = Math.PI;
            
            // Material 설정
            const meshPhongMaterial = new THREE.MeshPhysicalMaterial({
                color: 0xFEF7F2,
                clearcoat: 0.2,
                clearcoatRoughness: 0.01,
                emissive: 0xffffff,
                emissiveIntensity: 0.3
            });
        })
    }

    _setupCamera() {
        const camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            100
        );

        camera.position.set(0,0,20);
        this._camera = camera;
    }

    _addPointLight(x, y, z) {
        const color = 0xffffff;
        const intensity = 100;
    
        const pointLight = new THREE.PointLight(color, intensity, 200);
        pointLight.position.set(x, y, z);
    
        this._scene.add(pointLight);
    }
    _setupLight() {
          
        const AmbientLight = new THREE.AmbientLight( 0xffffff, 0.8); // 주변 조명 강도를 높임
        this._scene.add(AmbientLight);

        this._addPointLight(50, 40, 50);
        this._addPointLight(-50, 40, 50);
        this._addPointLight(-50, 40, -50);
        this._addPointLight(50, 40, -50);

        //back light
        const directionalLight = new THREE.RectAreaLight(0xFFF6E9, 1, 40, 40);
        directionalLight.position.set(-30,10,10);
        directionalLight.lookAt(1.5,10,0);

        this._scene.add(directionalLight);

        const shadowLight = new THREE.RectAreaLight(0xFfffff, 1.5, 50, 50);
        shadowLight.position.set(40, 10, 20);
        shadowLight.lookAt(1.5, -10, 0);
        

        this._scene.add(shadowLight);
        this._scene.add(shadowLight.target);

        const shadow2Light = new THREE.RectAreaLight(0xACB9FF, 0.3, 10, 30);
        shadow2Light.position.set(-10, 0, -50);
        shadow2Light.lookAt(1.5, 10, 0);
        

        this._scene.add(shadow2Light);
        this._scene.add(shadow2Light.target);

        //화면 빛나게하기
        
        const moniterLight = new THREE.RectAreaLight(0xACB9FF, 0.3, 10, 30);
        moniterLight.position.set(-10, 0, -50);
        moniterLight.lookAt(1.5, 10, 0);
        

        this._scene.add(moniterLight);
        this._scene.add(moniterLight.target);
    }

    update(time) {
        time *= 0.001; // second unit
    }

    render(time) {
        this._renderer.render(this._scene, this._camera);   
        this.update(time);

        requestAnimationFrame(this.render.bind(this));
    }

    resize() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        
        this._renderer.setSize(width, height);
    }
}

window.onload = function () {
    new App();
}