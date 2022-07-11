<template>
  <div class="form login">
        <h1 class="title">Hi, Welcome Back!</h1>
        <form action="">
            <div class="form-group">
                <span class="form-icon">
                    <email-icon />
                </span>
                <input type="text" placeholder="Your Email" autocomplete="email" v-model="email">
                <span class="form-error" v-if="message">*{{message}}</span>
            </div>
            <div class="form-group">
                <span class="form-icon">
                    <password-icon />
                </span>
                <input :type="isShowPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="Password" v-model="password">
                <button type="button" @click="isShowPassword = !isShowPassword" class="btn btn--show">{{isShowPassword ? 'HIDE' : 'SHOW'}}</button>
                <!-- <span class="form-error" v-if="errors?.password">*{{errors?.password[0]}}</span> -->
            </div>
            <div class="form-forgot">
                <label for="remember_me"><input type="checkbox" id="remember_me">Remember me</label>
                <router-link to="#">Forgot password?</router-link>
            </div>
            <button class="btn btn--primary" @click.prevent="handleSubmitUser" type="submit">Login</button>
            <div class="form-orther"><span>Or login with</span></div>
            <div class="form-socials">
                <button type="button" class="btn btn--social">
                    <div class="icon"><img src="../../../assets/google.png" alt="Logo Google"></div>
                    Google Account
                </button>
                <button type="button" class="btn btn--social">
                    <div class="icon"><img src="../../../assets/fb.png" alt="Logo Facebook"></div>
                    Facebook Account
                </button>
            </div>
            <p class="form-nav">Don't have an account? <router-link to="/register">Create a Free Account</router-link></p>
        </form>
    </div>
</template>

<script>
import {EmailIcon, PasswordIcon} from '@/components/Icons'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import config from '@/config'

    export default {
        name : 'Login',
        components: {
            EmailIcon,
            PasswordIcon
        },
        data(){
            return {
                email: '',
                password: '',
                isShowPassword: false,
                message: ''
            }
        },
        computed: {
            ...mapGetters({
                isAuthenticated: 'auth/isAuthenticated'
            })
        },
        methods: {
            ...mapActions({
                loginUser: 'auth/loginUser',
                loadUser: 'auth/loadUser'
            }),
            handleSubmitUser: async function(){
                let payload = {'email': this.email,'password': this.password}
                this.message = ''
                for(let key in payload){
                    if(payload[key] === ''){
                        this.message = `The ${key} field  is required.`
                        return
                    }
                }
                try {
                    const res = await this.loginUser(payload);
                    if(res.status){
                        this.$router.push({name: config.routes.dashboard}).catch(() => {})
                    }
                } catch (error) {
                    if(error){
                        let {data: { message} } = error
                        this.message = message
                    }
                }
            }
        }
    }
</script>

<style lang="scss">

</style>