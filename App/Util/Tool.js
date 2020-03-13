
export  function checkPhone (phone) {
  let pattern = /^1[34578]\d{9}$/;
  if (pattern.test(phone)) {
    return true;
  }
  return false;
}

export  function checkEmpty (str) {

  if(str !== ""){
    return true
  }
  return false;
}

/*
* 数字秒转时间格式
* @param sec 数字秒
* return 时间格式字符串
* */
export function secondsFormat(sec) {
  let hour = Math.floor(sec / 3600);
  let minute = Math.floor((sec - hour * 3600) / 60);
  let second = Math.floor(sec - hour * 3600 - minute * 60);
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  if(hour !== "00"){
    return hour + ":" + minute + ":" + second;
  }else{
    return  minute + ":" + second;
  }
}
