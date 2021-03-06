/* eslint-disable @typescript-eslint/no-unused-vars */
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
}

export enum ModifyVtxParams {
    G_MWO_POINT_RGBA = 0x10
    , G_MWO_POINT_ST = 0x14
    , G_MWO_POINT_XYSCREEN = 0x18
    , G_MWO_POINT_ZSCREEN = 0x1C
}

export enum PrimaryVertex {
    V0      // v0 -> v1 -> v2 (-> v3)
    , V1    // v1 -> v2 (-> v3) -> v0
    , V2    // v2 (-> v3) -> v0 -> v1
    , V3    // v3 -> v0 -> v1 -> v2 (Quad only)
}

export enum MatrixParams {
    G_MTX_NOPUSH = 0x00
    , G_MTX_PUSH = 0x01
    , G_MTX_MUL = 0x00
    , G_MTX_LOAD = 0x02
    , G_MTX_MODELVIEW = 0x00
    , G_MTX_PROJECTION = 0x04
}

export enum MoveWordIndexModes {
    G_MW_MATRIX = 0x00
    , G_MW_NUMLIGHT = 0x02
    , G_MW_CLIP = 0x04
    , G_MW_SEGMENT = 0x06
    , G_MW_FOG = 0x08
    , G_MW_LIGHTCOL = 0x0A
    , G_MW_FORCEMTX = 0x0C
    , G_MW_PERSPNORM = 0x0E
}

export enum MoveWordObjectModes {
    G_MWO_NUMLIGHT = 0x00
    , G_MWO_CLIP_RNX = 0x04
    , G_MWO_CLIP_RNY = 0x0c
    , G_MWO_CLIP_RPX = 0x14
    , G_MWO_CLIP_RPY = 0x1c
    , G_MWO_SEGMENT_0 = 0x00
    , G_MWO_SEGMENT_1 = 0x01
    , G_MWO_SEGMENT_2 = 0x02
    , G_MWO_SEGMENT_3 = 0x03
    , G_MWO_SEGMENT_4 = 0x04
    , G_MWO_SEGMENT_5 = 0x05
    , G_MWO_SEGMENT_6 = 0x06
    , G_MWO_SEGMENT_7 = 0x07
    , G_MWO_SEGMENT_8 = 0x08
    , G_MWO_SEGMENT_9 = 0x09
    , G_MWO_SEGMENT_A = 0x0a
    , G_MWO_SEGMENT_B = 0x0b
    , G_MWO_SEGMENT_C = 0x0c
    , G_MWO_SEGMENT_D = 0x0d
    , G_MWO_SEGMENT_E = 0x0e
    , G_MWO_SEGMENT_F = 0x0f
    , G_MWO_FOG = 0x00
    , G_MWO_aLIGHT_1 = 0x00
    , G_MWO_bLIGHT_1 = 0x04
    , G_MWO_aLIGHT_2 = 0x18
    , G_MWO_bLIGHT_2 = 0x1c
    , G_MWO_aLIGHT_3 = 0x30
    , G_MWO_bLIGHT_3 = 0x34
    , G_MWO_aLIGHT_4 = 0x48
    , G_MWO_bLIGHT_4 = 0x4c
    , G_MWO_aLIGHT_5 = 0x60
    , G_MWO_bLIGHT_5 = 0x64
    , G_MWO_aLIGHT_6 = 0x78
    , G_MWO_bLIGHT_6 = 0x7c
    , G_MWO_aLIGHT_7 = 0x90
    , G_MWO_bLIGHT_7 = 0x94
    , G_MWO_aLIGHT_8 = 0xa8
    , G_MWO_bLIGHT_8 = 0xac
    , G_MWO_MATRIX_XX_XY_I = 0x00
    , G_MWO_MATRIX_XZ_XW_I = 0x04
    , G_MWO_MATRIX_YX_YY_I = 0x08
    , G_MWO_MATRIX_YZ_YW_I = 0x0c
    , G_MWO_MATRIX_ZX_ZY_I = 0x10
    , G_MWO_MATRIX_ZZ_ZW_I = 0x14
    , G_MWO_MATRIX_WX_WY_I = 0x18
    , G_MWO_MATRIX_WZ_WW_I = 0x1c
    , G_MWO_MATRIX_XX_XY_F = 0x20
    , G_MWO_MATRIX_XZ_XW_F = 0x24
    , G_MWO_MATRIX_YX_YY_F = 0x28
    , G_MWO_MATRIX_YZ_YW_F = 0x2c
    , G_MWO_MATRIX_ZX_ZY_F = 0x30
    , G_MWO_MATRIX_ZZ_ZW_F = 0x34
    , G_MWO_MATRIX_WX_WY_F = 0x38
    , G_MWO_MATRIX_WZ_WW_F = 0x3c
    , G_MWO_POINT_RGBA = 0x10
    , G_MWO_POINT_ST = 0x14
    , G_MWO_POINT_XYSCREEN = 0x18
    , G_MWO_POINT_ZSCREEN = 0x1c 
}

export enum MoveMemModes {
    G_MV_MMTX = 2
    , G_MV_PMTX = 6
    , G_MV_VIEWPORT = 8
    , G_MV_LIGHT = 10
    , G_MV_POINT = 12
    , G_MV_MATRIX = 14
}

export enum OtherModes {
    G_SETOTHERMODE_L = 0xE2
    , G_SETOTHERMODE_H = 0xE3
}

export enum ShiftModes {
    G_MDSFT_ALPHACOMPARE = 0
    , G_MDSFT_ZSRCSEL = 2
    , G_MDSFT_RENDERMODE = 3
    , G_MDSFT_BLENDMASK = 0
    , G_MDSFT_ALPHADITHER = 4
    , G_MDSFT_RGBDITHER = 6
    , G_MDSFT_COMBKEY = 8
    , G_MDSFT_TEXTCONV = 9
    , G_MDSFT_TEXTFILT = 12
    , G_MDSFT_TEXTLUT = 14
    , G_MDSFT_TEXTLOD = 16
    , G_MDSFT_TEXTDETAIL = 17
    , G_MDSFT_TEXTPERSP = 19
    , G_MDSFT_CYCLETYPE = 20
    , G_MDSFT_COLORDITHER = 22
    , G_MDSFT_PIPELINE = 23
}

export enum ScissorModes {
    G_SC_NON_INTERLACE = 0
    , G_SC_EVEN_INTERLACE = 2
    , G_SC_ODD_INTERLACE = 3
}

export enum TextureFormat {
    G_IM_FMT_RGBA = 0
    , G_IM_FMT_YUV = 1
    , G_IM_FMT_CI = 2
    , G_IM_FMT_IA = 3
    , G_IM_FMT_I = 4
}

export enum TextureSize {
    G_IM_SIZ_4b = 0
    , G_IM_SIZ_8b = 1
    , G_IM_SIZ_16b = 2
    , G_IM_SIZ_32b = 3
}

export enum TextureFlags {
    G_TX_NOMIRROR = 0
    , G_TX_MIRROR = 1
    , G_TX_WRAP = 0
    , G_TX_CLAMP = 2
}

export enum ColorCombinerSettings {
    G_CCMUX_COMBINED = 0
    , G_CCMUX_TEXEL0 = 1
    , G_CCMUX_TEXEL1 = 2
    , G_CCMUX_PRIMITIVE = 3
    , G_CCMUX_SHADE = 4
    , G_CCMUX_ENVIRONMENT = 5
    , G_CCMUX_CENTER = 6
    , G_CCMUX_SCALE = 6
    , G_CCMUX_COMBINED_ALPHA = 7
    , G_CCMUX_TEXEL0_ALPHA = 8
    , G_CCMUX_TEXEL1_ALPHA = 9
    , G_CCMUX_PRIMITIVE_ALPHA = 10
    , G_CCMUX_SHADE_ALPHA = 11
    , G_CCMUX_ENV_ALPHA = 12
    , G_CCMUX_LOD_FRACTION = 13
    , G_CCMUX_PRIM_LOD_FRAC = 14
    , G_CCMUX_NOISE = 7
    , G_CCMUX_K4 = 7
    , G_CCMUX_K5 = 15
    , G_CCMUX_1 = 6
    , G_CCMUX_0 = 31
}

export enum AlphaCombinerSettings {
    G_ACMUX_COMBINED = 0
    , G_ACMUX_TEXEL0 = 1
    , G_ACMUX_TEXEL1 = 2
    , G_ACMUX_PRIMITIVE = 3
    , G_ACMUX_SHADE = 4
    , G_ACMUX_ENVIRONMENT = 5
    , G_ACMUX_LOD_FRACTION = 0
    , G_ACMUX_PRIM_LOD_FRAC = 6
    , G_ACMUX_1 = 6
    , G_ACMUX_0 = 7
}

export enum ZValFlag {
    G_BZ_PERSP
    , G_BZ_ORTHO
}

export enum DmaIOFlag {
    READ
    , WRITE
}

function FTOFIX32(x: number): number {
    return x * 0x00010000;
}

/**
 * Where `zval` is the Z value the programmer is thinking of comparing against (whereas the "real" Z value handed to the opcode is calculated by this function), `near` and `far` denote the distances of the near and far clipping planes, respectively, from the viewpoint. `zmin` and `zmax` are the minimum and maximum posible Z values, respectively. `flag` decides on the projection, taking either of these enumerations:
 * 
 * - `G_BZ_PERSP` = perspective projection
 * - `G_BZ_ORTHO` = orthographic projection
 * @param zval The Z value the programmer is thinking of comparing against
 * @param flag Projection type
 * @param near Distance of near clipping plane
 * @param far Distance of far clipping plane
 * @param zmin Minimum possible Z value
 * @param zmax Maximum possible Z value
 * @returns Calculated zVal for gsSPBranchLessZraw
 */
export function calcZVal(zval: number, flag: ZValFlag, near: number, far: number, zmin = 0x0, zmax = 0x3FF): number {
    const part1 = flag == ZValFlag.G_BZ_PERSP
        ? (1 - near / zval) / (1 - near / far)
        : (zval - near) / (far - near);
    return FTOFIX32(part1) * ((zmax - zmin) & ~1) + FTOFIX32(zmin);
}

function G_RDPHALF_1(wordhi: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_RDPHALF_1);
    command.writeUInt32BE(wordhi, 4);
    return command;
}

function G_RDPHALF_2(wordlo: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_RDPHALF_2);
    command.writeUInt32BE(wordlo, 4);
    return command;
}

/**
 * @param val Decimal point value
 * @param s Significand, or the integer before the decimal point (i.e. the `10` in `10.5`)
 * @param e Exponent, or the integer after the decimal point (i.e. the `5` in `10.5`)
 * @returns Signed fixed-point number
 */
function sFIXED_POINT(val: number, s: number, e: number): number {
    const exp = Math.pow(2, e);
    const max = (Math.pow(2, s) - 1) + ((exp - 1) / exp);
    if (val >= -Math.pow(2, s) && val < max) {
        const bits = 1 + s + e;
        const max_val = Math.pow(2, bits);
        const part1 = (Math.floor(val) + max_val) % max_val;
        const part2 = Math.floor(Number.parseFloat((val % 1).toPrecision(12)) * exp);
        return (part1 << e) | part2;
    } else {
        throw `Error: value must be between or equal to ${-Math.pow(2, s)} and ${max}. Received ${val}`;
    }
}

/**
 * @param val Decimal point value
 * @param s Significand, or the integer before the decimal point (i.e. the `10` in `10.2`)
 * @param e Exponent, or the integer after the decimal point (i.e. the `2` in `10.2`)
 * @returns Unsigned fixed-point number
 */
function uFIXED_POINT(val: number, s: number, e: number): number {
    const exp = Math.pow(2, e);
    const max = (Math.pow(2, s) - 1) + ((exp - 1) / exp);
    if (val >= 0 && val < max) {
        const part1 = Math.floor(val);
        const part2 = Math.floor(Number.parseFloat((val % 1).toPrecision(12)) * exp);
        return (part1 << e) | part2;
    } else {
        throw `Error: value must be between or equal to 0 and ${max}. Received ${val}`;
    }
}

/**
 * Does nothing except stall the RDP for a few cycles. Typically used in debugging.
 * @returns Display list command
 */
export function gsDPNoOp(): Buffer {
    return Buffer.alloc(8);
}

/**
 * Does nothing except stall the RDP for a few cycles. Typically used in debugging. In the Z64 games (specifically the debug builds), `tag` is set to a pointer to a string commenting the display list, which would then likely be output when calling the SDK's guParseGbiDL function.
 * @param tag Pointer to a string tag
 * @returns Display list command
 */
export function gsDPNoOpTag(tag: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(tag, 4);
    return command;
}

/**
 * Loads `numv` vertices from address `vaddr` to the RSP's vertex buffer, starting at buffer index `vbidx`. For F3DEX2.NoN, `numv` must be in the range 1 ??? `numv` ??? 32, and `vbidx` in the range 0 ??? `vbidx` ??? 31. Vertex transformations and lighting calculations (if any) are calculated upon load. 
 * @param numv Number of vertices to load
 * @param vbidx Index of vertex buffer to begin storing vertices to
 * @param vaddr Address of vertices
 * @returns Display list command
 */
export function gsSPVertex(vaddr: number, numv: number, vbidx: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_VTX);
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
export function gsSPModifyVertex(vbidx: number, where: ModifyVtxParams, val: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_MODIFYVTX);
    command.writeUInt8(where, 1);
    command.writeUInt16BE(vbidx * 2, 2);
    command.writeUInt32BE(val, 4);
    return command;
}

/**
 * This command takes the vertices in the vertex buffer from `vfirst` through `vlast` as describing the volume of the object being rendered (called the "bounding value"). If the bounding volume does not intersect with the current viewing volume (aka if the bounding volume is entirely offscreen), then the display list ends, equivalent to a DF opcode. Otherwise, the display list continues as though nothing happened (equivalent to 00, then).
 * 
 * For F3DEX2.NoN, Each of `vfirst` and `vlast` must be in the range `0 ??? x ??? 31`. Additionally, `vfirst < vlast` must be true (thus a minimum of two vertices must be specified, and range of vertices cannot be reversed). It's not specified what the behavior is when all the vertices are coplanar. 
 * @param vfirst Vertex buffer index of first vertex for bounding volume
 * @param vlast Vertex buffer index of last vertex for bounding volume
 * @returns Display list command
 */
export function gsSPCullDisplayList(vfirst: number, vlast: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_CULLDL);
    command.writeUInt16BE(vfirst, 2);
    command.writeUInt16BE(vlast, 6);
    return command;
}

/**
 * Tests the Z value of the vertex at buffer index `vbidx` (described as `vbidx.z` here) against `zval`. If `vbidx.z ??? zval`, then the processor switches over to the display list at address `newdl` (equivalent to `gsSPBranchList(newdl)`). Otherwise continues through the display list. Useful for LOD-related model processing, where several occurrences of this can be stacked to branch to progressively closer versions of the model.
 * 
 * Note that the 04 opcode actually pulls the address of the branching display list from the high half of the "RDP word" (16 bytes used for generic value storage, as far as is known). The italicized opcode given above is set by the "basic function" listed for this opcode, immediately before the actual 04 opcode.
 * 
 * Although not stated in the documentation, `vbidx` is presumably limited to the range `0 ??? vbidx ??? 31` just like other buffer indices. It's unknown why the opcode needs `vbidx` twice, and multiplied by different amounts.
 * 
 * Also, `zval` is usually calculated for the N64 programmer (only the `*Zraw` form specifies a raw `zval`). See also `calcZVal`.
 * @param newdl Address of display list to branch to
 * @param vbidx Vertex buffer index of vertex to test
 * @param zval Z value to test against
 * @returns Display list command
 */
export function gsSPBranchLessZraw(newdl: number, vbidx: number, zval: number): Buffer {
    // E1000000 dddddddd
    // 04aaabbb zzzzzzzz

    const command = Buffer.alloc(16);

    // E1000000 dddddddd
    G_RDPHALF_1(newdl).copy(command);

    // 04aaabbb
    command.writeUInt32BE(((vbidx * 5) << 12) + (vbidx * 2), 8);
    command.writeUInt8(DisplayOpcodes.G_BRANCH_Z, 8);

    // zzzzzzzz
    command.writeUInt32BE(zval, 12);
    return command;
}

/**
 * Draws one triangle to screen. `v0`, `v1`, and `v2` specify vertex buffer indices, all in the range `0 ??? v ??? 31` for F3DEX2.NoN.
 * 
 * Vertices are drawn in the order `aa -> bb -> cc`. `aa` is considered the "primary" vertex of the triangle, which matters in certain situations (for example, its color is taken as the color of the whole triangle when doing flat shading).
 * 
 * The given macro (`gsSP1Triangle`) reorders its arguments depending on the value of `flag`.
 * @param v0 Vertex 1
 * @param v1 Vertex 2
 * @param v2 Vertex 3
 * @param flag Primary vertex
 * @returns Display list command
 */
export function gsSP1Triangle(v0: number, v1: number, v2: number, flag: PrimaryVertex): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_TRI1);
    switch (flag) {
        case PrimaryVertex.V0: {
            command.writeUInt8(v0, 1);
            command.writeUInt8(v1, 2);
            command.writeUInt8(v2, 3);
        } break;

        case PrimaryVertex.V1: {
            command.writeUInt8(v1, 1);
            command.writeUInt8(v2, 2);
            command.writeUInt8(v0, 3);
        } break;

        case PrimaryVertex.V2: {
            command.writeUInt8(v2, 1);
            command.writeUInt8(v0, 2);
            command.writeUInt8(v1, 3);
        } break;
    }
    return command;
}

/**
 * Draws two triangles at once. All six given indices must be in the range `0 ??? v ??? 31` for F3DEX2.NoN.
 * 
 * The first triangle is drawn in the order `aa -> bb -> cc`, with `aa` being the "primary" vertex. The second triangle is similar, drawn in `dd -> ee -> ff` order and `dd` being its "primary" vertex.
 * 
 * `flag0` reorders the vertices for the first triangle, and `flag1` reorders them for the second triangle.
 * @param v00 Tri 1, Vertex 1
 * @param v01 Tri 1, Vertex 2
 * @param v02 Tri 1, Vertex 3
 * @param flag0 Tri 1, Primary Vertex
 * @param v10 Tri 2, Vertex 1
 * @param v11 Tri 2, Vertex 2
 * @param v12 Tri 2, Vertex 3
 * @param flag1 Tri 2, Primary Vertex
 * @returns Display list command
 */
export function gsSP2Triangles(v00: number, v01: number, v02: number, flag0: PrimaryVertex, v10: number, v11: number, v12: number, flag1: PrimaryVertex): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_TRI2);
    switch (flag0) {
        case PrimaryVertex.V0: {
            command.writeUInt8(v00, 1);
            command.writeUInt8(v01, 2);
            command.writeUInt8(v02, 3);
        } break;

        case PrimaryVertex.V1: {
            command.writeUInt8(v01, 1);
            command.writeUInt8(v02, 2);
            command.writeUInt8(v00, 3);
        } break;

        case PrimaryVertex.V2: {
            command.writeUInt8(v02, 1);
            command.writeUInt8(v00, 2);
            command.writeUInt8(v01, 3);
        } break;
    }
    switch (flag1) {
        case PrimaryVertex.V0: {
            command.writeUInt8(v10, 5);
            command.writeUInt8(v11, 6);
            command.writeUInt8(v12, 7);
        } break;

        case PrimaryVertex.V1: {
            command.writeUInt8(v11, 5);
            command.writeUInt8(v12, 6);
            command.writeUInt8(v10, 7);
        } break;

        case PrimaryVertex.V2: {
            command.writeUInt8(v12, 5);
            command.writeUInt8(v10, 6);
            command.writeUInt8(v11, 7);
        } break;
    }
    return command;
}

/**
 * @deprecated **Note:** This opcode is functionally equivalent to opcode 06. The macro for this opcode (and thus presumably also the opcode itself) is labeled as no longer supported in Oct 1999 SDK documentation. If you're making new display lists to import into OoT, **use 06 instead of this.**
 * 
 * Draws a quadrangle, as two triangles. All four vertex indices are in the range `0 ??? v ??? 31` for F3DEX2.NoN.
 * 
 * The macro given takes the four vertices and rearranges them according to `flag`, and as per the opcode writes it as two triangles. The draw order is `aa -> bb -> cc` for the first triangle, `aa -> cc -> dd`, with `aa` being the "primary" vertex for both (thus maintaining a single "primary" vertex for the quadrangle). Both occurrences of `aa` should be equal, as well as both of `cc`, since the purpose of this opcode is to draw a quadrilateral polygon. 
 * 
 * The flag determines the vertices order.
 * @param v0 Vertex 1
 * @param v1 Vertex 2
 * @param v2 Vertex 3
 * @param v3 Vertex 4
 * @param flag Primary Vertex
 * @returns Display list command
 */
export function gsSPQuadrangle(v0: number, v1: number, v2: number, v3: number, flag: PrimaryVertex): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_QUAD);
    switch (flag) {
        case PrimaryVertex.V0: {
            command.writeUInt8(v0, 1);
            command.writeUInt8(v1, 2);
            command.writeUInt8(v2, 3);
            
            command.writeUInt8(v0, 5);
            command.writeUInt8(v2, 6);
            command.writeUInt8(v3, 7);
        } break;
        
        case PrimaryVertex.V1: {
            command.writeUInt8(v1, 1);
            command.writeUInt8(v2, 2);
            command.writeUInt8(v3, 3);
            
            command.writeUInt8(v1, 5);
            command.writeUInt8(v3, 6);
            command.writeUInt8(v0, 7);
        } break;
        
        case PrimaryVertex.V2: {
            command.writeUInt8(v2, 1);
            command.writeUInt8(v3, 2);
            command.writeUInt8(v0, 3);
            
            command.writeUInt8(v2, 5);
            command.writeUInt8(v0, 6);
            command.writeUInt8(v1, 7);
        } break;
        
        case PrimaryVertex.V3: {
            command.writeUInt8(v3, 1);
            command.writeUInt8(v0, 2);
            command.writeUInt8(v1, 3);
            
            command.writeUInt8(v3, 5);
            command.writeUInt8(v1, 6);
            command.writeUInt8(v2, 7);
        } break;
    }
    return command;
}

/**
 * Appears to be an explicitly reserved command.
 * @returns Display list command
 */
export function G_SPECIAL_3(...unk: unknown[]): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SPECIAL_3);
    return command;
}

/**
 * Appears to be an explicitly reserved command.
 * @returns Display list command
 */
export function G_SPECIAL_2(...unk: unknown[]): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SPECIAL_2);
    return command;
}

/**
 * Appears to be an explicitly reserved command.
 * @returns Display list command
 */
export function G_SPECIAL_1(...unk: unknown[]): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SPECIAL_1);
    return command;
}

/**
 * Does a DMA between DMEM/IMEM address dmem and DRAM address dram. size bytes are presumably transfered in the process. flag determines the type of transfer. Apparently:
 * 
 * - `READ`: Read from DMEM/IMEM to DRAM
 * - `WRITE`: Write DRAM to DMEM/IMEM
 * 
 * The exact nature of this command is unclear, since none of this opcode's macros are documented, and the only available comment suggests this is a debugging tool only. Therefore, you should not expect to see this in production code.
 * @param flag Chooses between read or write
 * @param dmem Address in DMEM/IMEM(?)
 * @param size (Presumably) size of data to transfer
 * @param dram DRAM address
 * @returns Display list command
 */
export function gsSPDma_io(flag: DmaIOFlag, dmem: number, dram: number, size: number): Buffer {
    const command = Buffer.alloc(8);
    // D6___sss rrrrrrrr
    // ___ -> fmmm mmmm mmm0

    command.writeUInt32BE(
        ((
            ((flag & 1) << 11) | // f
            (((dmem / 8) & 0x3FF) << 1) // mmm mmmm mmm
        ) << 12) |
        (size & 0xFFF) // sss
    );
    command.writeUInt8(DisplayOpcodes.G_DMA_IO);
    command.writeUInt32BE(dram, 4);
    return command;
}

/**
 * This opcode enables or disables various tile descriptors, and sets the maximum number of mipmap levels and scaling factor for the texture.
 * 
 * `tile` is the tile descriptor number being modified by the opcode. `level` is the maximum number of mipmap levels minus one, (so e.g. a level of zero means at most one mipmap). The `scaleS` and `scaleT` parameters set scaling factors for the tile descriptor.
 * 
 * If `on` is set to 0, then the tile descriptor is disabled, and none of the other parameters are actually applied. If `on` is set to 1, then the tile descriptor is enabled and the previously-mentioned parameters are applied.
 * 
 * Note that `scaleS` and `scaleT` are binary fractional values with an implied 0.; for example, a `scaleS` of 0x8000 means 0b0.1000_0000_0000_0000, or 0d0.5. 
 * @param level Maximum number of mipmap levels aside from the first
 * @param tile Tile descriptor number
 * @param on Decides whether to turn the given texture on or off
 * @param scaleS Scaling factor for the S-axis (horizontal)
 * @param scaleT Scaling factor for the T-axis (vertical)
 * @returns Display list command
 */
export function gsSPTexture(scaleS: number, scaleT: number, level: number, tile: number, on: number): Buffer {
    const command = Buffer.alloc(8);
    // D700____ sssstttt
    // ____ -> 00LL Lddd nnnn nnn0

    command.writeUInt8(DisplayOpcodes.G_TEXTURE);
    command.writeUInt16BE(
        ((level & 0x7) << 11) |
        ((tile & 0x7) << 8) |
        ((on & 0x7F) << 1),
        2
    );
    command.writeUInt16BE(scaleS, 4);
    command.writeUInt16BE(scaleT, 6);

    return command;
}

/**
 * Pops num matrices from the stack specified by which
 * 
 * which can be either of:
 * 
 * - `G_MTX_MODELVIEW`
 * - `G_MTX_PROJECTION`
 * 
 * However, since the projection matrix "stack" isn't actually a stack, the which parameter is silently ignored and always assumes the modelview matrix stack. 
 * @param num The number of matrices to pop
 * @param which Specifies which matrix stack to pop from (ignored, `G_MTX_MODELVIEW` default)
 * @returns Display list command
 */
export function gsSPPopMatrixN(which: MatrixParams, num: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_POPMTX);
    command.writeUInt8(0x38, 1);
    command.writeUInt8(0x02, 3);
    command.writeUInt32BE(num * 64);
    return command;
}

/**
 * Changes the various mode bits of the RSP's geometry mode. This opcode can clear and set bits at once.
 * 
 * Assuming `G` to stand for the geometry mode bits, this command performs the equivalent of:
 * 
 * ```javascript
 *     G = (G & ~clearbits) | setbits
 * ```
 * 
 * That is, keeps only the bits that aren't meant to be cleared, and then sets the bits that are meant to be set.
 * @param clearbits Geometry mode bits to clear
 * @param setbits Geometry mode bits to set
 * @returns Display list command
 */
export function gsSPGeometryMode(clearbits: number, setbits: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(~(clearbits & 0xFFFFFF));
    command.writeUInt8(DisplayOpcodes.G_GEOMETRYMODE);
    command.writeUInt32BE(setbits, 4);
    return command;
}

/**
 * Adds a new matrix from `mtxaddr` to the appropriate matrix stack.
 * 
 * `params` are a bitfield with the following options:
 * 
 * - `G_MTX_NOPUSH` or `G_MTX_PUSH`
 * - `G_MTX_MUL` or `G_MTX_LOAD`
 * - `G_MTX_MODELVIEW` or `G_MTX_PROJECTION`
 * 
 * `NOPUSH` and `PUSH`, `MUL` and `LOAD`, and `MODELVIEW` and `PROJECTION` are exclusive pairs of options. `NOPUSH`, `MUL`, and `MODELVIEW` are "default options", and are named just as programmer convenience, to explicitly state choices.
 * 
 * If `PUSH` is specified, then the matrix will be added to the top of the stack as a new stack element. If there is no room on the stack, this option is ignored and `NOPUSH` behavior occurs instead. `NOPUSH` means the top matrix of the stack will be overwritten with the new matrix.
 * 
 * If `MUL` is specified, the new matrix is multiplied by the top of the stack before being placed according to `PUSH`/`NOPUSH`. Specifically the matrix product of `new matrix * top of the stack` (verify this is the right order, since matrix multiplication ain't commutative). `LOAD` means no multiplication is done against the new matrix.
 * 
 * `MODELVIEW` selects the modelview matrix stack (meaning the new matrix is a modelview matrix), while `PROJECTION` refers to the projection matrix "stack". Since the projection matrix "stack" is not actually a stack, rather a single matrix, the `PUSH` option is always ignored for new projection matrices. 
 * @param params Parameters controlling nature of matrix addition
 * @param mtxaddr RAM address of new matrix
 * @returns Display list command
 */
export function gsSPMatrix(mtxaddr: number, params: MatrixParams): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_MTX);
    command.writeUInt8(0x38, 1);
    command.writeUInt8((params & 0xFF) ^ MatrixParams.G_MTX_PUSH);
    return command;
}

/**
 * Loads a new 32-bit value data to the location specified by index and offset.
 * 
 * index is an index into a table of DMEM addresses. The enumerations given for this for F3DEX2 are:
 * 
 * - `G_MW_MATRIX`
 * - `G_MW_NUMLIGHT`
 * - `G_MW_CLIP`
 * - `G_MW_SEGMENT`
 * - `G_MW_FOG`
 * - `G_MW_LIGHTCOL`
 * - `G_MW_FORCEMTX`
 * - `G_MW_PERSPNORM`
 * 
 * The offset is, as the name suggests, an offset from the address that index resolves to.
 * @param index Index into DMEM pointer table(?)
 * @param offset Offset from the indexed base address(?)
 * @param data New 32-bit value
 * @returns Display list command
 */
export function gsMoveWd(index: MoveWordIndexModes, offset: MoveWordObjectModes, data: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_MOVEWORD);
    command.writeUInt8(index, 1);
    command.writeUInt16BE(offset, 2);
    command.writeUInt32BE(data, 4);
    return command;
}

/**
 * Wrapper for `gsMoveWd`.
 * @todo Document this better.
 * @param segment Segment
 * @param base Address
 * @returns Display list command
 */
export function gsSPSegment(segment: MoveWordObjectModes, base: number): Buffer {
    return gsMoveWd(MoveWordIndexModes.G_MW_SEGMENT, segment * 4, base);
}

/**
 * Wrapper for `gsMoveWd`.
 * @todo Document this better.
 * @param where Where
 * @param num Address
 * @returns Display list command
 */
export function gsSPInsertMatrix(where: MoveWordObjectModes, num: number): Buffer {
    return gsMoveWd(MoveWordIndexModes.G_MW_MATRIX, where, num);
}

/**
 * Transfers a block of data from RDRAM to DMEM, in 8 byte chunks. `Size` is the number of bytes to copy from RDRAM address, placing it at the DMEM location pointed to by `index`, plus `offset`.
 * 
 * `index` is an index into a table of addresses of DMEM. Given enumerations for index are:
 * 
 * - `G_MV_MMTX`
 * - `G_MV_PMTX`
 * - `G_MV_VIEWPORT`
 * - `G_MV_LIGHT`
 * - `G_MV_POINT`
 * - `G_MV_MATRIX`
 * 
 * Note however that only `VIEWPORT`, `LIGHT`, and `MATRIX` are used by any of the macros given to programmers.
 * 
 * `offset` is, as the name would suggest, an offset from the address index resolves to. This could be anything, though a couple enumerations are provided.
 * 
 * Also note that the function `gsMoveMem` is imaginary: all of the macros that use this opcode do so directly, as opposed to going through another function. Since no general macro exists for this opcode, `gsMoveMem` was invented for illustrative purposes. 
 * @param size Size in bytes of memory to be moved
 * @param offset Offset from indexed base address
 * @param index Index into table of DMEM addresses
 * @param address RAM address of memory
 * @returns Display list command
 */
export function gsMoveMem(size: number, index: MoveMemModes, offset: number, address: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_MOVEMEM);
    command.writeUInt8(((size - 1) / 8 & 0x1F) << 3, 1);
    command.writeUInt8(offset / 8, 2);
    command.writeUInt8(index, 3);
    command.writeUInt32BE(address, 4);
    return command;
}

/**
 * Loads a new microcode executable into the RSP, with pointers `dstart` to the start of the data section and `tstart` to the start of the text section, with `dsize` specifying the size of the data section. After loading the new microcode, the RCP is reset as appropriate.
 * 
 * Note that `dstart` is stored in the high half of the "RDP word". 
 * @param dstart Start of data section
 * @param dsize Size of data section
 * @param tstart Start of text section
 * @returns Display list command
 */
export function gsSPLoadUcodeEx(tstart: number, dstart: number, dsize: number): Buffer {
    const command = Buffer.alloc(16);
    G_RDPHALF_1(dstart).copy(command);
    command.writeUInt8(DisplayOpcodes.G_LOAD_UCODE, 8);
    command.writeUInt16BE(dsize, 10);
    command.writeUInt32BE(tstart, 12);
    return command;
}

enum DisplayListMode {
    DISPLAY = 0x00
    , BRANCH = 0x01
}

function G_DL(flag: DisplayListMode, dl: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_DL);
    command.writeUInt8(flag, 1);
    command.writeUInt32BE(dl, 4);
    return command;
}

/**
 * Tells the RDP to switch over to the display list at address `dl`.
 * 
 * The current address the display list processor is at is pushed to a display list address stack before switching over. This means execution returns at this point after the new display list is done. 
 * @param dl Display list address
 * @returns Display list command
 */
export function gsSPDisplayList(dl: number): Buffer {
    return G_DL(DisplayListMode.DISPLAY, dl);
}

/**
 * Tells the RDP to switch over to the display list at address `dl`.
 * 
 * The current address isn't saved, meaning execution can't return to this point after the new display list is done. (It will instead return to the existing top of the address stack, if any addresses are there.)
 * @param dl Display list address
 * @returns Display list command
 */
export function gsSPBranchList(dl: number): Buffer {
    return G_DL(DisplayListMode.BRANCH, dl);
}

/**
 * Ends the current display list. At this point execution will return to the address of the top of the display list address stack. If there are no addresses in this stack, that's the end of graphics processing, until the RCP is asked to do more.
 * @returns Display list command
 */
export function gsSPEndDisplayList(): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_ENDDL);
    return command;
}

/**
 * Does nothing. Seemingly different from 00; judging by the names of this opcode and 00, this opcode stalls the RSP, whereas the other stalls the RDP.
 * @returns Display list command
 */
export function gsSPNoOp(): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SPNOOP);
    return command;
}

/**
 * Sets the upper half of the generic RDP word to `wordhi` and the lower half to `wordlo`.
 * @param wordhi Upper half of the generic RDP word
 * @param wordlo Lower half of the generic RDP word
 * @returns Display list command
 */
export function gsDPWord(wordhi: number, wordlo: number): Buffer {
    return Buffer.concat([G_RDPHALF_1(wordhi), G_RDPHALF_2(wordlo)]);
}

/**
 * Modifies various bits of the RDP Other Modes word.
 * 
 * If `mode` is `G_SETOTHERMODE_L`:
 * 
 * Modifies the various bits of the lower half of the RDP Other Modes word.
 * 
 * The operation performed by the opcode can be expressed as such, assuming `LO` to stand for the lower word of the RDP other modes:
 * 
 * ```javascript
 *    LO =  LO & ~(((1 << length) - 1) << shift) | data
 * ```
 * 
 * Or, in English, it clears all the bits designated to be modified (determined by `shift` and `length`), and then sets those bits according to `data`. Important to note that `data` is preshifted. That is, it is up to the caller to shift `data` appropriately.
 * 
 * If `mode` is `G_SETOTHERMODE_H`:
 * 
 * Modifies the various bits of the high half of the RDP Other Modes word.
 * 
 * Like with `G_SETOTHERMODE_L`, `data` is preshifted, and the opcode's procedure can be formulized in the same way (where `HO` stands for the high word of the other modes):
 * 
 * ```javascript
 *    HO =  HO & ~(((1 << length) - 1) << shift) | data
 * ```
 * @param mode Changes low or high word
 * @param shift Amount data is shifted by, or number of LSb of mode bits to be changed
 * @param length Size of data affected, in bits
 * @param data New bit settings to be applied
 * @returns Display list command
 */
export function gsSPSetOtherMode(mode: OtherModes, shift: ShiftModes, length: number, data: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(mode);
    command.writeUInt8(32 - shift - length, 2);
    command.writeUInt8(length - 1, 3);
    command.writeUInt32BE(data, 4);
    return command;
}

function G_TEXRECT(mode: DisplayOpcodes, ulx: number, uly: number, lrx: number, lry: number, tile: number, uls: number, ult: number, dsdx: number, dtdy: number): Buffer {
    const command = Buffer.alloc(24);
    command.writeUInt32BE(
        (uFIXED_POINT(lrx, 10, 2) << 12) |
        uFIXED_POINT(lry, 10, 2)
    );
    command.writeUInt8(mode);
    command.writeUInt32BE(
        (uFIXED_POINT(ulx, 10, 2) << 12) |
        uFIXED_POINT(uly, 10, 2),
        4
    );
    command.writeUInt8(tile, 4);
    command.writeUInt8(DisplayOpcodes.G_RDPHALF_1, 8);
    command.writeUInt16BE(sFIXED_POINT(uls, 10, 5), 12);
    command.writeUInt16BE(sFIXED_POINT(ult, 10, 5), 14);
    command.writeUInt8(DisplayOpcodes.G_RDPHALF_2, 16);
    command.writeUInt16BE(sFIXED_POINT(dsdx, 5, 10), 20);
    command.writeUInt16BE(sFIXED_POINT(dtdy, 5, 10), 22);
    return command;
}

/**
 * Draws a textured rectangle from screen coordinates `(ulx,uly)` to `(lrx, lry)`, using the texture specified by `tile` to color the rectangle. The texture is positioned using `(uls, ult)` as the texture coordinate of `(ulx, uly)`, and changing the texture coordinates with the use of `dsdx` and `dtdy`.
 * 
 * `ulx`, `uly`, `lrx`, and `lry` are 12-bit numbers in a fixed point 10.2 format, giving a range of `0 ??? n ??? 1023.75` for each value (with 1/4 precision). This means that the coordinates cannot reference the framebuffer past a 1024-pixel square, if the framebuffer exceeds those limits in either dimension.
 * 
 * `tile` refers to any of the eight tile descriptors whose texture will be used on the rectangle. `uls` and `ult` specify the S and T coordinate, respectively, of the upper-left corner of the rectangle. `uls` and `ult` are in signed fixed point 10.5 format, giving a range `-1024 ??? n ??? 1023.96875` for each value (with 1/32 precision).
 * 
 * The texture coordinates for other parts of the rectangle are calculated via `dsdx` and `dtdy`, which are in signed fixed point 5.10 format, giving a range of `-32 ??? n ??? 31.999023` (with 1/1024 precision). These parameters change the S coordinate per a change of 1.0 in the X coordinate of the rectangle, and the T coordinate per change of 1.0 in the Y coordinate.
 * @param lrx Lower-right corner X coordinate (must be between or equal to 0 and 1023.75)
 * @param lry Lower-right corner Y coordinate (must be between or equal to 0 and 1023.75)
 * @param tile Tile descriptor to use for rectangle
 * @param ulx Upper-left corner X coordinate (must be between or equal to 0 and 1023.75)
 * @param uly Upper-left corner Y coordinate (must be between or equal to 0 and 1023.75)
 * @param uls Texture S coordinate at upper-left corner (must be between or equal to -1024 and 1023.96875)
 * @param ult Texture T coordinate at upper-left corner (must be between or equal to -1024 and 1023.96875)
 * @param dsdx Change in S coordinate over change in X coordinate (must be between or equal to -32 and 31.999023)
 * @param dtdy Change in T coordinate over change in Y coordinate (must be between or equal to -32 and 31.999023)
 * @returns Display list command
 */
export function gsSPTextureRectangle(ulx: number, uly: number, lrx: number, lry: number, tile: number, uls: number, ult: number, dsdx: number, dtdy: number): Buffer {
    return G_TEXRECT(DisplayOpcodes.G_TEXRECT, ulx, uly, lrx, lry, tile, uls, ult, dsdx, dtdy);
}

/**
 * This is similar to `gsSPTextureRectangle`, with the only difference being that the S and T coordinates of a texture are flipped in rendering, so that S coordinates are along the Y axis and T along the X axis. This essentially flips the texture about the diagonal line `(ulx,uly)`,`(lrx,lry)`.
 * 
 * `dtdx` describes the change in T over the change in X, and `dsdy` describes change in S over change in Y.
 * @param lrx Lower-right corner X coordinate (must be between or equal to 0 and 1023.75)
 * @param lry Lower-right corner Y coordinate (must be between or equal to 0 and 1023.75)
 * @param tile Tile descriptor to use for rectangle
 * @param ulx Upper-left corner X coordinate (must be between or equal to 0 and 1023.75)
 * @param uly Upper-left corner Y coordinate (must be between or equal to 0 and 1023.75)
 * @param uls Texture S coordinate at upper-left corner (must be between or equal to -1024 and 1023.96875)
 * @param ult Texture T coordinate at upper-left corner (must be between or equal to -1024 and 1023.96875)
 * @param dsdx Change in S coordinate over change in X coordinate (must be between or equal to -32 and 31.999023)
 * @param dtdy Change in T coordinate over change in Y coordinate (must be between or equal to -32 and 31.999023)
 * @returns Display list command
 */
export function gsSPTextureRectangleFlip(ulx: number, uly: number, lrx: number, lry: number, tile: number, uls: number, ult: number, dsdx: number, dtdy: number): Buffer {
    return G_TEXRECT(DisplayOpcodes.G_TEXRECTFLIP, ulx, uly, lrx, lry, tile, uls, ult, dsdx, dtdy);
}

/**
 * This forces a wait for a texture to load, in order to synchronize with pixel rendering. This ensures that loading a new texture won't disrupt the rendering of primitives mid-render.
 * @returns Display list command
 */
export function gsDPLoadSync(): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_RDPLOADSYNC);
    return command;
}

/**
 * **This is not the "start of display list" command.** There is no such thing.
 * 
 * Waits for the RDP to finish rendering its currently-rendering primitive, before updating RDP attributes. This avoids altering the rendering of a primitive in the middle of its render.
 * 
 * Historically, several model viewers have interpreted this command as somehow starting a display list. **This is not true.** Display lists have no command that starts a display list. To find display lists, the most accurate way would be to find the end display list command (DF) and work backwards, until an invalid display list command is encountered. 
 * @returns Display list command
 */
export function gsDPPipeSync(): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_RDPPIPESYNC);
    return command;
}

/**
 * Forces a wait for rendering to finish before updating tile descriptor attributes, so as to not disrupt rendering of primitives mid-render.
 * @returns Display list command
 */
export function gsDPTileSync(): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_RDPTILESYNC);
    return command;
}

/**
 * Generates an interrupt for the main CPU when the RDP has finished doing everything. This is typically the last opcode before the "end display list" opcode (`DF`).
 * @returns Display list command
 */
export function gsDPFullSync(): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_RDPFULLSYNC);
    return command;
}

/**
 * Sets the center, scale, and width parameters for the green and blue components for chroma key (see `gsDPSetKeyR` for red).
 * 
 * `widthB` and `widthG` are in an unsigned fixed-point 4.8 format. The other parameters are normal 8-bit unsigned integers.
 * 
 * Note that chroma key was considered unsupported by Oct 1999 documentation, however this opcode may potentially still be used to set registers in the Color Combiner for other purposes. 
 * @param widthG Scaled width of half the key window for green (must be between or equal to 0 and 15.99609375)
 * @param widthB Scaled width of half the key window for blue (must be between or equal to 0 and 15.99609375)
 * @param centerG Intensity of active key for green
 * @param scaleG Reciprocal of size of soft edge, normalized to 0..0xFF, for green
 * @param centerB Intensity of active key for blue
 * @param scaleB Reciprocal of size of soft edge, normalized to 0..0xFF, for blue
 * @returns Display list command
 */
export function gsDPSetKeyGB(centerG: number, scaleG: number, widthG: number, centerB: number, scaleB: number, widthB: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(
        (uFIXED_POINT(widthG, 4, 8) << 12) |
        uFIXED_POINT(widthB, 4, 8)
    );
    command.writeUInt8(DisplayOpcodes.G_SETKEYGB);
    command.writeUInt8(centerG, 4);
    command.writeUInt8(scaleG, 5);
    command.writeUInt8(centerB, 6);
    command.writeUInt8(scaleB, 7);
    return command;
}

/**
 * Sets the scale, center, and width parameters for the red component for chroma key (see `gsDPSetKeyGB` for blue and green).
 * 
 * `widthR` is an unsigned fixed-point 4.8 number. centerR and sizeR are 8-bit unsigned integers.
 * 
 * Note that chroma key was considered unsupported by Oct 1999 documentation, however this opcode may potentially still be used to set registers in the Color Combiner for other purposes. 
 * @param widthR Scaled with of half the key window for red
 * @param centerR Intensity of active key for red
 * @param scaleR Reciprocal of size of soft edge, normalized to 0..0xFF, for blue
 * @returns Display list command
 */
export function gsDPSetKeyR(centerR: number, widthR: number, scaleR: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETKEYR);
    command.writeUInt16BE(uFIXED_POINT(widthR, 4, 8), 4);
    command.writeUInt8(centerR, 6);
    command.writeUInt8(scaleR, 7);
    return command;
}

/**
 * Sets the terms need to perform conversion from YUV to RGB. All of the parameters are signed 9-bit numbers, with range `-256 ??? k ??? 255`.
 * 
 * Note that YUV support was no longer guaranteed by Oct 1999 documentation, however the K4 and K5 terms could still potentially be used by the Color Combiner. 
 * @param k0 K0 term of conversion matrix
 * @param k1 K1 term of conversion matrix
 * @param k2 K2 term of conversion matrix
 * @param k3 K3 term of conversion matrix
 * @param k4 K4 term of conversion matrix
 * @param k5 K5 term of conversion matrix
 * @returns Display list command
 */
export function gsDPSetConvert(k0: number, k1: number, k2: number, k3: number, k4: number, k5: number): Buffer {
    const command = Buffer.alloc(8);

    //    E    C  00aa aaaa  aaab bbbb  bbbb cccc
    // cccc cddd  dddd ddee  eeee eeef  ffff ffff

    command.writeUInt32BE(
        (k0 << 13) |
        (k1 << 4) |
        (k2 >> 5)
    );
    command.writeUInt32BE(
        ((k2 & 0b11111) << 27) |
        (k3 << 18) |
        (k4 << 9) |
        k5
    );
    command.writeUInt8(DisplayOpcodes.G_SETCONVERT);

    return command;
}

/**
 * Sets the scissoring rectangle, with upper-left corner at `(ulx, uly)`, and lower-right corner at `(lrx, lry)`.
 * 
 * `NON_INTERLACE` draws all scanlines, while `EVEN` and `ODD` draw only even or odd scanlines, respectively.
 * @param ulx Upper-left X coordinate of rectangle
 * @param uly Upper-left Y coordinate of rectangle
 * @param mode Interpolation mode setting
 * @param lrx Lower-right X coordinate of rectangle
 * @param lry Lower-right Y coordinate of rectangle
 * @returns Display list command
 */
export function gsDPSetScissor(mode: ScissorModes, ulx: number, uly: number, lrx: number, lry: number): Buffer {
    const command = Buffer.alloc(8);

    command.writeUInt32BE(
        (ulx << 12) | uly
    );
    command.writeUInt32BE(
        (lrx << 12) | lry,
        4
    );
    command.writeUInt8(DisplayOpcodes.G_SETSCISSOR);
    command.writeUInt8(mode << 4, 4);
    return command;
}

/**
 * This sets the Z value for the entire primitive to be rendered, when the source for its depth component is set to be taken from this value. (This could be thought of as the depth version of "flat shading".)
 * 
 * `z` and `dz` are signed 16-bit values. `z` sets the actual depth for the primitive, while `dz` helps rendering of anti-aliased and decal objects (this is usually 0). 
 * @param z Z value for primitive
 * @param dz delta Z value for primitive
 * @returns Display list command
 */
export function gsDPSetPrimDepth(z: number, dz: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETPRIMDEPTH);
    command.writeInt16BE(z, 4);
    command.writeInt16BE(dz, 6);
    return command;
}

/**
 * Sets the other mode bits of the RDP. `omodeH` is similar to using `gsSPSetOtherMode` with `G_SETOTHERMODE_H`, and `omodeL` is similar to using `gsSPSetOtherMode` with `G_SETOTHERMODE_L`.
 * 
 * The difference from `gsSPSetOtherMode` is that this command sets all the bits in both halves of the RDP word (that is, command has no way of limiting what bits are actually affected). 
 * @param omodeH Settings for other mode higher word bits
 * @param omodeL Settings for other mode lower word bits
 * @returns Display list command
 */
export function gsDPSetOtherMode(omodeH: number, omodeL: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(omodeH);
    command.writeUInt32BE(omodeL, 4);
    command.writeUInt8(DisplayOpcodes.G_RDPSETOTHERMODE);
    return command;
}

/**
 * Tells the RDP to load `count + 1` colors from the texture loaded to tile descriptor `tile`. The tile descriptor's attributes and other state related to textures inform the RDP how to load the palette, and where to load it to.
 * 
 * Note: the count is quadrupled likely due to how palettes are stored in TMEM.
 * @param tile Tile descriptor to load from
 * @param count Number of colors to load minus one
 * @returns Display list command
 */
export function gsDPLoadTLUTCmd(tile: number, count: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_LOADTLUT);
    command.writeUInt8(tile, 4);
    command.writeUInt16BE((count & 0x3FF) << 6, 5);
    return command;
}

/**
 * Sets the size of the texture for tile descriptor `tile`, setting its upper-left corner at `(uls, ult)`, and its lower-right corner at `(lrs, lrt)`.
 * 
 * When loading textures into TMEM, these values indicate the location of the first and last texel to load into TMEM. When rendering, the upper-left corner tells where in texture image space to start taking the texture from, while the lower-right corner applies in rendering only for clamping the texture.
 * 
 * `uls`, `ult`, `lrs`, and `lrt` are all in unsigned fixed-point 10.2 format, with range 0 ??? x ??? 1023.75 
 * @param uls Upper-left texture coordinate, S-axis (must be between or equal to 0 and 1023.75)
 * @param ult Upper-left texture coordinate, T-axis (must be between or equal to 0 and 1023.75)
 * @param tile Tile descriptor to modify
 * @param lrs Lower-right texture coordinate, S-axis (must be between or equal to 0 and 1023.75)
 * @param lrt Lower-right texture coordinate, T-axis (must be between or equal to 0 and 1023.75)
 * @returns Display list command
 */
export function gsDPSetTileSize(tile: number, uls: number, ult: number, lrs: number, lrt: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(
        (uFIXED_POINT(uls, 10, 2) << 12) |
        uFIXED_POINT(ult, 10, 2)
    );
    command.writeUInt8(DisplayOpcodes.G_SETTILESIZE);
    command.writeUInt32BE(
        (uFIXED_POINT(lrs, 10, 2) << 12) |
        uFIXED_POINT(lrt, 10, 2),
        4
    );
    command.writeUInt8(tile, 4);
    return command;
}

/**
 * Loads a texture into TMEM as one long line of data, starting at `(uls, ult)` in the currently chosen area of RAM, and loads `texels + 1` texels to TMEM for tile descriptor `tile`. `dxt` is used for determining when the next row starts.
 * 
 * `uls` and `ult` are unsigned fixed-point 10.2 numbers, with range `0 ??? n ??? 1023.75`.
 * 
 * `dxt` is an unsigned fixed-point 1.11 number, meaning a range of `0 ??? n ??? 1.999512`. This number has units, namely lines `words^-1`, where a "word" is 64 bits in length, and a line is one row of the texture. (It may be more easily understood when inverted to get its reciprocal: words/lines. `dxt` is the reciprocal of the number of 64-bit chunks it takes to get a row of texture.)
 * 
 * When loading an image through this function, an internal counter is incremented by `dxt` for every 64 bits of texture read. When this counter is high enough to turn over to the next integer value (e.g. 0.9 + 0.15 -> 1.05), the current line number is incremented. This is important as odd-numbered rows have their values swapped for interleaved access (the first line read in is line 0, and thus isn't swapped).
 * 
 * Note that if `dxt` is not a power of two (i.e. only one bit in the value is 'on'), then an error in the counter will accumulate over time, and eventually cause errors in determining where next lines are (when exactly this happens depends on the value and the type of texture being read in).
 * 
 * If the data has bee pre-interleaved by the game, then `dxt` will be 0, meaning the current line number never advances (and thus loading will never interleave data for you). 
 * @param uls Upper-left corner of texture to load, S-axis (must be between or equal to 0 and 1023.75)
 * @param ult Upper-left corner of texture to load, T-axis (must be between or equal to 0 and 1023.75)
 * @param tile Tile descriptor to load into
 * @param texels Number of texels to load to TMEM, minus one
 * @param dxt Change in T-axis per scanline (must be between or equal to 0 and 1.999512)
 * @returns Display list command
 */
export function gsDPLoadBlock(tile: number, uls: number, ult: number, texels: number, dxt: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(
        (uFIXED_POINT(uls, 10, 2) << 12) |
        uFIXED_POINT(ult, 10, 2)
    );
    command.writeUInt8(DisplayOpcodes.G_LOADBLOCK);
    command.writeUInt32BE(
        (texels << 12) |
        uFIXED_POINT(dxt, 10, 2),
        4
    );
    command.writeUInt8(tile, 4);
    return command;
}

/**
 * Loads a rectangular portion of the texture being pointed to in DRAM for tile descriptor tile into TMEM. `(uls, ult)` specifies the upper-left corner of the texture in RAM, offset from its earlier-specified origin, and `(lrs, lrt)` specifies the lower-right corner of the texture to load.
 * 
 * All coordinate values are in unsigned fixed-point 10.2 format (range `0 ??? n ??? 1023.75`).
 * @param uls Upper-left corner of tile, S-axis (must be between or equal to 0 and 1023.75)
 * @param ult Upper-left corner of tile, T-axis (must be between or equal to 0 and 1023.75)
 * @param tile Tile descriptor being loaded to
 * @param lrs Lower-right corner of tile, S-axis (must be between or equal to 0 and 1023.75)
 * @param lrt Lower-right corner of tile, T-axis (must be between or equal to 0 and 1023.75)
 * @returns Display list command
 */
export function gsDPLoadTile(tile: number, uls: number, ult: number, lrs: number, lrt: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(
        (uFIXED_POINT(uls, 10, 2) << 12) |
        uFIXED_POINT(ult, 10, 2)
    );
    command.writeUInt8(DisplayOpcodes.G_LOADTILE);
    command.writeUInt32BE(
        (uFIXED_POINT(lrs, 10, 2) << 12) |
        uFIXED_POINT(lrt, 10, 2),
        4
    );
    command.writeUInt8(tile, 4);
    return command;
}

/**
 * Sets many different parameters for tile descriptor `tile`.
 * 
 * `fmt` sets the color format in use by the particular texture. `siz` sets the bit size of each texel. (Note: Not every combination of `fmt` and `siz` is valid.)
 * 
 * `line` sets the number of 64-bit pieces per row of the texture (textures will be padded in TMEM if the row doesn't end in a multiple of 64 bits). `tmem` is the location in TMEM where the texture is. Note that TMEM is addressed in units of 64 bits here (zero-indexed), so e.g. 1 means byte 8 of TMEM.
 * 
 * `palette` specifies which of the sixteen palettes this texture will be using. Note that this only applies to ci4 textures (`G_IM_FMT_CI` and `G_IM_SIZ_4b`), since ci8 has access to the entirety of the palette area, and no other texture type needs palettes.
 * 
 * `cmT` and `cmS` set the clamp and mirror settings for their respective axes. `MIRROR` enables mirroring of the texture along that given access (e.g. setting `MIRROR` for the S axis will mirror a texture horizontally), whereas `NOMIRROR` disables it. `WRAP` repeats texels on a particular cycle, whereas `CLAMP` enforces clamping instead (sampling the colors at the edges of the texture for texels beyond the set size of the texture).
 * 
 * `maskT` and `maskS` sets when the respective axis "loops" its texels. The value is interpreted as the first bit that's ignored. In other words, only the first two mask texels of the row/column are actually used. If wrapping, then the previous texels are simply repeated; mirroring will mirror the set to be reperated, meaning the maskth bit of the current coordinate decides if its texel is mirrored. A mask value of 0 will implicitly enable clamping.
 * 
 * `shiftT` and `shiftS` specify how many bits to shift texture coordinates after perspective division, for their respective axes. If the value is 0, then no shifting is done. If the value is in range `1 ??? n ??? 10`, then coordinates are right-shifted by that amount. For values in range `11 ??? n ??? 15`, values are left-shifted by `16 - n`. 
 * @param fmt Sets color format
 * @param siz Sets bit size of pixel
 * @param line Number of 64-bit values per row
 * @param tmem Offset of texture in TMEM
 * @param tile Tile descriptor being modified
 * @param palette Which palette to use for colors (if relevant)
 * @param cmT Clamp and Mirror flags for the T axis
 * @param maskT Sets how much of T axis is shown before wrapping
 * @param shiftT Sets the amount to shift T axis values after perspective division
 * @param cmS Clamp and Mirror flags for the S axis
 * @param maskS Sets how much of S axis is shown before wrapping
 * @param shiftS Sets the amount to shift S axis values after perspective division
 * @returns Display list command
 */
export function gsDPSetTile(fmt: TextureFormat, siz: TextureSize, line: number, tmem: number, tile: number, palette: number, cmT: TextureFlags, maskT: number, shiftT: number, cmS: TextureFlags, maskS: number, shiftS: number): Buffer {
    const command = Buffer.alloc(8);
    //    F    5  fffi i0nn  nnnn nnnm  mmmm mmmm
    // 0000 0ttt  pppp ccaa  aass ssdd  bbbb uuuu

    command.writeUInt32BE(
        ((fmt & 0x7) << 21) |
        ((siz & 0x3) << 19) |
        ((line & 0x1FF) << 9) |
        (tmem & 0x1FF)
    );
    command.writeUInt32BE(
        ((tile & 0x7) << 24) |
        ((palette & 0xF) << 20) |
        ((cmT & 0x3) << 18) |
        ((maskT & 0xF) << 14) |
        ((shiftT & 0xF) << 10) |
        ((cmS & 0x3) << 8) |
        ((maskS & 0xF) << 4) |
        (shiftS & 0xF),
        4
    );
    command.writeUInt8(DisplayOpcodes.G_SETTILE);
    return command;
}

/**
 * Draws a rectangle to the framebuffer with top-left corner `(ulx, uly)` and bottom-right corner `(lrx, lry)`, coloring it with the current fill color. Similar to `gsSPTextureRectangle`, but uses a solid color instead of a texture.
 * 
 * All the coordinate values are (probably) fixed-width unsigned 10.2 format. 
 * @param lrx Lower-right corner of rectangle, X-axis (must be between or equal to 0 and 1023.75)
 * @param lry Lower-right corner of rectangle, Y-axis (must be between or equal to 0 and 1023.75)
 * @param ulx Upper-left corner of rectangle, X-axis (must be between or equal to 0 and 1023.75)
 * @param uly Upper-left corner of rectangle, Y-axis (must be between or equal to 0 and 1023.75)
 * @returns Display list command
 */
export function gsDPFillRectangle(ulx: number, uly: number, lrx: number, lry: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt32BE(
        (uFIXED_POINT(lrx, 10, 2) << 12) |
        uFIXED_POINT(lry, 10, 2)
    );
    command.writeUInt32BE(
        (uFIXED_POINT(ulx, 10, 2) << 12) |
        uFIXED_POINT(uly, 10, 2),
        4
    );
    command.writeUInt8(DisplayOpcodes.G_FILLRECT);
    return command;
}

/**
 * Sets the fill color for use in fill mode, which allows clearing the current color buffer.
 * 
 * When clearing the Z buffer, color is a 14-bit `Z` value and 2-bit `dZ` value specified twice to fill all 32 bits. In other words, color at the bit level looks like the following:
 * 
 * ```
 *    ZZZZ ZZZZ  ZZZZ ZZdd  ZZZZ ZZZZ  ZZZZ ZZdd
 * ```
 * 
 * If dealing with a color buffer, the meaning of `color` depends on the current color image's format. For an RGBA5551 color image, the chosen fill color is specified twice, like with the Z buffer:
 * 
 * ```
 *    rrrr rggg  ggbb bbba  rrrr rggg  ggbb bbba
 * ```
 * 
 * For an RGBA32 color image, `color` is a single RGBA32 color value.
 * 
 * For the 16-bit versions, the two occurrences of the color/depth value should be the same, however they can be different for an unspecified "special effect".
 * @param color Fill value for use in fill mode
 * @returns Display list command
 */
export function gsDPSetFillColor(color: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETFILLCOLOR);
    command.writeUInt32BE(color, 4);
    return command;
}

/**
 * Sets the fog color in the RDP blender. It's considered a general-purpose register, which as the name suggests is typically intended for fog effects. Note that the fog color is always specified in RGBA32 form, regardless of actual framebuffer formats.
 * @param R Red component of fog color
 * @param G Green component of fog color
 * @param B Blue component of fog color
 * @param A Alpha component of fog color
 * @returns Display list command
 */
export function gsDPSetFogColor(R: number, G: number, B: number, A: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETFOGCOLOR);
    command.writeUInt8(R, 4);
    command.writeUInt8(G, 5);
    command.writeUInt8(B, 6);
    command.writeUInt8(A, 7);
    return command;
}

/**
 * Sets the RDP blender's blend color, a general purpose color register available for various purposes in the blender.
 * @param R Red component of blend color
 * @param G Green component of blend color
 * @param B Blue component of blend color
 * @param A Alpha component of blend color
 * @returns Display list command
 */
export function gsDPBlendColor(R: number, G: number, B: number, A: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETBLENDCOLOR);
    command.writeUInt8(R, 4);
    command.writeUInt8(G, 5);
    command.writeUInt8(B, 6);
    command.writeUInt8(A, 7);
    return command;
}

/**
 * Sets the primitive color register of the RDP's color combiner. Also sets two additional values available to the color combiner, the minimum LOD level and an LOD fraction.
 * 
 * `minlevel` and `lodfrac` are both fixed-point unsigned 0.8 numbers, meaning a range of `0 ??? n ??? 0.99609375`. `minlevel` defines the minimum possible value for LOD to have, when the LOD calculated for a particular part of the primitive is less than 1.0. In other words, the LOD of any part of the primitive is clamped at the lower end to `max(minlevel, LOD)`.
 * 
 * `lodfrac` specifies a fraction that the programmer can specify for use in the color combiner of the RDP. It's meant to offer a further refinement on the linear filtering of two mipmaps.
 * 
 * The RGBA32 color specified via `R`, `G`, `B`, and `A` is also made available to the color combiner for use by the programmer. 
 * @param minlevel Minimum possible LOD value (clamped to this at minimum) (must be between or equal to 0 and 0.99609375)
 * @param lodfrac Primitive LOD fraction for mipmap filtering (must be between or equal to 0 and 0.99609375)
 * @param R Red component of primitive color
 * @param G Green component of primitive color
 * @param B Blue component of primitive color
 * @param A Alpha component of primitive color
 * @returns Display list command
 */
export function gsDPSetPrimColor(minlevel: number, lodfrac: number, R: number, G: number, B: number, A: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETPRIMCOLOR);
    command.writeUInt8(uFIXED_POINT(minlevel, 0, 8), 2);
    command.writeUInt8(uFIXED_POINT(lodfrac, 0, 8), 3);
    command.writeUInt8(R, 4);
    command.writeUInt8(G, 5);
    command.writeUInt8(B, 6);
    command.writeUInt8(A, 7);
    return command;
}

/**
 * Sets the environment color register in the RDP's color combiner. It's available as a general-purpose color register for the programmer to use in the color combiner.
 * @param R Red component of blend color
 * @param G Green component of blend color
 * @param B Blue component of blend color
 * @param A Alpha component of blend color
 * @returns Display list command
 */
export function gsDPSetEnvColor(R: number, G: number, B: number, A: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETENVCOLOR);
    command.writeUInt8(R, 4);
    command.writeUInt8(G, 5);
    command.writeUInt8(B, 6);
    command.writeUInt8(A, 7);
    return command;
}

/**
 * Sets up the RDP's Color Combiner's parameters for primitive rendering. This sets up parameters for color (R, G, B) and alpha for both cycles. (In one-cycle mode, both cycles must have equal parameters.)
 * 
 * The general formula used to mix colors in the Color combiner is of the form:
 * 
 * ```javascript
 *    (A - B) * C + D
 * ```
 * 
 * This is performed on all sets of parameters. `a0`, `b0`, `c0`, and `d0`; `a1`, `b1`, `c1`, and `d1`; `Aa0`, `Ab0`, `Ac0`, and `Ad0`; and `Aa1`, `Ab1`, `Ac1`, and `Ad1` are those sets of parameters.
 * 
 * The values taken in each parameter are part of an enumeration of potential sources for that value, but which differs for various pieces: all of the color A, B, C, D components have different enumerations, and alpha C is different from the other alpha components.
 * @param a0 Color 'a' value, first cycle
 * @param c0 Color 'c' value, first cycle
 * @param Aa0 Alpha 'a' value, first cycle
 * @param Ac0 Alpha 'c' value, first cycle
 * @param a1 Color 'a' value, second cycle
 * @param c1 Color 'c' value, second cycle
 * @param b0 Color 'b' value, first cycle
 * @param b1 Color 'b' value, second cycle
 * @param Aa1 Alpha 'a' value, second cycle
 * @param Ac1 Alpha 'c' value, second cycle
 * @param d0 Color 'd' value, first cycle
 * @param Ab0 Alpha 'b' value, first cycle
 * @param Ad0 Alpha 'd' value, first cycle
 * @param d1 Color 'd' value, second cycle
 * @param Ab1 Alpha 'b' value, second cycle
 * @param Ad1 Alpha 'd' value, second cycle
 * @returns Display list command
 */
export function gsDPSetCombineLERP(a0: ColorCombinerSettings, b0: ColorCombinerSettings, c0: ColorCombinerSettings, d0: ColorCombinerSettings, Aa0: AlphaCombinerSettings, Ab0: AlphaCombinerSettings, Ac0: AlphaCombinerSettings, Ad0: AlphaCombinerSettings, a1: ColorCombinerSettings, b1: ColorCombinerSettings, c1: ColorCombinerSettings, d1: ColorCombinerSettings, Aa1: AlphaCombinerSettings, Ab1: AlphaCombinerSettings, Ac1: AlphaCombinerSettings, Ad1: AlphaCombinerSettings): Buffer {
    const command = Buffer.alloc(8);
    //       F    C  aaaa cccc  czzz xxxe  eeeg gggg
    //    bbbb ffff  vvvt ttdd  dyyy wwwh  hhuu usss

    command.writeUInt32BE(
        ((a0 & 0xF) << 20) |   // aaaa
        ((c0 & 0x1F) << 15) |   // cccc c
        ((Aa0 & 0x7) << 12) |    // zzz
        ((Ac0 & 0x7) << 9) |    // xxx
        ((a1 & 0xF) << 5) |      // e eee
        (c1 & 0x1F)                 // g gggg
    );

    command.writeUInt32BE(
        ((b0 & 0xF) << 28) |   // bbbb
        ((b1 & 0xF) << 24) |   // ffff
        ((Aa1 & 0x7) << 21) |  // vvv
        ((Ac1 & 0x7) << 18) |  // t tt
        ((d0 & 0x7) << 15) |   // dd d
        ((Ab0 & 0x7) << 12) |  // yyy
        ((Ad0 & 0x7) << 9) |  // www
        ((d1 & 0x7) << 6) |   // h hh
        ((Ab1 & 0x7) << 3) |  // uu u
        (Ad1 & 0x7),   // sss
        4
    );

    command.writeUInt8(DisplayOpcodes.G_SETCOMBINE);
    return command;
}

/**
 * This function sets the location in RAM of the image that will be used when using any of the texture loading functions. `imgaddr` is the RAM location of the image to be pulling textures from. `width` is the width of the image, necessary in finding out when next rows start. The maximum allowed with is 4096, or 0x1000.
 * @param fmt Format of texture to be pointed to
 * @param siz Bit size of pixels in texture to be pointed to
 * @param width Width of the texture
 * @param imgaddr RAM address of start of texture 
 * @returns Display list command
 */
export function gsDPSetTextureImage(fmt: TextureFormat, siz: TextureSize, width: number, imgaddr: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETTIMG);
    command.writeUInt8(
        ((fmt & 0x7) << 5) |
        ((siz & 0x3) << 3),
        1
    );
    command.writeUInt16BE(
        (width - 1) & 0xFFF,
        2
    );
    command.writeUInt32BE(imgaddr, 4);
    return command;
}

/**
 * Sets the location of the depth buffer to `imgaddr`. Since the format of the depth buffer is fixed (14-bit Z value and 2-bit dZ value), those parameters are not here, unlike for `gsDPSetTextureImage` and `gsDPSetColorImage`. The width of the depth buffer is shared with the color buffer (see `gsDPSetColorImage`), and thus isn't set here.
 * @param imgaddr Address of the depth buffer
 * @returns Display list command
 */
export function gsDPSetDepthImage(imgaddr: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETZIMG);
    command.writeUInt32BE(imgaddr, 4);
    return command;
}

/**
 * Sets the location of the color framebuffer, usually a framebuffer that's displayed to the screen. The color buffer is set to RAM location `imgaddr`, with a width of `width`.
 * 
 * The location is usually some place set as the framebuffer to show (which is not handled by display lists), but oftentimes will be set to a depth buffer. This is usually done to fill (aka clear) the depth buffer in fill mode.
 * @param fmt Format of texture to be pointed to
 * @param siz Bit size of pixels in texture to be pointed to
 * @param width Width of the texture
 * @param imgaddr RAM address of start of texture 
 * @returns Display list command
 */
export function gsDPSetColorImage(fmt: TextureFormat, siz: TextureSize, width: number, imgaddr: number): Buffer {
    const command = Buffer.alloc(8);
    command.writeUInt8(DisplayOpcodes.G_SETCIMG);
    command.writeUInt8(
        ((fmt & 0x7) << 5) |
        ((siz & 0x3) << 3),
        1
    );
    command.writeUInt16BE(
        (width - 1) & 0xFFF,
        2
    );
    command.writeUInt32BE(imgaddr, 4);
    return command;
}