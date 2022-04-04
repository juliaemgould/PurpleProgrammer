/*Provide the sum, "S" of all the ordered sets of 4 integers within given range "n" that have an average that is twice their variance */

const S = function (n) {
  //create array from n
  let getArraySet = !(n > 0) ? undefined : [...Array(n + 1).keys()];
  getArraySet.shift();

  console.log(getArraySet + "the array");

  //define subset
  const subSetNumber = "4";

  // Computes average and variance of given array then evaluates if average is is 2X variance
  const calculateVarianceVSAverage = function (numberSet) {
    const calculateAverage = () => {
      const numberSum = numberSet.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      const average = numberSum / numberSet.length;

      return average;
    };

    const calculateVariance = () => {
      // subtract the average of the number set array from each number in the array then square the differences
      const varianceSet = numberSet.map((number) =>
        Math.pow(number - calculateAverage(numberSet), 2)
      );

      console.log(varianceSet + "the variance set");

      // add the sums of the differences then average the result to get get variance
      const varianceSum = varianceSet.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

      console.log(varianceSum);
      const variance = varianceSum / numberSet.length;

      console.log(variance);

      return variance;
    };

    calculateVariance();
  };

  calculateVarianceVSAverage([1, 2, 3, 5, 5, 7]);

  // assign ordered permutations of setArray in groups of 4 with duplicates allowed or 5^4
};

S(5);

let mySet = new Set([1, 2, 3], [1, 2, 3], [3, 2, 1]);
console.log(mySet);
