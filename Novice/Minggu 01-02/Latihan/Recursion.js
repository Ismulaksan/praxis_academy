function isEven(number) {
    if (number < 0) {
        return isEven(-number);
    } else if (number == 1) {
        return false;
    } else if  (number == 0) {
        return true;
    } else {
        return isEven(number - 2);
    }
}

document.write(isEven(50)); // true
document.write(isEven(75)); // false
document.write(isEven(-1)); // false