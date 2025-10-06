function showSection(role) {
  document.querySelectorAll('.role-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(role).style.display = 'block';
  document.getElementById('loginBox').style.display = 'none';
}

function toggleLogin() {
  const loginBox = document.getElementById('loginBox');
  loginBox.style.display = loginBox.style.display === 'block' ? 'none' : 'block';
  document.querySelectorAll('.role-section').forEach(sec => sec.style.display = 'none');
}

function submitLogin() {
  const user = document.getElementById('username');
  const pass = document.getElementById('password');

  if (user.value && pass.value) {
    alert(`Welcome, ${user.value}!`);
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';

    document.querySelectorAll('.role-section').forEach(sec => sec.style.display = 'none');
    document.getElementById('customer').style.display = 'block';

    user.value = '';
    pass.value = '';
  } else {
    alert('Please enter both username/email and password.');
  }
}

function showProduct(id) {
  const products = {
    women: {
      img: '1.jpg',
      title: 'wooden elephant decor',
      price: '₹1100',
      review: '🌟🌟🌟🌟 “Beautifully detailed and vibrant.”'
    },
    musicians: {
      img: '2.jpg',
      title: 'wall decor',
      price: '₹1426',
      review: '🌟🌟🌟🌟🌟 “Cultural masterpiece!”'
    },
    pots: {
      img: '3.jpg',
      title: 'tribal dolls',
      price: '₹1629',
      review: '🌟🌟🌟🌟 “Elegant and earthy.”'
    }
  };

  const product = products[id];
  if (!product) {
    alert('Product not found.');
    return;
  }

  document.getElementById('detailImg').src = product.img;
  document.getElementById('detailTitle').textContent = product.title;
  document.getElementById('detailPrice').textContent = product.price;
  document.getElementById('detailReview').textContent = product.review;

  document.getElementById('customer').style.display = 'none';
  document.getElementById('productDetail').style.display = 'block';
}

function goBack() {
  document.getElementById('productDetail').style.display = 'none';
  document.getElementById('customer').style.display = 'block';
}

function purchase() {
  alert('Purchase initiated! Redirecting to payment gateway...');
}

window.onload = function () {
  document.getElementById('loginBox').style.display = 'block';
  document.getElementById('mainContent').style.display = 'none';
};