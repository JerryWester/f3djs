import { DisplayOpcodes } from './f3dzex2';

export function opcodeToString(opcode: Buffer): string {
    switch (opcode.readUInt8()) {

        case DisplayOpcodes.G_NOOP:{
            if (opcode.readUInt32BE() === 0x00000000) {
                if (opcode.readUInt32BE(4) === 0) {
                    return `gsDPNoOp();`;
                } else {
                    const tag = opcode.readUInt32BE(4);
                    return `gsDPNoOpTag(${tag});`;
                }
            } else {
                return ``;
            }
        }

        case DisplayOpcodes.G_VTX:{
            return ``;
        }

        case DisplayOpcodes.G_MODIFYVTX:{
            return ``;
        }

        case DisplayOpcodes.G_CULLDL:{
            return ``;
        }

        case DisplayOpcodes.G_BRANCH_Z:{
            return ``;
        }

        case DisplayOpcodes.G_TRI1:{
            return ``;
        }

        case DisplayOpcodes.G_TRI2:{
            return ``;
        }

        case DisplayOpcodes.G_QUAD:{
            return ``;
        }

        case DisplayOpcodes.G_SPECIAL_3:{
            return ``;
        }

        case DisplayOpcodes.G_SPECIAL_2:{
            return ``;
        }

        case DisplayOpcodes.G_SPECIAL_1:{
            return ``;
        }

        case DisplayOpcodes.G_DMA_IO:{
            return ``;
        }

        case DisplayOpcodes.G_TEXTURE:{
            return ``;
        }

        case DisplayOpcodes.G_POPMTX:{
            return ``;
        }

        case DisplayOpcodes.G_GEOMETRYMODE:{
            return ``;
        }

        case DisplayOpcodes.G_MTX:{
            return ``;
        }

        case DisplayOpcodes.G_MOVEWORD:{
            return ``;
        }

        case DisplayOpcodes.G_MOVEMEM:{
            return ``;
        }

        case DisplayOpcodes.G_LOAD_UCODE:{
            return ``;
        }

        case DisplayOpcodes.G_DL:{
            return ``;
        }

        case DisplayOpcodes.G_ENDDL:{
            return ``;
        }

        case DisplayOpcodes.G_SPNOOP:{
            return ``;
        }

        case DisplayOpcodes.G_RDPHALF_1:{
            return ``;
        }

        case DisplayOpcodes.G_SETOTHERMODE_L:{
            return ``;
        }

        case DisplayOpcodes.G_SETOTHERMODE_H:{
            return ``;
        }

        case DisplayOpcodes.G_TEXRECT:{
            return ``;
        }

        case DisplayOpcodes.G_TEXRECTFLIP:{
            return ``;
        }

        case DisplayOpcodes.G_RDPLOADSYNC:{
            return ``;
        }

        case DisplayOpcodes.G_RDPPIPESYNC:{
            return ``;
        }

        case DisplayOpcodes.G_RDPTILESYNC:{
            return ``;
        }

        case DisplayOpcodes.G_RDPFULLSYNC:{
            return ``;
        }

        case DisplayOpcodes.G_SETKEYGB:{
            return ``;
        }

        case DisplayOpcodes.G_SETKEYR:{
            return ``;
        }

        case DisplayOpcodes.G_SETCONVERT:{
            return ``;
        }

        case DisplayOpcodes.G_SETSCISSOR:{
            return ``;
        }

        case DisplayOpcodes.G_SETPRIMDEPTH:{
            return ``;
        }

        case DisplayOpcodes.G_RDPSETOTHERMODE:{
            return ``;
        }

        case DisplayOpcodes.G_LOADTLUT:{
            return ``;
        }

        case DisplayOpcodes.G_RDPHALF_2:{
            return ``;
        }

        case DisplayOpcodes.G_SETTILESIZE:{
            return ``;
        }

        case DisplayOpcodes.G_LOADBLOCK:{
            return ``;
        }

        case DisplayOpcodes.G_LOADTILE:{
            return ``;
        }

        case DisplayOpcodes.G_SETTILE:{
            return ``;
        }

        case DisplayOpcodes.G_FILLRECT:{
            return ``;
        }

        case DisplayOpcodes.G_SETFILLCOLOR:{
            return ``;
        }

        case DisplayOpcodes.G_SETFOGCOLOR:{
            return ``;
        }

        case DisplayOpcodes.G_SETBLENDCOLOR:{
            return ``;
        }

        case DisplayOpcodes.G_SETPRIMCOLOR:{
            return ``;
        }

        case DisplayOpcodes.G_SETENVCOLOR:{
            return ``;
        }

        case DisplayOpcodes.G_SETCOMBINE:{
            return ``;
        }

        case DisplayOpcodes.G_SETTIMG:{
            return ``;
        }

        case DisplayOpcodes.G_SETZIMG:{
            return ``;
        }

        case DisplayOpcodes.G_SETCIMG:{
            return ``;
        }

        default:{
            return ``;
        }

    }
}