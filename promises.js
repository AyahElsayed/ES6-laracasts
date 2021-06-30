// syntaks
/*
var promise = this.$http.get('/some/path')

promise.then(function(data){
    // do this when get data successfully 
}).catch(function(err){
    // do this when somthing error 
})
*/
// ex

var timer = new promise(function (resolve , reject){
        console.log('init promise');

        setTimeout(function(){
            console.log('timeout done');

            resolve();
            // if i delete this line 19 'All done' will not log
        },2000);
    
});

timer.then(() => console.log('All done')) ;