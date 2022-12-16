
Write a function in JS that, will (pseudo) randomly select a prize from a prize pool!

Your function should:

    Look at the following array of prizes.
    Select one at random.
    Return the prize selected.

const prizes = [ "🚗 new car", "🌴 holiday", "🥁 drum machine" ];

Hint: investigate Math methods...
Example:

randomPrize(); // => "You win a 🚗 new car!"

Bonus:

    Have your function accept a prize pool as an argument.
    The function should use the provided prize pool to generate a prize.

Double Bonus:

    Have your function remove the prize selected from provided prize pool.
    If no prizes are available, return: "❌ No prizes left"