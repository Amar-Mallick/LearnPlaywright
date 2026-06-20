 //When use default import/export  concepts no required use {} after import .
 //Default export means it's defacto return. 
 import log1 from "../logger.js";
 console.log(log1("It's a default logger"));//Log Message It's a default logger

import { log2 } from "../logger.js";
console.log(log2("Not a Default Logger"));//Log2 Message is : Not a Default Logger
// Clean shorthand to import both default and named exports together.
//change name log1 as log3(not required alias for default name change) & using alias change log 2 to log4.
import  log3,{log2 as log4} from "../logger.js";
//output=> Log Message It's a default logger
//Log2 Message is : Not a Default Logger
