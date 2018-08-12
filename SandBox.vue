<template>
  <div class="content">
    <h1>Vuejs Preview</h1>
    <template v-if="examples[h.title]" v-for="h in headers"> 
      <h2>{{ h.title }}</h2>
      <component :is="examples[h.title]" />
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    headers () {
      return this.$page.headers
    },
    examples () {
      return this.$page.frontmatter.examples
    }
  }
}
</script>
