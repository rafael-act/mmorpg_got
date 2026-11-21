/* importar as configurações do servidor */
var app = require('./config/server');

app.get('/', (req, res) => {
  res.render('index'); 
});

/* parametrizar a porta de escuta */
app.listen(3000, function(){
	console.log('Servidor online');
})