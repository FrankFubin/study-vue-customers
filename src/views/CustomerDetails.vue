<template>
    <div class="details container">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}

            <span class="pull-right">
                <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
                <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk"> {{customer.phone}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus"> {{customer.email}}</span>
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk"> {{customer.education}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus"> {{customer.graduationschool}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk"> {{customer.profession}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus"> {{customer.profile}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CustomerDetails.vue",
        data(){
            return{
                customer:""
            }
        },
        created() {
            this.fetchCustomers(this.$route.params.id);
        },
        methods:{
            fetchCustomers(id){
                this.$axios.get('http://localhost:3000/users/'+id)
                    .then((res)=> {
                        this.customer=res.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            deleteCustomer(id){
                this.$axios.delete('http://localhost:3000/users/'+id)
                    .then((res)=>{
                        this.$router.push({path:"/",query:{alert:"用户信息删除成功！"}});
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>