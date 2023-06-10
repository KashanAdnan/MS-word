const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const strikethrought = document.getElementById("strikethrought");
const increase_size = document.getElementById("increase-size");
const decrease_size = document.getElementById("decrease-size");
const subscript = document.getElementById("subscript");
const superscript = document.getElementById("superscript");
const align_left = document.getElementById("align-left");
const align_center = document.getElementById("align-center");
const align_right = document.getElementById("align-right");
const align_justify = document.getElementById("align-justify");
const clear_all_formatting = document.getElementById("clear-all-formatting");
var styleAdd = document.getElementById("styleVal");
var font_size = 11;
styleAdd.style.fontSize = font_size;
bold.addEventListener("click", () => {
  styleAdd.style.fontWeight = "bold";
});

italic.addEventListener("click", () => {
  styleAdd.style.fontStyle = "italic";
});
underline.addEventListener("click", () => {
  styleAdd.style.textDecoration = "underline";
});
strikethrought.addEventListener("click", () => {
  styleAdd.style.textDecoration = " line-through";
});
increase_size.addEventListener("click", () => {
    font_size++
    console.log(font_size);
  styleAdd.style.fontSize =font_size+"px";
});
decrease_size.addEventListener("click", () => {
    font_size++
    console.log(font_size);
    styleAdd.style.fontSize =font_size+"px";
});
subscript.addEventListener("click", () => {
  styleAdd.style.fontWeight = "bold";
});
superscript.addEventListener("click", () => {
  styleAdd.style.fontWeight = "bold";
});
align_left.addEventListener("click", () => {
  styleAdd.style.textAlign = "left";
});
align_center.addEventListener("click", () => {
  styleAdd.style.textAlign = "center";
});
align_right.addEventListener("click", () => {
  styleAdd.style.textAlign = "right";
});
align_justify.addEventListener("click", () => {
  styleAdd.style.textAlign = "justify";
});
clear_all_formatting.addEventListener("click", () => {
  styleAdd.style =""
});
