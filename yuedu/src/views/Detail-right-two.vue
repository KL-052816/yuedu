<template>
    <div class="second">
        <div class="second-head">
            <i></i>
            <span>其他相关节目</span>
            <div class="second-right">
                <i class="prev2 iconfont icon-right1" @click="prev2"></i>
                <i class="next2 iconfont icon-iconfontyoujiantou-copy-copy-copy" @click="next2"></i>
            </div>
        </div>
        <div class="second-body" >
            <div class="box1">
                <div class="box2">
                <span v-for="(list,index) in lists" :key="index"  @click="sendData(list.id)">{{list.title}}</span>
            </div>
            </div>
            
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[],
            long:0
        }
    },
    methods:{
        getData(){
            this.axios.get('http://localhost:3000/api/articles/rand').then(res=>{
                // console.log(res.data.res)
                this.lists=res.data.res
                // console.log(this.lists)
            }).catch(err=>{
                console.log(err)
            })
        },
        sendData(i){
            this.$router.push('/'+this.$route.params.type_id+'/detail/'+i)
        },
        prev2(){
            if(this.long>=-1500 && this.long<0){
                document.getElementsByClassName("box2")[0].style.left=this.long+'px'
                this.long=this.long+300
            }else{
                alert("没有上一页了...")
            }
            
        },
        next2(){
            if(this.long>-1200 && this.long<=0){
                document.getElementsByClassName("box2")[0].style.left=this.long+'px'
                this.long=this.long-300
                
            }else{
                // console.log(this.long)
                alert("没有下一页了...")
                
            }
        }
    },
    watch:{
        $route(){
            this.getData()
            // this.a=this.$route.params.type_id-1
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style>
    .second{
        float: right;
        margin-top: 30px;
        padding: 20px 20px;
        box-sizing: border-box;
        width: 300px;
        background-color: #fff;
        font-size: 12px;
        height: 180px;
    }
    .second .second-head>i:first-of-type{
        display: inline-block;
        width: 3px;
        height: 16px;
        background-color: red;
    }
    .second .second-head span{
        font-size: 16px;
        margin-left: 10px;
    }
    .second .second-head .second-right{
        float: right;
        margin-top: 5px;
    }
    .second .second-head .second-right i{
        width: 12px;
        height:12px;
        font-size: 12px;
        display: inline-block;
        margin-right: 10px;
    }
    .box1{
        width: 260px;
        height: 120px;
        overflow: hidden;
        position: relative;
    }
    .box2{
        width: 1600px;
        height: 100px;
        position: absolute;
        overflow: hidden;
    }
    .second-body{
        margin-top: 10px;
    }
    .second .second-body span{
        width: 150px; 
        margin-top: 30px;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>