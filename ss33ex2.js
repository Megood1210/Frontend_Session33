const text = document.getElementById("textInput"); // Lấy text  để lấy ra độ dài chuỗi
const charCount = document.getElementById("charCount");// Lấy charCount để hiện thị độ dài
const checkButton = document.getElementById("check");// Lấy check để bấm thì mới hiển thị
//Chức năng button
checkButton.addEventListener("click", function() {
    let count = text.value.length; 
    charCount.textContent = count + " ký tự";  
});