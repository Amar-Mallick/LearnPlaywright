/**Ex:-> Think of a decorator like a security guard standing outside a classroom door.
 * Someone calls out a student's name ("Amar").
 * The security guard stops them first and does a task (prints a message).
 * The guard then opens the door and lets the actual student ("Amar") speak.
 * 🧠 The Only 3 Things to Remember:
 * The @ symbol tells the code: "Put a guard on this function.
 * "box.value is just the box holding your original function code.
 * The guard opens the box, adds a new line of code at the top, and closes it.
 */


// 1. The Security Guard (The Decorator)
function Guard(target: any, key: string, box: PropertyDescriptor) {
    const studentInside = box.value; // Step A: Remember the student inside the room

    // Step B: What the guard does when someone calls the student
    box.value = function (...args: any) {
        console.log("👮 Guard says: Stop here first!"); // Guard's action
        return studentInside(...args);                  // Let the student speak
    };

    return box;
}

// 2. The Classroom (The Class)
class Classroom {
    @Guard // The guard is watching this specific action
    callStudent(name: string) {
        return name;
    }
}

// 3. Shouting the name
const result = new Classroom().callStudent("Amar");
console.log(result);
//👮 Guard says: Stop here first!
//Amar