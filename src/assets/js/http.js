import axios from 'axios'
const url = 'http://118.31.229.85:9999'

export default {
  //获取日点击量前5小说
  getRankByDay() {
    axios({
      url:url + '/api/novel/rank/day/get'
    }).then(res => {
      console.log(res)
    })
  },
  // 按小说id获取小说章节
  getChapterById(id) {
    axios({
      url:url + '/api/chapter/listByNovelId',
      method:'post',
      data:JSON.stringify({
        "novelId":id,
        "currentPage": 1,
        "orderKey": "update_time",
        "pageSize": 200,
        "searchCount": false
      })
    }).then(res => {
      return res
    }).catch(err => {
      return err
    })
  }
}