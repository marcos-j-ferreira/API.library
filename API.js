import express, { json } from 'express'
const app = express();

const livros = [{
    id: 1,
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    categoria: 'Romance'
  },
  {
    id: 2,
    titulo: 'A Ilha do Tesouro',
    autor: 'Robert Louis Stevenson',
    categoria: 'Aventura'
  },
  {
    id: 3,
    titulo: 'O Código Da Vinci',
    autor: 'Dan Brown',
    categoria: 'Suspense'
  },
  {
    id: 4,
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    categoria: 'Clássico'
  },
  {
    id: 5,
    titulo: 'As Crônicas de Nárnia',
    autor: 'C.S. Lewis',
    categoria: 'Fantasia'
  },
  // Adicione mais livros conforme necessário
];

class library {
    constructor(livros) {
      this.livros = livros;
    }
    filtrar(end) {
      this.end = end;
  
      let hasBook = []
      for (let i = 0; i < livros.length; i++) {
        if (livros[i].categoria == end) {
          hasBook.push(livros[i].titulo)
        }
      }
      if(!end){
        json({Error:"Categoria não encontrada"})
      }else{
        json({categoria:and, livros: hasBook})
      }
    }
  }
  
const aa = new library()
app.get('/filtrar', function(req, res){
    const tem = req.query.tem
    aa.filtrar(tem)
    res.status(200).json({arguments:tem}) 
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000')
});

