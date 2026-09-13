// products.js
const products = [
    {
        maSP: "SP01",
        ten: "Laptop Dell",
        gia: 15000000,
        conHang: true
    },
    {
        maSP: "SP02",
        ten: "Chuột Logitech",
        gia: 500000,
        conHang: true
    },
    {
        maSP: "SP03",
        ten: "Bàn phím cơ",
        gia: 1200000,
        conHang: false
    },
    {
        maSP: "SP04",
        ten: "Tai nghe Sony",
        gia: 2500000,
        conHang: true
    },
    {
        maSP: "SP05",
        ten: "Màn hình Samsung",
        gia: 5000000,
        conHang: false
    }
];
// map
const productNames = products.map(product => product.ten);
console.log("Tên sản phẩm:");
console.log(productNames);
// filter
const availableProducts = products.filter(
    product => product.conHang
);
console.log("Sản phẩm còn hàng:");
console.log(availableProducts);
// reduce
const total = products.reduce(
    (sum, product) => sum + product.gia,
    0
);
console.log("Tổng giá trị:", total);
