const header = document.querySelector("#header")
const image = document.querySelector("#image")
const credit = document.querySelector("#credit")

document.querySelector("#chanterelle-button").addEventListener("click", function() {
    header.innerHTML = "Chanterelle"
    image.src = "chanterelle.jpg"
    credit.innerHTML = "© <a href='https://flic.kr/p/zjT59B'>Neil Leclerc</a>"
})

document.querySelector("#oyster-button").addEventListener("click", function() {
    header.innerHTML = "Oyster mushroom"
    image.src = "oyster.jpg"
    credit.innerHTML = "© <a href='https://flic.kr/p/nGyYF'>Robbie Sproule</a>"
})

document.querySelector("#fly-agaric-button").addEventListener("click", function() {
    header.innerHTML = "Fly agaric"
    image.src = "fly-agaric.jpg"
    credit.innerHTML = "© <a href='https://flic.kr/p/8FmBuy'>Victoria Vasilieva</a>"
})