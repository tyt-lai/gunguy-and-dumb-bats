let gunguy = sprites.create(img`
    f f f f f . . . . . . . . . . .
    f f f f f . . . . . . . . . . .
    f f d f f . . . . . . . . . . .
    d d d d d . . . . . . . . . . .
    d 2 2 2 d . . . . . . . . . . .
    f f f f f . . . . . 2 5 2 . . .
    f f f f f . . . . f f f f f 5 5
    f f f f f f f f d f . . . . . .
    f f f f f . . . . . . . . . . .
    f f f f f . . . . . . f f f f 5
    f f f f f . f f f . d f . . . .
    f f f f f f f . f f f . . . . .
    f f f f f . . . . . . . . . . .
    f f . f f . . . . . . . . . . .
    f f . f f . . . . . . . . . . .
    f f . f f . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(gunguy)
info.setLife(3)
tiles.setTilemap(tilemap`level1`)