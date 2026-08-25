export const SumWithReduce = () => {
  const numbers = [1, 2, 3, 4];

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return <div>Sum: {sum}</div>;
};
