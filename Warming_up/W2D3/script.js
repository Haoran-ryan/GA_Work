const randomPrize = function (prizes){
    let len = prizes.length;
    // let prizes = prize;
    let num = Math.floor(Math.random() * 11 % len);
    if (prizes[num]){
        console.log(`Your prize is ${prizes[num]}`);
        prizes = prizes.splice(num,1)

    } else
        console.log("❌ No prizes left");
}

const prizes = [ "🚗 new car", "🌴 holiday", "🥁 drum machine" ]
randomPrize(prizes);