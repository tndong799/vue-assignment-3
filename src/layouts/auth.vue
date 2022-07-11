<template>
    <div class="vue-layout-auth">
        <div class="logo"><img src="../assets/logo.png" alt="Logo Image"></div>
        <div class="view">
        <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    .vue-layout-auth{
        padding: 30px;
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: var(--font-secondary);
        background-color: var(--bg-light-02);
        background-image: url('../assets/bg.png');
        background-position: right;
        background-repeat: no-repeat;
        background-size: 482px 100%;
        
        &::after{
        content: '';
        position: absolute;
        width: 540px;
        height: 312px;
        top: 50%;
        right: 70px;
        transform: translateY(-70%);
        background-image: url('../assets/art_work.png');
        background-repeat: no-repeat;
        z-index: 1;
        }

        *{
            font-family: inherit;
        }

        & .logo{
        height: 40px;
        width: 166px;
        & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        }

        & .view{
            // margin-top: 116px;
            position: absolute;
            top: 50%;
            left: 260px;
            transform: translateY(-50%);
            z-index: 2;
        }
    }
</style>
