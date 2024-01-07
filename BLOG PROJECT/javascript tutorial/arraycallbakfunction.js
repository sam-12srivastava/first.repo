const x=[4,1,6,-2,-5,3,2,-8,6,7];
const firstneg=(num)=> {
    return num<0;
};
const result=x.findIndex(firstneg);
console.log(result);