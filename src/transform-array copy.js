module.exports = function transform(arr){
  let res = [];
  if (Array.isArray(arr) !== true ){
        throw new Error();
      } 
for ( let i =0; i < arr.length; i++ ){
  if ( arr[0] == '--discard-prev' || arr[0] == '--double-prev' || arr[0] == undefined){
      arr.splice(0,1);
  } if (arr[arr.length-1] == '--discard-next' || arr[arr.length-1] == '--double-next'){
      arr.splice(arr.length-1, 1)
  } if ( arr[i] == '--double-prev' ) {
    arr[i] = arr[i-1];
  } if ( arr[i] == '--double-next' ) {
    arr[i] = arr[i+1];
  } if ( arr[i] == '--discard-prev') {
    res.pop()
  } if ( arr[i] == '--discard-next' ) {
    arr.splice(i,2)
  }   
  res.push(arr[i]);
  } return res
}