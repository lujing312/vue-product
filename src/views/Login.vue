<template>
<div class="login-wrap">
    <el-form
        style="width:400px;background-color:#fff;padding:30px"
        class="login-form"
        label-position="top"
        label-width="80px"
        :model="formData">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
            <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input @keyup.enter.native="handleLogin" v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item  class="login-btn">
            <el-button @click="handleLogin" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    data(){
        return{
            formData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        handleLogin(){
        this.$http
            .post('login',this.formData)
            .then((response)=>{
               const {meta:{msg,status}} = response.data;
               if(status==200){
                   this.$message.success(msg);
                   sessionStorage.setItem('token',response.data.data.token);
                   this.$router.push('/');
               }else{
                   this.$message.error(msg);
               }
            })
            .catch((err)=>{
                console.log(err);
                
            });
        }
    }
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
