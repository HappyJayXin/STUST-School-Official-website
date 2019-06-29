;(function() {
  new Vue({
    data: {
      drawer: false,
      // 麵包屑
      contentpath: [
        {
          text: '選單',
          disabled: true,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: '最新消息',
          disabled: false,
          href: 'https://mis.stust.edu.tw/tc/node/news'
        }
      ],
      banners: [
        {
          src: 'https://mis.stust.edu.tw/Sysid/mis/banner/001.png'
        },
        {
          src: 'https://mis.stust.edu.tw/Sysid/mis/banner/002.png'
        },
        {
          src: 'https://mis.stust.edu.tw/Sysid/mis/banner/003.png'
        }
      ],
      // Menu 連結
      links: [
        {
          title: '最新消息',
          href: 'https://mis.stust.edu.tw/tc/node/news'
        },
        {
          title: '系所簡介',
          href: 'https://mis.stust.edu.tw/tc/node/information1'
        },
        {
          title: '師資陣容',
          href: 'https://mis.stust.edu.tw/tc/node/teachers'
        },
        {
          title: '課程設計',
          href: 'https://mis.stust.edu.tw/tc/node/course1'
        },
        {
          title: '成果績效',
          href: 'https://mis.stust.edu.tw/tc/node/achievements2'
        },
        {
          title: '規章辦法',
          href: 'https://mis.stust.edu.tw/tc/node/Teachers_approach'
        },
        {
          title: '實務專題',
          href: 'https://mis.stust.edu.tw/tc/node/Practical_Projects2'
        },
        {
          title: '文件下載',
          href: 'https://mis.stust.edu.tw/tc/node/download-1'
        },
        {
          title: '常見問題',
          href: 'https://mis.stust.edu.tw/tc/node/faq1'
        }
      ],
      headers: [
        {
          text: '公告標題',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: '公告類別', value: 'class' },
        { text: '點閱數', value: 'dot' },
        { text: '發佈日期', value: 'date' }
      ],
      desserts: [
        {
          name: '國立中正大學舉辦「2019法遵科技與電腦稽核專題競賽」',
          class: '競賽資訊',
          dot: '30',
          date: '2019/06/24'
        },
        {
          name: '全國大專校院 ODF-CNS15251 推動競賽',
          class: '學術活動',
          dot: '56',
          date: '2019/06/20'
        },
        {
          name:
            '【賀】校外得獎榮譽榜-2019第八屆工程、技術與科技教育學術研討會論文競賽',
          class: '榮譽榜單',
          dot: '159',
          date: '2019/05/31'
        },
        {
          name:
            '國立中央大學管理學院企業資源規劃暨大數據分析中心(ERP中心)訂於2019年7月3日至8月6日於本校舉辦「2019企業Ｅ化人才培訓SAP暨大數據暑期營」',
          class: '系務公告',
          dot: '167',
          date: '2019/05/30'
        },
        {
          name: '107-3 & 108-1校外實習資訊 20190520',
          class: '就業實習',
          dot: '231',
          date: '2019/05/20'
        },
        {
          name: '《108/05/25資管系TQC/EEC場次考照時間及地點》',
          class: '證照資訊',
          dot: '1190',
          date: '2019/05/20'
        }
      ]
    },
    mounted() {
      this.setColor()
    },
    methods: {
      setColor() {
        this.$vuetify.theme.primary = '#4a95bd'
      }
    }
  }).$mount('#account')
})(Vue)
