function updateCaseNumber(isIncreasing) {
  const caseInput = document.getElementById("case-input");
  let caseNumber = caseInput.value;

  if (isIncreasing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (isIncreasing == false && caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  //Update CaseTotal
  const casePrice = 59;
  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = caseNumber * casePrice;
}
//handle casing event handler

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber(false);
});
