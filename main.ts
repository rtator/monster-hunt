namespace SpriteKind {
    export const monster = SpriteKind.create()
    export const fire_bat = SpriteKind.create()
    export const water_bat = SpriteKind.create()
    export const lightning_bat = SpriteKind.create()
    export const chomp_flower1 = SpriteKind.create()
    export const rock = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const alien = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.alien, function (sprite, otherSprite) {
    game.showLongText("you got a alien!", DialogLayout.Bottom)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.lightning_bat, function (sprite, otherSprite) {
    game.showLongText("you got a lightning bat!", DialogLayout.Bottom)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chomp_flower1, function (sprite, otherSprite) {
    game.showLongText("you got a flora chomper!", DialogLayout.Bottom)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost, function (sprite, otherSprite) {
    game.showLongText("you got a scel-ost!", DialogLayout.Bottom)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire_bat, function (sprite, otherSprite) {
    game.showLongText("you got a fire bat!", DialogLayout.Bottom)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rock, function (sprite, otherSprite) {
    game.showLongText("you got a smush!", DialogLayout.Bottom)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.water_bat, function (sprite, otherSprite) {
    game.showLongText("you got a water bat!", DialogLayout.Bottom)
    otherSprite.destroy()
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`3200320001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, [myTiles.transparency16,sprites.castle.tilePath5], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . e e e e e e e e e . . 
    . e e e e e e e e e e e . 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    e e e e e e e e e e e e e 
    . e e e e e e e e e e e . 
    . . e e e e e e e e e . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let level = 1
for (let index = 0; index < 25; index++) {
    mySprite2 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f 8 f . . . . . . f 8 8 8 f 
        f f 8 8 f . . . . . f 8 8 8 f . 
        f 8 f 8 f . f f . . f 8 8 8 f . 
        f f f 8 8 f f f f f 8 8 8 8 f . 
        f f 8 3 8 8 3 8 8 f 8 8 8 8 f . 
        f f 8 3 8 8 3 8 8 f 8 8 8 8 f . 
        . f 8 8 2 8 8 8 8 8 8 8 8 f . . 
        f 8 2 8 8 8 2 8 8 8 8 8 f . . . 
        f 8 8 8 2 8 8 8 8 8 8 f . . . . 
        f 8 c 8 8 8 c 8 8 8 8 f f . . . 
        f 8 2 f f f 2 8 8 8 8 8 8 f . . 
        f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
        . f 8 8 8 8 8 8 8 8 8 f f f . . 
        . . f 8 8 8 8 8 8 8 f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.water_bat)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c c . . 
        . c c c c c . c c c c c f c c . 
        c c a c c c c c 8 f f c f f c c 
        c a f a a c c a f f c a a f f c 
        c a 8 f a a c a c c 4 4 a a a c 
        c 4 4 f a a a a a c 4 4 c c c c 
        c 4 4 a a c f 8 a c c c 8 c c c 
        . c b b a b c f a a a 8 8 c c . 
        . . . . a a b b b a a 8 a c . . 
        . . . . c b c a a c c b . . . . 
        . . . . b b c c a b b a . . . . 
        . . . . b b a b a 6 a . . . . . 
        . . . . c b b b 6 6 c . . . . . 
        . . . . . c a 6 6 b c . . . . . 
        . . . . . . . c c c . . . . . . 
        `, SpriteKind.alien)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.ghost)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . . . . . c c b b b . . . . . . 
        . . . . c b d d d d b . . . . . 
        . . . . c d d d d d d b b . . . 
        . . . . c d d f d d f d d b . . 
        . . . c b b d d d d d d d b . . 
        . . . c b b d 2 2 2 2 d d b . . 
        . c c c c b b b 2 2 d d b b b . 
        . c d d b c b b 2 2 b b b b d b 
        c b b d d d b b b b b d d b d b 
        c c b b d d d d d d d b b b d c 
        c b c c c b b b b b b b d d c c 
        c c b b c c c c b d d d b c c b 
        . c c c c c c c c c c c b b b b 
        . . c c c c c b b b b b b b c . 
        . . . . . . c c b b b b c c . . 
        . . . . . . . . c c c c . . . . 
        `, SpriteKind.rock)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . . . . . 1 1 1 . . . . . 
        . . . . . f 1 1 . . . . . 
        . . . 2 2 2 2 2 . . . . . 
        . . . 1 . 1 . 2 . . . . . 
        . . . . 1 . 1 2 . . . . . 
        . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 7 . . . . . 
        . . . . . . . 7 . . . . . 
        7 . . . . . . 7 . . . . . 
        . 7 . . . . . 7 . . . . . 
        . . 7 . . . . 7 . . . . 7 
        . . . 7 . . . 7 . . . 7 . 
        . . . . 7 . . 7 . . 7 . . 
        . . . . . 7 . 7 . 7 . . . 
        . . . . . . 7 7 7 . . . . 
        . . . . . . 7 7 7 . . . . 
        `, SpriteKind.chomp_flower1)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . . f f f . b . b . . . . f f f 
        . f f 5 f . b . b . . f 5 5 5 f 
        f f 5 5 f . b . b . f 5 5 5 f . 
        f 5 f 5 f . b . b . f 5 5 5 f . 
        f f f 5 5 f f f f f 5 5 5 5 f . 
        f f 5 3 5 5 3 5 5 f 5 5 5 5 f . 
        f f 5 3 5 5 3 5 5 f 5 5 5 5 f . 
        . f 5 5 2 5 5 5 5 5 5 5 5 f . . 
        f 5 2 5 5 5 2 5 5 5 5 5 f . . . 
        f 5 5 5 2 5 5 5 5 5 5 f . . . . 
        f 5 c 5 5 5 c 5 5 5 5 f f . . . 
        f 5 2 f f f 2 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 f f f . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.lightning_bat)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f 4 f . . . . . . f 4 4 4 f 
        f f 4 4 f . . . . . f 4 4 4 f . 
        f 4 f 4 f . f f . . f 4 4 4 f . 
        f f f 4 4 f f f f f 4 4 4 4 f . 
        f f 4 3 4 4 3 4 4 f 4 4 4 4 f . 
        f f 4 3 4 4 3 4 4 f 4 4 4 4 f . 
        . f 4 4 2 4 4 4 4 4 4 4 4 f . . 
        f 4 2 4 4 4 2 4 4 4 4 4 f . . . 
        f 4 4 4 2 4 4 4 4 4 4 f . . . . 
        f 4 c 4 4 4 c 4 4 4 4 f f . . . 
        f 4 2 f f f 2 4 4 4 4 4 4 f . . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f 4 4 4 4 4 4 4 4 4 f f f . . 
        . . f 4 4 4 4 4 4 4 f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.fire_bat)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
}
forever(function () {
    pause(500)
})
