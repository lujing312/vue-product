<template>
<div class="login-wrap">
    <el-form
        style="width:400px;background-color:#fff;padding:30px"
        class="login-form"
        label-position="top"
        label-width="80px">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item  class="login-btn">
            <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {

};
</script>

<style>
    .login-wrap{
        background-color:#324152;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    };
    .login-btn{
        display: block;
        width: 100%;
    }
 
</style>
