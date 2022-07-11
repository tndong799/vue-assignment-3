<template>
  <div class="vue-layout-default">
    <div class="sidebar">
      <div class="sidebar-logo">
        <img src="../assets/logo.png" alt="Logo Image">
      </div>
      <ul class="sidebar-menu">
        <li>
          <router-link :to="{ name: config.routes.dashboard }">
            <div class="sidebar-menu-icon"><dashboard-icon /></div>Dashboard
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: config.routes.products }">
            <div class="sidebar-menu-icon"><product-icon /></div>Products
          </router-link>
        </li>
        <li>
          <router-link :to="{name: config.routes.stores}">
            <div class="sidebar-menu-icon"><store-icon /></div>Stores
          </router-link>
        </li>
        <li>
          <router-link :to="{name: config.routes.settings}">
            <div class="sidebar-menu-icon"><setting-icon /></div>Settings
          </router-link>
        </li>
      </ul>
      <div class="sidebar-contact">
        <button class="sidebar-contact-btn">
          <phone-icon />
        </button>
        <button class="sidebar-contact-btn">
          <chat-icon />
        </button>
        <button class="sidebar-contact-btn">
          <more-icon />
        </button>
      </div>
    </div>
    <div class="main">
      <div class="main-nav">
        <button class="main-nav-bars">
          <img src="../assets/bars.png" alt="bars image">
        </button>

        <div class="main-nav-shop">
          <div class="main-nav-shop-img">
            <img src="../assets/Avatar.png" alt="Shop Image">
          </div>
          <select name="" id="">
            <option value="">Lotusprayer</option>
            <option value="">Lotus</option>
          </select>
        </div>

        <user-avatar />
      </div>
      <div class="main-header">
        <h1 class="main-header-title">Store</h1>
        <button class="btn btn--primary main-header-btn"><div class="main-header-icon"><plus-icon /></div> Add new store</button>
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import {ChatIcon, PhoneIcon, MoreIcon, DashboardIcon, ProductIcon, StoreIcon, SettingIcon, PlusIcon } from "@/components/Icons";
import UserAvatar from "@/modules/auth/components/UserAvatar.vue"
import config from "@/config";

export default {
  data(){
    return {
      config: {...config}
    }
  },
  components: {
    ChatIcon,
    PhoneIcon,
    MoreIcon,
    DashboardIcon,
    ProductIcon,
    StoreIcon,
    SettingIcon,
    PlusIcon,
    UserAvatar
  }
}
</script>

<style lang="scss">
  .vue-layout-default{
    display: flex;
    height: 100vh;
    & .sidebar{
      width: 230px;
      display: flex;
      flex-direction: column;
      background-color: var(--light-gray-05);

      &-logo{
        padding: 13px 0 0 15px;

        & img{
          height: 30px;
        }
      }

      &-menu{
        margin: 0;
        padding: 0;
        margin-top: 30px;
        list-style: none;


        & li {

          & a{
            position: relative;
            padding: 10px 0 10px 12px;
            text-decoration: none;
            display: flex;
            align-items: center;
            column-gap: 12px;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2rem;
            color: var(--dark-gray-02);
            transition: all .2s ease;

            &::before{
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
              width: 4px;
              border-radius: 0 6px 6px 0;
              background: transparent;
              transition: all .2s ease;
            }

            &:hover{
              text-shadow:0px 0px 1px var(--primary-color);
              color: var(--primary-color);
              background: var(--light-blue-02);

              & .sidebar-menu-icon{
                color: var(--primary-color);
              }
            }

            &.router-link-exact-active{
              text-shadow:0px 0px 1px var(--primary-color);
              color: var(--primary-color);
              background: var(--light-blue-02);

              &::before{
                background: var(--primary-color);
              }

              & .sidebar-menu-icon{
                color: var(--primary-color);
              }
            }
          }
        }

        &-icon {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--dark-gray-03);
          transition: color .2s ease;
        }
      }

      &-contact{
        margin-top: auto;
        padding: 10px 15px;
        position: relative;
        display: flex;
        justify-content: space-between;

        &::before{
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: calc(100% - 30px);
          height: 1px;
          transform: translateX(-50%);
          background-color: var(--light-gray-03);
        }

        &-btn{
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: 0;
          outline: none;
          color: var(--dark-gray-03);
          cursor: pointer;
          transition: color .2s ease;

          &:hover{
            color: var(--primary-color);
          }
        }
      }
    }

    & .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      border-left: 1px solid var(--light-gray-02);
      background-color: var(--light-gray-05);

      &-nav{
        display: flex;
        align-items: center;
        justify-content: right;
        background: var(--white-color);

        &-bars{
          margin-left: 20px;
          margin-right: auto;
          width: 21px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &-shop{
          display: flex;
          column-gap: 8px;
          border-left: 1px solid var(--light-gray-03);
          padding: 8px 18px 10px 15px;

          &-img{
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          & select{
            border: 0;
            outline: none;
            font-weight: 400;
            line-height: 1.7rem;
            font-size: 1.4rem;
            color: var(--dark-gray-01);
          }
        }

        
      }

      &-header{
        padding: 0 56px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid var(--light-gray-03);

        &-title{
          margin: 0;
          font-weight: 600;
          font-size: 1.8rem;
          line-height: 2.2rem;
          color: var(--dark-gray-01);
        }

        &-btn{
          padding: 12px 0;
          width: 146px;
          display: flex;
          align-items: center;
          column-gap: 8px;
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 1.6rem;
          border-radius: 4px;
        }


      }

      &-content{
        margin-top: 25px;
        padding: 0 56px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    }
  }
</style>
