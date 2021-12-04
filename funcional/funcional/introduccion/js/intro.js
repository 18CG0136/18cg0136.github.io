//Imperativo
const hola="Pedro";
const decirhola =()=>{
    console.log(`Hi ${hola}`);


}

decirhola()


//Funcional
const dHi=(n)=>`Hi ${n}`;

console.log(dHi("jose"));


const sum=(a,b)=> a+b;
const sum2=(a,b)=> a-b;
const suma=(a,b,rrr)=>rrr(a,b);
console.log(suma(2,2,sum2));