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
const functionINlibrary = new library()

functionINlibrary.filtrar('Aventura') // Procurar por categorias
functionINlibrary.allbook()  // listar todos os livros 
functionINlibrary.busqueBook("As Crônicas de Nárnia") //// buscar autor ou livro
functionINlibrary.busqueID(6) // Busca todas as informações do livro
