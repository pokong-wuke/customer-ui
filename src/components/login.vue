<template>
    <div id="login-box">
        <h1>Login</h1>
        <div class="form">
            <div class="item">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input v-model="username" type="text" placeholder="Username">
            </div>
            <div class="item">
                <i class="fa fa-key" aria-hidden="true"></i>
                <input v-model="password" type="password" placeholder="Password">
            </div>
        </div>
        <button @click="login">Login</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username:'',
                password:''
            }
        },
        created () {
        },
        computed: {
        },
        methods: {
            login(){
                let param = new URLSearchParams();
                param.append('username', this.username)
                param.append('password', this.password)
                // eslint-disable-next-line no-undef
                axios.post('/api/login',param).then(res =>{
                    if(res.success){

                    }else{
                        this.$message.error(res.errorMsg)
                    }
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
<style>

</style>