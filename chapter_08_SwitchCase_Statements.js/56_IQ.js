//Create a function trafficLight(color) that simulates a traffic light.
//Here break is nnot used beacause return the value and break the loop automatically.
function getTrafficColor(color) {
    switch (color.toLowerCase()) {
        case 'red': return 'Stop';
        case 'green': return 'Go';
        case 'yellow': return 'Caution';
        default: return 'Invalid ';
    }
}
console.log(getTrafficColor('Green'));
