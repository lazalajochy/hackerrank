//https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true

function pangrams(s) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var alphabet = [];

    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            var lowerCase = ''
            if (s[i] == arr[j]) {
                if (!alphabet.includes(s[i])) alphabet.push(s[i])
                break
            } else {
                var str = arr[j].toUpperCase();
                if (s[i] == str) {
                    lowerCase = str.toLowerCase();
                    if (!alphabet.includes(lowerCase)) alphabet.push(lowerCase)
                    break
                }
            }

        }
    }

    return (alphabet.length == 26) ? 'pangram' : 'not pangram'

}