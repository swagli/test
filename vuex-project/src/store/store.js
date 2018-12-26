import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../../src/plugins/logger'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        message:"tom",
        count:0,
        storeSalaryList: [
            {
                name: "马化腾",
                salaryAmount: 1000
            },
            {
                name: "雷军",
                salaryAmount: 900
            },
            {
                name: "刘强东",
                salaryAmount: 800
            }
        ]
    },
    getters: {
        // 增加一个getter方法，用于返回加工后的工资
        doubleSalaryGetter: (state) => {
            var afterDoubleSalary = 
                state.storeSalaryList.map(salary => {
                return {
                    name: salary.name,
                    salaryAmount: salary.salaryAmount * 2 + " " + "$"

                };
            });
            return afterDoubleSalary;
        },
        // 在这里增加一个 计算工资总额的方法
        totalSalary: (state) => {
            var sum = 0
            state.storeSalaryList.forEach(element => {
                sum += element.salaryAmount;
            });
            return sum*2;
        },
    },
    mutations: { 
        increment(state){
            state.count++
        },
        updateMessage(state, message) {
            state.message = message
        }
    },
    actions: {
        increment(context){
            context.commit("increment")
        }
    },
    //模块化
    modules: {
        cart,
        products
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});
