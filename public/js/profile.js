const favouriteHandler = async (e) => {
  e.preventDefault();
  const book_id = e.target.id;

  await fetch('/api/users/favourites', {
    method: 'POST',
    body: JSON.stringify({book_id}),
    headers: { 'Content-Type': 'application/json'}
  })
}

const CartHandler = async (e) => {
  e.preventDefault();
  const book_id = e.target.id;
  
  await fetch('/api/users/cart', {
    method: 'POST',
    body: JSON.stringify({book_id}),
    headers: { 'Content-Type': 'application/json'}
  })
}


$('.cart').click(CartHandler)
$('.fa-heart').click(favouriteHandler)