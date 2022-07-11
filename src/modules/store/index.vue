<template>
    <div class="store">
        <table>
            <thead class="store-header">
                <tr>
                    <th>Store name</th>
                    <th>Status</th>
                    <th>Products</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <template v-for="store in listStore">
                    <tr :key="store" :class="store == 2 ? 'error' : ''">
                        <td>
                            <div class="store-name">
                                <div class="store-name-img">
                                    <img src="../../assets/Avatar.png" alt="image store">
                                </div>
                                <div class="store-name-title">
                                    <h3>Baohashop</h3>
                                    <span>phuongnnguyen@gmail.com</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="store-status" :class="store == 2 ? 'store-status-error' : 'store-status-success'">
                                <span>{{store == 2 ? 'Disconnected' : 'Live'}}</span>
                            </div>
                        </td>
                        <td>
                            <span class="store-product">560</span>
                        </td>
                        <td>
                            <div class="store-actions">
                                <button class="btn store-actions-more">
                                    <more-product-icon />
                                </button>
                                <button class="btn store-actions-detail">
                                    Detail
                                </button>
                            </div>
                        </td>
                    </tr>
                </template>
                
            </tbody>
        </table>
    </div>
</template>

<script>
import {MoreProductIcon} from "@/components/Icons"
export default {
    data(){
        return {
            listStore: [1,2,3,4,5,6,7,8,9]
        }
    },
    components: {
        MoreProductIcon,
    }
}
</script>

<style lang="scss">
    .store{
        overflow: hidden auto;
        border: 1px solid var(--blue-gray-05);
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.03);
        border-radius: 3px;
        background-color: var(--white-color);

        &::-webkit-scrollbar{
            display: none;
        }

        & table{
            width: 100%;
            text-align: left;
            border-collapse: collapse;

            & thead{
                box-shadow: inset 0 -1px 0 var(--blue-gray-05);
                position: sticky;
                top: 0;
                background-color: var(--white-color);
                z-index: 10;
            }

            & th, & td{
                padding: 20px 24px;
                font-size: 1.4rem;
                line-height: 1.6rem;
                font-weight: 500;
                color: var(--black-color);
            }
            & td{
                font-weight: 400;
            }

            & tbody{
                tr{
                    position: relative;

                    &:hover{
                        background-color: var(--light-gray-05);
                    }

                    &:not(:last-child){
                        border-bottom: 1px solid var(--blue-gray-05);
                    }

                    &::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 4px;
                        height: 100%;
                    }

                    &.error{
                        &::after{
                            background-color: var(--error-color);
                        }
                    }
                }
            }
        }

        &-name{
            display: flex;
            column-gap: 10px;
            align-items: center;

            &-img{
                width: 45px;
                height: 45px;
                border-radius: 50%;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &-title{
                display: flex;
                flex-direction: column;
                row-gap: 2px;

                h3, span{
                    line-height: 1.7rem;
                }
                h3{
                    margin: 0;
                    font-size: 1.4rem;
                    font-weight: 1.7rem;
                    font-weight: 700;
                    color: var(--dark-gray-01);
                }

                span{
                    color: var(--dark-gray-03);
                }
            }
        }

        &-status{
            display: flex;
            span{
                padding: 3px 8px;
                font-size: 1.2rem;
                border-radius: 4px;
            }

            &-success{
                span{
                    color: var(--success-color);
                    background-color: var(--light-success-02);
                }
            }

            &-error{
                span{
                    color: var(--error-color);
                    background-color: var(--light-error-02);
                }
            }
        }

        &-actions{
            display: flex;
            column-gap: 10px;
            justify-content: flex-end;

            button{
                padding-top: 8px;
                padding-bottom: 8px;
                border: 1px solid var(--blue-gray-05);
                border-radius: 4px;
                font-size: 1.4rem;
                line-height: 1.6rem;
                font-weight: 400;
                color: var(--dark-gray-01);
            }

            &-more{
                padding-left: 14px;
                padding-right: 14px;
            }
            &-detail{
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }
</style>