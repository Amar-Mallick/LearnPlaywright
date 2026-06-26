//primitivetype............
let name: string = "Ankit";
let mark: number = 25;
let temp: number = 23.45;
let isDisplayed: boolean = true;
let nothing: null = null;
let notdefined: undefined = undefined;
//Arrays......
let arr: number[] = [20, 35];
let names: Array<string> = ["Raj", "Ram"];

//Arrow function annotations.........
const ad = (a: number, b: number): number => (a + b);

//function annotations.......
const st = function fname(ab: number, cd: number): number {
    return (ab + cd);
}

//Any means any types of datatypes can be stored(Rarely use).
let child: any = "Esha";
//unknown.......
let un: unknown = "xomb";
