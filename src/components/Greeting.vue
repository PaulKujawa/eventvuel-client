<template>
    <div class="hello">
        <h1>{{ computedMsg }}</h1>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Greeting extends Vue {
    @Prop() private name!: string;
    
    get computedMsg(): string {
        return `Hey ${this.name}`;
    }
}
</script>

<style scoped>
h1 {
    margin: 40px 0 0;
}
</style>
