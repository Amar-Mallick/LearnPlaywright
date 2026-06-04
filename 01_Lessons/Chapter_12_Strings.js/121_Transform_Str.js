let st = "  Hello  Nabibn ! "
console.log(st.toLowerCase());//hello  nabibn ! 
console.log(st.toUpperCase());//HELLO  NABIBN ! 
console.log(st.trim());//Hello  Nabibn !
console.log(st.trimStart());
console.log(st.trimEnd());
//replace():--(Replace first one )
let staus = "Test : Fail and retry : Fail";
console.log(staus.replace("Fail", "Pass"));//Test : Pass and retry : Fail

// replaceAll():- 
console.log(staus.replaceAll("Fail", "Pass"));//Test : Pass and retry : Pass
//using regx(regular expression):->>>>
console.log(staus.replace(/Fail/g, "Pass"));//Test : Pass and retry : Pass

//concat():->>>
console.log(st.concat("What's up?"));//Hello  Nabibn ! What's up?
let az = `${"IND"}${"IA"}`;
console.log(az);//INDIA
console.log("Hel" + "lo");//Hello
//split():-->>
let t = "abc,def,stu";
console.log(t.split(","));//[ 'abc', 'def', 'stu' ]
//join():-->>>
let c = [100, 300, 500];
console.log(c.join("-"));//100-300-500






