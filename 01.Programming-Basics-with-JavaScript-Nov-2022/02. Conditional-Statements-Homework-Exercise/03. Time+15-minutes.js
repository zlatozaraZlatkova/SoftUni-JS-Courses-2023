
function time(input) {
    let startHour = Number(input.shift());
    let startMin = Number(input.shift());
 
    let timeInMin = startHour * 60 + startMin;
 
    let timePlus15 = timeInMin + 15;
 
    let finalHour = parseInt(timePlus15 / 60);
    let finalMin = timePlus15 % 60;
 
    if (finalHour >= 24) {
        finalHour -= 24;
    }
 
    if (finalMin < 10) {
        console.log(`${finalHour}:0${finalMin}`);
    } else {
        console.log(`${finalHour}:${finalMin}`);
    }
}
time(["1", "46"]);
time(["0", "01"]);
time(["23", "59"]);
time(["11", "08"]);
time(["12", "49"]);
