<template>
    <!--salarylist2.vue -->
    <div id="son-one">
        <h2>财富榜</h2>
        <div>{{count}}</div>
        <ol>
            <li v-for="salary in salaryList ">
                {{salary.name}}的工资是：{{salary.salaryAmount}}
            </li>
        </ol>
        <button @click="increment">+</button>
        <input v-model="message">
        <button @click="send">发送</button>
    </div>
</template>
<script>
    export default {
        computed: {
            message:{
                get () {
                    return this.$store.state.message
                },
                set (value) {
                    this.$store.commit('updateMessage', value)
                }
            },
            salaryList() {
                //通过 computed 属性，获取到 store.js 中的数据，并返回
                return this.$store.state.storeSalaryList;
            },
            count(){
                 return this.$store.state.count;
            }
        },
        methods: {
            increment(){
                this.$store.commit('increment');
            },
            send(){
                console.log(this.message)
            }
        }
    }
</script>
<style scoped>
  li{list-style:none}
</style>
