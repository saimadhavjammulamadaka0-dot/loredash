// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000c000101010101050601010101010101010101050601010101010101010b020404070b01010101010b0204090904070b0101010102040a010108040701010303040601010101050403030909040601010101050409090101080407010102040a010101010b08040303040a0b01010101010b0804040a0b010101010101010105060101010101010101010105060101010101`, img`
2 2 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . . 2 2 2 2 2 
2 2 2 2 . 2 2 . 2 2 2 2 
2 2 2 . . 2 2 . . 2 2 2 
2 2 . . . 2 2 . . . 2 2 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
2 2 . . . 2 2 . . . 2 2 
2 2 2 . . 2 2 . . 2 2 2 
2 2 2 2 . 2 2 . 2 2 2 2 
2 2 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . . 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "tileGrass3":
            case "tile1":return tile1;
            case "tilePath1":
            case "tile2":return tile2;
            case "tilePath2":
            case "tile3":return tile3;
            case "tilePath5":
            case "tile4":return tile4;
            case "tilePath4":
            case "tile5":return tile5;
            case "tilePath6":
            case "tile6":return tile6;
            case "tilePath3":
            case "tile7":return tile7;
            case "tilePath7":
            case "tile8":return tile8;
            case "tilePath8":
            case "tile9":return tile9;
            case "tilePath9":
            case "tile10":return tile10;
            case "tileGrass2":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
