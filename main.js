function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices1 = [
        -0.5, 0.9,
        -0.55, 0.8,
        -0.55, 0.55,
        -0.5, 0.45,
        -0.45, 0.55,
        -0.45, 0.8,
    ];
    
    var vertices2 = [
        -0.5, 0.45,
        -0.55, 0.35,
        -0.55, 0.1,
        -0.5, 0.0,
        -0.45, 0.1,
        -0.45, 0.35,
    ];

    var vertices3 = [
        0.4, 0.9,
        0.45, 0.8,
        0.45, 0.55,
        0.4, 0.45,
        0.35, 0.55,
        0.35, 0.8,
    ];

    var vertices4 = [
        0.4, 0.45,
        0.45, 0.35,
        0.45, 0.1,
        0.4, 0.0,
        0.35, 0.1,
        0.35, 0.35,
    ];

    var vertices5 = [
        0.6, 0.9,
        0.65, 0.8,
        0.65, 0.55,
        0.6, 0.45,
        0.55, 0.55,
        0.55, 0.8,
    ];

    var vertices6 = [
        0.6, 0.45,
        0.65, 0.35,
        0.65, 0.1,
        0.6, 0.0,
        0.55, 0.1,
        0.55, 0.35,
    ];

    var vertices7 = [
        0.4, 0.9,
        0.45, 0.8,
        0.55, 0.8,
        0.6, 0.9,
        0.55, 1.0,
        0.45, 1.0,
    ];

    var vertices8 = [
        0.4, 0.45,
        0.45, 0.35,
        0.55, 0.35,
        0.6, 0.45,
        0.55, 0.55,
        0.45, 0.55,
    ];

    var vertices9 = [
        0.4, 0.0,
        0.45, -0.1,
        0.55, -0.1,
        0.6, 0.0,
        0.55, 0.1,
        0.45, 0.1,
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices9), gl.STATIC_DRAW);

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

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 6);
}
