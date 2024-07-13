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
  {
    id: 2,
    titulo: 'A Ilha do Tesouro',
    autor: 'Robert Louis Stevenson',
    categoria: 'Aventura'
  },
  // Adicione mais livros conforme necessário
];
class library {

  constructor(livros) {
    this.livros = livros;
  }
  filtrar(end) {
    this.end = end;
    if (!end) {
      console.log("Escolha um categoria")
    } else {
      let hasBook = []
      for (let i = 0; i < livros.length; i++) {
        if (livros[i].categoria == end) {
          hasBook.push(livros[i].titulo)

        }
      }

      return console.log(hasBook.join(", "))
    }
  }

  allbook() {
    let c = 0
    let all = []
    for (let i = 0; i < livros.length; i++) {
      if (!livros[i].titulo) {
        return false
      } else {
        c++
        all.push(livros[i].titulo)
        console.log(c, all)

        all.pop()
      }
    }
    return all
  }

  busqueAutor(auto) {
    this.auto = auto;
    let book = ""

    for (let i = 0; i < livros.length; i++) {
      if (auto == livros[i].autor) {
        book = livros[i].titulo
        return console.log(book)
      }
    }
  }
  busqueBook(book) {
    this.book = book;
    let auto = ""
    for (let i = 0; i < livros.length; i++) {
      if (book == livros[i].titulo) {
        auto = livros[i].autor
        return console.log(auto)
      }
    }
  }

  busqueID(id) {
    this.id = id;
    let info = ""
    for (let i = 0; i < livros.length; i++) {
      if (id == livros[i].id) {
        info = `Livro: ${livros[i].titulo},\n Autor: ${livros[i].autor},\n Categoria: ${livros[i].categoria}`
        return console.log(info)
      }
    }
  }
}
const aa = new library()
aa.filtrar('Aventura') // Procurar por categorias
aa.allbook()  // listar todos os livros 
aa.busqueBook("As Crônicas de Nárnia") //// buscar autor ou livro
aa.busqueID(6) // Busca todas as informações do livro


/*
Filtrar por categoria: Endpoint que permite filtrar os livros por categoria específica,
como romance, aventura, suspense, etc.
Listar todos os livros: Endpoint para obter uma lista completa de todos os livros disponíveis.
Pesquisa por título ou autor: Endpoint para buscar livros que correspondam a uma 
consulta de pesquisa baseada no título do livro ou no nome do autor.
Buscar por ID: Endpoint para recuperar detalhes de um livro específico com base no ID.
*/