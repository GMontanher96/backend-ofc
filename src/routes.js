const { Router } = require("express");
const UserController = require("./controller/UserController");
const ServicoController = require("./controller/ServicoController");
const ContatoController = require("./controller/ContatoController");
const EnderecoController = require("./controller/EnderecoController");

const router = Router();



// routes de usuários

router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.get("/users", UserController.listUsers);
router.delete("/users/:id", UserController.deleteUsers);

// routes de enderecos
router.get("/users/:user_id/enderecos", EnderecoController.listEndereco);
router.get("/enderecos", EnderecoController.listEndereco);
router.post("/users/:user_id/enderecos", EnderecoController.createEndereco);
router.delete("/users/:user_id/enderecos/:id", EnderecoController.deleteEndereco);

// routes de contatos
router.get("/users/:user_id/contatos", ContatoController.listContato);
router.post("/users/:user_id/contatos", ContatoController.createContato);
router.delete("/users/:user_id/contatos/:id", ContatoController.deleteContato);

// routes de servicos
router.get("/users/:user_id/servicos", ServicoController.listServico);
router.post("/users/:user_id/servicos", ServicoController.createServico);
router.delete("/users/:user_id/servicos/:id", ServicoController.deleteServico);

module.exports = router;
