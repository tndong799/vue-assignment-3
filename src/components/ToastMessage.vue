<template>
    <div class="toast">message</div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scope>
    .toast{
        position: absolute;
        bottom: 20px;
        left: 20px;
        background-color: var(--black-color);
        padding: 16px;
        color: var(--white-color);
        transition: all .3s ease;
        display: flex;
        justify-content: center;
    }
</style>