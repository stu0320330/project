input.onSound(DetectedSound.Loud, function () {
    Lit = 1
})
let flicker = 0
let Lit = 0
Lit = 0
basic.forever(function () {
    if (Lit == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        flicker = randint(1, 3)
        led.unplot(2, 0)
        led.plot(flicker, 0)
    }
})
