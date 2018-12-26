<template>
    <!--salarylist2.vue -->
    <div id="son-two">
        <h2>财富榜2</h2>
        <ol>
            <li v-for="salary in salaryList ">
                {{salary.name}}的工资是：{{salary.salaryAmount}}
            </li>
        </ol>
        <ol>
           <li v-for="salary in myDoubleSalaryGetter">
              {{salary.name}}的双倍工资是：{{salary.salaryAmount}}
           </li>
        </ol>
        <span>工资总额是： {{myTotalSalary}}</span>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "son-two",
        computed: {
            salaryList() {
                // 通过 computed 属性，获取到 store.js 中的数据，并返回
                return this.$store.state.storeSalaryList;
            },
             //在这里调用 store.js 中的方法。
             doubleSalaryByGetter() {
                 return this.$store.getters.doubleSalaryGetter;
             },
            ...mapGetters(
                // 注意这里是一个对象
               {
                 myDoubleSalaryGetter: 'doubleSalaryGetter',
                 myTotalSalary: 'totalSalary'
            })
        }
    }
</script>
<style scoped>
   li{list-style:none}
</style>
