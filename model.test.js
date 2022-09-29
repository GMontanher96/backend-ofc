const { database, Usuario, Servico } = require('./models');


describe("Usuario", () => {

    var usuario;

    beforeAll(async () => {
        await database.sync(); 
        us = await Usuario.create({
            email: "ze@uol.com.br",
            password: "123"
        })
    });

    describe("Usuario", () => {

        test("Usuario", async () => {
            await Usuario.bulkCreate([
                {
                    email: "zeroberto@uol.com.br",
                    password: "123",
                },
                {
                    email: "maria@uol.com.br",
                    password: "010203",
                },
                {
                    email: "tereza@uol.com.br",
                    password: "454545",
                }
            ]);

            const usuario = await Usuario.findAll();

            expect(usuario.length).toBe(4);
            expect(usuario[0].email).toBe("ze@uol.com.br");
        });

        test("Insert", async () => {
            // Inserindo com todos os dados      
            const usuario = await Usuario.create({
                email: "terezainsert@uol.com.br",
                password: "454545",
            });

            expect(usuario).toBeDefined();
            expect(usuario).not.toBeNull();
            expect(usuario).toBeDefined();
            expect(usuario.email).toBe("terezainsert@uol.com.br");

            await expect(Usuario.create({
                email: "tereza@uol.com.br"
            })).rejects.toThrow();

            await expect(Usuario.create({
                email: "",
                password: ""
            })).rejects.toThrow();

            await expect(Usuario.create({
                email: "tereza@uol.com.br",
                password: ""
            })).rejects.toThrow();

            await expect(Usuario.create({
                email: "",
                password: "454545"
            })).rejects.toThrow();

            await expect(Usuario.create({})).rejects.toThrow();

        });

        test("Update", async () => {
            const usuario = await Usuario.create({
                email: "terezac@uol.com.br",
                password: "454545"
            });

            usuario.password = "010203";
            await expect(usuario.save()).resolves.toBeTruthy();

            const usuario2 = await Usuario.findOne({
                where: {
                    id: usuario.id
                }
            });

            expect(usuario2.password).toBe("010203");

        });

        test("Delete", async () => {
            const usuario = await Usuario.create({
               email: "terezadelete@uol.com.br",
               password: "4010203"
            });

            await expect(usuario.destroy()).resolves.toBeTruthy();
        });

});
describe("Servico", () => {

        var servico;
    
        beforeAll(async () => {
            await database.sync(); 
            servico = await Servico.create({
                name: "servico Teste",
                tipo: "pintura",
                valor: "200",
                disponibilidade: "segunda à sexta"
            })
        });
    
        describe("Servico", () => {
    
            test("Servico", async () => {
                await Servico.bulkCreate([
                    {
                        name: "servicos Teste",
                        tipo: "pintura",
                        valor: "200",
                        disponibilidade: "segunda à sexta"
                    },
                    {
                        name: "servicos Teste1",
                        tipo: "manutencao",
                        valor: "150",
                        disponibilidade: "segunda à quinta"
                    },
                    {
                        name: "servicos Teste2",
                        tipo: "baba",
                        valor: "90",
                        disponibilidade: "segunda à sabado"
                    }
                ]);
    
                const servico = await servico.findAll();
    
                expect(servico.length).toBe(3);
                
            });
    
            test("Insert", async () => {
                // Inserindo com todos os dados      
                const servico = await Servico.create({
                    name: "servicos Teste3",
                    tipo: "faxina",
                    valor: "10",
                    disponibilidade: "uma vez na semana"
                });
    
                expect(servico).toBeDefined();
                expect(servico).not.toBeNull();
                expect(servico).toBeDefined();
    
                await expect(servico.create({
                    tipo: "faxina"
                })).rejects.toThrow();
    
                await expect(servico.create({
                    name: "",
                    tipo: "",
                    valor: "",
                    disponibilidade: ""
                })).rejects.toThrow();
    
                await expect(servico.create({
                    name: "",
                    tipo: "projeto",
                    valor: "",
                    disponibilidade: ""
                })).rejects.toThrow();
    
                await expect(servico.create({
                    name: "",
                    tipo: "",
                    valor: "120",
                    disponibilidade: ""
                })).rejects.toThrow();
    
                await expect(servico.create({})).rejects.toThrow();
    
            });
    
            test("Update", async () => {
                const servico = await Servico.create({
                    name: "mario",
                    tipo: "pintura",
                    valor: "120",
                    disponibilidade: "sabado"
                });
    
                servico.tipo = "manutencao";
                await expect(servico.save()).resolves.toBeTruthy();
    
                const servico2 = await Usuario.findOne({
                    where: {
                        id: servico.id
                    }
                });
    
                expect(servico2.tipo).toBe("manutencao");
    
            });
    
            test("Delete", async () => {
                const servico = await Servico.create({
                    name: "servicos Teste3",
                    tipo: "faxina",
                    valor: "10",
                    disponibilidade: "uma vez na semana"
                });
    
                await expect(servico.destroy()).resolves.toBeTruthy();
            });
        });
    });
});