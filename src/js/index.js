// In index.js  

// Populate product templates  
function populateProductTemplates(products) {
    // Loop through products to generate HTML
}

// Display products on page 
function displayProducts(populatedHtml) {
    // Insert product HTML into DOM
}

// In populateProductTemplates()
let populatedProductHtml = '';

// In displayProducts()
displayProducts(populatedProductHtml);

// In index.js
try {
    // Show loading indicator
    const products = await dataSource.getProducts();
} catch (err) {
    console.log('Error getting products', err);
    showErrorMessage('Error fetching products. Please try again later.');
}

try {
    const productTemplate = await fetch('./templates/product.html');
} catch (err) {
    console.log('Error fetching template', err);
    showErrorMessage('Error loading product template. Please try again later.');
}

// In router.js
function showProductsForCurrentRoute() {

    // Get products
    const products = //...

    // Display products
    const displayedProducts = displayProducts(products);

    // Verify correct products displayed
    console.log('Products displayed:', displayedProducts);
}
