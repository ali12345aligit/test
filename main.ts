let teller = 0
let stelsteenpapier = 0
input.onButtonPressed(Button.A, function () {
    teller += 1
    basic.showNumber(teller)
})
input.onGesture(Gesture.Shake, function () {
    stelsteenpapier = randint(1, 3)
    if (stelsteenpapier == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playMelody("E B C5 A B G A F ", 1)
    } else if (stelsteenpapier == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playMelody("E B C5 A B G A F ", 120)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            # . # . .
            # # . # .
            # # . . #
            `)
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    teller = 0
})
basic.forever(function () {
	
})
