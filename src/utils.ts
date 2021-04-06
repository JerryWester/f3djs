/* eslint-disable no-constant-condition */
import { DisplayOpcodes } from './f3dzex2';

const ModifyVtxParams: string[] = [];
ModifyVtxParams[0x10] = `G_MWO_POINT_RGBA`;
ModifyVtxParams[0x14] = `G_MWO_POINT_ST`;
ModifyVtxParams[0x18] = `G_MWO_POINT_XYSCREEN`;
ModifyVtxParams[0x1C] = `G_MWO_POINT_ZSCREEN`;

export function opcodeToString(opcode: Buffer): string {
    switch (opcode.readUInt8() as DisplayOpcodes) {

        case DisplayOpcodes.G_NOOP:{
            if (opcode.readUInt32BE() === 0x00000000) {
                if (opcode.readUInt32BE(4) === 0) {
                    return `gsDPNoOp();`;
                } else {
                    const tag = opcode.readUInt32BE(4);
                    return `gsDPNoOpTag(${tag});`;
                }
            } else return ``;
        }

        case DisplayOpcodes.G_VTX:{
            if ((opcode.readUInt32BE() & 0xFFF00F00) == 0x01000000) {
                const numv = (opcode.readUInt16BE(1) & 0xFF0) >> 4;
                const vbidx = (opcode.readUInt8(3) >> 1) - numv;
                const vaddr = opcode.readUInt32BE(4);
                return `gsSPVertex(${vaddr}, ${numv}, ${vbidx});`;
            } else return ``;
        }

        case DisplayOpcodes.G_MODIFYVTX:{
            const where = opcode.readUInt8(1);
            const vbidx = opcode.readUInt16BE(2) / 2;
            const val = opcode.readUInt32BE(4);
<<<<<<< HEAD
            return `gsSPModifyVertex(${vbidx}, ${ModifyVtxParams[where] ? ModifyVtxParams[where] : where}, ${val});`;
=======
            return `gsSPModifyVertex(${vbidx}, ${ModifyVtxParams[where]}, ${val});`;
>>>>>>> 93215945cd2c0bf00eed05ac2187e2d5a10d236c
        }

        case DisplayOpcodes.G_CULLDL:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_BRANCH_Z:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_TRI1:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_TRI2:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_QUAD:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SPECIAL_3:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SPECIAL_2:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SPECIAL_1:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_DMA_IO:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_TEXTURE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_POPMTX:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_GEOMETRYMODE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_MTX:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_MOVEWORD:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_MOVEMEM:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_LOAD_UCODE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_DL:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_ENDDL:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SPNOOP:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPHALF_1:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETOTHERMODE_L:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETOTHERMODE_H:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_TEXRECT:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_TEXRECTFLIP:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPLOADSYNC:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPPIPESYNC:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPTILESYNC:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPFULLSYNC:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETKEYGB:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETKEYR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETCONVERT:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETSCISSOR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETPRIMDEPTH:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPSETOTHERMODE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_LOADTLUT:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_RDPHALF_2:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETTILESIZE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_LOADBLOCK:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_LOADTILE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETTILE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_FILLRECT:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETFILLCOLOR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETFOGCOLOR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETBLENDCOLOR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETPRIMCOLOR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETENVCOLOR:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETCOMBINE:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETTIMG:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETZIMG:{
            if (true) {
                return ``;
            } else return ``;
        }

        case DisplayOpcodes.G_SETCIMG:{
            if (true) {
                return ``;
            } else return ``;
        }

        default:{
            return ``;
        }

    }
}