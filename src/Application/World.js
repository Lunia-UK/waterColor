import * as THREE from 'three'
import vertexShader from '../shaders/vertexShader.glsl'
import fragmentShader from '../shaders/fragmentShader.glsl'

export default class World {
    constructor(_options) {
        this.application = window.application
        this.config = this.application.config
        this.scene = this.application.scene
        this.resources = this.application.resources
        this.clock = new THREE.Clock()
        this.material = null;

        this.resources.on('groupEnd', (_group) => {
            if (_group.name === 'base') {
                this.isMouseMove()
                this.setCube()
            }
        })
    }

    isMouseMove() {
        window.addEventListener('mousedown', ()=> {this.isMouseDown = true})
        window.addEventListener('mouseup', ()=> {this.isMouseDown = false})
        window.addEventListener('mousemove', (e)=> {
            if(this.isMouseDown) {
                this.material.uniforms.iMouse.value.x = e.pageX / window.innerWidth;
                this.material.uniforms.iMouse.value.y = e.pageY / window.innerHeight;
                console.log(this.material.uniforms.iMouse.value.x)
            }
        })
    }

    setCube() {
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms:
                {
                    uTime: { value: 0 },
                    // iMouse: {x: this.x, y: this.y},
                    iMouse: {
                        type: "v2",
                        value: new THREE.Vector2()
                    }
                }
        })
        this.sphere = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1, ),
           this.material
        )
        this.scene.add(this.sphere)
    }

    resize() {
    }

    update() {
        const elapsedTime = this.clock.getElapsedTime()
        // Update material
        // console.log(this.material.uniforms)
        this.material.uniforms.uTime.value = elapsedTime
    }

    destroy() {
    }
}