// YAAD RAHE YE KI DO IIFE JAB BHI EK KE BAAD EK LIKHE HO TAB EK IIFE KE BAD SEMI-COLON LAGANA BAHUT JARURI HAI . YE SEMI-COLON AAP KO FIRST IIFE KE BAAD HI LAGANA HAI

// Suppose bahut hi bada code hain aur usme bahut sare variables declared kiye gaye hain
// ab mai ek function define kar raha hun jaha par kuch var names aise hain jo ki pehle se hi defined hain. In pehle se defined variables ko Global variables kehte hain aur hum nahi chahte ki hamara code in global vars se pollute ho.
//  To hum is case me iife declare karte hain
// iife ka full form hai immediately invoked function expression
// ye fun ke declare hote hi usse invoke kar deta hain
// kyuki ye aisa karte hain to us case me function global variables se pollute nahi ho pata 

// eg : 
// () first paranthesis to define the function
// () to execute the fun just like chai() is written for execution
// (function function_name(){

// })()

(function chai(){
    console.log('chai')
})(); // Agar ye semicolon nahi lagaya hota to function nahi chalta actually js me implicitly semicolon wali problem nahi hai par iife me lagana hota hai taki compiler ko pata chal jaye ki ye function yaha khatam ho gaya hai

// the same can be written in an arrow function as follows

(
    () => {
        console.log(`DB Connected`)
    }
) ();

// ab isme args kaise pass karein to idhar par aap ye kar sakte ho

// jaise normal function me karte the vaise

 /*
 
 (function function_name(parameter){

 })(argument) 
 
 
 */

(
    (name) => {
        console.log(`${name} welcome back`);
    }
)('JOD or WOT')

// Ab iife bhi two types ke hote hain 

// named iife
// normal iife 

// to jo function me iife ka kuch naam hota hai vo hota hai named iife

// for example ye 

/*

(function function_name(parameter){

})(argument) 

*/