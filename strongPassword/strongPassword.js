
//https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true
var password = '2bbbb'; //2


minimumNumber(password);

function minimumNumber(password) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lower_case = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
    var upper_case = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    password = [...password];

    var count = 4, n = 0, specials = 0, lower = 0, upper = 0;

    for (let i = 0; i < lower_case.length; i++) {
        if (i < numbers.length) if (password.includes(numbers[i])) n++;

        if (i < special_characters.length) if (password.includes(special_characters[i])) specials++;

        if (password.includes(lower_case[i])) lower++;

        if (password.includes(upper_case[i])) upper++;
    }

    if (n !== 0) count--;
    if (specials !== 0) count--;
    if (upper !== 0) count--;
    if (lower !== 0) count--;

    if (count == 4) return 0;
    if (count == 0 && password.length == 5) return 1
    if (count == 0 && password.length == 4) return 2;
    if (count == 1 && password.length == 4) return 2;
    if (password.length >= 4) {
        return count
    } else {
        let res = password.length;
        count = 0;
        while (res < 6) {
            count++;
            res++
        };
    };

    return count;
}