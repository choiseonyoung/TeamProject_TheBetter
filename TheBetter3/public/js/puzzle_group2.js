document.addEventListener("DOMContentLoaded", (e) => {
  const puzzle = document.querySelectorAll(".puzzle");
  const rootPuzzle = document.querySelectorAll('g[data-id="rootPuzzle"]');
  //   const
  let dragging = false; // 마우스 다운된 상태냐?
  let offset = { x: 0, y: 0 };
  let current = null;
  let i = 1;
  let x = null;
  let y = null;

  // 마우스가 눌려있을 때
  document.addEventListener("mousedown", (e) => {
    offset.x = e.offsetX;
    offset.y = e.offsetY;
    // alert(e.target.parentElement.tagName);
    // 정확히 퍼즐을 선택했을 때만 실행되게
    if (e.target.classList.contains("puzzle")) dragging = true;
    if (e.target.parentElement.dataset.id === "rootPuzzle") {
      let newNode = e.target.parentElement.cloneNode(true);
      current = newNode;
      newNode.dataset.id = Math.random().toString(36).substr(2, 10);
      // 10자리랜덤문자열생성
      //   newNode.dataset.num = i++;
      //   newNode.style.zIndex = 1000;
      //   newNode.style.left = e.pageX - offset.x + "px";
      //   newNode.style.top = e.pageY - offset.y + "px";
      // alert(e.pageX);
      //   alert(offset.x);
      x = e.clientX - offset.x;
      y = e.clientY - offset.y;
      //   newNode.setAttribute(
      //     "transform",
      //     "translate(" + e.pageX + "," + e.pageY + ")"
      //   );
      newNode.setAttribute("transform", "translate(" + x + "," + y + ")");
      //   newNode.attr("transform", "translate(" + e.pageX + "," + e.pageY + ")");
      document.querySelector(".g_sketch").appendChild(newNode);
    } else {
      current = e.target.parentElement;
    }
  });

  document.addEventListener("mousemove", (e) => {
    // console.log(current);
    // console.log(e.target.dataset.id);
    if (dragging) {
      x = e.clientX - offset.x;
      y = e.clientY - offset.y;
      current.setAttribute("transform", "translate(" + x + "," + y + ")");
      //   current.style.left = e.pageX - offset.x + "px";
      //   current.style.top = e.pageY - offset.y + "px";
    }
  });

  document.addEventListener("mouseup", (e) => {
    dragging = false;
    //   alert(current.dataset.id);
  });
});
