<template>
    <div class="man">
        <div class="man-cont">
            <img src="../../public/images/0.jpg" alt="">
            <div class="man-name">
                <p>沈韶君 <i></i></p>
                <p>作品：7</p>
                <p>粉丝：91</p>
            </div>
            <div class="man-follow">关注</div>
        </div>
        <div class="man-list">
            <p><i></i><span>0</span></p>
            <p><i></i><span>0</span></p>
            <p><i>赏</i></p>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[]
        }
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
        margin-top:20px;
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
        vertical-align:middle;
    }
</style>