const favouriteHandler = async (e) => {
  e.preventDefault();
  const book_id = e.target.id;

  await fetch('/api/users/favourites', {
    method: 'POST',
    body: JSON.stringify({book_id}),
    headers: { 'Content-Type': 'application/json'}
  })
}

$('.fa-heart').click(favouriteHandler)