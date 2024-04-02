let humidité_1 = 0
basic.forever(function () {
    humidité_1 = pins.analogReadPin(AnalogPin.P2)
    basic.showString("" + (pins.analogReadPin(AnalogPin.P2)))
    basic.pause(1000)
    if (humidité_1 >= 600) {
        servos.P0.setAngle(160)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        cakLandPump.startDuration(cakLand.BoardSide.LEFT, 60, 4)
        basic.clearScreen()
        basic.pause(1000)
        servos.P0.setAngle(0)
        basic.pause(1000)
        servos.P0.stop()
        basic.pause(1000)
    }
    humidité_1 = 0
})
