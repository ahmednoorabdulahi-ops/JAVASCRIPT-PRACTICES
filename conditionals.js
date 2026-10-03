//if statement : run the code block only if condition is true

// if(condition){
//     //run this code block if condition is true
// }else {
//     //run this code block if condition is false
// }

// if(condition){
    
// }else if(condition){

// }else if(condition){

// }else if (condition){
//     //runs at the end when items are false
// }
//store history of calculation in an array
const history_calculations=[]  //step 1 create array

function storeCalculation(a,b,operation,result){
    //create an object to represent the calculation
    const calculation ={
        "a" :a,
        "b" :b,
        "operation" :operation,
        "result" :result
    }
    history_calculations.push(calculation)
    console.log(history_calculations)

}


function calculate (a,b,operation){
    if(operation === '+'){
        let sum = a+b
        storeCalculation(a,b,operation,sum)
        return sum

    }else if (operation=== '-'){
        let sub = a-b
        storeCalculation(a,b,operation,sub)
        return sub

    }else if (operation === '/' && b!==0){
        let division = a/b
        storeCalculation(a,b,operation,division)
        return division

    }else if (operation === '*'){
        let multiply =a*b
        storeCalculation(a,b,operation,multiply)
        return multiply
        
    }else {
        return 'invalid Operation'
    }

}
calculate (10,0,"/")
calculate (10,10,"+")
calculate (10,5,"-")
calculate (10,5,"*")

