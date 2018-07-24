<template>
  <div class="theme-container">
    <div id="content"><Content /></div>
    <div id="sandbox"><SandBox /></div>
  </div>
</template>

<script>
import cmOpts from './codemirror-options'
import SandBox from './SandBox.vue'

export default {
  components: { SandBox },
  data () {
    return { cmOpts }
  },
  computed: {
    isHome () {
      return this.$page.frontmatter.home
    }
  }
}
</script>

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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

@media screen and (max-width: 600px) {
}
</style>
