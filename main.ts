input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        if (index < 1) {
            index = 1
        }
        for (let index2 = 0; index2 <= 5; index2++) {
            if (index2 < 1) {
                index2 = 1
            }
            music.playTone(100 * (index2 * index), music.beat(BeatFraction.Sixteenth))
        }
        basic.showNumber(5 - index)
    }
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1155, 1, 218, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
    basic.showString("Go")
})
music.setTempo(30)
basic.forever(function () {
	
})
