// 测试typescript的功能 和 技术调研
const classNamSpace = "util";

const commonStyle: string =
  "position: absolute;transform: rotate(-30deg);pointer-events: none";

const createWaterMark = (str: string = "", elementId: string = "") => {
  if (!str) {
    return;
  }

  const el: Element | null = elementId
    ? document.querySelector(`#${elementId}`)
    : document.body;

  if (!el) {
    return;
  }

  const spans: Element[] = createSpan(str);
  const container: Element = document.createElement("div");
  container.setAttribute("class", `${classNamSpace}_container`);
  for (let i = 0; i < spans.length; i++) {
    container.appendChild(spans[i]);
  }
  el.appendChild(container);
};

const createSpan = (text: string = ""): Element[] => {
  const spanArray: Element[] = [];
  for (let i = 0; i < 10; i++) {
    const span: Element = document.createElement("span");
    const style: string = `${commonStyle};left:${i * 200}px;top:${30 * i}px;`;
    span.setAttribute("style", style);
    span.setAttribute("class", `${classNamSpace}_water_mark`);
    span.appendChild(document.createTextNode(text));
    spanArray.push(span);
  }
  return spanArray;
};

export default {
  createWaterMark,
};
