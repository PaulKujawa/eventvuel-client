<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <Greeting
      name="Paul">     
    </Greeting>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Greeting from '@/components/Greeting.vue';

@Component({
  components: {
    Greeting,
  },
})
export default class Home extends Vue {
}
</script>
