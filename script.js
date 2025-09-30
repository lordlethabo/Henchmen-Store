// Store toggle for portfolio demo
let storeActive = false; // Admin will activate this later

document.querySelectorAll('.product').forEach(product => {
  const available = product.dataset.available === 'true';
  const btn = product.querySelector('.buy-btn');

  if (storeActive && available) {
    btn.disabled = false;
    btn.addEventListener('click', () => {
      alert(`Redirecting to WhatsApp for purchase of ${product.querySelector('h3').innerText}`);
      // Later replace with dynamic WhatsApp link
    });
  } else {
    btn.disabled = true;
  }
});
