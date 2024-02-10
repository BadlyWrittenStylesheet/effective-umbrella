const barColors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 255, 0],
    [255, 0, 255]
]

const barNames = [
    'Stoic',
    'Weekly Show',
    'Stereo Pro',
    'Run Podcast',
    'Morning Brew'
]

const barsTop = Array.from(document.querySelectorAll('.block-top'));
const barsBtm = Array.from(document.querySelectorAll('.block-btm'));
const barTxt = Array.from(document.querySelectorAll('.bar-title'));

// for (let i = 0; i < barsTop.length; i++) {
//     bars.push(barsTop[i], barsBtm[i]);
// }

// for (let i = 0; i < )

// barsTop.forEach

for (i = 0; i < barsTop.length; i++) {
    console.log(barsTop[i])
    barsTop[i].style.background = `rgb(${barColors[i][0]}, ${barColors[i][1]}, ${barColors[i][2]}`
    barsBtm[i].style.background = `rgb(${barColors[i][0]}, ${barColors[i][1]}, ${barColors[i][2]}`
    barTxt[i].innerText = barNames[i]
}


// for (i = 0; i < barsBtm.length; i++) {
//     console.log(barsBtm[i])
// }