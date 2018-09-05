<template>
    <div class="movieslist">
        <div class="movie-container">
            <img class="movie-img" :src= MovieDetail.images.small>
            <p class="movie_title">{{MovieDetail.title}}</p>
            <p>时长：{{MovieDetail.durations[0]}}</p>
            <p>发行时间：{{MovieDetail.mainland_pubdate}}</p>
            <p>类型：{{MovieDetail.genres[0]}}，{{MovieDetail.genres[1]}}，{{MovieDetail.genres[2]}}</p>
            <p>导演：</p>
            <div class="directors">
                <img :src= MovieDetail.directors[0].avatars.small class="directors_img">
                <p>{{MovieDetail.directors[0].name}}</p>
            </div>
            <p>演员信息：</p>
            <div class="casts">
                <div v-for="(castsitem,index) in MovieDetail.casts" :key="index" class="cast">
                    <img :src= castsitem.avatars.small class="cast_img">
                    <p class="cast_font">{{castsitem.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'MovieDetail',
    data(){
        return{
            MovieDetail:[]
        }
    },
    methods:{
        // getbyaxios(url,moviesdata){
        //     this.axios.get("/api"+url).then(function(response){
        //         moviesdata.push(response.data.subjects[0]);
        //         console.log(moviesdata);
        //     }).catch(function(error){
        //         console.log('数据获取失败');
        //     });
        // },
    },
    mounted(){
        let url_C = '/v2/movie/top250';
        // this.getbyaxios(url_C,this.movieDetail);
        // console.log(this.$store.state.movieDetail);
        this.MovieDetail = this.$store.state.movieDetail;
        // console.log(this.MovieDetail);
    }
}
</script>
<style lang="less" scoped>
p{
    margin: 2px;
}
.movie-img{
    width: 200px;
    height: 300px;
}
.movie_title{
    font-weight: 800;
    font-size: 18px;
}
.directors{
    .directors_img{
        width: 60px;
        height: 80px;
    }
}
.casts{
    display:flex;
    justify-content: left;
    flex-wrap: wrap;
    .cast{
        text-align: center;
        width: 60px;
        .cast_img{
            width: 40px;
            height: 50px;
        }
        .cast_font{
            font-size: 6px;
        }
    }
    
}
</style>
