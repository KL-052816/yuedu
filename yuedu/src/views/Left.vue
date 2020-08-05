<template>
  <div class="left">
    <div>
      <ul v-for="(list,index) in lists" :key="index">
        <li class="box" @click="skip(list.id)">
          <img src="../../public/images/0.jpg" alt="" class="img">
          <div class="left-le">
            <p class="tit">{{list.title}}</p>
            <span>{{list.author}}</span>
            <span>{{list.podcast}}</span>
            <span>{{list.created_time}}</span>
            <span>{{list.play_time}}</span>
            <p class="cont">{{list.content}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lists:[],
      type:null
    }
  },
  props:['type_id'],
  created(){
    this.getData(1,1)
    // console.log()
  },
  watch:{
    type_id(Val){
      // console.log(Val)
      var num=Val[0]+1
      var num1=Val[1]
      this.getData(num,num1)
      // console.log(111,num,Val[1])
    }
  },
  methods:{
    getData(i,y){
      this.axios.get('http://localhost:3000/api/articles/'+i+'/page/'+y,{
        params:{
          
        }
      }).then(res=>{
        // console.log(i)
        // console.log(this.type_id)
        // console.log(res.data)
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
  .left{
    float: left;
    overflow: hidden;
    width: 600px;
  }
  .left .img{
    width: 200px;
    height: 150px;
  }
  .left .left-le{
    width: 350px;
    padding-top: 10px;
    float: right;
    overflow: hidden;
    box-sizing: border-box;
  }
  .left .box{
    display: block;
    padding: 20px 10px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 20px;
  }
  .left .left-le .tit{
    font-size: 20px;
    padding-bottom:10px;
    box-sizing: border-box;
  }
  .left .left-le span{
    font-size: 10px;
    margin-right: 10px;
  }
  .left .left-le .cont{
    font-size: 12px;
    margin-top: 25px;
    width: 350px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
</style>
