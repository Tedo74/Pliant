function bestVelocity(arr) {
  const sprints = 3;

  if (arr.length < sprints) {
    throw new Error('Input contains less than 3 sprints');
  }

  let maxSum = 0;
  let tempSum = 0;
  let sequence = [];

  for (let i = 0; i < sprints; i++) {
    maxSum += arr[i];
    sequence.push(arr[i]);
  }
  tempSum = maxSum;

  for (let i = sprints; i < arr.length; i++) {
    tempSum = tempSum - arr[i - sprints] + arr[i];

    if (maxSum <= tempSum) {
      maxSum = tempSum;
      sequence = arr.slice(i - sprints + 1, i + 1);
    }
  }
  return { sequence, sum: maxSum };
}

console.log(bestVelocity([11, 14, 10, 12]));
console.log(bestVelocity([12, 9, 1, 5, 11, 5]));
console.log(bestVelocity([76, 80, 81, 77, 83, 78, 80]));
console.log(bestVelocity([0, 0, 1, 0, 0, 2, 0, 0, 0, 3, 0, 0, 1, 0, 0]));
// throw Error
// console.log(bestVelocity([0, 0]));
