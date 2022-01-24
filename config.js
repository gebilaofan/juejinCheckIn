// 配置文件
module.exports = {
  // 请求地址
  baseUrl: 'https://api.juejin.cn',
  cookie:
    '_ga=GA1.2.1228859384.1639630632; MONITOR_WEB_ID=74c2c866-4121-4109-b3ad-7b261ec72ab2; passport_csrf_token_default=add4f5e39c0c16cafeea5ccacfc21714; passport_csrf_token=add4f5e39c0c16cafeea5ccacfc21714; sid_guard=d0f94cb4536ec7be3e1782edf031b520%7C1639630644%7C5184000%7CMon%2C+14-Feb-2022+04%3A57%3A24+GMT; uid_tt=7408f16a4320b2d45ff3deecb1f09f6c; uid_tt_ss=7408f16a4320b2d45ff3deecb1f09f6c; sid_tt=d0f94cb4536ec7be3e1782edf031b520; sessionid=d0f94cb4536ec7be3e1782edf031b520; sessionid_ss=d0f94cb4536ec7be3e1782edf031b520; sid_ucp_v1=1.0.0-KDlmMzA3MGRmM2Y3NzM0M2U0NzUxODA5ODFhNGZmZDA1MTk5MzRlZTgKFgje2NCG4PR_ELSO640GGLAUOAJA7wcaAmxmIiBkMGY5NGNiNDUzNmVjN2JlM2UxNzgyZWRmMDMxYjUyMA; ssid_ucp_v1=1.0.0-KDlmMzA3MGRmM2Y3NzM0M2U0NzUxODA5ODFhNGZmZDA1MTk5MzRlZTgKFgje2NCG4PR_ELSO640GGLAUOAJA7wcaAmxmIiBkMGY5NGNiNDUzNmVjN2JlM2UxNzgyZWRmMDMxYjUyMA; n_mh=KyqMx_m9acqD6FgjbT0G-QywxfmRYyIa40nigd_cfBk; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227042159917667714575%2522%252C%2522ssid%2522%253A%25229a1b64ab-7d6c-4ab4-ba7a-cfdb99d2ab6c%2522%252C%2522user_unique_id%2522%253A%25227042159917667714575%2522%252C%2522timestamp%2522%253A1639630633077%257D; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; _gid=GA1.2.39607039.1642990877',
  SERVICE: '163',
  EMAIL: 'z18270214206@163.com',
  PASS: 'WOOEBXFADXBMXLQZ',
  // api地址
  api: {
    // 签到
    checkIn: '/growth_api/v1/check_in',
    // 查询签到
    getCheckStatus: '/growth_api/v1/get_today_status',
    // 查询签到天数
    getCheckInDays: '/growth_api/v1/get_counts',
    // 查询当前矿石
    getCurrentPoint: '/growth_api/v1/get_cur_point',
    // 查询抽奖
    getlotteryStatus: '/growth_api/v1/lottery_config/get',
    // 抽奖
    draw: '/growth_api/v1/lottery/draw',
    // 获取沾喜气列表用户
    getLuckyUserList: '/growth_api/v1/lottery_history/global_big',
    // 沾喜气
    dipLucky: '/growth_api/v1/lottery_lucky/dip_lucky'
  }
};
