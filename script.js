function showSection(role) {
  const sections = document.querySelectorAll('.role-section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(role).style.display = 'block';
  document.getElementById('loginBox').style.display = 'none';
}

function toggleLogin() {
  const loginBox = document.getElementById('loginBox');
  loginBox.style.display = loginBox.style.display === 'block' ? 'none' : 'block';

  const sections = document.querySelectorAll('.role-section');
  sections.forEach(sec => sec.style.display = 'none');
}

function submitLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user && pass) {
    alert(`Login submitted for: ${user}`);
  } else {
    alert('Please enter both username/email and password.');
  }
}

function showProduct(id) {
  const products = {
    women: {
      img: 'assets/figurines-women.jpeg',
      title: 'Decorative Women Figurines',
      price: '₹1100',
      review: '🌟🌟🌟🌟 “Beautifully detailed and vibrant. Adds charm to any space!”'
    },
    musicians: {
      img: 'assets/figurines-musicians.jpeg',
      title: 'Traditional Musician Figurines',
      price: '₹1426',
      review: '🌟🌟🌟🌟🌟 “Cultural masterpiece! The instruments and attire are stunning.”'
    },
    pots: {
      img: 'assets/clay-pots.jpeg',
      title: 'Handcrafted Clay Pots',
      price: '₹1629',
      review: '🌟🌟🌟🌟 “Elegant and earthy. Perfect for indoor or garden decor.”'
    }
  };

  const product = products[id];
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
  alert('Purchase initiated! You will be redirected to payment.');
}