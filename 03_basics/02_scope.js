// There are basically two types of scope available.

// Global Scope and the local scope.

// A var with the global scope can be accessed anywhere in the program.

// A var with local/function scope can only be accessed within the scope i.e {}.

// All this is valid only on the variables declared using the const / let keyword.

// var has no such scope that is why it is not used by programmers.

// -------------------------------------------------------------------------------------


if (true){
    let a = 20
    const b = 30
    var c = 100
    console.log(a);
    console.log(b);
}

console.log(c);

