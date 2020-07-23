export const setArea = function(el, initVal) {
  let widthZoomRatio = el.width / el.naturalWidth;
  let heightZoomRatio = el.height / el.naturalHeight;
  let coords = [];
  coords = initVal.map((item, index) => {
    if (index % 2 === 0) {
      return widthZoomRatio * item;
    } else {
      return heightZoomRatio * item;
    }
  });
  return coords;
};
