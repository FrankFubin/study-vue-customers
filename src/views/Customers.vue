<template>
    <div class="customers container">
        <alert v-if="alert" :message="alert"></alert>
        <h1 class="page-header">用户管理系统</h1>

        <input type="text" class="form-control" v-model="filterInput" placeholder="搜索">

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="customer in filterBy(customers)" :key="customer.id">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Alert from "../components/Alert"

    export default {
        name: "customers",
        components:{
          Alert
        },
        data(){
            return{
                customers:[],
                alert:"",
                filterInput:""
            }
        },
        created() {
            this.fetchCustomers();
        },
        updated(){
            this.fetchCustomers();
        },
        methods:{
            fetchCustomers(){
                if(this.$route.query.alert){
                    this.alert=this.$route.query.alert;
                }
                this.$axios.get('http://localhost:3000/users')
                    .then((res)=> {
                        this.customers=res.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            filterBy(customers){
                return customers.filter((customer)=>{
                    return customer.name.match(this.filterInput);
                })
            }
        }
    }
</script>

<style scoped>

</style>