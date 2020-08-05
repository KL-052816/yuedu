<template>
    <div class="detail">
        <div class="head2">
            <p>{{lists.title}}</p>
            <div class="conts">
                <i class="iconfont icon-pan_icon"></i><span>{{lists.author}}</span>
                <i class="iconfont icon-mai"></i><span>{{lists.podcast}}</span>
                <i class="iconfont icon-biao"></i><span>{{lists.duration}}</span>
                <p>播放<span>{{lists.play_time}}</span>次</p>
            </div>
            <div class="vide">
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg">
                    <source src="horse.mp3" type="audio/mpeg">
                    
                </audio>
            </div>
        </div>
        <div class="body2">
            <p class="content block">{{lists.content}}</p>
            <div class="btn" @click="addStyle"><p>展开全文 <span class="iconfont icon-botton"></span></p></div>
            <div class="btn none" @click="remStyle"><p>收起 <span class="iconfont icon-arrow-up"></span></p></div>
        </div>
        <div class="body3">
            <div class="body3-left">标签 :
                <span v-for="(label,index) in labels" :key="index">{{label}}</span>
            </div>
            <div class="body-right">
                <i class="iconfont icon-weibo1"></i>
                <i class="iconfont icon-douban"></i>
                <i class="iconfont icon-QQkongjian"></i>
                <i class="iconfont icon-weixin1"></i>
            </div>
        </div>
        <div class="page">
            <div class="prev" @click="getData1()"><span class="iconfont icon-right1"></span>上一篇</div>
            <div class="next" @click="getData2()">下一篇 <span class="iconfont icon-iconfontyoujiantou-copy-copy-copy"></span></div>
        </div>
        <Comment></Comment>
    </div>
</template>
<script>
import Comment from '../components/Comment'
export default {
    data(){
        return{
            lists:[],
            id:null,
            labels:[],
            no:0
        }
    },
    components:{
        Comment
    },
    methods:{
        getData(i){
            this.axios.get('http://localhost:3000/api/article/'+i,{

            }).then(res=>{
            this.lists=res.data.res
            this.labels=this.lists.labels.split(",")
            if(this.no==0){
                document.getElementById("pag").style.display="none"
            }
        }).catch(err=>{
            console.log(err)
        })

    },
    addStyle(){
        document.getElementsByClassName("content")[0].classList.remove("block")
        document.getElementsByClassName("btn")[0].classList.add("none")
        document.getElementsByClassName("btn")[1].classList.remove("none")
    },
    remStyle(){
        document.getElementsByClassName("content")[0].classList.add("block")
        document.getElementsByClassName("btn")[1].classList.add("none")
        document.getElementsByClassName("btn")[0].classList.remove("none")
    },
    getData1(){
        this.id=this.id-1
        if(this.id>0){
        this.getData(this.id)
        this.$router.push('/'+this.$route.params.type_id+'/detail/'+this.id)
        }else{
            alert("没有上一篇了")
            this.id=0
        }
    },
    getData2(){
        this.id=this.id+1
        if(this.id<1025){
            this.$router.push('/'+this.$route.params.type_id+'/detail/'+this.id)
        }else{
            alert("没有下一篇了")
            this.id=1025
        }
        
    }
    },
    watch:{
        $route(){
            this.getData(this.$route.params.id)
            if(this.$route.params.id>=0){
                document.getElementById("pag").style.display="none"
            }
        }        
    },
    created(){
        this.id=this.$route.params.id
        this.getData(this.id)
        // console.log(this.$route.params)
        // if()
        
    }
}
</script>
<style>
.detail{
    margin-top: 50px;
    float: left;
}
.head2{
    width: 640px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
}
.head2 p{
    font-size: 25px;
}
.head2 .conts{
    font-size: 13px;
}
.head2 .conts i{
    width: 12px;
    height: 12px;
    font-size: 12px;
    margin-right: 2px;
    display: inline-block;
}
.head2 .conts span{
    margin-right: 20px;
}
.head2 .conts p{
    float: right;
    font-size: 13px;
}
.head2 .conts p span{
    font-size: 16px;
    margin: 0px 5px;
}
.head2 .vide{
    margin-top: 50px;
}
.head2 .vide audio{
    width: 100%
}
.body2{
    width: 640px;
    padding: 20px 20px 30px;
    margin-top: 30px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
}
.body2 .content{
    width: 600px;
    line-height: 25px;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-indent: 2rem;
}
.body2 .btn{
    position: absolute;
    bottom: 10px;
    right: 30px;
    font-size: 13px;
}
.page{
    width: 640px;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    position: relative;
}
.page .prev{
    position: absolute;
    left: 30px;
}
.page .next{
    position:absolute;
    right: 30px;
}
.block{
    text-overflow: ellipsis;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:15;
    margin-top:0px; 
}
.none{
    display: none;
}
.body3{
    width: 640px;
    margin-top: 30px;
    background-color: #fff;
    padding: 5px 20px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 500;
    overflow: hidden;
}
.body3 .body3-left{
    float: left;
}
.body3 .body3-left span{
    margin-left: 10px;
}
.body3 .body-right{
    float: right;
}
.body3 .body-right i{
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 16px;
    margin-left: 5px;
}
.body3 .body-right i:nth-of-type(3){
    background-color: #fff;
}

</style>
