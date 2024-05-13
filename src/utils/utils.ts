import { Opt } from "../types/type";

// 测试typescript的功能 和 技术调研
const classNamSpace = "util";

const createWaterMark = (
  str: string = "",
  elementId: string = "",
  opt: Opt = {
    row: 4,
    col: 4,
    color: "rgba(239,239,239, 0.74)",
    fontSize: "15px",
  }
) => {
  if (!str) {
    return;
  }

  const el: Element | null = elementId
    ? document.querySelector(`#${elementId}`)
    : document.body;

  if (!el) {
    return;
  }
  const counts = opt.col && opt.row ? opt.col * opt.row : 12;
  const spans: Element[] = createSpan(str, counts);
  const container: Element = document.createElement("div");
  container.setAttribute("class", `${classNamSpace}_container`);
  container.setAttribute("style", adaptStyle(opt));
  for (let i = 0; i < spans.length; i++) {
    container.appendChild(spans[i]);
  }
  el.appendChild(container);
};

const createSpan = (text: string = "", counts: number = 12): Element[] => {
  const spanArray: Element[] = [];
  for (let i = 0; i < counts; i++) {
    const span: Element = document.createElement("span");
    span.setAttribute("class", `${classNamSpace}_water_mark`);
    span.appendChild(document.createTextNode(text));
    spanArray.push(span);
  }
  return spanArray;
};

/**
 * 调整样式
 */
const adaptStyle = (opt: Opt): string => {
  const col = opt.col || 4;
  const row = opt.row || 4;
  const fontSize = opt.fontSize || "15px";
  return `color:${opt.color};
	font-size:${fontSize};
	grid-template-columns:repeat(${col}, ${100 / col}%);
	grid-template-rows: repeat(${row}, ${100 / row}%);`;
};

export default {
  createWaterMark,
};
