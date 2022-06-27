let homeNum = document.getElementById("house-num")
let count = 0

function one() {
    count += 1
    homeNum.textContent = count
}


function two() {
    count += 2
    homeNum.textContent = count
}

function three() {
    count += 3
    homeNum.textContent = count
}

let guestNum = document.getElementById("guest-num")
let guestCount = 0

function four() {
    guestCount += 1
    guestNum.textContent = guestCount
}


function five() {
    guestCount += 2
    guestNum.textContent = guestCount
}

function six() {
    guestCount += 3
    guestNum.textContent = guestCount
}

let reset = document.getElementById("reset")

function resetbut() {
    resetBtn = 0
    guestNum.textContent = resetBtn
    homeNum.textContent = resetBtn
    guestCount = resetBtn
    count = resetBtn
}