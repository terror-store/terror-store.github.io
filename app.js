
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    data.forEach(product => {
      const el = document.createElement('div');
      el.className = 'product';
      el.innerHTML = `<img src="${product.image}" /><h3>${product.name}</h3><p>Price: ${product.price} Tk</p><a href="https://wa.me/8801620301814?text=I want to buy: ${product.name}" target="_blank">Order on WhatsApp</a>`;
      container.appendChild(el);
    });
  });
