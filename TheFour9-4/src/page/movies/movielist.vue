<template>
    <div>
        <div class="movielist-container">
            <div class="movielist_title" @click="to_more">
                <i>正在热映</i>
                <div class="movie_more">
                    <i>更多</i>
                    <img src="../../assets/images/icon/arrow_right.png">
                </div>
            </div>
            <div class="movieslist">
                <!-- @click="to_detail(item.id)" -->
                <div class="movie-container" v-for="item in data" :key="item.id">
                    <img class="movie-img" :src= item.images.small>
                    <p class="movie_title">{{item.title}}</p>
                    <div class="strats-container">
                        <div class="not_pos">
                            <img class="notstart" src="../../assets/images/icon/none-star.png" v-for="startitem in 5" :key="startitem.id">
                            <i class="grade">{{item.rating.average}}</i>
                        </div>
                        <div class="has_pos">
                            <img class="hasstart" src="../../assets/images/icon/star.png" v-for="imgitem in Math.ceil(item.rating.stars/10)" :key="imgitem.id">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'MoviesList',
    data(){
        return{
           itemid:''
        }
    },
    props:['data'],
    methods:{
        to_detail(itemid){
            this.$store.state.movieDetail = this.$store.state.moviesdata[itemid];
            // console.log(this.$store.state.movieDetail);
            this.$router.push({path: '/movieDetail'})
        },
        to_more(){
            this.$store.state.moviesdata = this.data;
            // console.log(this.$store.state.moviesdata);
            this.$router.push({path: '/MovieMore'})
        }
    },
}
</script>
<style lang="less">
.movielist-container{
    width: 100%;
    height: 200px;
    .movielist_title{
        display: flex;
        justify-content: space-between;
        padding: 0px 25px;
        margin: 6px 0px;
            i{
                font-size: 13px;
            }
            .movie_more{
                display: inline;
                img{
                    width: 10px;
                    height: 10px;
                }
            }
    }
    .movieslist{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: 180px;
        overflow: hidden;
        .movie-container{
            padding: 0px;
            width: 95px;
            margin: 0px 10px;
            // overflow: hidden;
            .movie-img{
                width: 95px;
                height: 130px;
                margin: 0px;
            }
            .movie_title{
                margin: 0px;
                font-size: 10px;
                font-family: '微软雅黑','Times New Roman', Times, serif;
                overflow: hidden;
                white-space:nowrap;
            }
            .strats-container{
                margin: 0px;
                .has_pos{
                    position: relative;
                    top: -18px;
                    margin: 0px;
                    // display: inline;
                    .hasstart{
                        width: 8px;
                        height: 8px;
                        margin:0px 2px;
                        z-index: 50;
                    }
                }
                .not_pos{
                    // display: inline;
                    .hasstart{
                        width: 8px;
                        height: 8px;
                        margin:0px 2px;
                        z-index: 50;
                    }
                }
                .notstart{
                    width: 8px;
                    height: 8px;
                    margin:0px 2px;
                    z-index: -50;
                }
                .grade{
                    font-size: 6px;
                }
            }
        }
    }
}
</style>
