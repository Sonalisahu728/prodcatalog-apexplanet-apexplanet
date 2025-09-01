let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
const addCartBtns = document.querySelectorAll('.add-to-cart');

addCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
    alert(`Added ${btn.parentElement.querySelector('h3').textContent} to cart!`);
  });
});


const searchInput = document.getElementById('search-input');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  productCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});


const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.textContent;
    productCards.forEach(card => {
      card.style.display = (category === 'All' || card.dataset.category === category) ? 'block' : 'none';
    });
  });
});


const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeBtns = document.querySelectorAll('.close');

loginBtn.onclick = () => loginModal.style.display = 'block';
signupBtn.onclick = () => signupModal.style.display = 'block';
closeBtns.forEach(btn => btn.onclick = () => {
  loginModal.style.display = 'none';
  signupModal.style.display = 'none';
});
window.onclick = (e) => {
  if (e.target == loginModal) loginModal.style.display = 'none';
  if (e.target == signupModal) signupModal.style.display = 'none';
};
