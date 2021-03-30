const commandBuffer = new Uint32Array(2);

export enum BufferPosition {
    BUF_HI = 0
    , BUF_LO = 1
}

export function newBuffer() {
    return Buffer.from('\0\0\0\0\0\0\0\0');
}

export function _shiftl(v: number, s: number, w: number) {
    return ((((v) & ((0x01 << (w)) - 1)) << (s)));
}

export function _shiftr(v: number, s: number, w: number) {
    return ((((v) >> (s)) & ((0x01 << (w)) - 1)));
}

// F3DZEX2
export enum DisplayOpcodes {
    G_NOOP = 0x00
    , G_VTX = 0x01
    , G_POPMTX = 0xD8
    , G_GEOMETRYMODE = 0xD9
    , G_MTX = 0xDA
    , G_DL = 0xDE
    , G_ENDDL = 0xDF
    , G_SETPRIMCOLOR = 0xFA
    , G_SETENVCOLOR = 0xFB
};

export enum MatrixParams {
    G_MTX_NOPUSH = 0x00
    , G_MTX_PUSH = 0x01
    , G_MTX_MUL = 0x00
    , G_MTX_LOAD = 0x02
    , G_MTX_MODELVIEW = 0x00
    , G_MTX_PROJECTION = 0x04
};

export enum GeometryModes {
    G_ZBUFFER = 0b00000000000000000000000000000001
    , G_SHADE = 0b00000000000000000000000000000100
    , G_CULL_FRONT = 0b00000000000000000000001000000000
    , G_CULL_BACK = 0b00000000000000000000010000000000
    , G_FOG = 0b00000000000000010000000000000000
    , G_LIGHTING = 0b00000000000000100000000000000000
    , G_TEXTURE_GEN = 0b00000000000001000000000000000000
    , G_TEXTURE_GEN_LINEAR = 0b00000000000010000000000000000000
    , G_SHADING_SMOOTH = 0b00000000001000000000000000000000
    , G_CLIPPING = 0b00000000100000000000000000000000
}

// 0x00
export function gsSPNoOp() {
    let command = newBuffer();
    //console.log(command);
    return command;
}

// 0x01
export function gsSPVertex(v: number, n: number, v0: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_VTX, 24, 8) | _shiftl(n, 12, 8) | _shiftl((v0 + n), 1, 7);
    commandBuffer[BufferPosition.BUF_LO] = v;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

// 0x02
export function gsSPModifyVertex(vbidx: number, where: number, val: number) {
    let command = Buffer.alloc(8);
    command.writeUInt8(0x02);
    command.writeUInt8(where, 1);
    command.writeUInt16BE(vbidx * 2, 2);
    command.writeUInt32BE(val, 4);
    return command;
}

export function gsSPPopMatrix(n: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_POPMTX, 24, 8) | 0x00380002;
    commandBuffer[BufferPosition.BUF_LO] = n * 64;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsSPGeometryMode(clearbits: number, setbits: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_GEOMETRYMODE, 24, 8) | _shiftl(~clearbits, 0, 24);
    commandBuffer[BufferPosition.BUF_LO] = setbits;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsSPMatrix(mtxaddr: number, params: any) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_MTX, 24, 8) | 0x00380000 | (params) ^ MatrixParams.G_MTX_PUSH;
    commandBuffer[BufferPosition.BUF_LO] = mtxaddr;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsSPDisplayList(dl: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_DL, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] = dl;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsSPBranchList(dl: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_DL, 24, 8);
    commandBuffer[BufferPosition.BUF_HI] |= _shiftl(0x01, 16, 8);
    commandBuffer[BufferPosition.BUF_LO] = dl;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsSPEndDisplayList() {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_ENDDL, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] = 0;
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsDPSetPrimColor(minlevel: number, lodfrac: number, r: number, g: number, b: number, a: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_SETPRIMCOLOR, 24, 8);
    commandBuffer[BufferPosition.BUF_HI] |= _shiftl(minlevel, 8, 8);
    commandBuffer[BufferPosition.BUF_HI] |= _shiftl(lodfrac, 0, 8);
    commandBuffer[BufferPosition.BUF_LO] = _shiftl(r, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(g, 16, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(b, 8, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(a, 0, 8);
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}

export function gsDPSetEnvColor(r: number, g: number, b: number, a: number) {
    commandBuffer[BufferPosition.BUF_HI] = _shiftl(DisplayOpcodes.G_SETENVCOLOR, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] = _shiftl(r, 24, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(g, 16, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(b, 8, 8);
    commandBuffer[BufferPosition.BUF_LO] |= _shiftl(a, 0, 8);
    let command = Buffer.from(commandBuffer.buffer).swap32();
    //console.log(command);
    return command;
}


export function bufferToString(buf: Buffer) {
    let cmd = buf.readUInt8(0);
    commandBuffer[BufferPosition.BUF_HI] = buf.readUInt32BE(0);
    commandBuffer[BufferPosition.BUF_LO] = buf.readUInt32BE(4);
    switch (cmd) {
        case 0x00: {
            console.log(`gsSPNoOp();`)
        } break;
        case 0x01: {
            let v = commandBuffer[BufferPosition.BUF_LO];
            let n = _shiftr(commandBuffer[BufferPosition.BUF_HI], 12, 8);
            let v0 = _shiftr(commandBuffer[BufferPosition.BUF_HI], 1, 7);
            console.log(`gsSPVertex(0x${v.toString(16).toUpperCase()}, ${n}, ${v0 - n});`);
        } break;
        case 0xFB: {
            let r: number = _shiftr(commandBuffer[BufferPosition.BUF_LO], 24, 8);
            let g: number = _shiftr(commandBuffer[BufferPosition.BUF_LO], 16, 8);
            let b: number = _shiftr(commandBuffer[BufferPosition.BUF_LO], 8, 8);
            let a: number = _shiftr(commandBuffer[BufferPosition.BUF_LO], 0, 8);
            console.log(`gsDPSetEnvColor(${r}, ${g}, ${b}, ${a});`);
        } break;
    }
}

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