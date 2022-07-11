<template>
    <div class="form register">
        <h1 class="title">Register Account</h1>
        <form action="">
            <div class="form-group">
                <span class="form-icon">
                    <user-icon />
                </span>
                <input type="text" placeholder="Full Name" autocomplete="fullname" name="name" v-model="name">
                <span class="form-error" v-if="errors?.name">*{{errors?.name[0]}}</span>
            </div>
            <div class="form-group">
                <span class="form-icon">
                    <email-icon />
                </span>
                <input type="text" placeholder="Your Email" autocomplete="email" name="email" v-model="email">
                <span class="form-error" v-if="errors?.email">*{{errors?.email[0]}}</span>
            </div>
            <div class="form-group">
                <span class="form-icon">
                    <password-icon />
                </span>
                <input :type="isShowPassword ? 'text' : 'password'" placeholder="Password" name="password" autocomplete="current-password" v-model="password">
                <button type="button" @click="isShowPassword = !isShowPassword" class="btn btn--show">{{isShowPassword ? 'HIDE' : 'SHOW'}}</button>
                <span class="form-error" v-if="errors?.password">*{{errors?.password[0]}}</span>
            </div>

            
            <button class="btn btn--primary" type="buton" @click.prevent="handleSubmitUser">Create Free Account</button>
            <p class="form-terms">By providing your email, you are agreeing to our <router-link to="#">terms of service.</router-link></p>
            <div class="form-orther"><span>Or register with</span></div>
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
            <p class="form-nav">Already have an account? <router-link to="/login">Login Now</router-link></p>
        </form>
    </div>
</template>

<script>
import {UserIcon, EmailIcon, PasswordIcon} from '@/components/Icons'
import { mapActions } from 'vuex'
import config from '@/config'

export default {
    data(){
        return {
            name: '',
            email: '',
            password: '',
            isShowPassword: false,
            errors: null
        }
    },
    components: {
        UserIcon,
        EmailIcon,
        PasswordIcon
    },
    methods: {
        ...mapActions({
            registerUser: 'auth/registerUser'
        }),
        handleSubmitUser: async function(){
            const payload = {'email': this.email,'password': this.password,'name': this.name}
            this.errors = null
            const errs = {}
            for(let key in payload){
                if(payload[key] === ''){
                    errs[key] = [`The ${key} field  is required.`]
                }
            }
            if(Object.keys(errs).length > 0){
                this.errors = {...errs}
                return
            }
            try {
                const res = await this.registerUser(payload);
                if(res.status){
                    this.$router.push({name: config.routes.login}).catch(() => {})
                }
            } catch (error) {
                if(error){
                    let { errors } = error.data
                    this.errors = {...errors}
                }
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>