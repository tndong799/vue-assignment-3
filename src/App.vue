<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout';
import { mapActions } from 'vuex';


export default {
  name: 'App',
  components: { 
    VueExtendLayouts
  },
  methods: {
    ...mapActions({
      loadUser: 'auth/loadUser'
    })
  },
  created: async function(){
    try {
      await this.loadUser()
    } catch (error) {

    }
  }
}
</script>
