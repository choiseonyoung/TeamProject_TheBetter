const magnet = new Magnet();
magnet.distance(30);
magnet.attractable(true);
magnet.allowCtrlKey(true);

document.addEventListener("DOMContentLoaded", (e) => {
  const puzzle = document.querySelectorAll("img.puzzle");
  const rootPuzzle = document.querySelectorAll('img[data-id="rootPuzzle"]');
  let dragging = false; // 마우스 다운된 상태냐?
  let offset = { x: 0, y: 0 };
  let current = null;
  let i = 1;

  let checkbox = document.createElement("input");

  function genPuzzle() {
    const target = document.getElementById("puzzle");

    let block = document.createElement("span");
    block.style.width = `${width}px`;
    block.style.height = `${height}px`;
    block.style.top = `${abTop}px`;
    block.style.left = `${abLeft}px`;
    block.classList.add("block");

    checkbox.setAttribute("type", "hidden");
    checkbox.setAttribute("checked", "");
    checkbox.addEventListener("touchstart", (evt) => evt.stopPropagation());
    checkbox.addEventListener("mousedown", (evt) => evt.stopPropagation());
    checkbox.addEventListener("change", function () {
      let block = this.parentNode;
      if (this.checked) {
        block.style.resize = "none";
        magnet.add(block);
      } else {
        block.style.resize = "both";
        magnet.remove(block);
      }
    });

    block.addEventListener("mousedown", function (e) {
      this.style.zIndex = 10;
    });

    block.addEventListener("click", function () {
      this.style.zIndex = 1;
      this.parentElement.appendChild(this);
    });

    block.addEventListener("dblclick", function () {
      let checkbox = this.querySelector("input[type=checkbox]");
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        magnet.add(this);
      } else {
        magnet.remove(this);
      }
    });

    block.appendChild(checkbox);
    domContainer.appendChild(block);
    return block;
  }

  // 마우스가 눌려있을 때
  document.addEventListener("mousedown", (e) => {
    offset.x = e.offsetX;
    offset.y = e.offsetY;
    // 정확히 퍼즐을 선택했을 때만 실행되게
    if (e.target.classList.contains("puzzle")) dragging = true;
    if (e.target.dataset.id === "rootPuzzle") {
      let newNode = e.target.cloneNode();
      current = newNode;
      newNode.dataset.id = Math.random().toString(36).substr(2, 10);
      // 10자리랜덤문자열생성
      newNode.dataset.num = i++;
      newNode.style.zIndex = 1000;
      newNode.style.left = e.pageX - offset.x + "px";
      newNode.style.top = e.pageY - offset.y + "px";
      document.body.appendChild(newNode);
    } else {
      current = e.target;
    }
    magnet.add(current);
  });

  document.addEventListener("mousemove", (e) => {
    if (dragging) {
      current.style.left = e.pageX - offset.x + "px";
      current.style.top = e.pageY - offset.y + "px";
    }
  });

  document.addEventListener("mouseup", (e) => {
    dragging = false;
  });
  document.getElementById("puzzle").addEventListener("mousedown") = () =>
          magnet.add(genPuzzle());
        magnet.setUseRelativeUnit(true);
});
