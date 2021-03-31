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
 * Loads `numv` vertices from address `vaddr` to the RSP's vertex buffer, starting at buffer index `vbidx`. For F3DEX2.NoN, `numv` must be in the range 1 ≤ `numv` ≤ 32, and `vbidx` in the range 0 ≤ `vbidx` ≤ 31. Vertex transformations and lighting calculations (if any) are calculated upon load. 
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
 * For F3DEX2.NoN, Each of `vfirst` and `vlast` must be in the range `0 ≤ x ≤ 31`. Additionally, `vfirst < vlast` must be true (thus a minimum of two vertices must be specified, and range of vertices cannot be reversed). It's not specified what the behavior is when all the vertices are coplanar. 
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
 * Tests the Z value of the vertex at buffer index `vbidx` (described as `vbidx.z` here) against `zval`. If `vbidx.z ≤ zval`, then the processor switches over to the display list at address `newdl` (equivalent to `gsSPBranchList(newdl)`). Otherwise continues through the display list. Useful for LOD-related model processing, where several occurrences of this can be stacked to branch to progressively closer versions of the model.
 * 
 * Note that the 04 opcode actually pulls the address of the branching display list from the high half of the "RDP word" (16 bytes used for generic value storage, as far as is known). The italicized opcode given above is set by the "basic function" listed for this opcode, immediately before the actual 04 opcode.
 * 
 * Although not stated in the documentation, `vbidx` is presumably limited to the range `0 ≤ vbidx ≤ 31` just like other buffer indices. It's unknown why the opcode needs `vbidx` twice, and multiplied by different amounts.
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
 * Draws one triangle to screen. `v0`, `v1`, and `v2` specify vertex buffer indices, all in the range `0 ≤ v ≤ 31` for F3DEX2.NoN.
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
 * Draws two triangles at once. All six given indices must be in the range `0 ≤ v ≤ 31` for F3DEX2.NoN.
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
 * Draws a quadrangle, as two triangles. All four vertex indices are in the range `0 ≤ v ≤ 31` for F3DEX2.NoN.
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