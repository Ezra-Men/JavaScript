var globalVar = "Im a global variable";
let globalLet = "Im also a global, but scoped with let"
const globalConst = "Im a global constant"


{
    var blockVar = "Im a block-scoped var";
    let blockLet = "Im a block-scoped let";
    const blockConst = "Im a block-scope const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError