<template>
    <div class="edit container">
        <alert v-if="alert" :message="alert"></alert>
        <h1 class="page-header">编辑用户</h1>
        <form @submit="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <lable>姓名</lable>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <lable>电话</lable>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <lable>邮箱</lable>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <lable>学历</lable>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <lable>毕业学校</lable>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <lable>职业</lable>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <lable>个人简介</lable>
                    <textarea type="text" class="form-control" rows="10" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">确定</button>
            </div>

        </form>
    </div>
</template>

<script>
    import Alert from "../components/Alert"

    export default {
        name: "Edit.vue",
        components: {Alert},
        data(){
            return{
                customer:{},
                id:"",
                alert:""
            }
        },
        created() {
            this.id = this.$route.params.id
            this.fetchCustomers(this.id);
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
            addCustomer(e){
                if(!this.customer.name || !this.customer.phone || !this.customer.email){
                    this.alert="请添加对应的信息！";
                    console.log("请添加对应的信息");
                    e.preventDefault();
                }else{
                    this.$axios.put("http://localhost:3000/users/"+this.id,this.customer)
                        .then((res)=>{
                            console.log(res);
                            this.$router.push({path:"/",query:{alert:"用户信息更新成功！"}});
                        })
                    e.preventDefault();
                }
            }
        }
    }
</script>

<style scoped>

</style>