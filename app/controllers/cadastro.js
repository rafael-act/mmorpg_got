    module.exports.cadastro = function(application,req,res){
       res.render('cadastro', {validacao : {}, dadosForm : {}});
    };

    module.exports.cadastrar = function(application,req,res){
        dadosForm = req.body;
        req.assert('nome','Nome é obrigatório').notEmpty();
        req.assert('usuario','Usuario é obrigatório').notEmpty();
        req.assert('senha','Senha é obrigatório').notEmpty();
        req.assert('casa','casa é obrigatório').notEmpty();
        var erros = req.validationErrors();

        if(erros){
            res.render('cadastro', {validacao : erros, dadosForm : dadosForm});
            return;
        }

        // Lógica para cadastrar o usuário
        res.send('Cadastro realizado com sucesso!');
    };