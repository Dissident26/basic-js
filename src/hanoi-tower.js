module.exports = function calculateHanoi (diskNumber, turnsSpeed){
    let turns = Math.pow(2, diskNumber) - 1;
    let seconds = turns / (turnsSpeed / 3600);
    let obj = {
      turns : turns,
      seconds : seconds
    }
    return obj;
  }