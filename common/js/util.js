
/* 
 *
 时间格式转化
 * 
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/* 
 *
 错误提示
 * 
 */


const error = function (msg) {
  console.error(msg)
}

/* 
 *
 判断数据类型
 * 
 */

const typeMap = {
  '[object Array]': 'Array',
  '[object Object]': 'Object',
  '[object String]': 'String'
}

const getType =  function(data) {
  if (!data) return error('getType函数参数为空！')

  let type = Object.prototype.toString.apply(data)

  return typeMap[type]
}


/* 
 *
 价格转化
 * 
 */
function createDecimal(number) {
  let  decimal = ''

  for(let i=1;i<=number;i++) {
    decimal += '0'
  }
  return decimal
}


const formatPrice = function(price,number) {
  if (number <= 0) return error('formatPrice函数接收的number参数必须大于0！')

  let reg = /[\.]/
  let newPrice = ''
  let decimal = ''
  let integer = ''

  if (reg.test(price)) {
    integer = price.split('.')[0]
    let decimal = price.split('.')[1]
    
    let len = decimal.length

    if(len < number) {
      decimal = decimal + createDecimal(number - len)

      newPrice = newPrice + '.' + decimal
    }
  }else {
    integer = price
    decimal = decimal + createDecimal(number)

    newPrice = integer + '.' + decimal
  }

  return {
    newPrice: newPrice,
    int: integer,
    dec: decimal
  }
}


module.exports = {
  formatTime: formatTime,
  error: error,
  getType: getType,
  formatPrice: formatPrice
}

