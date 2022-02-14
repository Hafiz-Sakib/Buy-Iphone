function updateProductInfo(
  productInputFieldId,
  productPriceId,
  productPrice,
  isIncreasing
) {
  const ProductInputField = document.getElementById(productInputFieldId);
  console.log(ProductInputField.value);
  let productQuantity = ProductInputField.value;

  if (isIncreasing == true) {
    productQuantity = parseInt(productQuantity) + 1;
  } else if (isIncreasing == false && productQuantity > 0) {
    productQuantity = parseInt(productQuantity) - 1;
  }
  ProductInputField.value = productQuantity;
  //Update CaseTotal
  const productNewPrice = document.getElementById(productPriceId);
  productNewPrice.innerText = productQuantity * productPrice;
}

//handle phone event Handler
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductInfo("phone-number", "phone-total", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductInfo("phone-number", "phone-total", 1219, false);
});

//handle casing event handler
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductInfo("case-number", "case-total", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductInfo("case-number", "case-total", 59, false);
});
