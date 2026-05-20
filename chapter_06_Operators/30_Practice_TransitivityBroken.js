console.log("" == 0);//true
console.log("0" == 0);//true
console.log("" == "0");//false(both sides string type but one is emptystring another has one characters(0))

/**In maths and logic ,transitivity is a rule that says:
 * If A=B,B=C,then it must follow that A=C .
 * But,in JavaScript== is so inconsistent that the logical rule fails.(Transitivity broken)
 * Ex : 0=="";//true
 * 0=="0";//true
 * but,""=="0";//false
 * 
 */