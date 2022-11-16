function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");
  
    var vertices1a = [
        -0.5, 0.9, 0.1, 0, 0, 0, 
        -0.55, 0.8, 0.1, 0, 0, 0, 
        -0.55, 0.55, 0.1, 0, 0, 0, 
        -0.5, 0.45, 0.1, 0, 0, 0, 
        -0.45, 0.55, 0.1, 0, 0, 0, 
        -0.45, 0.8, 0.1, 0, 0, 0, 
    ];

    var vertices1b = [
        -0.5, 0.45, 0.1, 0, 0, 0, 
        -0.55, 0.35, 0.1, 0, 0, 0, 
        -0.55, 0.1, 0.1, 0, 0, 0, 
        -0.5, 0.0, 0.1, 0, 0, 0, 
        -0.45, 0.1, 0.1, 0, 0, 0, 
        -0.45, 0.35, 0.1, 0, 0, 0, 
    ];

    var indices1a = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices1b = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];
  
    var verticesA1 = [
        -0.6, -0.1, 0.0, 0, 0, 0,    // Index:  0
        -0.55, -0.2, 0.0, 0, 0, 0,    // Index:  1
        -0.45, -0.2, 0.0, 0, 0, 0,    // Index:  2
        -0.4, -0.1,  0.0, 0, 0, 0,    // Index:  3
        -0.6, -0.1, 0.0, 0, 0, 0,
    ];

    var verticesA2 = [
        -0.6, -0.1, 0.0, 0, 0, 0,     // Index:  0
        -0.65, -0.2, 0.0, 0, 0, 0,    // Index:  1
        -0.65, -0.45, 0.0, 0, 0, 0,    // Index:  2
        -0.55, -0.45, 0.0, 0, 0, 0,    // Index:  3
        -0.55, -0.2, 0.0, 0, 0, 0,
        -0.6, -0.1, 0.0, 0, 0, 0,
    ];

    var verticesA3 = [
        -0.6, -0.55, 0.0, 0, 0, 0,    // Index:  0
        -0.65, -0.65, 0.0, 0, 0, 0,    // Index:  1
        -0.65, -0.9, 0.0, 0, 0, 0,    // Index:  2
        -0.6, -1.0, 0.0, 0, 0, 0,    // Index:  3
        -0.55, -0.9, 0.0, 0, 0, 0, 
        -0.55, -0.65, 0.0, 0, 0, 0, 
        -0.6, -0.55, 0.0, 0, 0, 0, 
    ];
    
    var verticesA4 = [
        -0.4, -0.1, 0.0, 0, 0, 0, 
        -0.45, -0.2, 0.0, 0, 0, 0, 
        -0.45, -0.45, 0.0, 0, 0, 0, 
        -0.4, -0.55, 0.0, 0, 0, 0, 
        -0.35, -0.45, 0.0, 0, 0, 0, 
        -0.35, -0.2, 0.0, 0, 0, 0, 
        -0.4, -0.1, 0.0, 0, 0, 0, 
    ];

    var verticesA5 = [
        -0.4, -0.55, 0.0, 0, 0, 0, 
        -0.45, -0.65, 0.0, 0, 0, 0, 
        -0.45, -0.9, 0.0, 0, 0, 0, 
        -0.4, -1.0, 0.0, 0, 0, 0, 
        -0.35, -0.9, 0.0, 0, 0, 0, 
        -0.35, -0.65, 0.0, 0, 0, 0, 
        -0.4, -0.55, 0.0, 0, 0, 0, 
    ];

    var verticesA6 = [
        -0.6, -0.55, 0.0, 0, 0, 0, 
        -0.55, -0.45, 0.0, 0, 0, 0, 
        -0.45, -0.45, 0.0, 0, 0, 0, 
        -0.4, -0.55, 0.0, 0, 0, 0, 
        -0.45, -0.65, 0.0, 0, 0, 0, 
        -0.55, -0.65, 0.0, 0, 0, 0, 
    ];

    var verticesA7 = [
        -0.65, -0.45, 0.0, 0, 0, 0, 
        -0.6, -0.55, 0.0, 0, 0, 0, 
        -0.65, -0.65, 0.0, 0, 0, 0, 
        -0.4, -0.55, 0.0, 0, 0, 0, 
        -0.35, -0.45, 0.0, 0, 0, 0, 
        -0.35, -0.65, 0.0, 0, 0, 0, 
    ];
  
    var indicesA1 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10, 
    ];
  
    var indicesA2 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];
  
    var indicesA3 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesA4 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesA5 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesA6 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];  

    var indicesA7 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var vertices8a = [
        0.4, 0.9, 0.1, 0, 0, 0, 
        0.45, 0.8, 0.1, 0, 0, 0, 
        0.45, 0.55, 0.1, 0, 0, 0, 
        0.4, 0.45, 0.1, 0, 0, 0, 
        0.35, 0.55, 0.1, 0, 0, 0, 
        0.35, 0.8, 0.1, 0, 0, 0, 
    ];

    var vertices8b = [
        0.4, 0.45, 0.1, 0, 0, 0, 
        0.45, 0.35, 0.1, 0, 0, 0, 
        0.45, 0.1, 0.1, 0, 0, 0, 
        0.4, 0.0, 0.1, 0, 0, 0, 
        0.35, 0.1, 0.1, 0, 0, 0, 
        0.35, 0.35, 0.1, 0, 0, 0, 
    ];

    var vertices8c = [
        0.6, 0.9, 0.1, 0, 0, 0, 
        0.65, 0.8, 0.1, 0, 0, 0, 
        0.65, 0.55, 0.1, 0, 0, 0, 
        0.6, 0.45, 0.1, 0, 0, 0, 
        0.55, 0.55, 0.1, 0, 0, 0, 
        0.55, 0.8, 0.1, 0, 0, 0, 
    ];

    var vertices8d = [
        0.6, 0.45, 0.1, 0, 0, 0, 
        0.65, 0.35, 0.1, 0, 0, 0, 
        0.65, 0.1, 0.1, 0, 0, 0, 
        0.6, 0.0, 0.1, 0, 0, 0, 
        0.55, 0.1, 0.1, 0, 0, 0, 
        0.55, 0.35, 0.1, 0, 0, 0, 
    ];

    var vertices8e = [
        0.4, 0.9, 0.1, 0, 0, 0, 
        0.45, 0.8, 0.1, 0, 0, 0, 
        0.55, 0.8, 0.1, 0, 0, 0, 
        0.6, 0.9, 0.1, 0, 0, 0, 
    ];

    var vertices8f = [
        0.4, 0.45, 0.1, 0, 0, 0, 
        0.45, 0.35, 0.1, 0, 0, 0, 
        0.55, 0.35, 0.1, 0, 0, 0, 
        0.6, 0.45, 0.1, 0, 0, 0, 
        0.55, 0.55, 0.1, 0, 0, 0, 
        0.45, 0.55, 0.1, 0, 0, 0, 
    ];

    var vertices8g = [
        0.4, 0.0, 0.1, 0, 0, 0, 
        0.6, 0.0, 0.1, 0, 0, 0, 
        0.55, 0.1, 0.1, 0, 0, 0, 
        0.45, 0.1, 0.1, 0, 0, 0, 
    ];

    var indices8a = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices8b = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices8c = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices8d = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices8e = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices8f = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var indices8g = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ];

    var verticesH1 = [
        0.4, -0.1, 0.0, 0, 0, 0,
        0.45, -0.2, 0.0, 0, 0, 0,
        0.45, -0.45, 0.0, 0, 0, 0,
        0.4, -0.55, 0.0, 0, 0, 0,
        0.35, -0.45, 0.0, 0, 0, 0,
        0.35, -0.2, 0.0, 0, 0, 0,
    ];

    var verticesH2 = [
        0.4, -0.55, 0.0, 0, 0, 0,
        0.45, -0.65, 0.0, 0, 0, 0,
        0.45, -0.9, 0.0, 0, 0, 0,
        0.4, -1.0, 0.0, 0, 0, 0,
        0.35, -0.9, 0.0, 0, 0, 0,
        0.35, -0.65, 0.0, 0, 0, 0,
    ];

    var verticesH3 = [
        0.6, -0.1, 0.0, 0, 0, 0,
        0.65, -0.2, 0.0, 0, 0, 0,
        0.65, -0.45, 0.0, 0, 0, 0,
        0.6, -0.55, 0.0, 0, 0, 0,
        0.55, -0.45, 0.0, 0, 0, 0,
        0.55, -0.2, 0.0, 0, 0, 0,
    ];

    var verticesH4 =[
        0.6, -0.55, 0.0, 0, 0, 0,
        0.65, -0.65, 0.0, 0, 0, 0,
        0.65, -0.9, 0.0, 0, 0, 0,
        0.6, -1.0, 0.0, 0, 0, 0,
        0.55, -0.9, 0.0, 0, 0, 0,
        0.55, -0.65, 0.0, 0, 0, 0,
    ];

    var verticesH5 = [
        0.4, -0.55, 0.0, 0, 0, 0,
        0.45, -0.65, 0.0, 0, 0, 0,
        0.55, -0.65, 0.0, 0, 0, 0,
        0.6, -0.55, 0.0, 0, 0, 0,
        0.55, -0.45, 0.0, 0, 0, 0,
        0.45, -0.45, 0.0, 0, 0, 0,
    ];

    var verticesH6 = [
        0.35, -0.45, 0.0, 0, 0, 0,
        0.4, -0.55, 0.0, 0, 0, 0,
        0.35, -0.65, 0.0, 0, 0, 0,
    ];

    var verticesH7 = [
        0.6, -0.55, 0.0, 0, 0, 0,
        0.65, -0.45, 0.0, 0, 0, 0,
        0.65, -0.65, 0.0, 0, 0, 0,
    ];

    var indicesH1 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

  
    var indicesH2 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];
  
  
    var indicesH3 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesH4 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesH5 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesH6 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

    var indicesH7 = [
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10,
    ];

  
    var objects = [
      {
        name: '1a',
        vertices: vertices1a,
        indices: indices1a,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '1b',
        vertices: vertices1b,
        indices: indices1b,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: 'A1',
        vertices: verticesA1,
        indices: indicesA1,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'A2',
        vertices: verticesA2,
        indices: indicesA2,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'A3',
        vertices: verticesA3,
        indices: indicesA3,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'A4',
        vertices: verticesA4,
        indices: indicesA4,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'A5',
        vertices: verticesA5,
        indices: indicesA5,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'A6',
        vertices: verticesA6,
        indices: indicesA6,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'A7',
        vertices: verticesA7,
        indices: indicesA7,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: '8a',
        vertices: vertices8a,
        indices: indices8a,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '8b',
        vertices: vertices8b,
        indices: indices8b,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '8c',
        vertices: vertices8c,
        indices: indices8c,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '8d',
        vertices: vertices8d,
        indices: indices8d,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '8e',
        vertices: vertices8e,
        indices: indices8e,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '8f',
        vertices: vertices8f,
        indices: indices8f,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: '8g',
        vertices: vertices8g,
        indices: indices8g,
        length: 16,
        type: gl.LINE_LOOP,
      },
      {
        name: 'H1',
        vertices: verticesH1,
        indices: indicesH1,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'H2',
        vertices: verticesH2,
        indices: indicesH2,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'H3',
        vertices: verticesH3,
        indices: indicesH3,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'H4',
        vertices: verticesH4,
        indices: indicesH4,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'H5',
        vertices: verticesH5,
        indices: indicesH5,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'H6',
        vertices: verticesH6,
        indices: indicesH6,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'H7',
        vertices: verticesH7,
        indices: indicesH7,
        length: 10,
        type: gl.TRIANGLE_FAN,
      },
    ]
  
    var vertexShaderCode = `
    attribute vec3 aPosition;  
    attribute vec3 aColor;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vColor;
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // objek
  
    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
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
  
    // Variabel lokal
    var theta = 0.0;
    var thetaX = 0.0;
    var thetaY = 0.0;
    var freezeA = false;
    var freezeN = false;
    var frameWidth = 9;
    var horizontalSpeed = 0.0199; // NRP akhir 199
    var scaleSpeed = 0.0018;
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;
    var scaleDelta = 0.0;
  
    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // View
    var cameraX = 0.0;
    var cameraZ = 7.5; // nomer 3 kamera
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = mat4.create();
    mat4.lookAt(
      view,
      [cameraX, 0.0, cameraZ],    // the location of the eye or the camera
      [cameraX, 0.0, -10],        // the point where the camera look at
      [0.0, 1.0, 0.0]
    );
    // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = mat4.create();
  
    mat4.perspective(perspective, Math.PI / 3, 1.0, 0.5, 50);
  
    function drawing(vertices, indices, start = 0, end, glType = gl.LINE_LOOP) {
      const buffer = gl.createBuffer();
      const indexBuffer = gl.createBuffer();
  
      // bind buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  
      const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
      const aColor = gl.getAttribLocation(shaderProgram, 'aColor');
      // variable pointer ke GLSL
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false,
        6 * Float32Array.BYTES_PER_ELEMENT,
        0 * Float32Array.BYTES_PER_ELEMENT
      );
      gl.enableVertexAttribArray(aPosition);
  
  
      gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false,
        6 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT
      );
      gl.enableVertexAttribArray(aColor);
  
      gl.drawElements(glType, indices.length - 11, gl.UNSIGNED_SHORT, 0);
    }
  
    const animateMove1 = () => {
      var model = mat4.create();
  
      if (horizontalDelta >= (frameWidth / 2) || horizontalDelta <= (-frameWidth / 2 + 1)) {
        horizontalSpeed = horizontalSpeed * -1;
      }
      horizontalDelta += horizontalSpeed;
      mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
  
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
      drawing(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
    }
  
    const animateSize8 = () => {
      var model = mat4.create();
  
      if (scaleDelta >= 0.5 || scaleDelta <= -0.5) {
        scaleSpeed = scaleSpeed * -1;
      }
  
      scaleDelta += scaleSpeed;
      mat4.scale(model, model, [1.0 + scaleDelta, 1.0 + scaleDelta, 1.0 + scaleDelta]);
  
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing(objects[9].vertices, objects[9].indices, 0, objects[0].length, objects[0].type);
      drawing(objects[10].vertices, objects[10].indices, 0, objects[10].length, objects[10].type);
      drawing(objects[11].vertices, objects[11].indices, 0, objects[11].length, objects[11].type);
      drawing(objects[12].vertices, objects[12].indices, 0, objects[12].length, objects[12].type);
      drawing(objects[13].vertices, objects[13].indices, 0, objects[13].length, objects[13].type);
      drawing(objects[14].vertices, objects[14].indices, 0, objects[14].length, objects[14].type);
      drawing(objects[15].vertices, objects[15].indices, 0, objects[15].length, objects[15].type);
    }
  
    const animateRotationA = () => {
      // Rotate the vertices 'A' object about the Y axis with -1 angular velocity
      var modely = mat4.create();
      mat4.rotateX(modely, modely, thetaX);
      // using left and right arrow keys to reverse the direction of rotation
      if (freezeA) {
        thetaX += 0.06;
      } else {
        thetaX += 0.01;
      }
  
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
      gl.uniformMatrix4fv(uModel, false, modely);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
      drawing(objects[4].vertices, objects[4].indices, 0, objects[4].length, objects[4].type);
      drawing(objects[5].vertices, objects[5].indices, 0, objects[5].length, objects[5].type);
      drawing(objects[6].vertices, objects[6].indices, 0, objects[6].length, objects[6].type);
      drawing(objects[7].vertices, objects[7].indices, 0, objects[7].length, objects[7].type);
      drawing(objects[8].vertices, objects[8].indices, 0, objects[8].length, objects[8].type);
    }
  
    const animateRotationH = () => {
      // Rotate the vertices 'A' object about the X axis with -1 angular velocity
      var modelx = mat4.create();
      mat4.rotateY(modelx, modelx, thetaY);
      // using up and down arrow keys to reverse the direction of rotation
      if (freezeN) {
        thetaY += 0.06;
      } else {
        thetaY += 0.01;
      }
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
      gl.uniformMatrix4fv(uModel, false, modelx);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing(objects[16].vertices, objects[16].indices, 0, objects[16].length, objects[16].type);
      drawing(objects[17].vertices, objects[17].indices, 0, objects[17].length, objects[17].type);
      drawing(objects[18].vertices, objects[18].indices, 0, objects[18].length, objects[18].type);
      drawing(objects[19].vertices, objects[19].indices, 0, objects[19].length, objects[19].type);
      drawing(objects[20].vertices, objects[20].indices, 0, objects[20].length, objects[20].type);
      drawing(objects[21].vertices, objects[21].indices, 0, objects[21].length, objects[21].type);
      drawing(objects[22].vertices, objects[22].indices, 0, objects[22].length, objects[22].type);
    }
  
    function onKeyPress(event) {
      if (event.keyCode == 37) { // left arrow key
        freezeA = true;
      } else if (event.keyCode == 39) { // right arrow
        freezeA = false;
      } else if (event.keyCode == 38) { // up
        freezeN = true;
      } else if (event.keyCode == 40) { // down
        freezeN = false;
      }
    }
  
    document.addEventListener("keydown", onKeyPress, false);
  
  
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false,
      6 * Float32Array.BYTES_PER_ELEMENT,
      0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false,
      6 * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
  
    function render() {
      gl.enable(gl.DEPTH_TEST);
      // orange
      gl.clearColor(1.0,      0.65,    0.0,    1.0);
      //            Merah     Hijau   Biru    Transparansi
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
      horizontalDelta += horizontalSpeed;
      verticalDelta -= verticalSpeed;
      var model = mat4.create(); // Membuat matriks identitas
      mat4.translate(
        model, model, [horizontalDelta, verticalDelta, 0.0]
      );
      mat4.rotateX(
        model, model, theta
      );
      mat4.rotateY(
        model, model, theta
      );
      mat4.rotateZ(
        model, model, theta
      );
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      animateMove1();
      animateSize8();
      animateRotationA();
      animateRotationH();
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
