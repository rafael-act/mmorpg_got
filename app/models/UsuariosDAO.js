function UsuariosDAO(connection) {
  console.log("UsuariosDAO criado com sucesso!",connection); 
  this._connection = connection();

}

UsuariosDAO.prototype.inserirUsuario = function (usuario, callback) {
  console.log(
    "Cadastrar usuario: " +
      usuario.nome +
      ", " +
      usuario.usuario +
      ", " +
      usuario.senha +
      ", " +
      usuario.casa,
  );
  console.log("Connection object in inserirUsuario:", this._connection);
  this._connection.open(function (err, mongoClient) {
    if (err) {
      console.error("Erro ao abrir a conexão com o banco de dados:", err);
      return;
    }

    mongoClient.collection("usuarios", function (err, collection) {
      if (err) {
        console.error("Erro ao acessar a coleção 'usuarios':", err);
        mongoClient.close();
        return;
      }
      collection.insert(usuario, function (err, result) {
        mongoClient.close();                 // aqui: depois do insert terminar
        if (callback) callback(err, result);
      });
    });
     
  });
};
module.exports = function () {
  return UsuariosDAO;
};
