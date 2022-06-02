const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#favourite-name').value.trim();
    const needed_funding = document.querySelector('#favourite-funding').value.trim();
    const description = document.querySelector('#favourite-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/favourites`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create favourite');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/favourites/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete favourite');
      }
    }
  };
  
  document
    .querySelector('.new-favourite-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.favourite-list')
    .addEventListener('click', delButtonHandler);