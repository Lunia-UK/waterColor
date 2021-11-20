precision mediump float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 iMouse;

void main()
{
    float speed = .1;
    float scale = 0.002;
    vec4 p = gl_FragCoord * scale;
    for(int i=1; i<10; i++){
        p.x+=0.3/float(i)*sin(float(i)*3.*p.y+uTime*speed)+iMouse.x / 5.0;
        p.y+=0.3/float(i)*cos(float(i)*3.*p.x+uTime*speed)+iMouse.y / 5.0;
    }
    float r=cos(p.x+p.y+1.)*.5+.5;
    float g=sin(p.y+p.x+1.)*.5+.5;
    float b=(sin(p.x+p.y)+cos(p.x+p.y))*.5+.5;
    vec3 color = vec3(r,g,b);
    gl_FragColor = vec4(color,1);
}