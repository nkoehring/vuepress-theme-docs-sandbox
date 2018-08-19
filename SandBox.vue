<template>
  <div class="content">
    <h1>Vuejs Preview</h1>
    <template v-if="example">
      <h2>{{ example.title }}</h2>
      <component :is="example.component" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    examples: Array,
    scrollTop: Number
  },
  data () {
    return { example: null }
  },
  watch: {
    scrollTop (newValue, oldValue) {
      const current = this.examples.find(example => {
        const diff = example.offset - this.scrollTop
        return diff > -200 && diff < 50
      })

      if (current) this.example = current
    }
  }
}
</script>
