"use strict";
exports.__esModule = true;
exports.bufferToString = exports.gsDPSetEnvColor = exports.gsDPSetPrimColor = exports.gsSPEndDisplayList = exports.gsSPBranchList = exports.gsSPDisplayList = exports.gsSPMatrix = exports.gsSPGeometryMode = exports.gsSPPopMatrix = exports.gsSPVertex = exports.gsSPNoOp = exports.GeometryModes = exports.MatrixParams = exports.DisplayOpcodes = exports._shiftr = exports._shiftl = exports.newBuffer = exports.BufferPosition = void 0;
var commandBuffer = new Uint32Array(2);
var BufferPosition;
(function (BufferPosition) {
    BufferPosition[BufferPosition["BUF_HI"] = 0] = "BUF_HI";
    BufferPosition[BufferPosition["BUF_LO"] = 1] = "BUF_LO";
})(BufferPosition = exports.BufferPosition || (exports.BufferPosition = {}));
function newBuffer() {
    return Buffer.from('\0\0\0\0\0\0\0\0');
}
exports.newBuffer = newBuffer;
function _shiftl(v, s, w) {
    return ((((v) & ((0x01 << (w)) - 1)) << (s)));
}
exports._shiftl = _shiftl;
function _shiftr(v, s, w) {
    return ((((v) >> (s)) & ((0x01 << (w)) - 1)));
}
exports._shiftr = _shiftr;
// F3DZEX2
var DisplayOpcodes;
(function (DisplayOpcodes) {
    DisplayOpcodes[DisplayOpcodes["G_NOOP"] = 0] = "G_NOOP";
    DisplayOpcodes[DisplayOpcodes["G_VTX"] = 1] = "G_VTX";
    DisplayOpcodes[DisplayOpcodes["G_POPMTX"] = 216] = "G_POPMTX";
    DisplayOpcodes[DisplayOpcodes["G_GEOMETRYMODE"] = 217] = "G_GEOMETRYMODE";
    DisplayOpcodes[DisplayOpcodes["G_MTX"] = 218] = "G_MTX";
    DisplayOpcodes[DisplayOpcodes["G_DL"] = 222] = "G_DL";
    DisplayOpcodes[DisplayOpcodes["G_ENDDL"] = 223] = "G_ENDDL";
    DisplayOpcodes[DisplayOpcodes["G_SETPRIMCOLOR"] = 250] = "G_SETPRIMCOLOR";
    DisplayOpcodes[DisplayOpcodes["G_SETENVCOLOR"] = 251] = "G_SETENVCOLOR";
})(DisplayOpcodes = exports.DisplayOpcodes || (exports.DisplayOpcodes = {}));
;
var MatrixParams;
(function (MatrixParams) {
    MatrixParams[MatrixParams["G_MTX_NOPUSH"] = 0] = "G_MTX_NOPUSH";
    MatrixParams[MatrixParams["G_MTX_PUSH"] = 1] = "G_MTX_PUSH";
    MatrixParams[MatrixParams["G_MTX_MUL"] = 0] = "G_MTX_MUL";
    MatrixParams[MatrixParams["G_MTX_LOAD"] = 2] = "G_MTX_LOAD";
    MatrixParams[MatrixParams["G_MTX_MODELVIEW"] = 0] = "G_MTX_MODELVIEW";
    MatrixParams[MatrixParams["G_MTX_PROJECTION"] = 4] = "G_MTX_PROJECTION";
})(MatrixParams = exports.MatrixParams || (exports.MatrixParams = {}));
;
var GeometryModes;
(function (GeometryModes) {
    GeometryModes[GeometryModes["G_ZBUFFER"] = 1] = "G_ZBUFFER";
    GeometryModes[GeometryModes["G_SHADE"] = 4] = "G_SHADE";
    GeometryModes[GeometryModes["G_CULL_FRONT"] = 512] = "G_CULL_FRONT";
    GeometryModes[GeometryModes["G_CULL_BACK"] = 1024] = "G_CULL_BACK";
    GeometryModes[GeometryModes["G_FOG"] = 65536] = "G_FOG";
    GeometryModes[GeometryModes["G_LIGHTING"] = 131072] = "G_LIGHTING";
    GeometryModes[GeometryModes["G_TEXTURE_GEN"] = 262144] = "G_TEXTURE_GEN";
    GeometryModes[GeometryModes["G_TEXTURE_GEN_LINEAR"] = 524288] = "G_TEXTURE_GEN_LINEAR";
    GeometryModes[GeometryModes["G_SHADING_SMOOTH"] = 2097152] = "G_SHADING_SMOOTH";
    GeometryModes[GeometryModes["G_CLIPPING"] = 8388608] = "G_CLIPPING";
})(GeometryModes = exports.GeometryModes || (exports.GeometryModes = {}));
function gsSPNoOp() {
    var command = newBuffer();
    //console.log(command);
    return command;
}
exports.gsSPNoOp = gsSPNoOp;
function gsSPVertex(v, n, v0) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_VTX, 24, 8) | _shiftl(n, 12, 8) | _shiftl((v0 + n), 1, 7);
    commandBuffer[BufferPosition.BUF_LO] = v;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPVertex = gsSPVertex;
function gsSPPopMatrix(n) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_POPMTX, 24, 8) | 0x00380002;
    commandBuffer[BufferPosition.BUF_LO] = n * 64;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPPopMatrix = gsSPPopMatrix;
function gsSPGeometryMode(clearbits, setbits) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_GEOMETRYMODE, 24, 8) | _shiftl(~clearbits, 0, 24);
    commandBuffer[BufferPosition.BUF_LO] = setbits;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPGeometryMode = gsSPGeometryMode;
function gsSPMatrix(mtxaddr, params) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_MTX, 24, 8) | 0x00380000 | (params) ^ MatrixParams.G_MTX_PUSH;
    commandBuffer[BufferPosition.BUF_LO] = mtxaddr;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPMatrix = gsSPMatrix;
function gsSPDisplayList(dl) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_DL, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] = dl;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPDisplayList = gsSPDisplayList;
function gsSPBranchList(dl) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_DL, 24, 8);
    commandBuffer[BufferPosition.BUF_HI] |= _shiftl(0x01, 16, 8);
    commandBuffer[BufferPosition.BUF_LO] = dl;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPBranchList = gsSPBranchList;
function gsSPEndDisplayList() {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_ENDDL, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] = 0;
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsSPEndDisplayList = gsSPEndDisplayList;
function gsDPSetPrimColor(minlevel, lodfrac, r, g, b, a) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_SETPRIMCOLOR, 24, 8);
    commandBuffer[BufferPosition.BUF_HI] |= _shiftl(minlevel, 8, 8);
    commandBuffer[BufferPosition.BUF_HI] |= _shiftl(lodfrac, 0, 8);
    commandBuffer[BufferPosition.BUF_LO] = _shiftl(r, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(g, 16, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(b, 8, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(a, 0, 8);
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsDPSetPrimColor = gsDPSetPrimColor;
function gsDPSetEnvColor(r, g, b, a) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_SETENVCOLOR, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] = _shiftl(r, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(g, 16, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(b, 8, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(a, 0, 8);
    var command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}
exports.gsDPSetEnvColor = gsDPSetEnvColor;
function bufferToString(buf) {
    commandBuffer[BufferPosition.BUF_HI] = buf.readUInt32BE(0);
    commandBuffer[BufferPosition.BUF_LO] = buf.readUInt32BE(4);
    switch (buf[0]) {
        case 0x00:
            {
                console.log("gsSPNoOp();");
            }
            break;
        case 0x01:
            {
                var v = commandBuffer[BufferPosition.BUF_LO];
                var n = _shiftr(commandBuffer[BufferPosition.BUF_HI], 12, 8);
                var v0 = _shiftr(commandBuffer[BufferPosition.BUF_HI], 1, 7);
                console.log("gsSPVertex(0x" + v.toString(16).toUpperCase() + ", " + n + ", " + (v0 - n) + ");");
            }
            break;
    }
}
exports.bufferToString = bufferToString;
/*console.log(gsSPNoOp());
console.log(gsSPVertex(0xDEADBEEF, 20, 0));
console.log(gsSPPopMatrix(1));
console.log(gsSPGeometryMode(GeometryModes.G_SHADE, GeometryModes.G_SHADING_SMOOTH));
console.log(gsSPMatrix(0xDEADBEEF, MatrixParams.G_MTX_LOAD | MatrixParams.G_MTX_NOPUSH | MatrixParams.G_MTX_MODELVIEW));
console.log(gsSPDisplayList(0xDEADBEEF));
console.log(gsSPBranchList(0xDEADBEEF));
console.log(gsSPEndDisplayList());
console.log(gsDPSetPrimColor(0, 0, 255, 255, 255, 255));
console.log(gsDPSetEnvColor(255, 255, 255, 255));
bufferToString(Buffer.from([0x01, 0x01, 0x40, 0x28, 0xde, 0xad, 0xbe, 0xef]));*/ 
