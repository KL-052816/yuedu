<template>
    <div class="body">
        <div class="head">
            <div class="wrap">
                <div class="title">
                    <div class="logo">
                        <img src="../../public/images/0.jpg" alt="">悦读FM
                    </div>
                    <div class="tab">
                        <ul v-for="(list ,index) in lists" :key="index" class="tab">
                            <li  @click="getData(index,list.type)"><router-link :to="'/'+list.id" :class="{red:index==num}" class="tab-head">{{list.type}}</router-link></li>
                        </ul>
                    </div>
                    <div class="right">
                        <form action="">
                            <input type="text" class="ipt">
                            <i class="iconfont icon-fangdajing"></i>
                        </form>
                        <span>|</span>
                        <span  class="logn1 al" id="name" @click="show">登录</span>
                        <span  class="reg al" id="dete" @click="show1">注册</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <router-view name="Left" :type_id="[this.num,this.currentPage]"></router-view>
            <router-view name="Right" :type="[this.type,this.num]"></router-view>
            <router-view name="Detail"></router-view>
            <router-view name="DetailRight"></router-view>
            <router-view name="DetailRightTwo" :type_id="this.num"></router-view>
            <router-view name="DetailRightThree"></router-view>
        </div>
        <div class="wrap" id="pag">
            <div class="block1">
                <span class="demonstration"></span>
                <el-pagination
                    layout="prev, pager, next"
                    :total="70"
                   @size-change="sizePageChange"
                    @current-change="currentChange"
                    @prev-click="pre"
                    @next-click="next">
                </el-pagination>
            </div>
        </div>
        
        <div class="footer wrap">
            <div class="f-first">
                <span>关于我们</span><span>|</span><span>加入我们</span>
                <p>©2010-2016 Yuedu.fm All rights reserved粤ICP备14076392号</p>
            </div>
            <div class="f-second">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <Logn v-if='hide' @senda='geta' :getb='b'></Logn>
        <Reg v-if='hide1' @senda='geta' :getb='c'></Reg>
    </div>
    
</template>

<script>
import Reg from '../components/Reg'
import Logn from '../components/Logn'
export default {
    data(){
        return{
            lists:[],
            num:0,
            type:null,
            currentPage:1,
            hide:false,
            hide1:false,
            b:0,
            c:0
            // type:null
        }
    },
    components:{
        Logn,
        Reg
    },
    watch:{
        $route(){
            if(this.$route.params.id>=0){
                document.getElementById("pag").style.display="none"
            }else{
                document.getElementById("pag").style.display="block"
            }
            this.num=this.$route.params.type_id-1
        }
    },
    methods:{
        getData(val,ty){
            this.num=val,
            this.type=ty
            // this.type=type
        },
        sizePageChange(){
            // console.log(curSize)
        },
        currentChange(cpage){
            this.currentPage=cpage;
        },
        pre(){
            // console.log(cpage)
        },
        next(){
            // console.log(cpage)
        },
        show(){
            this.hide=true
            console.log(this.hide)
        },
        show1(){
            this.hide1=true
        },
        geta(data){
            setTimeout(()=>{
                this.hide=data,
                this.hide1=data
            },990) 
        },
        setName(){
            if(sessionStorage.getItem('name')!=''){
                document.getElementById('name').innerHTML=sessionStorage.getItem()
            }
        }
        // ,
        // setData(data){
        //     this.nikiname=data
        // }
    },
    created(){
        // console.log(this.$route.params.type_id)
        this.num=this.$route.params.type_id-1
        this.getData(0,"悦读")
        this.axios.get('http://localhost:3000/api/types',{
            params:{

            }
        }).then(
            res=>{
                this.lists=res.data.res
            }
        ).catch(err=>{
            console.log(err)
        })
    },
}
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        color: #AAAAAA;
    }
    a{
        text-decoration: none;
    }
    .body{
        width: 100%;
        background-color:#F6F6F6;
        padding-bottom: 200px;
    }
    .body .head{
        width: 100%;
        background-color: #fff;
    }
    .wrap{
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
    }
    .tab-head{
        margin-left: 10px !important;
    }
    .title{
        text-align: center;
        padding: 50px 0px 120px 0px;
    }
    .title div{
        float: left;
    }
    .title .logo{
        margin-right: 100px;
    }
    .title .logo img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .title ul{
        float: left;
        margin-left:30px;
    }
    .title .right{
        float: right;
    }
    .title .right .ipt:focus{
        outline: none;
    }
    .title form{
        display: inline-block;
        margin-left:50px;
        margin-right: 20px;
    }
    .title .al{
        margin-left:20px;
        color: black;
    }
    .red{
        color: red !important;
    }
    .footer{
        margin-top: 70px;
    }
    .footer .f-first {
        font-size: 13px;
    }
    .footer .f-first span{
        margin-right: 5px;
        font-size: 15px;
    }
    .footer .f-first p{
        margin-top: 10px;
    }
    .footer .f-second{
        float: right;
        margin-top:-30px;
    }
    .footer .f-second span{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius:50%;
        margin-right:10px;
        background-color: #ccc;
    }
    .block1{
        margin-top: 70px;
    }
    .block1 .el-pagination{
        padding-left: 200px;
        box-sizing: border-box;
    }
    .el-pager li.active {
        color:brown !important; 
    }
    .icon-fangdajing{
        width: 18px;
        height:16px;
        display: inline-block;
        position: relative;
        left: -20px;
        top: 2px;
    }
</style>