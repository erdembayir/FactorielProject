//1.Örnek;

let Değer=3;
 
let factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log("Değer :"+Değer+ "Faktöriyel: "+ factorial(Değer));


//2.Örnek;


/* const calculateFactoriel = (factorielNumber) => {
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
 console.log(calculateFactoriel(factorielNumber= 5)) */





