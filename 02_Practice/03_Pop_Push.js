/*Think of a stack of trays in a cafeteria. New trays are placed on top (push), and customers take trays off the top (pop).
Your Task:
Start with an empty array called trayStack.
The kitchen washes three trays. Push "Tray 1", "Tray 2", and "Tray 3" into the stack one by one.
A customer walks up and takes the top tray. Use pop() to simulate this.
Push a new "Tray 4" onto the stack.
What does the final trayStack look like?*/
let trayStack = [];
let trayWasherKeep = trayStack.push("Tray 1", "Tray 2", "Tray 3");
console.log(trayWasherKeep);//3
console.log(trayStack);//[ 'Tray 1', 'Tray 2', 'Tray 3' ]
let customerTakeTopTray = trayStack.pop();
console.log(customerTakeTopTray);//Tray 3
let trayWasherKeepNew = trayStack.push("Tray 4");
console.log(trayStack);//[ 'Tray 1', 'Tray 2', 'Tray 4' ]