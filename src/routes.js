const { Router } = require("express");
const UserController = require("./controller/UserController");
const ServicoController = require("./controller/ServicoController");
const ContatoController = require("./controller/ContatoController");
const EnderecoController = require("./controller/EnderecoController");
const { me, login, register, dashboard } = require("./controller/AuthController");
const auth = require('./middlewares/auth');

const router = Router();

// auth carlos 

router.get("/me", auth, me);
router.post("/signin", login);
router.post("/register", register);
router.get("/dashboard", auth, dashboard);

// routes de usuários

router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.get("/users", UserController.listUsers);
router.delete("/users/:id", UserController.deleteUsers);

// routes de enderecos
router.get("/users/:user_id/enderecos", EnderecoController.listEndereco);
router.post("/users/:user_id/enderecos", EnderecoController.createEndereco);
router.put("/users/:user_id/enderecos/:id", EnderecoController.updateEndereco);
router.patch("/users/:user_id/enderecos/:id", EnderecoController.updateEndereco);
router.post("/users/:user_id/enderecos/:id", EnderecoController.updateEndereco);

router.delete("/users/:user_id/enderecos/:id", EnderecoController.deleteEndereco);

// routes de contatos
router.get("/users/:user_id/contatos", ContatoController.listContato);
router.post("/users/:user_id/contatos", ContatoController.createContato);
router.put("/users/:user_id/contatos/:id", ContatoController.updateContato);
router.patch("/users/:user_id/contatos/:id", ContatoController.updateContato);
router.post("/users/:user_id/contatos/:id", ContatoController.updateContato);
router.delete("/users/:user_id/contatos/:id", ContatoController.deleteContato);

// routes de servicos
router.get("/servicos", ServicoController.listServico);
router.get("/users/:user_id/servicos", ServicoController.getServico);
router.post("/users/:user_id/servicos", ServicoController.createServico);
router.put("/users/:user_id/servicos/:id", ServicoController.updateServico);
router.patch("/users/:user_id/servicos/:id", ServicoController.updateServico);
router.post("/users/:user_id/servicos/:id", ServicoController.updateServico);
router.get("/servicos/:id", ServicoController.getServico);
router.get("/users/:user_id/servicos/:id", ServicoController.getServico);
router.post("/users/:user_id/servicos/:id", ServicoController.listServico);
router.delete("/users/:user_id/servicos/:id", ServicoController.deleteServico);

module.exports = router;
