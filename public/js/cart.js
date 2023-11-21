document.addEventListener('DOMContentLoaded', () => {
  const checkoutButton = document.querySelector('.checkout-btn');
  if (checkoutButton) {
      checkoutButton.addEventListener('click', handleCheckout);
  }
});

function handleCheckout(e) {
  e.preventDefault(); // Previne o comportamento padrão

  const cartData = {
      items: JSON.parse(localStorage.getItem('cart') || '[]'),
  };
  fetch('/save-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.message);
    localStorage.removeItem('cart');
    window.location.href = '/success.html';
  })
  .catch(error => {
    console.error('Erro ao salvar o pedido:', error);
  });
}


