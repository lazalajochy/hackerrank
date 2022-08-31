// https://www.hackerrank.com/challenges/acm-icpc-team/problem?isFullScreen=true
var  topics = ['10101', '11110', '00010'];

var result = acmTeam(topics);

function acmTeam(topics) {
    var result = [], aux = 0, group = 0;;
    for (var i = 0; i < topics.length; i++) {
        var amount = i + 1, subjects = 0, element = topics[i], elementTwo = topics[amount];
        if (elementTwo !== undefined) {
            do {
                for (var j = 0; j < element.length; j++) {
                    var firstItem = element[j], secondItem = elementTwo[j];
                    if (firstItem == 1 && secondItem == 1) {
                        subjects++;
                    } else if (firstItem == 1 && secondItem == 0) {
                        subjects++;
                    } else if (secondItem == 1 && firstItem == 0) {
                        subjects++;
                    }

                }
                amount++;
                elementTwo = topics[amount];
                if (subjects > aux) {
                    result = []
                    aux = subjects
                    group = 0;
                    group++;
                    result.push(subjects, group)
                } else if (subjects >= aux) {
                    result = [];
                    group++;
                    result.push(subjects, group)
                }
                subjects = 0;
            } while (amount < topics.length);
        }
    }

    return result
}