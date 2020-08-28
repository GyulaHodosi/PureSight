var productIndex = 1;

function nextProductIndex() {
  productIndex++;
}

function previousProductIndex() {
  productIndex--;
}

function setProductIndex(index) {
  productIndex = index;
}

export {
  productIndex,
  previousProductIndex,
  nextProductIndex,
  setProductIndex,
};
