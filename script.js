function calculateLoan() {
    let principal = parseFloat(document.getElementById('principal').value);
    let interestPer100 = parseFloat(document.getElementById('interest').value);
    let months = parseInt(document.getElementById('months').value);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid Principal Amount");
        return;
    }
    if (isNaN(interestPer100) || interestPer100 < 0) {
        alert("Please enter a valid Interest amount per 100 principal");
        return;
    }
    if (isNaN(months) || months <= 0) {
        alert("Please enter a valid Duration (Months)");
        return;
    }

    // Convert interest per 100 principal to annual interest rate in percentage
    // E.g., interestPer100 = 1 means 1% annual interest rate
    let annualRate = interestPer100;

    let monthlyRate = annualRate / 12 / 100;

    let emi;
    if (monthlyRate === 0) {
        emi = principal / months;
    } else {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);
    }

    let totalPayable = emi * months;
    let interestAmount = totalPayable - principal;

    document.getElementById('netAmount').value = totalPayable.toFixed(2);
    document.getElementById('interestAmount').value = interestAmount.toFixed(2);
    document.getElementById('installment').value = emi.toFixed(2);
}