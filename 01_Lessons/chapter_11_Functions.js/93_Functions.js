/*Functions:- 1)It's a reusable code which is perform a specific task.
2)Insted of creating same logic multiple times we create it once & use it multiple times.
3)Every functions have 2 parts :- Defination & calling
Ex of defination: functions name(parameter){
      //codes that want to execute.
}
Ex of call a function: name(parameter);
4)Generally It's 4 types-a)Take parameters & return values.
                         b)Take parameters &  not return values
                         c)Take no parameters & return values
                         d)Take no parameters & not return values
                         */

//Step-01:->>Define a function....
function greet() {
    console.log('Hello! Good Morning');
};
//Step-02:->>Call a Function..........
greet();