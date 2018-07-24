import Codemirror from 'vue-codemirror-lite'
import 'codemirror/mode/vue/vue'

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Codemirror)
  console.log('VUEPRESS OPTS', options, siteData)
}

