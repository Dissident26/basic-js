module.exports = function transform(arr){
    if (!Array.isArray(arr)){
        throw new Error();
      } 
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[0] == '--discard-prev' || arr[0] == '--double-prev' || arr[0] == undefined){
        arr.splice(0,1);
      } if (arr[arr.length-1] == '--discard-next' || arr[arr.length-1] == '--double-next'){
      arr.splice(arr.length-1, 1)
      }
      if (arr[i] == '--discard-next'){
        arr.splice(i,2);
      } if (arr[i] == '--double-next') {
        arr[i] = arr[i+1];
      } if (arr[i] == '--discard-prev') {
       arr.splice(i-=1, 2);
      } if ( arr[i] == '--double-prev' ) {
       arr[i] = arr[i-=1];
      } 
    }return arr
  }