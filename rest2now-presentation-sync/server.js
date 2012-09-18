var connect = require('connect');

var port = process.env.PORT || 9001;
console.log("service run on " + port);


app = connect()
.use(connect.logger({ format: ':method :url :status' }))
.use(connect.bodyParser())
.use(connect.cookieParser())
.use(connect.session({ secret: 'superwolf' }))
.use(connect.errorHandler({ dumpExceptions: true, showStack: true }))
.use(connect.bodyParser())
.listen(port);

app
.use('/', connect.static(__dirname + '/client/'))
.use('/slide', connect.static(__dirname + '/slide/'))
.use('/slide/introduction/', connect.static(__dirname + '/slide/introduction/'))
.use('/client', connect.static(__dirname + '/client/'));

var now = require('now');
var everyone = now.initialize(app);

everyone.now.snowAll = function(){
	everyone.now.beginSnow();
};

everyone.now._changePage = function(page){
	everyone.now.gotoPage(page);
};





