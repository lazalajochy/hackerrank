//https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

var h = 7,
  m = 29;
timeInWords(h, m);
function timeInWords(h, m) {
  let hourString, timeResult, minutesString;
  let aux = m;
  if (m > 30) h = h + 1;
  switch (h) {
    case 1:
      hourString = "one";
      break;
    case 2:
      hourString = "two";
      break;
    case 3:
      hourString = "three";
      break;
    case 4:
      hourString = "four";
      break;
    case 5:
      hourString = "five";
      break;
    case 6:
      hourString = "six";
      break;
    case 7:
      hourString = "seven";
      break;
    case 8:
      hourString = "eigth";
      break;
    case 9:
      hourString = "nine";
      break;
    case 10:
      hourString = "ten";
      break;
    case 11:
      hourString = "eleven";
      break;
    case 12:
      hourString = "twelve";
      break;
    default:
      break;
  }

  // minutes = m;

  //code when m is more than 30;
  if (m > 30) m = 60 - m;

  //code for the minutes less than 10;
  if (m <= 9) {
    switch (m) {
      case 0:
        minutesString = "o' clock";
        break;
      case 1:
        minutesString = "one";
        break;
      case 2:
        minutesString = "two";
        break;
      case 3:
        minutesString = "three";
        break;
      case 4:
        minutesString = "four";
        break;
      case 5:
        minutesString = "five";
        break;
      case 6:
        minutesString = "six";
        break;
      case 7:
        minutesString = "seven";
        break;
      case 8:
        minutesString = "eight";
        break;
      case 9:
        minutesString = "nine";
        break;
      default:
        break;
    }
    //code for the minutes gratter or equan than 10 and less than 20;
  } else if (m >= 10 && m <= 19) {
    switch (m) {
      case 10:
        minutesString = "ten";
        break;
      case 11:
        minutesString = "eleven";
        break;
      case 12:
        minutesString = "twelve";
        break;
      case 13:
        minutesString = "thirteen";
        break;
      case 14:
        minutesString = "fourteen";
        break;
      case 15:
        minutesString = "quarter";
        break;
      case 16:
        minutesString = "fixteen";
        break;
      case 17:
        minutesString = "seventeen";
        break;
      case 18:
        minutesString = "eighteen";
        break;
      case 19:
        minutesString = "nineteen";
        break;
      default:
        break;
    }
  } else if (m == 20) {
    timeResult = minutesString = "tweenty minutes past " + hourString;
  } else if (m == 30) {
    timeResult = minutesString = "half past " + hourString;
  } else if (m > 20 && m <= 29) {
    switch (m) {
      case 21:
        minutesString = "twenty one ";
        break;
      case 22:
        minutesString = "twenty two";
        break;
      case 23:
        minutesString = "twenty three";
        break;
      case 24:
        minutesString = "twenty four";
        break;
      case 25:
        minutesString = "twenty five";
        break;
      case 26:
        minutesString = "twenty six";
        break;
      case 27:
        minutesString = "twenty seven";
        break;
      case 28:
        minutesString = "twenty eight";
        break;
      case 29:
        minutesString = "twenty nine";
        break;
      default:
        break;
    }
  }

  m = aux;

  if (m == 0) {
    timeResult = hourString + " " + minutesString;
  } else if (m == 1) {
    timeResult = minutesString + " minute past " + hourString;
  } else if (m > 30) {
    timeResult = minutesString + " minutes to " + hourString;
    if (60 - m == 15) timeResult = minutesString + " to " + hourString;
  } else if (m > 1 && m <= 9) {
    timeResult = minutesString + " minutes past " + hourString;
  } else if (m == 15) {
    timeResult = minutesString + " past " + hourString;
  } else if (m >= 10 && m <= 19) {
    timeResult = minutesString + " past " + hourString;
  } else if (m > 20 && m <= 29) {
    timeResult = minutesString + " minutes past " + hourString;
  }

  return timeResult;
}
