/**In TypeScript, the as keyword is used for type assertion (also known as type casting).
 *  It tells the TypeScript compiler to explicitly treat a value as a specific type,
 *  overriding its original inferred type or preventing it from being treated as unknown or any */
let Student: unknown = {
    name: "Amar",
    id: "10",
    course: "PlayWright"
}

interface StudentInteraface { name: string, id: number, course: string }
//"as" keyword used here .........
let s = Student as StudentInteraface;
console.log(s.id);//10
console.log(s.course);//PlayWright
console.log(s.name);//Amar


