//https://www.hackerrank.com/challenges/jim-and-the-orders/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

var orders = [
  [8, 1],
  [4, 2],
  [5, 6],
  [3, 1],
  [4, 3],
];

jimOrders(orders);

function jimOrders(orders) {
  let arr = [],
    obj = { sum: 0, order: 0 },
    order = 0;
  for (let i = 0; i < orders.length; i++) {
    let value = orders[i];
    let sum = 0;
    for (let j = 0; j < value.length; j++) {
      sum += orders[i][j];
    }
    order++;
    obj = { sum: sum, order: order };
    arr.push(obj);
  }

  arr = arr
    .map(function (ar) {
      return ar;
    })
    .sort(function (a, b) {
      return a.sum - b.sum;
    });

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].order);
  }
  return result.join(" ");
}
