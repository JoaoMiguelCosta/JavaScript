document.addEventListener('DOMContentLoaded', () => {
    const productId = 1; 
    const productUrl = `https://fakestoreapi.com/products/${productId}`;
    const relatedProductsUrl = 'https://fakestoreapi.com/products/category/jewelery';

  
    const updateFooter = () => {
        const footer = document.getElementById('footer');
        const year = new Date().getFullYear();
        footer.textContent = `Copyright ${year}`;
    };

    
    const displayProduct = async () => {
        try {
            const response = await fetch(productUrl);
            const product = await response.json();

            const productDiv = document.getElementById('product');
            productDiv.innerHTML = `
                <h1>${product.title}</h1>
                <img src="${product.image}" alt="${product.title}">
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
            `;

            displayRelatedProducts(product.category);
        } catch (error) {
            console.error('Erro ao buscar o produto:', error);
        }
    };

    const displayRelatedProducts = async (category) => {
        try {
            const response = await fetch(relatedProductsUrl);
            const products = await response.json();

            const relatedProducts = products.filter(p => p.category === category).slice(0, 3);

            const relatedProductsDiv = document.getElementById('related-products');
            relatedProductsDiv.innerHTML = relatedProducts.map(p => `
                <div class="product">
                    <h2>${p.title}</h2>
                    <img src="${p.image}" alt="${p.title}">
                    <p>Price: $${p.price}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Erro ao buscar produtos relacionados:', error);
        }
    };

    updateFooter();

    displayProduct();
});