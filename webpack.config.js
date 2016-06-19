var config={
   //entry:'./main.js',
   entry:{
   	main:'./main.js',
   	helloworld_react:'./helloworld_react.js'
   },

   output:{
   	path:'./',
   	//filename:'index.js'
   	filename:'[name].entry.js'
   },

   devServer:{
   	inline:true,
   	port:7777
   },

   module:{
   	loaders:[{
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
        	presets:['es2015','react']
        }
   	}]
   }

}

module.exports=config;