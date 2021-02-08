module.exports = function toReadable (number) {
    const NUMS = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    if (number == 0) {
        return "zero";
    }

    let hundred = 0;
    let ten = 0;

    if (number >= 100) {
        hundred = Math.trunc(number / 100);
        number %= 100;
    }

    if (number >= 20) {
        ten = Math.trunc(number / 10) * 10;
        number %= 10;
    }

    let readableNumber = [];

    if (hundred > 0) {
        readableNumber.push(NUMS[hundred]);
        readableNumber.push("hundred");
    }

    if (ten > 0) {
        readableNumber.push(NUMS[ten]);
    }

    if (number > 0) {
        readableNumber.push(NUMS[number]);
    }

    return readableNumber.join(" ");
}
