const calculateFactoriel = (factorielNumber) => {
    let result = 1;
    if(typeof factorielNumber === "number" && factorielNumber != Infinity) {
       for (let i = 1; i<=factorielNumber ; i++) {
        result = result * i;
       }
       return result;
    } else if (factorielNumber < 0) {
       return "Pozitif deger saglamamiz lazimdir";
    } else {
 
    }
 }
 console.log(calculateFactoriel(factorielNumber= 5))