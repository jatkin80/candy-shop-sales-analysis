
const items = [{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38
}]

const sales = [{
    itemId: 1,
    quantity: 2
},{
    itemId: 2,
    quantity: 2
},{
    itemId: 3,
    quantity: 3
},{
    itemId: 1,
    quantity: 1
},{
    itemId: 3,
    quantity: 2
}]
const targetAnalysis = [{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 3,
    totalValue: 12.87
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09,
    quantity: 2,
    totalValue: 2.18
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 5,
    totalValue: 11.90
}]

function getTotalItemSales (sales, id) {
return sales.filter(sale => sale.itemId == id);
}

module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    //addTotalSalesToItems,
    //addTotalValueToItems
}