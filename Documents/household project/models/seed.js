var seed=function(Post,a,b,c){

    new Post({
 post:a,
        message:b,
        date:c

    }).save();


}

module.exports={

    seed:seed
}