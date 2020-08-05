<template>
    <div class="man">
        <div class="man-cont">
            <img src="../../public/images/0.jpg" alt="">
            <div class="man-name">
                <p>{{lists.author}} <i class="iconfont icon-mai"></i></p>
                <p>作品：7</p>
                <p>粉丝：91</p>
            </div>
            <div class="man-follow">关注</div>
        </div>
        <div class="man-list">
            <p><i class="iconfont icon-zan"></i><span>0</span></p>
            <p><i class="iconfont icon-xinaixin-fuben"></i><span>0</span></p>
            <p><i>赏</i></p>
        </div>
        
    </div>
</template>
<script>
// import bus from '../eventBus/bus';
export default {
    data(){
        return{
            lists:[],
            id:null
        }
    },
    methods:{
         getData(i){
            this.axios.get('http://localhost:3000/api/article/'+i,{

            }).then(res=>{
            this.lists=res.data.res
            // console.log(this.lists)
        }).catch(err=>{
            console.log(err)
        })
        }
    },
    watch:{
        $route(){
            this.getData(this.$route.params.id)
        }
    },
    created(){
        this.id=this.$route.params.id
        // console.log(this.id)
        this.getData(this.id)
    }
    
}
</script>
<style>
    .man{
        float: right;
        margin-top: 50px;
        padding: 20px 20px;
        box-sizing: border-box;
        width: 300px;
        background-color: #fff;
    }
    .man .man-cont{
        height: 100px;
        position: relative;
    }
    .man .man-cont img{
        width: 60px;
        height: 60px;
        float: left;
    }
    .man .man-cont .man-name{
        float: left;
        font-size: 12px;
        margin-left: 30px;
    }
    .man .man-cont .man-name p:first-of-type{
        font-size: 16px;
        margin-bottom: 10px;
    }
    .man .man-cont .man-follow{
        float: right;
        width: 40px;
        height: 25px;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
        background-color: #EB5146;
        position: absolute;
        top:25px;
        right: 10px;
    }
    .man .man-list{
        padding: 0px 10px;
        box-sizing: border-box;
    }
    .man .man-list p{
        float: left;
        height: 40px;
        width: 90px;
        line-height: 40px;
    }
    .man .man-list p:last-child{
        width: 60px;
    }
    .man .man-list p span{
        vertical-align:middle;
        margin-left: 15px;
        font-size: 12px;
    }
    .man .man-list p i{
        display: inline-block;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .man .man-list p i{
        font-style: normal;
        text-align: center;
        font-size: 16px;
        vertical-align:middle;
    }
</style>