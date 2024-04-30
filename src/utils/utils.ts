// 测试typescript的功能 和 技术调研

const commonStyle: string =
  "position: absolute;transform: rotate(-30deg);pointer-events: none";

const createWaterMark = (elemmentId: string = "", str: string = "") => {
  if (!elemmentId || !str) {
    return;
  }

  const el: Element | null = document.querySelector(`#${elemmentId}`);
  if (!el) {
    return;
  }

  const spans: Element[] = createSpan(str);
};

const createSpan = (text: string = ""): Element[] => {
  const spanArray: Element[] = [];
  for (let i = 0; i < 10; i++) {
    const span: Element = document.createElement("span");
    const style: string = `${commonStyle};left:${i * 200}px;top:${-30 * i}px;`;
    span.setAttribute("style", style);
    span.appendChild(document.createTextNode(text));
    spanArray.push(span);
  }
  return spanArray;
};

export default {
  createWaterMark,
};
