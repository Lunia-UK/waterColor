uniform float uTime;

varying vec2 vUv;
varying vec3 v_normal;
varying vec3 v_view;


void main() {
    // vPosition = position;

    vec4 transformed = modelViewMatrix * vec4(position, 1.0);
    v_view = normalize(- transformed.xyz);
    v_normal = normal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
