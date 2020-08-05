<template>
  <div class="right1">
      <div class="head-r">
        <span></span>
        <span>{{type[0]}}频道 TOP10</span>
      </div>
      <div class="foot-r">
        <ul v-for="(list,index) in lists" :key="index" @click="skip(list.id)">
          <li>
            <p>{{list.title}}</p>
            <span>文： {{list.author}}</span>
            <span>主播： {{list.podcast}}</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[]
    }
  },
  props:['type','type_id'],
  created(){
    this.getData(this.$route.params.type_id)
  },
  watch:{
    type(Val){
      // console.log(type)
      // console.log(Val)
      var num=Val[1]+1
      this.getData(num)
      // console.log(111,num)
    }
  },
  methods:{
    getData(i){
        this.axios.get('http://localhost:3000/api/articles/'+i+'/top10',{
        
      }).then(res=>{
        console.log(res.data)
        this.lists=res.data.res.articles
      }).catch(err=>{
        console.log(err)
      })
    },
    skip(i){
      this.$router.push('/'+this.$route.params.type_id+'/detail/'+i)
    }
  }
  
}
</script>
<style>
  .right1{
    width: 300px;
    float: right;
    padding: 20px 20px;
    margin-top: 20px;
    background-color: #fff;
  }
  .right1 .head-r span:first-of-type{
    display: inline-block;
    width: 3px;
    border: 1px solid #EC5250;
    box-sizing: border-box;
    border-radius: 20%;
    height: 16px;
    margin-right: 8px;
    background-color: #EC5250;
  }
  .right1 .head-r span:last-of-type{
    font-size: 16px;
    font-weight: 600;
    color: #B3BCC1;
  }
  .right1 .foot-r{
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 12px;
    margin-top: 30px;
  }
  .right1 .foot-r li{
    padding: 10px 0px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .right1 .foot-r li p{
    margin-bottom: 3px;
  }
  .right1 .foot-r li span:last-of-type{
    margin-left: 30px;
  }
</style>
