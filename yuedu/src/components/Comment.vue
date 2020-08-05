<template>
    <div class="comment">
        <div class="comment-ipt">
            <input type="text" placeholder="说点什么吧！" v-model="content">
            <button @click="sendData">评论</button>
        </div>
        <div class="comment-show" >
            <p>最新评论</p>
            <div class="comment-text" v-if="code==200">
                <div v-for="(list,index) in lists" :key="index" class="comment-cont">
                    <p>{{list.nikiname}}</p>
                    <p>{{list.content}}</p>
                    <button class="btn" @click="deleteData(list.id)">删除评论</button>
                    <span>{{list.reply_time}}</span>
                </div>
            </div>
            <p class="zan" v-else>暂无评论</p>
        </div>
    </div>
</template>
<script>
// import bus from '../bus.js'
export default {
    data(){
        return{
            content:'',
            article_id:'',
            code:'',
            // token:'',
            lists:[]
        }
    },
    methods:{
        sendData(){
            if(this.content!=''){
                this.axios.post('http://localhost:3000/api/comment',{
                    article_id:this.$route.params.id,
                    content:this.content
                },{
                    headers:{
                        Authorization:`Bearer ${sessionStorage.getItem('token')}`
                    }
                }).then((res)=>{
                    console.log(res.data)
                    this.getData()
                }).catch((err)=>{
                    console.log(err)
                })
                this.content=""
            }else{
                alert("评论不能为空...")
            }   
        },
        getData(){
            this.axios.get('http://localhost:3000/api/comments/'+this.$route.params.id+'/page/1',{
                 
            }).then((res)=>{
                console.log(res)
                this.lists=res.data.res
                this.code=res.data.res_code
                console.log(this.code)
                // console.log(this.lists.length)
                // if(this.lists=="[]"){
                //     this.show="true"
                //     console.log(this.lists,111111)
                // }
            }).catch((err)=>{
                console.log(err)
            })
        },
        deleteData(i){
            this.axios.delete('http://localhost:3000/api/comment/'+i,{
                headers:{
                        Authorization:`Bearer ${sessionStorage.getItem('token')}`
                 }
            }).then((res)=>{
                console.log(res.data)
                this.getData()
            }).catch((err)=>{
                console.log(err)
            })
            
        }
    },
    created(){
        console.log(this.$route.params)
        // bus.$on('token',(data)=>{
        //     this.token=data
        // })
        this.getData()
    }
}
</script>
<style>
    .comment{
        width: 650px;
        padding: 30px 0;
        box-sizing: border-box;
        overflow: hidden;
    }
    .comment .comment-ipt{
        padding: 10px 0;
        box-sizing: border-box;
    }
    .comment .comment-ipt input{
        height:60px;
        width: 550px;
        border: 1px solid #fff;
        box-sizing: border-box;
        background-color: #fff;
    }
    .comment .comment-ipt input::-webkit-input-placeholder{
        text-indent: 1rem;
    }
    .comment .comment-ipt button{
        height: 60px;
        width: 100px;
        border:1px solid #ccc;
        box-sizing: border-box;
        background-color: #ED5145;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
    .comment .comment-show{
        margin-top: 20px;
    }
    .comment .comment-show p{
        width: 120px;
        height: 40px;
        color: #ED5145;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        background-color: #fff;
    }
    .comment .comment-show .zan{
        width: 650px;
        background-color: #fff;
        padding: 20px 20px;
        box-sizing: border-box;
        font-size:20px;
        height:70px;
        color: #aaaaaa;
        overflow:hidden;
    }
    .comment .comment-show .comment-text{
        width: 650px;
        background-color: #fff;
        padding: 20px 20px;
        box-sizing: border-box;
    }
    /* .comment .comment-show .comment-text p{
        text-align: center;
        color: #aaa;
        width: 100%;
        font-size: 20px;
    } */
    .comment .comment-show .comment-text .comment-cont{
        width: 100%;
        padding: 5px 20px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    }
    .comment .comment-show .comment-text .comment-cont p{
        float: left;
        color: #000;
        margin-right: 20px;
    }
    .comment .comment-show .comment-text .comment-cont p:first-of-type{
        font-size: 16px;
    }
    .comment .comment-show .comment-text .comment-cont p:last-of-type{
        color: #aaaaaa;
    }
    .comment .comment-show .comment-text .comment-cont span{
        float:right;
        font-size: 12px;
        margin-top: 20px;
    }
    .comment .comment-show .comment-text .comment-cont .btn{
        position: absolute;
        right: 20px;
        top: 5px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        padding: 1px 2px;
    }
</style>