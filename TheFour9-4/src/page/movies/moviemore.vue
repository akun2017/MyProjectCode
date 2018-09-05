<template >
<div class="more_movieslist">
    <div class="more_movie" v-for="(item,id) in movieA" :key="id" @click="to_detail(id)">
        <img class="more_movie-img" :src="item.images.small">
        <p class="more_movie_title">{{item.title}}</p>
        <div class="more_strats-container">
            <div class="more_not_pos">
                <img class="more_notstart" src="/static/images/icon/none-star.png" v-for="startitem in 5" :key="startitem.id">
                <i class="more_grade">{{item.rating.average}}</i>
            </div>
            <div class="more_has_pos">
                <img class="more_hasstart" src="/static/images/icon/star.png" v-for="imgitem in Math.ceil(item.rating.stars/10)" :key="imgitem.id">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import movieA from './movies.vue'
export default {
    name:'MovieMore',
    data(){
        return{
          movieA:[],
          starts:[],
        }
    },
    created(){
        let url_C = '/v2/movie/top250';
        this.movieA = this.$store.state.moviesdata;
        // this.getbyaxios(url_C,this.movieA);
    },
    methods:{
        // getbyaxios(url,moviesdata){
        //     this.axios.get("/api"+url).then(function(response){                
        //             for(let i = 0; i<15;i++){
        //                 moviesdata.push(response.data.subjects[i]);
        //             }
        //         }
        //     ).catch(function(error){
        //         console.log('数据获取失败');
        //     });
        // },
        to_detail(itemid){
            // console.log(itemid);
            // console.log(this.movieA);
            this.$store.state.movieDetail = this.movieA[itemid];
            // console.log(this.$store.state.movieDetail);
            this.$router.push({path: '/movieDetail'})
        }
    },
}
</script>
<style lang="less" scoped>
 .more_movieslist{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 10px;
        .more_movie{
            padding: 0px;
            width: 95px;
            margin: 0px 10px;
            // overflow: hidden;
            .more_movie-img{
                width: 95px;
                height: 130px;
                margin: 0px;
            }
            .more_movie_title{
                margin: 0px;
                font-size: 10px;
                font-family: '微软雅黑','Times New Roman', Times, serif;
                overflow: hidden;
                white-space:nowrap;
            }
            .more_strats-container{
                margin: 0px;
                .more_has_pos{
                    position: relative;
                    top: -18px;
                    margin: 0px;
                    // display: inline;
                    .more_hasstart{
                        width: 8px;
                        height: 8px;
                        margin:0px 2px;
                        z-index: 50;
                    }
                }
                .more_not_pos{
                    // display: inline;
                    .more_hasstart{
                        width: 8px;
                        height: 8px;
                        margin:0px 2px;
                        z-index: 50;
                    }
                }
                .more_notstart{
                    width: 8px;
                    height: 8px;
                    margin:0px 2px;
                    z-index: -50;
                }
                .more_grade{
                    font-size: 6px;
                }
            }
        }
    }
</style>