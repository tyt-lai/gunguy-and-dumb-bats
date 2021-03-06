// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c0020000305050504040505050505010c13130202020202020202060c13130202020202020202060d120b0b0b0b0b0b0e0202060d100404040404040f0202060d02020202020202020202060d02020202020202020202060d03040401020203040401060d090a0a0802020c111106060d0202020202020c020206060d0202020202020c020206060d0202030404010c020206060c0202090a0a080c020206060c0202020202020c020206060c0202020202020c020206060c0304040102020c020206060c090a0a0802020c0a0a06060c0202020202020c020206060c0202030102020c020206060c02020c0602020c020206070c02020c0602020c020206070c03040f0602020c020206070c090b0b0802020c020206070c0202020202020c020206070c0202030404010c020206070c02020c070a0809141408070c02020c07020202020202070c02020c07020203040401070c020209080202090a0a08070c02020202020202020202070c0202020202020202020207090a0a0a0a0a0b0b0b0b0b08`, img`
222222222222
2..........2
2..........2
222222222..2
222222222..2
2..........2
2..........2
22222..22222
22222..2..22
2......2..22
2......2..22
2..22222..22
2..22222..22
2......2..22
2......2..22
22222..2..22
22222..2..22
2......2..22
2..22..2..22
2..22..2..22
2..22..2..22
22222..2..22
22222..2..22
2......2..22
2..22222..22
2..22222..22
2..22......2
2..22..22222
2..22..22222
2..........2
2..........2
222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.floorLightMoss,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.chestClosed,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
