import axios from 'axios'
const url = 'http://118.31.229.85:9999'

export default {
  getRankByDay() {
    axios({
      url:url + '/api/novel/rank/day/get'
    }).then(res => {
      console.log(res)
    })
  }
}