let distanceFromHqInBlocks = function(start){
  let destination = 42;
  return Math.abs(start - destination);
} 

let distanceFromHqInFeet = function (start){
  let destination = 42;
  return Math.abs(start - destination) * 264;
}

let distanceTravelledInFeet = function (start, destination){
  return Math.abs(start - destination) * 264;
}

let calculatesFarePrice = function (start, destination){
  let difference = Math.abs(start - destination) * 264;
    if ( difference <= 400){
      return 0;
    }
    else if( (difference > 400) && (difference < 2000) ){
      return (difference - 400) * 0.02; 
    }
   else if ( (difference > 2000) && (difference < 2500) ){
     return 25;
   }
   else if ( difference > 2500){
     return 'cannot travel that far';
   }
  
}