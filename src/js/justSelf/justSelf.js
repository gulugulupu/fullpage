/*eslint-disable */

export default function (Nodes, index) {
  Nodes.forEach((item) => {
    item.classList.remove("active");
  });
  Nodes[index].classList.add("active");
}
