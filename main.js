function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        //1
        -0.5, 0.9,
        -0.55, 0.8,
        -0.55, 0.55,
        -0.5, 0.45,
        -0.45, 0.55,
        -0.45, 0.8,

        -0.5, 0.45,
        -0.55, 0.35,
        -0.55, 0.1,
        -0.5, 0.0,
        -0.45, 0.1,
        -0.45, 0.35,

        //8
        0.4, 0.9,
        0.45, 0.8,
        0.45, 0.55,
        0.4, 0.45,
        0.35, 0.55,
        0.35, 0.8,

        0.4, 0.45,
        0.45, 0.35,
        0.45, 0.1,
        0.4, 0.0,
        0.35, 0.1,
        0.35, 0.35,

        0.6, 0.9,
        0.65, 0.8,
        0.65, 0.55,
        0.6, 0.45,
        0.55, 0.55,
        0.55, 0.8,

        0.6, 0.45,
        0.65, 0.35,
        0.65, 0.1,
        0.6, 0.0,
        0.55, 0.1,
        0.55, 0.35,

        0.4, 0.9,
        0.45, 0.8,
        0.55, 0.8,
        0.6, 0.9,

        0.4, 0.45,
        0.45, 0.35,
        0.55, 0.35,
        0.6, 0.45,
        0.55, 0.55,
        0.45, 0.55,

        0.4, 0.0,
        0.6, 0.0,
        0.55, 0.1,
        0.45, 0.1,

        //A
        -0.6, -0.1,
        -0.55, -0.2,
        -0.45, -0.2,
        -0.4, -0.1,
        -0.6, -0.1,

        -0.6, -0.1,
        -0.65, -0.2,
        -0.65, -0.45,
        -0.6, -0.55,
        -0.55, -0.45,
        -0.55, -0.2,
        -0.6, -0.1,

        -0.6, -0.55,
        -0.65, -0.65,
        -0.65, -0.9,
        -0.6, -1.0,
        -0.55, -0.9,
        -0.55, -0.65,
        -0.6, -0.55,

        -0.4, -0.1,
        -0.45, -0.2,
        -0.45, -0.45,
        -0.4, -0.55,
        -0.35, -0.45,
        -0.35, -0.2,
        -0.4, -0.1,

        -0.4, -0.55,
        -0.45, -0.65,
        -0.45, -0.9,
        -0.4, -1.0,
        -0.35, -0.9,
        -0.35, -0.65,
        -0.4, -0.55,

        -0.6, -0.55,
        -0.55, -0.45,
        -0.45, -0.45,
        -0.4, -0.55,
        -0.45, -0.65,
        -0.55, -0.65,

        -0.65, -0.45,
        -0.6, -0.55,
        -0.65, -0.65,

        -0.4, -0.55,
        -0.35, -0.45,
        -0.35, -0.65,

        //H
        0.4, -0.1,
        0.45, -0.2,
        0.45, -0.45,
        0.4, -0.55,
        0.35, -0.45,
        0.35, -0.2,

        0.4, -0.55,
        0.45, -0.65,
        0.45, -0.9,
        0.4, -1.0,
        0.35, -0.9,
        0.35, -0.65,

        0.6, -0.1,
        0.65, -0.2,
        0.65, -0.45,
        0.6, -0.55,
        0.55, -0.45,
        0.55, -0.2,

        0.6, -0.55,
        0.65, -0.65,
        0.65, -0.9,
        0.6, -1.0,
        0.55, -0.9,
        0.55, -0.65,

        0.4, -0.55,
        0.45, -0.65,
        0.55, -0.65,
        0.6, -0.55,
        0.55, -0.45,
        0.45, -0.45,

        0.35, -0.45,
        0.4, -0.55,
        0.35, -0.65,

        0.6, -0.55,
        0.65, -0.45,
        0.65, -0.65,
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode =  `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 10.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o

    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    void main() {
        float r = 0.0;
        float g = 0.0;
        float b = 1.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject);   // sampai sini sudah jadi .o

    var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Kita mengajari GPU bagaimana caranya mengoleksi
    //  nilai posisi dari ARRAY_BUFFER
    //  untuk setiap verteks yang sedang diproses
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(1.0,      0.65,    0.0,    1.0);  // Oranye
    //            Merah     Hijau   Biru    Transparansi
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINE_LOOP, 0, 6);
    gl.drawArrays(gl.LINE_LOOP, 6, 6);

    gl.drawArrays(gl.LINE_LOOP, 12, 6);
    gl.drawArrays(gl.LINE_LOOP, 18, 6);
    gl.drawArrays(gl.LINE_LOOP, 24, 6);
    gl.drawArrays(gl.LINE_LOOP, 30, 6);
    gl.drawArrays(gl.LINE_LOOP, 36, 4);
    gl.drawArrays(gl.LINE_LOOP, 40, 6);
    gl.drawArrays(gl.LINE_LOOP, 46, 4);
 
    gl.drawArrays(gl.TRIANGLE_STRIP, 50, 5);
    gl.drawArrays(gl.TRIANGLE_FAN, 55, 7);
    gl.drawArrays(gl.TRIANGLE_FAN, 62, 7);
    gl.drawArrays(gl.TRIANGLE_FAN, 69, 7);
    gl.drawArrays(gl.TRIANGLE_FAN, 76, 7);
    gl.drawArrays(gl.TRIANGLE_FAN, 83, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 89, 3);
    gl.drawArrays(gl.TRIANGLE_FAN, 92, 3);

    gl.drawArrays(gl.TRIANGLE_FAN, 95, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 101, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 107, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 113, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 119, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 125, 3);
    gl.drawArrays(gl.TRIANGLE_FAN, 128, 3);
    
}
