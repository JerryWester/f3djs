export function findDLists(file: Buffer): number[] {
    const endDL: number[] = [];
    for (let i = 0; i < file.length; i += 4) {
        const possibleEnd = file.readUInt32BE(i);
        if (possibleEnd === 0xDF000000 || possibleEnd === 0xDE010000) endDL.push(i);
    }
    const startDL: number[] = [];
    for (let i = 0; i < endDL.length; i++) {
        /** @TODO Make this shit good */
        // let offset = endDL[i];
        // while (file.readUInt8(offset - 8) <= 0x07 && file.readUInt8(offset - 8) >= 0xD3) {
        //     offset -= 8;
        // }
        // startDL.push(offset);
    }
    return startDL;
}