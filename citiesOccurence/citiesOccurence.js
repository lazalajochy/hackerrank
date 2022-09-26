const citiesList = [
    'nashville',
    'nashville',
    'los angeles',
    'nemphis',
    'barcelona',
    'los angeles',
    'sevilla',
    'madrid',
    'cenary islands',
    'barcelona',
    'madrid',
    'nashville',
    'barcelona',
    'london',
    'berlin',
    'madrid',
    'nashville',
    'london',
    'madrid'];

function getOcurrence(citiesList) {
    var aux = 0, count = 1, arr = [], n = 0, newArr = [];
    while (n !== 5) {
        for (var i = 0; i < citiesList.length; i++) {
            for (var j = 0; j < citiesList.length; j++) {
                if (i !== j) {
                    if (citiesList[i] == citiesList[j]) count++;
                }
            };
            if (count > aux) {
                aux = count;
                var index = i;
            }
            count = 1;
        }
        arr.push(citiesList[index]);
        for (var k = 0; k < citiesList.length; k++) {
            if (citiesList[k] !== citiesList[index]) newArr.push(citiesList[k]);
        }
        citiesList = newArr;
        newArr = [];
        n++
        aux = 0;
    }
    return arr;
}