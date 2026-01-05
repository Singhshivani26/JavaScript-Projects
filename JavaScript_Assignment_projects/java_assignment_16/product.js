// Step 1: XML string (can be loaded from the 'products.xml' file)
var xmlString = `
<products>
    <product id="1">
        <name>Computer</name>
        <price>1000</price>
        <quantity>10</quantity>
        <description>A powerful computer with 16GB of RAM and a 1TB hard drive.</description>
    </product>
    <product id="2">
        <name>Monitor</name>
        <price>300</price>
        <quantity>20</quantity>
        <description>A 27-inch, 1080p monitor with a fast refresh rate.</description>
    </product>
    <product id="3">
        <name>Keyboard</name>
        <price>50</price>
        <quantity>30</quantity>
        <description>A wireless keyboard with a built-in touchpad.</description>
    </product>
</products>`;

// Step 2: Parse the XML string using DOMParser
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Step 3: Function to display products in the table
function displayProducts() {
    var tableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    var products = xmlDoc.getElementsByTagName('product');
    
    // Clear any previous rows in the table
    tableBody.innerHTML = '';

    // Loop through products and display them
    for (var i = 0; i < products.length; i++) {
        var name = products[i].getElementsByTagName("name")[0].textContent;
        var price = products[i].getElementsByTagName("price")[0].textContent;
        var quantity = products[i].getElementsByTagName("quantity")[0].textContent;
        var description = products[i].getElementsByTagName("description")[0].textContent;
        
        var row = tableBody.insertRow();

        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = price;
        row.insertCell(2).textContent = quantity;
        row.insertCell(3).textContent = description;
    }
}

// Step 4: Function to search for a product by name
function searchProduct() {
    var searchQuery = document.getElementById('search-bar').value.toLowerCase();
    var products = xmlDoc.getElementsByTagName('product');
    
    // Filter products by name
    var filteredProducts = [];
    for (var i = 0; i < products.length; i++) {
        var name = products[i].getElementsByTagName("name")[0].textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            filteredProducts.push(products[i]);
        }
    }

    // Display only the filtered products
    var tableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous rows
    filteredProducts.forEach(product => {
        var name = product.getElementsByTagName("name")[0].textContent;
        var price = product.getElementsByTagName("price")[0].textContent;
        var quantity = product.getElementsByTagName("quantity")[0].textContent;
        var description = product.getElementsByTagName("description")[0].textContent;

        var row = tableBody.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = price;
        row.insertCell(2).textContent = quantity;
        row.insertCell(3).textContent = description;
    });
}

// Step 5: Initially load all products
displayProducts();
