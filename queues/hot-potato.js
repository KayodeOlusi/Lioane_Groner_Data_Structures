const { Queue } = require("./queue2");

function hotPotato(elementsList, num) {
  let eliminationList = [];
  const queue = new Queue();

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminationList.push(queue.dequeue());
  }

  return {
    eliminated: elementsList,
    winner: queue.dequeue(),
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`);
