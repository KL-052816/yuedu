<template>
    <div class="thrid">
        <div class="thrid-head">
            <i></i>
            <span>{{arr[a]}}FM频道其他节目</span>
            <div class="thrid-right">
                <span>查看全部</span>
                <i class="iconfont icon-iconfontyoujiantou-copy-copy-copy"></i>
            </div>
        </div>
        <div class="thrid-body" v-for="(list,index) in lists" :key="index" @click="sendData(list.id)">
            <p>{{list.title}}</p>
            <p>文：{{list.podcast}}主播：{{list.author}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[],
            arr:["悦读","情感","连播","校园","音乐","Labs"],
            a:0,
            i:0
        }
    },
    methods:{
        getData(i){
            // console.log(this.$route.params.type_id)
            this.axios.get('http://localhost:3000/api/articles/'+i+'/rand',{
                
            }).then(res=>{
                // console.log(res.data.res)
                this.lists=res.data.res
            }).catch(err=>{
                console.log(err)
            })
        },
        sendData(i){
            this.$router.push('/'+this.$route.params.type_id+'/detail/'+i)
        }
    },
    watch:{
        $route(){
            this.getData(this.$route.params.type_id),
            this.a=this.$route.params.type_id-1
        }
    },
    created(){
        this.getData(this.$route.params.type_id)
        this.a=this.$route.params.type_id-1
    }
}
</script>
<style>
    .thrid{
        float: right;
        margin-top: 30px;
        padding: 20px 20px;
        box-sizing: border-box;
        width: 300px;
        background-color: #fff;
        font-size: 12px;
    }
    .thrid .thrid-head>i:first-of-type{
        display: inline-block;
        width: 3px;
        height: 16px;
        background-color: red;
    }
    .thrid .thrid-head span{
        font-size: 16px;
        margin-left: 10px;
    }
    .thrid .thrid-head .thrid-right{
        float: right;
        line-height: 21px;
    }
    .thrid .thrid-head .thrid-right i{
        font-size: 12px;
        margin-left: 2px;
    }
     .thrid .thrid-head .thrid-right span{
         font-size: 12px;
     }
    .thrid .thrid-body{
        margin-top: 25px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
    .thrid .thrid-body p{
        margin-bottom: 5px;
    }
</style>