<template>
    <div class="product">
        <div class="product-bars">
            <div class="product-search">
                <div class="product-search-icon">
                    <search-icon />
                </div>
                <input class="product-search-input" type="text" placeholder="Search product" name="search">
            </div>

            <div class="product-options">
                <div class="product-options-item">
                    <select name="status" id="">
                        <option value="">Status</option>
                    </select>
                    <div class="product-options-item-icon">
                        <arrow-down-icon />
                    </div>
                </div>
                <div class="product-options-item">
                    <select name="quantity" id="">
                        <option value="">Qantity</option>
                    </select>
                    <div class="product-options-item-icon">
                        <arrow-down-icon />
                    </div>
                </div>
                <div class="product-options-item">
                    <select name="shipping" id="">
                        <option value="">Shipping</option>
                    </select>
                    <div class="product-options-item-icon">
                        <arrow-down-icon />
                    </div>
                </div>
                <div class="product-options-item">
                    <select name="profile" id="">
                        <option value="">Profile</option>
                    </select>
                    <div class="product-options-item-icon">
                        <arrow-down-icon />
                    </div>
                </div>
                <div class="product-options-item">
                    <select name="readyToPush" id="">
                        <option value="">Ready to Push</option>
                    </select>
                    <div class="product-options-item-icon">
                        <arrow-down-icon />
                    </div>
                </div>
            </div>

            <button class="product-sort">
                <div class="product-sort-icon">
                    <sort-icon />
                </div>
                Sort
            </button>
        </div>


        <div class="product-table">
            <table>
                <thead class="product-table-header">
                    <tr>
                        <th>
                            <div class="product-table-checkbox">
                                <input type="checkbox">
                            </div>
                        </th>
                        <th>Product</th>
                        <th>
                            <div class="product-table-header-status">
                                <img src="../../assets/App-shopify.png" alt="Logo Shopify">
                                <span>Status</span>
                            </div>
                        </th>
                        <th>Quantity</th>
                        <th>Options</th>
                        <th>Profile</th>
                        <th>Shipping</th>
                        <th>Options</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <template v-for="product in listProduct">
                        <tr :key="product">
                        <td>
                            <div class="product-table-checkbox">
                                <input type="checkbox">
                            </div>
                        </td>
                        <td>
                            <div class="product-table-des">
                                <div class="product-table-des-img">
                                    <img src="../../assets/user-avatar.png" alt="">
                                </div>
                                <div class="product-table-des-title">
                                    <h3>Imwete Anti Blue Light Computer...</h3>
                                    <span>Shopify ID: 343972834378</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="product-table-status product-table-status-active">
                                <div class="product-table-status-icon"><dot-icon /></div>
                                <span>Active</span>
                            </div>
                        </td>
                        <td>
                            <div class="product-table-quantity">
                                <span>2816</span> in stock for <span>3</span> variants
                            </div>
                        </td>
                        <td>
                            <div class="product-table-options">2</div>
                        </td>
                        <td>
                            <div class="product-table-profile">
                                <select name="" id="">
                                    <option value="">Global setting</option>
                                </select>
                                <arrow-down-icon />
                                
                            </div>
                        </td>
                        <td>
                            <div class="product-table-shipping">
                                <select name="" id="">
                                    <option value="">Shipping 1</option>
                                </select>
                                <arrow-down-icon />
                                
                            </div>
                        </td>
                        <td>
                            <div class="product-table-action">
                                <button class="btn product-table-action-btn product-table-action-btn-primary">Push to Etsy</button>
                            </div>
                        </td>
                        <td>
                            <div class="product-table-more">
                                <button class="btn product-table-more-btn"><more-product-icon /></button>
                            </div>
                        </td>
                    </tr>
                    </template>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {SearchIcon, SortIcon, ArrowDownIcon, DotIcon, MoreProductIcon} from "@/components/Icons";

export default {
    name: 'Products',
    components: {
        SearchIcon,
        SortIcon,
        ArrowDownIcon,
        DotIcon,
        MoreProductIcon
    },
    data(){
        return {
            listProduct: [1,2,3,4,5,6,7,8,9,10,11,12],
        }
    }

}
</script>

<style lang="scss">
    .product{
        display: flex;
        flex-direction: column;
        overflow: hidden;

        &-bars{
            display: flex;
            column-gap: 15px;
        }

        &-search{
            flex: 1;
            padding: 12px;
            display: flex;
            align-items: center;
            column-gap: 12px;
            background-color: var(--white-color);
            border: 1px solid var(--blue-gray-05);
            border-radius: 4px;

            &-icon{
                width: 14px;
                height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--dark-gray-02);
            }

            &-input{
                flex: 1;
                border: 0;
                outline: none;
                font-weight: 400;
                font-size: 1.4rem;
                line-height: 1.6rem;

                &::placeholder{
                    color: var(--light-gray-01);
                }
            }
        }

        &-options{
            display: flex;
            border: 1px solid var(--blue-gray-05);
            border-radius: 4px;
            &-item{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--white-color);
                

                &:not(:last-child){
                    border-right: 1px solid var(--blue-gray-05);
                }

                &-icon{
                    position: absolute;
                    top: 50%;
                    right: 13px;
                    transform: translateY(-50%);
                    color: var(--dark-gray-02);
                }

                & select{
                    border: 0;
                    outline: none;
                    padding: 14px 26px 14px 12px;
                    font-size: 1.4rem;
                    font-weight: 600;
                    line-height: 1.6rem;
                    color: var(--dark-gray-02);
                    background: transparent;
                    appearance: none;
                }
            }
        }

        &-sort{
            padding: 12px;
            display: flex;
            align-items: center;
            column-gap: 5px;
            border: 1px solid var(--blue-gray-05);
            border-radius: 4px;
            font-size: 1.4rem;
            line-height: 1.6rem;
            font-weight: 600;
            background-color: var(--white-color);
            color: var(--dark-gray-02);
        }

        &-table{
            margin-top: 26px;
            overflow: hidden auto;
            border: 1px solid var(--blue-gray-05);
            border-radius: 3px;
            background: var(--white-color);

            &::-webkit-scrollbar{
                display: none;
            }

            & table{
                width: 100%;
                border-collapse: collapse;

                & thead{
                    height: 78px;
                    position: sticky;
                    top: 0;
                    font-size: 1.4rem;
                    line-height: 1.6rem;
                    font-weight: 600;
                    color: var(--dark-gray-03);
                    background-color: var(--white-color);
                    box-shadow: inset 0 -1px 0 var(--blue-gray-05);
                    z-index: 10;

                    & th{
                        text-align: left;

                        & .product-table-checkbox input{
                            width: 16px;
                            height: 19px;
                            // position: relative;
                            // appearance: none;
                        }
                    }
                }

                & tbody tr{
                    transition: all .2s ease;

                    &:hover{
                        background-color: var(--light-gray-05);
                    }

                    &:not(:last-child){
                        border-bottom: 1px solid var(--blue-gray-05);
                    }
                }

            }
            & th, td{
                padding: 20px 0;
                margin: 0;

                &:first-child{
                    width: 51px;
                }
                &:last-child{
                    width: 56px;
                }
            }

            &-header{

                &-status{
                    display: flex;
                    align-items: center;
                    column-gap: 5px;
                }
            }

            &-checkbox{
                display: flex;
                justify-content: left;
                align-items: center;
                padding-left: 25px;
                padding-right: 10px;
                
                & input{
                    width: 16px;
                    height: 16px;
                }
            }

            &-des{
                display: flex;
                align-items: center;
                column-gap: 10px;

                &-img{
                    width: 40px;
                    height: 40px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                &-title{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    row-gap: 3px;

                    h3{
                        max-width: 246px;
                        margin: 0;
                        font-size: 1.4rem;
                        line-height: 1.8rem;
                        font-weight: 400;
                        color: var(--dark-gray-01);
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }

                    span{
                        font-size: 1.2rem;
                        line-height: 1.5rem;
                        font-weight: 400;
                        color: var(--dark-gray-03);
                    }
                }
            }

            &-status{
                display: flex;
                align-items: center;
                column-gap: 5px;
                font-size: 14px;
                line-height: 18px;
                font-weight: 400;

                &-active{
                    color: var(--success-color);
                }

                &-draft{
                    color: var(--blue-gray-04)
                }

                &-icon{
                    color: inherit;
                    display: flex;
                }
            }

            &-quantity{
                max-width: 114px;
                font-size: 1.4rem;
                line-height: 1.8rem;
                font-weight: 400;
                color: var(--dark-gray-03);

                span{
                    color: var(--dark-gray-01);
                }
            }

            &-options{
                max-width: 9px;
                font-size: 1.4rem;
                line-height: 1.8rem;
                font-weight: 400;
                color: var(--dark-gray-03);
                position: relative;

                &-error{
                    color: var(--error-color);

                    &::after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: .7px;
                        background-color: var(--error-color);
                    }
                }
            }

            &-profile, &-shipping{
                display: flex;
                width: 123px;
                position: relative;

                select{
                    outline: none;
                    padding: 7px 25px 6px 9px;
                    appearance: none;
                    font-size: 1.4rem;
                    line-height: 1.7rem;
                    font-weight: 400;
                    color: var(--dark-gray-01);
                    border: 1px solid var(--blue-gray-05);
                    border-radius: 4px;
                    background: var(--white-color);
                }

                svg {
                    position: absolute;
                    top: 50%;
                    right: 7px;
                    transform: translateY(-50%);
                }
            }

            &-shipping{
                width: 101px;
            }

            &-action{
                display: flex;

                &-btn{
                    padding: 7px 8px;
                    font-size: 1.4rem;
                    font-weight: 400;
                    line-height: 1.6rem;
                    border: 1px solid;

                        &-primary{
                        color: var(--primary-color);
                        border-color: var(--primary-color);
                    }
                }
            }

            &-more{
                display: flex;
                width: 32px;
                &-btn{
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--blue-gray-05);
                    border-radius: 4px;
                }
            }

        }
    }
</style>