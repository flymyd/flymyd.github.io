<template>
  <router-view />
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  setup() {

  },
  methods: {
    ...mapMutations(['setWidowSize', 'setDeviceType'])
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.setWidowSize()
        this.setDeviceType()
      })()
    }
  }
}
</script>
