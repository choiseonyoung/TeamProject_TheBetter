document.addEventListener("DOMContentLoaded", (e) => {
  // const rootPuzzle = document.querySelectorAll('img[data-id="rootPuzzle"]');
  let dragging = false;
  let offset = { x: 0, y: 0 };
  let current = null;
  let i = 1;

  document.addEventListener("mousedown", (e) => {
    offset.x = e.offsetX;
    offset.y = e.offsetY;

    if (
      e.target.tagName === "path" ||
      e.target.tagName === "svg" ||
      e.target.tagName === "circle"
    ) {
      const puzzleA = e.target.closest(".puzzle");
      if (puzzleA) dragging = true;
      if (puzzleA.dataset.id === "rootPuzzle") {
        let newNode = puzzleA.cloneNode(true);
        let st0 = newNode.querySelector(".st0");
        let st1 = new Array();
        st1 = newNode.querySelectorAll(".st1");
        console.log("복사된객체 : ", newNode);
        current = newNode;
        newNode.dataset.id = Math.random().toString(36).substr(2, 10);

        if (puzzleA.classList.contains("oper")) {
          newNode.style.width = "115px";
          st0.style.fill = "#F3722C";
          if (puzzleA.id === "oper-e") {
            st0.style.fill = "#f9c74f";
          }
          for (let i = 0; i < st1.length; i++) {
            st1[i].style.fill = "#FFFFFF";
          }
        } else if (puzzleA.classList.contains("num")) {
          newNode.style.width = "138.5px";
          st0.style.fill = "#18617a";
          st1[0].style.display = "none";
          const input = document.createElement("input");
          input.classList.add("inputNum");
          newNode.appendChild(input);
        }
        newNode.style.height = "120px";
        newNode.dataset.num = i++;
        newNode.style.zIndex = 2;
        newNode.style.position = "absolute";
        newNode.style.WebkitUserDrag = "none";
        newNode.style.left = e.pageX - offset.x + "px";
        newNode.style.top = e.pageY - offset.y + "px";

        document.querySelector(".sketchBook").appendChild(newNode);
      } else {
        current = puzzleA;
      }
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (dragging) {
      current.style.left = e.pageX - offset.x + "px";
      current.style.top = e.pageY - offset.y + "px";
    }
  });

  document.addEventListener("mouseup", (e) => {
    dragging = false;
    // let sibal1 = e.pageX;
    // let sibal2 = e.pageY;

    //   if (current.id == "oper-e") {
    //     let inputNumList = current.parentElement.querySelectorAll(".inputNum");
    //     let result = 0;
    //     for (let i = 0; i < inputNumList.length; i++) {
    //       result += parseInt(inputNumList[i].value);
    //     }
    //     alert(result);
    //   }
    group();
  });

  group = () => {
    // 스케치북에 있는 모든 퍼즐의 위치값 근처 범위

    let puzzle = current.parentElement.querySelectorAll(".puzzle");
    if (puzzle.length > 1) {
      let sibalx = current.getBoundingClientRect().left;
      let sibaly = current.getBoundingClientRect().top;
      for (let i = 0; i < puzzle.length; i++) {
        let p = puzzle[i];
        let left = p.getBoundingClientRect().left - 20;
        let top = p.getBoundingClientRect().top - 20;
        let right = left + p.getBoundingClientRect().width + 2 * 20;
        let bottom = top + p.getBoundingClientRect().height + 2 * 20;
        if (
          sibalx > left &&
          sibalx < right &&
          sibaly > top &&
          sibaly < bottom
        ) {
          //   if (sibal1 > left + p.getBoundingClientRect().width + 20) {
          alert("거지같다");
          //   }
        }
      }
    }
  };
});
