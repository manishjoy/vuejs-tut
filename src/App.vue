<template>
  <div id="app">
    <div id="test">
      {{ message }}
      <p v-html="test"></p>
      <p>Total names: {{arrayLength}}</p>
      <p v-for="(name, index) in names" :key="name">
        <span v-if="index%2 == 0">{{index | userReadableIndex}}. {{name}} - Even</span>
        <span v-else>{{index | userReadableIndex}}. {{name}} - Odd</span>
      </p>
      <div>
        <button @click="changeArray">Change Names</button>
      </div>
      <div>
        <div><input v-model="config"></div>
        <div><span v-if="isTyping">User is Typing</span></div>
      </div>
      <h2 v-change-color-demo>Custom Directive</h2>
      <h2 v-change-color="{color: 'red'}">Custom Directive</h2>
    </div>
  </div>
</template>

<script>
import generalMixins from './mixins/general'
export default {
  name: 'App',
  mixins: [generalMixins],
  data() {
    return {
      message: 'Test Message',
      test: '<b>Test HTML</b>',
      // config: 'Testttt',
      names: ['A','B','C','D']
    }
  },
  computed: {
    arrayLength() {
      return this.names.length;
    }
  },
  watch: {
    names(oldArray, newArray) {
      console.log(oldArray, newArray);
    }
  },
  methods: {
    changeArray() {
      this.names = ['X','Y','Z']
    }
  },
  filters: {
    userReadableIndex(arrIndex) {
      return arrIndex + 1;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
