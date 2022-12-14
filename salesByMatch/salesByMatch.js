//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

var ar = [1, 2, 1, 2, 1, 3, 2];

sockMerchant(ar);
function sockMerchant(ar) {
    let result = 0, aux = 1;
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if (i !== j) {
                if (ar[i] === ar[j]) aux++;
                if (aux == 2) {
                    result++;
                    aux = 1;
                    ar.splice(j, 1);
                    ar.splice(i, 1)
                    i--
                    break

                }
            }
        }
    }
    return result
}
