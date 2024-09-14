
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let total = [];
  for (let i = 0; i < array.length; i++){
    let person = array[i]
    let bal = array[i].balance
    let dep = array[i].deposits
    let wit = array[i].withdrawals
    let sumDep =0;
    let sumWit =0;
   
     if (dep && dep.length > 0) {  
       
       for (let x = 0; x < dep.length; x++) {  
         sumDep += dep[x];  
       }  
     } else {  
         
       sumDep = 0;  
     }
    
    if (wit && wit.length > 0) {  
       
       for (let j = 0; j < wit.length; j++) {  
         sumWit += wit[j];  
       }  
     } else {  
         
       sumWit = 0;  
     }
    let correctbal = (sumDep)-(sumWit);
        if (bal!= correctbal){
     total.push(array[i])
   } 
 }
 
   return total
 
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
