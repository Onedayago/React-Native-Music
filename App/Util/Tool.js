
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
