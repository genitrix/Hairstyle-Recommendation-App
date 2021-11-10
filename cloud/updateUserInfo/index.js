// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'smartcut-pquxq'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('User').where({
    openid: event.openid
  })
  .set({
    data: {
      openid:event.openid,
      nickName:event.nickName,
      avatarUrl:event.avatarUrl,
      sex:event.sex,
      age:event.age,
      FaceType:event.FaceType,
      distanceBetweenEyes:event.distanceBetweenEyes
    }
  })
} 