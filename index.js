let mensagem= "";

require("dotenv").config(); /* configura o DETENV que envia o projeto para a platarforma heroko*/
const port = process.env.PORT || 3000; /* a aplicação vai ser aberta no  PROCESS.ENV.PORT ou a porta 3000 */
const express = require("express");/* riquare > importa arquivos da pasta express como o INDEX.JS LICENÇA, READM */

const path = require("path"); /*É uma biblioteca.  caminho */

const app = express();   /* APP executa o EXPRESS*/



app.set("view engine", "ejs"); /*  O VIEW mostra o caminho para para  o INDEX.EJS que e o html que vai ser executado quando for chamado no RES.RENDER(INDEX)*/

app.use(express.static(path.join(__dirname, "public"))); /* Mostra onde esta o arquivo EJS E FAz RODAR ATRAVES DO CAMINHO QUE ESTA NA const (PATH) E FAZ RODAR TUDO QUE ESTA NA PASTA PUBLIC*/

app.use(express.urlencoded());/* o cliente envia as informações que vem no (body) que estão no <form action="/creat" method="post"> que é enviada como um documento. "json" */ 

const convites = [ /* RECEBE UM ARREY DE OBJETOS que foram cadastrados pelo cliente arrey e oejtos são separados por virgulas*/
  {
    id: 1,
    nome: "convite 15 anos",
    descricao:
      "Impressão de alta qualidade em sulfite 180g, com dobra, fechado com fita de cetim e laço Chanel com strass.",
    
    imagem: "https://i.pinimg.com/originals/00/fc/cd/00fccdaf0f2f01a01a2c4c2536620d87.jpg",
  },
  {
    id: 2,
    nome: "convite para casamento",
    descricao:
      "Impressão de alta qualidade em sulfite 180g, com dobra, fechado com fita de cetim e laço Chanel com strass",
    
    imagem: "https://i.pinimg.com/originals/74/85/5b/74855b7c5c134c456c0e3036b13c3d5f.jpg",
  },

  {
    id: 3,
    nome: "convite para festas",
    descricao:
      "Impressão de alta qualidade em sulfite 180g, com dobra, fechado com fita de cetim e laço Chanel com strass",
    
    imagem: "https://cf.shopee.com.br/file/6b5e615351f7d2291e9f88a0b5517156",
  },
];

/* rotas*/
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
let itens = undefined; 

app.get("/", (req, res) => { 

setTimeout(() => {
  mensagem = "";
}, 1000); 

  res.render("index", { convites, itens, mensagem}); 
});

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


app.post("/creat", (req, res) => { 
  const itens = req.body;  
  itens.id = convites.length + 1; 
  convites.push(itens); 
  mensagem = "parabéns seu convite foi cadastrado com sucesso.";
  res.redirect("/#lista");
});

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/




 app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id; 
 itens = convites.find(itens => itens.id === id ); 
 res.redirect("/");

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

 });
app.post("/update/:id", (req, res) => {
const id = +req.params.id -1; 
const newitens = req.body;
newitens.id = id +1; 
convites[id] = newitens; 
itens=undefined; 

  res.redirect("/#lista"); 
});

app.get("/redirecionar", (req, res) => {
  itens=undefined
  res.redirect("/")
});

app.get("/delete/:id", (req, res) => { 
  const id = +req.params.id -1;
  delete convites[id] 

  res.redirect("/#lista"); 
});





app.listen(port, () =>  
  console.log(` Servidor rodando em http://localhost:${port}`)
);
