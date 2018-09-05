<template>
    <div class="index">
        <!-- <div>获取焦点：<input type="text" @focus="to_input"></div>
        <div class="box1" ref="box1" id="box1" @click="c_color"></div> -->
        <!-- <div class="i_left"> -->
        
        <el-col class="i_left">
            <div class="font_h">
                <h4>笔记汇总</h4>
            </div>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>WEB前端</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">PC端</template>
                        <el-menu-item index="1-1" @click="to_md">transition_router</el-menu-item>
                        <el-menu-item index="1-2" @click="to_v_forbegood">v-forbegood</el-menu-item>
                        <el-menu-item index="1-3" @click="to_vue_less">vue_less</el-menu-item>
                        <el-menu-item index="1-4" @click="to_vue_markdown_loder">vue_markdown_loder</el-menu-item>
                        <el-menu-item index="1-5" @click="to_vuecreate">vuecreate</el-menu-item>
                        <el-menu-item index="1-6" @click="to_vuex">vuex</el-menu-item>
                        <!-- <el-menu-item index="1-7"><span @click="to_md">web_vue</span></el-menu-item> -->
                        <!-- <el-menu-item index="1-8"><span @click="to_md">transition</span></el-menu-item> -->
                    </el-menu-item-group>
                    <el-menu-item-group title="移动端">
                        <el-menu-item index="1-20">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="小程序">
                        <el-menu-item index="1-40">选项4</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">PHP</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">JavaWeb</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <div class="i_right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
// import topage from '../assets/js/to.js'
export default {
    name:'Index',
    data(){
        return{
            gcolor:'true',
        }
    },
    methods:{
        getid(iid){
            console.log(iid);
        },
        to_input(){
            this.$router.push({path:'/inword'})
        },
        c_color(){
            let a = this.$refs.box1;
            this.gcolor = !this.gcolor;
            console.log(this.gcolor);
            if(this.gcolor == false){
                a.style.backgroundColor = 'green'
            }
            if(this.gcolor == true){
                a.style.backgroundColor = 'red'
            }
        },
        to_md(){
            this.$router.push({path:'/index'})
        },
        to_v_forbegood(){
            this.$router.push({path:'/v-for'})
        },
        to_vue_less(){
            this.$router.push({path:'/vue_less'})
        },
        to_vue_markdown_loder(){
            this.$router.push({path:'/vue_markdown_loder'})
        },
        to_vuecreate(){
            this.$router.push({path:'/vuecreate'})
        },
        to_vuex(){
            this.$router.push({path:'/vuex'})
        },
    },
    // watch:{
    //    "$route"(to,from){
    //        console.log(to);
    //    }
    // },
    mounted(){
        // let to_v_forbegood = topage.methods.to_v_forbegood;
        // console.log(topage.methods.to_v_forbegood)
    },
}
</script>
<style lang="less">
@import '../assets/style/md.css';
.index{
    text-align: left;
    display: flex;
    // .box1{
    //     width: 50px;
    //     height: 50px;
    //     border-radius: 50%;
    //     background-color: red; 
    // }
    .font_h{
        text-align: center;
         h4{
            font-size: 20px;
            margin: 0px;
        }
    }
    .i_left{
        width: 210px;
        // flex-grow: 0;
    }
    .i_right{
        width: 74%;
        // flex-grow: 2;
        float: left;
        margin-left: 25px;
        padding-right: 35px;
    }
}
 
</style>
