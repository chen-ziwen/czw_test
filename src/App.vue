<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <hello Iwidth="600px" back='red' height='500px'>

       <!-- <template v-slot:foot='{red,test}'> -->
      <template v-slot:foot='redprops'>
        <h1>你好 我是你爹</h1>
        {{redprops.red}}
        {{redprops.test.name}}
        <button @click="send">点击获取</button>
      </template>

       <template v-slot:head>
        <h1>别看我写在下面 其实我在上面</h1>
      </template>

    </hello>
    <hello Iwidth="400px" back='blue' height='100px'></hello>
    <hello Iwidth="300px" back='yellow' height='50px'></hello>
  </div>
</template>

<script>
import  hello  from './components/hello.vue'

export default {
  name: 'App',
  components: {
    hello
  },
  data () {
    return {
      name : 'hahhahahahah45465456'
    }
  },
  methods: {
    send() {
      console.log(this.$root.name)
      console.log('我是当前组件',this.name)
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
