for index2 in range(5):
    music.play_tone(100 * index2, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(200 * index2, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(400 * index2, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(800 * index2, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(1600 * index2, music.beat(BeatFraction.SIXTEENTH))
    basic.show_number(3 - index2)
basic.show_string("Go")

def on_forever():
    pass
basic.forever(on_forever)
