
let products = [
    {
        productName: "Laptop",
        price: 50000,
        description: "A high-performance laptop for all your computing needs."
    },
    {
        productName: "Smartphone",
        price: 30000,
        description: "A sleek smartphone with the latest features."
    },
    {
        productName: "Headphones",
        price: 2000,
        description: "Noise-cancelling headphones for an immersive audio experience."
    },
]

function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(products);
            } else {
                reject("No products found");
            }
        }, 2000);
    });
}

function displayProducts(products) {
    products.forEach(product => {
        console.log(`Product Name: ${product.productName}`);
        console.log(`Price: ₹${product.price}`);
        console.log(`Description: ${product.description}`);
        console.log("-----------------------------");
    });
}

function displayProductsOnFrontend(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card';
        
        productDiv.innerHTML = `
            <h3>${product.productName}</h3>
            <p class="price">₹${product.price}</p>
            <p class="description">${product.description}</p>
        `;
        
        productContainer.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const loadingMessage = document.getElementById('loading');
    
    fetchProducts()
        .then(products => {
            loadingMessage.style.display = 'none';
            displayProductsOnFrontend(products);
            displayProducts(products);
        })
        .catch(error => {
            loadingMessage.textContent = error;
            console.error(error);
        });
});

