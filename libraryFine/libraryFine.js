//https://www.hackerrank.com/challenges/library-fine/problem?isFullScreen=true
var d1 = 15, m1 = 7, y1 = 2014, d2 = 1, m2 = 7, y2 = 2015;

var result= libraryFine(d1,m1,y1,d2,m2,y2);

function libraryFine(d1, m1, y1, d2, m2, y2) {
    var fine = 0;
    if(d1 <= d2 && m1 <= m2 && y1 <= y2){
        return fine;
    }else if(d1 > d2 && m1 == m2 && y1 == y2){
        fine = (d1 - d2) * 15;
        return fine;
    }else if(m1 > m2 && y1 == y2){
        fine = (m1 - m2) * 500;
        return fine;
    }else if(y1 > y2){
        fine = 10000;
        return fine;
    }else if(y1 < y2){
        return fine;
    }else if(d1 > d2 && m1 < m2 && y1 == y2){
        return fine;
    }

}