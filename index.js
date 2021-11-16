app.engine('handlbars', ({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')
//conexão com banco de dados MYSQL
const sequelize = new SequeLize('text', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})
//rotas 

app.get('/cad', function (req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    res.send('FORMULARIO RECEBIDO!')
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
})
