<template>
  <div class="total" :style='{width:Iwidth,backgroundColor:back,height:height}'>
    <ul>
      <li><slot name="head"></slot></li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li><slot name="foot" :red = 'b' :test='test' class="sol"></slot></li>
    </ul>
    <button @click="clickhh">我是hello组件按钮</button>
     <!-- {{b}} -->
  </div>
</template>

<script>
export default {
 name : 'hello',
 props : {
   Iwidth: [String],
    //  require : true,
   back : {
     type : String,
     default : 'blue',
   },
   height : {
     type : String,
     default: '300px',
   }
 },
 data () {
   return {
     ni : 50,
     test: {
       name : '陈子文',
       age : '22',
       sex : '男'
     }
   }
 },
computed: {
  a(){
    return this.ni*1314
  },
  b() {
    return this.a
  },
  c() {
    return this.$root
  }
},
methods : {
  clickhh() {
    console.log(this.c.name)
  }
}

}
</script>

<style scoped>
  /* .total {
    height: 50px;
    background-color: red;
    width: 500px;
  } */
  ul li {
    list-style: none;

  }
</style>
