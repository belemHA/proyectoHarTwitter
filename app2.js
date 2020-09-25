var express=require("express");
var app=express();
/*app.use(app.router);*/
app.use(express.static(path.join(dirname, 'public')));

app.use("/styles", express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/images", express.static(__dirname + '/public/images'));

if ('development' == app.get('env')){
	app.use(express.erroHandler());
}
app.get('/', function (req, res){
	res.sendfile(__dirname + '/public/index.html');
});
