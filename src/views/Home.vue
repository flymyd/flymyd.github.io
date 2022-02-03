<template>
  <n-button type='primary' @click='add()'>count is: {{ data.count }}</n-button>
  {{ deviceType }}
  {{ windowSize }}
</template>
<script lang='ts'>
import { onMounted, reactive } from 'vue'
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'
import { mapState, useStore } from 'vuex'

export default defineComponent({
  components: {
    NButton
  },
  setup() {
    let store = useStore()
    let data = reactive({
      count: 0
    })
    onMounted(() => {
      store.dispatch('increment')
    })
    let add = () => {
      store.dispatch('increment')
      data.count = data.count = store.getters.double
    }
    return { data, add }
  },
  computed: {
    ...mapState(['deviceType', 'windowSize'])
  }
})
</script>
