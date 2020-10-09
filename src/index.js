module.exports = function check(str, bracketsConfig) {
  let stackArr = []
  for (let i=0; i<str.length; i++) {
    for (let j=0; j < bracketsConfig.length; j ++){
      if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        stackArr.push(bracketsConfig[j][0])
      } else if (str[i] === bracketsConfig[j][1] && stackArr[stackArr.length-1] ===  bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]){
          stackArr.pop(bracketsConfig[j][1])


      } else if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1] && stackArr[stackArr.length-1] ===  bracketsConfig[j][0]) {

          stackArr.pop(bracketsConfig[j][1])


      } else if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
        stackArr.push(bracketsConfig[j][0])
      } else if (stackArr.length === 0 && str[i] === bracketsConfig[j][1]) {
        return false
      }




    }
  }

  if (stackArr.length === 0) {
    return true
  } else {
    return false
  }
}