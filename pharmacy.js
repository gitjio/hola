// Initialize inventory, sales, and orders arrays
let inventory = [];
let sales = [];
let orders = [];

function addProduct() {
    // Implement logic to add a product to the inventory
    const productName = prompt("Enter product name:");
    const productQuantity = parseInt(prompt("Enter product quantity:"));

    if (productName && productQuantity) {
        inventory.push({ name: productName, quantity: productQuantity });
        updateInventoryList();
    }
}

function updateInventoryList() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";
    
    for (const product of inventory) {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - Quantity: ${product.quantity}`;
        inventoryList.appendChild(listItem);
    }
}

function recordSale() {
    // Implement logic to record a sale and update inventory
    const productName = prompt("Enter product name for the sale:");
    const quantitySold = parseInt(prompt("Enter quantity sold:"));

    if (productName && quantitySold) {
        const productIndex = inventory.findIndex(product => product.name === productName);
        if (productIndex !== -1 && inventory[productIndex].quantity >= quantitySold) {
            sales.push({ name: productName, quantity: quantitySold });
            inventory[productIndex].quantity -= quantitySold;
            updateSalesList();
            updateInventoryList();
        } else {
            alert("Product not found or insufficient quantity in inventory.");
        }
    }
}

function updateSalesList() {
    const salesList = document.getElementById("salesList");
    salesList.innerHTML = "";
    
    for (const sale of sales) {
        const listItem = document.createElement("li");
        listItem.textContent = `${sale.name} - Quantity Sold: ${sale.quantity}`;
        salesList.appendChild(listItem);
    }
}

function placeOrder() {
    // Implement logic to place an order
    const productName = prompt("Enter product name to order:");
    const quantityToOrder = parseInt(prompt("Enter quantity to order:"));

    if (productName && quantityToOrder) {
        orders.push({ name: productName, quantity: quantityToOrder });
        updateOrderList();
    }
}

function updateOrderList() {
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = "";
    
    for (const order of orders) {
        const listItem = document.createElement("li");
        listItem.textContent = `${order.name} - Quantity Ordered: ${order.quantity}`;
        orderList.appendChild(listItem);
    }
}
