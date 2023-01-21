<script>
import { defineComponent } from 'vue';
import FacebookLogin from '@/facebook-login.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    FacebookLogin
  }
});
</script>

<template>
  <div id="app">
    <facebook-login />
  </div>
</template>
