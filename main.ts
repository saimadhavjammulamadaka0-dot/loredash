statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(mySprite, effects.disintegrate, 500)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (game.ask("Wanna Eat it?")) {
        game.showLongText("Of course you do!", DialogLayout.Bottom)
        game.showLongText("Do you want to die?", DialogLayout.Bottom)
        sprites.destroy(Candy, effects.none, 0)
        tiles.setCurrentTilemap(tilemap`level2`)
        game.showLongText("That Candy Was Drugged", DialogLayout.Bottom)
        pause(5000)
        game.showLongText("At least your HUNGER bar increased by 10", DialogLayout.Bottom)
        statusbar2.value += 10
        pause(5000)
        game.showLongText("Just Wait A Few Seconds.", DialogLayout.Bottom)
        pause(5000)
        game.showLongText("...", DialogLayout.Bottom)
        pause(5000)
        game.showLongText("Why are you looking at me like that?", DialogLayout.Bottom)
        game.showLongText("Oh, I see.", DialogLayout.Bottom)
        game.showLongText("You want to know who I am.", DialogLayout.Bottom)
        game.showLongText("Just think of me as the mind in your head.", DialogLayout.Bottom)
        game.showLongText("...", DialogLayout.Bottom)
        game.showLongText("That wasn't sufficient was it.", DialogLayout.Bottom)
        game.showLongText("Well, I can't explain any further. You'll understand.", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else {
        game.showLongText("Are you dumb?", DialogLayout.Bottom)
        game.showLongText("*The Thought of Food Depletes your HUNGER bar*", DialogLayout.Bottom)
        statusbar2.value = 0
    }
})
let Candy: Sprite = null
let statusbar2: StatusBarSprite = null
let mySprite: Sprite = null
game.showLongText("Your lost", DialogLayout.Bottom)
game.showLongText("...", DialogLayout.Bottom)
game.showLongText("Hungry, So Hungry", DialogLayout.Bottom)
game.showLongText("If only you could go back home and take a refreshing bath.", DialogLayout.Bottom)
game.showLongText("Infront of you is candy. That will do.", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.setPosition(10, 95)
controller.moveSprite(mySprite, 10, 10)
scene.cameraFollowSprite(mySprite)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 100
statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar2.value = 5
statusbar2.attachToSprite(mySprite, 5, 0)
Candy = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Food)
Candy.setPosition(100, 90)
