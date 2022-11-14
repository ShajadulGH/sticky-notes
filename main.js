var addNote = document.querySelector("#add-note");
var textNote = document.querySelector("#note-text");
var doneIcon = document.querySelector("#done-icon");
var xIcon = document.querySelector("#x-icon");
var container3 = document.querySelector(".container-3");
var container2 = document.querySelector(".container-2");
textNote.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Working");
    createNote();
  } else {
  }
});
addNote.addEventListener("click", () => {
  typeNote();
});
xIcon.addEventListener("click", () => {
  closeNote();
});
doneIcon.addEventListener("click", () => {
  createNote();
});
const typeNote = () => {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
};
const createNote = () => {
  var textValue = document.querySelector("#note-text").value;
  let node0 = document.createElement("div");
  let node1 = document.createElement("h1");
  node1.innerHTML = textValue;
  node1.setAttribute(
    "style",
    "width:250px; height:250px; padding:25px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; overflow:hidden;font-size:25px;"
  );
  node1.style.margin = randomMargin();
  node1.style.background = randomColor();
  node1.style.transform = randomRotate();
  node0.appendChild(node1);
  container2.insertAdjacentElement("beforeend", node0);
  textNote.value = "";
  node0.addEventListener("mouseenter", () => {
    node0.style.transform = "scale(1.1)";
    node0.style.transition = "1s";
  });
  node0.addEventListener("mouseleave", () => {
    node0.style.transform = "scale(1)";
  });
  node0.addEventListener("dblclick", () => {
    node0.remove();
  });
};
const closeNote = () => {
  container3.style.display = "none";
};
const randomMargin = () => {
  var margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  return margin[Math.floor(Math.random() * margin.length)];
};
const randomRotate = () => {
  var rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-8deg)",
  ];
  return rotate[Math.floor(Math.random() * rotate.length)];
};
const randomColor = () => {
  var color = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];
  return color[Math.floor(Math.random() * color.length)];
};
