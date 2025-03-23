let dish = [
    { name: "Rau sạch", catagory: "Đồ ăn"},
    { name: "Thịt lợn", catagory: "Đồ ăn"},
    { name: "Pepsi không calo", catagory: "Nước"},
    { name: "Cocacola", catagory: "Nước"},
    { name: "Cờ lê", catagory: "Dụng cụ"},
    { name: "Tuy vít", catagory: "Dụng cụ"},
];
const categoryFilter = document.getElementById("categoryFilter");// Lấy ra danh mục được chọn để hiển thị.
const filterBtn = document.getElementById("btn");//Lấy ra để khi bấm thì hiển thị
const foodList = document.getElementById("foodList");//Lấy ra để hiển thị  

// Hiển thị danh sách
function renderProducts(filteredProducts) {
    foodList.innerHTML = "";
    //Duyệt qua danh sách sản phẩm
    filteredProducts.forEach(product => {
    // Thêm nội dung vào danh sách
    const li = document.createElement("li");
    li.innerHTML = `<b>Tên đồ ăn:</b> ${product.name} - <b>Danh mục:</b> ${product.catagory}`;
    foodList.appendChild(li);
    });
}
renderProducts(dish);// Hiển thi danh sách khi tải lại trang

// Chức năng của nút
filterBtn.addEventListener("click", function() {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === "all") {
        renderProducts(dish);
    } else {
        const filteredProducts = dish.filter(product => product.catagory === selectedCategory);
        renderProducts(filteredProducts);
    }
});