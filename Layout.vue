<template>
  <div class="theme-container">
    <div id="content" ref="content" @scroll="scrollTop = $event.target.scrollTop"><Content /></div>
    <div id="sandbox"><SandBox :examples="examples" :scrollTop="scrollTop" /></div>
  </div>
</template>

<script>
import SandBox from './SandBox.vue'

export default {
  components: { SandBox },
  data () {
    return {
      examples: [],
      scrollTop: 0
    }
  },
  mounted () {
    const content = this.$refs.content
    const examples = Object.keys(this.$page.frontmatter.examples)

    this.examples = examples.map(slug => {
      const el = content.querySelector(`#${slug}`)
      if (el) {
        const offset = el.offsetTop
        const title = el.innerText
        const component = this.$page.frontmatter.examples[slug]

        return {offset, slug, title, component}
      }
    })
  },
  methods: {
    onScroll (evt) {
      console.log('scroll', evt)
    },
    log () {
      console.log(this.$page.headers, this.$page.frontmatter.examples)
    }
  }
}
</script>

<style src="prismjs/themes/prism.css"></style>
<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-size: 16px;
  font-family: sans-serif;
  color: #35495E;
}
a {
  text-decoration: none;
  color: #41B883;
}
p {
  line-height: 1.7em;
}
.theme-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
#content, #sandbox {
  flex: 1 1 50%;
  height: 100vh;
  overflow-y: scroll;
}
#sandbox {
  background: #41B883;
  color: black;
}
#content > .content,
#sandbox > .content {
  margin: 2rem;
  max-width: 36rem
}
#content > .content {
  float: right;
}
.line-numbers-mode {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: flex-end;
  background-color: #F5F2F0;
}
.line-numbers-wrapper {
  flex: 0 0 auto;
  width: 2.5rem;
  text-align: right;
  padding: 1.5rem .5rem;
  line-height: 1.5;
  color: #876;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

@media screen and (max-width: 600px) {
}
</style>
