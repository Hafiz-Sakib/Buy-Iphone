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

  //update SubTotal
  calculateTotal();
}
function getinputValue(productInputFieldId) {
  const productInput = document.getElementById(productInputFieldId);
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getinputValue("phone-number") * 1219;
  const caseTotal = getinputValue("case-number") * 59;
  subTotal = phoneTotal + caseTotal;
  const tax = subTotal * 0.1;
  const totalPrice = subTotal + tax;
  //Update On HTML
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
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
