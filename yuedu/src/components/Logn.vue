<template>
    <div class="logn">
        <div class="logn-cont" :class="[{leave:b==1},{send:getb==c}]">
            <i class="iconfont icon-X" @click="hide"></i>
            <div class="logn-text">
                <p class="logn-text-p">登录</p>
                <div class="logn-tab">
                    <input type="text" placeholder="邮箱" v-model="email">
                    <input type="password" placeholder="密码" v-model="password">
                </div>
                <div class="logn-click">
                    <input type="checkbox">
                    <span>下次自动登录</span>
                    <p>忘记密码</p>
                </div>
                <div class="logn-last">
                    <p @click="logn">登 录</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import bus from '../bus.js'
export default {
    data(){
        return{
            a:true,
            b:0,
            c:0,
            email:'',
            password:'',
            name:''
            // token:null
        }
    },
    props:['getb'],
    methods:{
        hide(){
            this.a=false
            this.b=1
            this.c=1
            this.$emit('senda',this.a)
        },
        // setname(){
        //     this.$emit("setna",this.nikiname)
        // },
        logn(){
            this.axios.post('http://localhost:3000/api/user/login',{
                    email:this.email,
                    password:this.password
            }).then((res)=>{
                console.log(res.data)
                // this.token=res.data.res.token
                sessionStorage.setItem('token',res.data.res.token)
                sessionStorage.setItem('name',res.data.res.user.nikiname)
                console.log(sessionStorage.getItem('token'))
                console.log(sessionStorage.getItem('name'))
                // bus.$emit('token',this.token)
                if(res.data.res_msg=="请求成功"){
                    alert("登录成功....")
                    // this.name=res.data.user.nikiname
                    
                this.hide()
                }else{
                    alert('登录失败，请重新输入...')
                }
            }).catch((err)=>{
                alert('登录失败，请重新输入...')
                console.log(err)
            })
            
        }
        // ,
        // sendtoken(){
            
        // }
        
    }
    
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
    .logn .logn-text .logn-tab input:first-of-type{
        border-bottom: 1px solid #ccc;
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