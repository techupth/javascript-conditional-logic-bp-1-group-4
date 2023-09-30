let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  let result = bookName.includes("Beauty")
  if (result){
    favoriteBooks.push(bookName)
  }else{

  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
