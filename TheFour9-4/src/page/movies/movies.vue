<template>
    <div>
        <movies-list :data=moviesA></movies-list>
        <movies-list :data=moviesB></movies-list>
        <movies-list :data=moviesC></movies-list>
    </div>
</template>
<script>
import MoviesList from './movielist.vue'
import '../../assets/js/jquery-3.3.1.js'
export default {
    name:'movies',
    data(){
        return{
            moviesA:[],
            moviesB:[],
            moviesC:[]
        }
    },
    components:{
        MoviesList
    },
    methods:{
        getdata(url,moviesdata){
            var _this = this;
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'jsonp',//解决跨域问题
            }).then(res =>{
                for(let i = 0; i<15;i++){
                    moviesdata.push(res.subjects[i]);
                }
                // moviesdata = res.subjects;
                // console.log(moviesdata);
            })
        },
        // getbyaxios(url,moviesdata){
        //     this.axios.get("/api"+url).then(function(response){
        //             for(let i = 0; i<15;i++){
        //                 moviesdata.push(response.data.subjects[i]);
        //                 // let a = response.data.subjects[i].rating.stars/10;
        //                 // moviesdata.rating.stars = a;
        //                 // console.log(a);
        //             }
        //         }
        //     ).catch(function(error){
        //         console.log('数据获取失败');
        //     });
        // }

    },
    mounted(){
        let url_A = 'https://douban.uieee.com/v2/movie/in_theaters';
        let url_B = 'https://douban.uieee.com/v2/movie/coming_soon';
        let url_C = 'https://douban.uieee.com/v2/movie/top250';
        
        // let url_A = '/v2/movie/in_theaters';
        // let url_B = '/v2/movie/coming_soon';
        // let url_C = '/v2/movie/top250';

        this.getdata(url_A,this.moviesA);
        this.getdata(url_B,this.moviesB);
        this.getdata(url_C,this.moviesC);
        // this.getbyaxios(url_A,this.moviesA);
        // this.getbyaxios(url_B,this.moviesB);
        // this.getbyaxios(url_C,this.moviesC);
    }

}
</script>
<style lang="less">

</style>
