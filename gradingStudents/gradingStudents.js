//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
var grades = [73, 67, 38, 33];

gradingStudents(grades);

function gradingStudents(grades) {
  debugger;
  let newArr = [],
    multiple = 0,
    grade = 0,
    res;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newArr.push(grades[i]);
    } else {
      while (grade <= 100) {
        grade++;
        multiple = grade * 5;
        if (multiple > grades[i]) {
          res = multiple - grades[i];
          res < 3 ? newArr.push(multiple) : newArr.push(grades[i]);
          grade = 0;
          break;
        }
      }
    }
  }
  return newArr;
}
