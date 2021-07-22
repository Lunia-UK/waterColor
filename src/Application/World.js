import * as THREE from 'three'
import vertexShader from '../shaders/vertexShader.glsl'
import fragmentShader from '../shaders/fragmentShader.glsl'

export default class World {
    constructor(_options) {
        this.application = window.application
        this.config = this.application.config
        this.scene = this.application.scene
        this.resources = this.application.resources

        this.resources.on('groupEnd', (_group) => {
            if (_group.name === 'base') {
                this.setCube()
            }
        })
    }

    setCube() {
        this.sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.RawShaderMaterial({
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
            })
        )
        this.scene.add(this.sphere)
    }

    resize() {
    }

    update() {
    }

    destroy() {
    }
}