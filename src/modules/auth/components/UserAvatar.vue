<template>
    <div class="user-avatar">
        <button class="user-avatar-btn">
            <img v-if="user?.avatar" :src="user.avatar" alt="User Image">
            <span v-else>{{user?.name[0].toUpperCase()}}</span>
        </button>
        <ul class="user-avatar-dropdown">
            <li @click="handleLogout">Logout</li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import config from '@/config'
export default {
    name: 'user-avatar',
    data(){
        return {

        }
    },
    computed: {
        user: function(){
            return this.$store.state.auth.user
        }
    },
    methods: {
        ...mapActions({
            logoutUser: 'auth/logoutUser'
        }),
        handleLogout: function(){
            this.logoutUser()
            this.$router.push({name: config.routes.login})
        }
    }
}
</script>

<style lang="scss">
.user-avatar{
    position: relative;
    padding: 9px 17px 9px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid var(--light-gray-03);

    &-btn{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--primary-color);
        font-size: 1.6rem;
        line-height: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white-color);
    }
    &:hover &-dropdown{
        opacity: 1;
        visibility: visible;
    }

    &-dropdown{
        width: 100px;
        position: absolute;
        top: calc(100%);
        right: 0;
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: var(--white-color);
        border: 1px solid var(--blue-gray-05);
        border-radius: 4px;
        opacity: 0;
        visibility: hidden;
        transition: all .2s ease;

        li{
            width: 100%;
            padding: 8px 10px;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.8rem;
            color: var(--dark-gray-01);
            cursor: pointer;
        }
    }
}
</style>