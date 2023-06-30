const content = document.querySelector(".content");
// console.log(content);
const input = document.querySelector("input");
const removeBtn = document.querySelector(".remove-all");
let tags = ["Nodejs", "ReactJS"];

createTag();

function createTag() {
  content.innerHTML = ``;
  tags.forEach((tag, idx) => {
    let liTag = `
    <li>
    ${tag}
      <i class="fa-solid fa-xmark" onclick="removeTag(this, ${idx})"></i>
    </li>`;
    content.innerHTML += liTag;
  });
  content.appendChild(input);
  input.focus();
}

function removeTag(tag, idx) {
  tags.splice(idx, 1);
  tag.parentElement.remove();
  input.focus();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.trim();
    if (tag != "" && !tags.includes(tag)) {
      tags.push(tag);
      createTag();
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

removeBtn.addEventListener("click", () => {
  tags.length = 0;
  createTag();
});
