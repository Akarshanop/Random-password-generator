function randomGenerator(length,includeLowerCase,includeupperCase,includeSymbol){
    const lowerCase="abcdefghijklmnopqrstuvwxyz"
    const upperCase="ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
    const symbol="!@#$%^&*()_+"

    let allowedchar='';
    let password='';
    allowedchar+=includeLowerCase?lowerCase:'';
    allowedchar+=includeupperCase?upperCase:'';
    allowedchar+=includeSymbol?symbol:'';

    if(length<=0){
       return(`make the lenght greater than 0`);
    }
    if(allowedchar.length===0){
        return(`make anyone of the conditon true`);
    }
    for(let i=0;i<length;i++){
        let index=Math.floor(Math.random()*allowedchar.length);
        password+=allowedchar[index];
    }
    return password

}
const length=10;
const includeSymbol=true;
const includeLowerCase=true;
const includeupperCase=true;

let pass=randomGenerator(length,includeLowerCase,includeupperCase,includeSymbol)
console.log(pass);
