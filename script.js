// Banner 轮播
let index = 0;
const slides = document.querySelectorAll(".banner .slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

// 评论功能
function addComment() {
  const name = document.getElementById("name").value;
  const info = document.getElementById("info").value;
  const content = document.getElementById("content").value;

  if (!name || !content) {
    alert("请填写姓名和评论内容");
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `<strong>${name}</strong>（${info}）：${content}`;
  document.getElementById("commentList").prepend(div);

  document.getElementById("name").value = "";
  document.getElementById("info").value = "";
  document.getElementById("content").value = "";
}
