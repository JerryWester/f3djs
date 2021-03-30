// F3DZEX2
export enum DisplayOpcodes {
    G_NOOP = 0x00
    , G_VTX = 0x01
    , G_MODIFYVTX = 0x02
    , G_CULLDL = 0x03
    , G_BRANCH_Z = 0x04
    , G_TRI1 = 0x05
    , G_TRI2 = 0x06
    , G_QUAD = 0x07
    , G_SPECIAL_3 = 0xD3
    , G_SPECIAL_2 = 0xD4
    , G_SPECIAL_1 = 0xD5
    , G_DMA_IO = 0xD6
    , G_TEXTURE = 0xD7
    , G_POPMTX = 0xD8
    , G_GEOMETRYMODE = 0xD9
    , G_MTX = 0xDA
    , G_MOVEWORD = 0xDB
    , G_MOVEMEM = 0xDC
    , G_LOAD_UCODE = 0xDD
    , G_DL = 0xDE
    , G_ENDDL = 0xDF
    , G_SPNOOP = 0xE0
    , G_RDPHALF_1 = 0xE1
    , G_SETOTHERMODE_L = 0xE2
    , G_SETOTHERMODE_H = 0xE3
    , G_TEXRECT = 0xE4
    , G_TEXRECTFLIP = 0xE5
    , G_RDPLOADSYNC = 0xE6
    , G_RDPPIPESYNC = 0xE7
    , G_RDPTILESYNC = 0xE8
    , G_RDPFULLSYNC = 0xE9
    , G_SETKEYGB = 0xEA
    , G_SETKEYR = 0xEB
    , G_SETCONVERT = 0xEC
    , G_SETSCISSOR = 0xED
    , G_SETPRIMDEPTH = 0xEE
    , G_RDPSETOTHERMODE = 0xEF
    , G_LOADTLUT = 0xF0
    , G_RDPHALF_2 = 0xF1
    , G_SETTILESIZE = 0xF2
    , G_LOADBLOCK = 0xF3
    , G_LOADTILE = 0xF4
    , G_SETTILE = 0xF5
    , G_FILLRECT = 0xF6
    , G_SETFILLCOLOR = 0xF7
    , G_SETFOGCOLOR = 0xF8
    , G_SETBLENDCOLOR = 0xF9
    , G_SETPRIMCOLOR = 0xFA
    , G_SETENVCOLOR = 0xFB
    , G_SETCOMBINE = 0xFC
    , G_SETTIMG = 0xFD
    , G_SETZIMG = 0xFE
    , G_SETCIMG = 0xFF
};

export enum ModifyVtxParams {
    G_MWO_POINT_RGBA = 0x10
    , G_MWO_POINT_ST = 0x14
    , G_MWO_POINT_XYSCREEN = 0x18
    , G_MWO_POINT_ZSCREEN = 0x1C
}

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

/**
 * Does nothing except stall the RDP for a few cycles. Typically used in debugging. In the Z64 games (specifically the debug builds), `tag` is set to a pointer to a string commenting the display list, which would then likely be output when calling the SDK's guParseGbiDL function. 
 * @param tag Pointer to a string tag
 * @returns Display list command
 */
export function gsSPNoOp(tag: number = 0) {
    let command = Buffer.alloc(8);
    command.writeUInt32BE(tag, 4);
    return command;
}

/**
 * Loads `numv` vertices from address `vaddr` to the RSP's vertex buffer, starting at buffer index `vbidx`. For F3DEX2.NoN, `numv` must be in the range 1 ≤ `numv` ≤ 32, and `vbidx` in the range 0 ≤ `vbidx` ≤ 31. Vertex transformations and lighting calculations (if any) are calculated upon load. 
 * @param numv Number of vertices to load
 * @param vbidx Index of vertex buffer to begin storing vertices to
 * @param vaddr Address of vertices
 * @returns Display list command
 */
export function gsSPVertex(vaddr: number, numv: number, vbidx: number) {
    let command = Buffer.alloc(8);
    command.writeUInt8(0x01, 0);
    command.writeUInt16BE(numv << 4, 1);
    command.writeUInt8(((vbidx + numv) & 0x7F) << 1, 3);
    command.writeUInt32BE(vaddr, 4);
    return command;
}

/**
 * Modifies a four-byte portion of the vertex specified by `vbidx`. The portion modified is specified by `where`, and the new value is given in `val`. Lighting calculations (if enabled) and position transformations are not calculated by the RSP after use of this command, so modifications modify final color and vertices.
 *
 * The valid values for where have names as follows:
 * 
 * - `G_MWO_POINT_RGBA` = Modifies the color of the vertex
 * - `G_MWO_POINT_ST` = Modifies the texture coordinates
 * - `G_MWO_POINT_XYSCREEN` = Modifies the X and Y position
 * - `G_MWO_POINT_ZSCREEN` = Modifies the Z position (lower four nybbles of `val` should always be zero for this modification)
 * 
 * The exact nature of these values is unclear. The SDK documentation describes them as "byte offsets", however they don't match offsets in the vertex structure. 
 * @param where Enumerated set of values specifying what to change
 * @param vbidx Vertex buffer index of vertex to modify
 * @param val New value to inserts
 * @returns Display list command
 */
export function gsSPModifyVertex(vbidx: number, where: ModifyVtxParams, val: number) {
    let command = Buffer.alloc(8);
    command.writeUInt8(0x02);
    command.writeUInt8(where, 1);
    command.writeUInt16BE(vbidx * 2, 2);
    command.writeUInt32BE(val, 4);
    return command;
}

/**
 * This command takes the vertices in the vertex buffer from `vfirst` through `vlast` as describing the volume of the object being rendered (called the "bounding value"). If the bounding volume does not intersect with the current viewing volume (aka if the bounding volume is entirely offscreen), then the display list ends, equivalent to a DF opcode. Otherwise, the display list continues as though nothing happened (equivalent to 00, then).
 * 
 * For F3DEX2.NoN, Each of `vfirst` and `vlast` must be in the range `0 ≤ x ≤ 31`. Additionally, `vfirst < vlast` must be true (thus a minimum of two vertices must be specified, and range of vertices cannot be reversed). It's not specified what the behavior is when all the vertices are coplanar. 
 * @param vfirst Vertex buffer index of first vertex for bounding volume
 * @param vlast Vertex buffer index of last vertex for bounding volume
 * @returns Display list command
 */
export function gsSPCullDisplayList(vfirst: number, vlast: number) {
    let command = Buffer.alloc(8);

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