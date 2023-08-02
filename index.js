//function saturdayFun(activity = 'roller-skate') {
 // const defaultMessage = `This Saturday, I want to ${activity}!`;

 // function innerFunction(newActivity) {
 //   return `This Saturday, I want to ${newActivity}!`;
 // }
 // if (activity === 'roller-skate') {
  //  return defaultMessage;
 // } else {
  //  return innerFunction;
 // }
 
//}

function saturdayFun(activity) {
  const defaultActivity = 'roller-skate';

  if (activity === undefined) {
    return `This Saturday, I want to ${defaultActivity}!`;
  } else {
    return `This Saturday, I want to ${activity}!`;
  }
}

function mondayWork(plans) {
  const basicActivity = 'go to the office';

  if (plans === undefined) {
    return `This Monday, I will ${basicActivity}.`;
  } else { 
    return `This Monday, I will ${plans}.`;
  }
}

//function wrapAdjective(nice) {
  //const niceMessage = 'special';

 // if (nice === undefined) {
  //  return `You are ${niceMessage}!`;
 // } else {
  //  return `You are ${nice}!`;
 // }
//}


function wrapAdjective(flair = '*') {
  return function (adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
