<template>
    <div class="second">
        <div class="second-head">
            <i class="icon"></i>
            <span>其他相关节目</span>
            <div class="second-right">
                <i>></i>
                <i>></i>
            </div>
        </div>
        <div class="second-body">
            <span>一只特立独行的朱</span>
            <span>我喜欢</span>
        </div>
        <div class="second-foot">
            <span>母爱是一场</span>
            <span>旅行的意义</span>
        </div>
    </div>
</template>
<style>
    .second{
        float: right;
        margin-top: 30px;
        padding: 20px 20px;
        box-sizing: border-box;
        width: 300px;
        background-color: #fff;
        font-size: 12px;
    }
    .second .second-head>i:first-of-type{
        display: inline-block;
        width: 3px;
        height: 16px;
        background-color: red;
    }
    .second .second-head span{
        font-size: 14px;
        margin-left: 10px;
    }
    .second .second-head .second-right{
        float: right;
        margin-top: 5px;
    }
    .second-body{
        margin-top: 30px;
    }
    .second .second-body span{
        width: 130px; 
        display: inline-block;
    }
    .second-foot{
        margin-top: 30px;
        margin-bottom: 5px;
    }
    .second-foot span{
        width: 130px;
        display: inline-block;
    }
</style>