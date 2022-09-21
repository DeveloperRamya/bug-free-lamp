let arr1 = ['foo','boo','goo','baa','daa'];
let n = arr1.length-1;
for(let i=0;i<=n/2;i++){
    let temp = arr1[i];
     arr1[i] = arr1[n-i];
    arr1[n-i] = temp;
}
console.log(arr1);