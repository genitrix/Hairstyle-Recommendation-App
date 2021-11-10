// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'smartcut-pquxq'
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('User').where({
    _openid:event._openid
  })
  .get({
   complete: function(res) {
      // res.data 包含该记录的数据
      console.log(res.data)
    }
  })
}