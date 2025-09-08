export function setScreenSize(editorDom) {
  let screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
  let screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
  const width = 1920, height = 1080
  let xScale = screenWidth / width
  let yScale = screenHeight / height
  editorDom.style.cssText += `;transform: scale(${xScale}, ${yScale})`
}