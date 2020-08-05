<template>
    <div class="logn">
        <div class="logn-cont reg" :class="[{leave:d==2},{send:getb==e}]">
            <i class="iconfont icon-X" @click="hide"></i>
            <div class="logn-text">
                <p class="logn-text-p">注册</p>
                <div class="logn-tab">
                    <input type="text" name="nikiname" placeholder="昵称" v-model="nikiname">
                    <input type="text" name="email" placeholder="邮箱" v-model="email">
                    <input type="text" name="username" placeholder="用户名" v-model="username">
                    <input type="password" name="password" placeholder="确认密码" v-model="password">
                </div>
                <div class="logn-click">
                    <input type="checkbox" id="check">
                    <span>我已认真阅读并同意悦读FM的</span>
                    <p>《使用协议》</p>
                </div>
                <div class="logn-last">
                    <p @click="submit">注 册</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:true,
            d:0,
            e:0,
            nikiname:'',
            email:'',
            username:'',
            password:''
        }
    },
    props:['getb'],
    methods:{
        hide(){
            this.a=false
            this.d=2
            console.log(111,this.getb)
            this.e=2
            this.$emit('senda',this.a)
        },
        submit(){
            if(document.getElementById('check').checked==true){
                this.axios.post('http://localhost:3000/api/user',{
                    nikiname:this.nikiname,
                    email:this.email,
                    username:this.username,
                    password:this.password
                }).then((res)=>{
                    if(res.data.res=="注册成功"){
                        alert("注册成功，你可以登录了...")
                        this.hide()
                    }else{
                        alert("注册信息有误，请重新输入信息...")
                    }
                    
                }).catch((err)=>{
                    console.log(err)
                })
            }else{
                alert("请勾选悦读条例...")
            }
            
        }   
    },
    
}
</script>
<style>
    .logn{
        background-color: rgba(113,115,125,.4);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .logn .logn-cont{
        width: 350px;
        height: 350px;
        position: relative;
        padding: 40px 40px;
        margin: 200px auto;
        box-sizing: border-box;
        background-color: #fff;
    }
    .logn .reg{
        height:410px !important;
    }
    .logn .logn-cont i{
        display: block;
        position: absolute;
        right: -13px;
        top: -13px;
        width: 25px;
        height: 25px;
        background-color: rgba(32,45,62,.6);
        border-radius: 25px;
        font-size: 25px;
        color: black;
    }
    .logn .logn-text .logn-text-p{
        font-size: 20px;
        color: black;
        font:600;
        margin-bottom: 20px;
    }
    .logn .logn-text .logn-tab{
        padding: 5px 20px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .logn .logn-text .logn-tab input{
        border: 1px solid transparent;
        width: 220px;
        height: 40px;
    }
    .logn .logn-text .logn-tab input:focus{
        outline: none;
        border: 1px solid transparent;
    }
    .logn .logn-text .logn-tab input{
        border-bottom: 1px solid #ccc !important;
    }
    .logn .logn-text .logn-tab input:last-of-type{
        border-bottom: 1px solid transparent !important;
    }
    .logn .logn-text .logn-click{
        margin-top: 20px;
    }
    .logn .logn-text .logn-click span{
        font-size: 12px;
        margin-left: 5px;
        line-height: 21px;
        color: slategray;
    }
    .logn .logn-text .logn-click p{
        float: right;
        font-size:12px;
        line-height: 21px;
        color: #EB4338;
    }
    .logn .logn-text .logn-last{
        height: 50px;
        margin-top: 20px;
        background-color: #EB4338;
    }
    .logn .logn-text .logn-last p{
        text-align: center;
        color: #fff;
        line-height: 50px;
    }
    @keyframes identifier {
        0%{
            position: absolute;
            left: -350px;
        }
        100%{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .send{
        animation: identifier 1s linear;
    }
    @keyframes leave {
        0%{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        100%{
            position: absolute;
            left: 1200px;
        }
    }
    .leave{
        animation: leave 1s linear;
    }
</style>