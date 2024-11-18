// shoppingList.js

// 创建一个购物清单数组
let shoppingList = ["苹果", "香蕉", "牛奶"];

// 向购物清单中添加两样物品
shoppingList.push("面包", "鸡蛋");
console.log("更新后的购物清单：", shoppingList);

// 从购物清单中删除最后一项物品
shoppingList.pop();
console.log("删除最后一项后的清单：", shoppingList);

// 创建一个函数检查购物车是否满了
function checkCartSize(list) {
    if (list.length > 5) {
        console.log("你的购物车满了");
    }
}
checkCartSize(shoppingList);

// 使用循环语句遍历购物清单
for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
}

// 创建一个函数，检查物品是否在购物清单中
function isItemInList(item, list) {
    return list.includes(item) ? `${item} 在购物清单中` : `${item} 不在购物清单中`;
}
console.log(isItemInList("香蕉", shoppingList));
console.log(isItemInList("橙子", shoppingList));

// 创建一个购物物品对象
let shoppingItem = {
    name: "苹果",
    price: 2.5, // 单价
    quantity: 3 // 数量
};

console.log("购物物品对象：", shoppingItem);
