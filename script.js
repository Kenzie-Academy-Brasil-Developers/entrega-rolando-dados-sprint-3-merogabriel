const body = document.getElementsByTagName('body')

function rollDice(n) {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i <= n; i++){
        const dice1 = Math.ceil(Math.random(i) * 6)
        const dice2 = Math.ceil(Math.random(i) * 6)
        let sum = dice1 + dice2
        arr[sum - 2] += 1
    }

    for (let i = 0; i < arr.length; i++){
        const minhaBarra = document.createElement('div')
        minhaBarra.innerText = `${i + 2}: ${arr[i]}`
        minhaBarra.style.width = `${arr[i]+25}px`
        minhaBarra.style.height = `20px`
        minhaBarra.style.border = `1px solid white`
        minhaBarra.style.color = `white`

        document.body.appendChild(minhaBarra)
    }
}

rollDice(1000)