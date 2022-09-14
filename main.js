function main(){
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    // Vertex shader
    var versetShaderCode = 
    "void main() {" +
    "}";

    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, versetShaderCode);
    gl.compileShader(vertexShaderObject); // Sampa sini sudah jadi .o

    // Fragment shader
    var fragmentShaderCode = `
    void main(){

    }
    `;

    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShaderObject, fragmentShaderCode);
    gl.compileShader(vertexShaderObject); // Sampa sini sudah jadi .o

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.clearColor(0.13, 0.15, 0.16, 1.0);
    //            R   G   B   Transparansi
    gl.clear(gl.COLOR_BUFFER_BIT);
}
