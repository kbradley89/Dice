input.onButtonPressed(Button.A, function () {
    if (UpperOrLower == 0) {
        DUp = DUp - 1
        DLow = Math.min(DUp - 1, DLow)
    } else {
        DLow = DLow - 1
    }
    ShowLowtoUp()
})
input.onButtonPressed(Button.AB, function () {
    if (UpperOrLower == 0) {
        UpperOrLower = 1
        basic.showArrow(ArrowNames.South)
    } else {
        UpperOrLower = 0
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.B, function () {
    if (UpperOrLower == 0) {
        DUp = DUp + 1
    } else {
        DLow = DLow + 1
        DUp = Math.max(DLow + 1, DUp)
    }
    ShowLowtoUp()
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.mysterious.play()
    for (let index = 0; index < 25; index++) {
        basic.showNumber(randint(DLow, DUp),10)
    }
    basic.clearScreen()
    basic.showNumber(randint(DLow, DUp))
})
function ShowLowtoUp () {
    basic.clearScreen()
    LowtoUp = "" + DLow + (">" + DUp)
    basic.showString(LowtoUp)
}
let LowtoUp = ""
let UpperOrLower = 0
let DLow = 0
let DUp = 0
DUp = 6
DLow = 1
ShowLowtoUp()
