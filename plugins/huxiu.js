// huxiu 每日最热帖子列表
const Bot = require('../modules/bot');
const axios = require('axios').default;

class Plugin extends Bot {
  constructor () {
    super();
    this.API = "https://houxu.app/api/1/lives/new/?limit=20";
  }
  run () {
    axios.get(this.API).then(res => {
      const { data } = res;
      const articles = [];
      data.map(d => {
        articles.push({
          title: d.title,
          description: d.summary,
          url: d.url,
          picurl: d.media.avatar_url.replace('_mini', '_large')
        })
      });
      this.sendNews(articles.slice(0, 8));
    })
  }
}

new Plugin().run();
