// Realizar a troca dos valores das variáveis de "a" por "b".

var a = 7;
var b = 94;

console.log("O valor de a é: " + a);
console.log("O valor de b é: " + b);

// ou com:

//[a, b] = [b ,a]
//console.log("Agora o valor de a é: " + a);
//console.log("Agora o valor de b é: " + b);

var temp = a;
a = b;
b = temp;

console.log("Agora o valor de a é: " + a);
console.log("Agora o valor de b é: " + b);

