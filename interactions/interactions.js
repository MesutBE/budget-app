function eventListeners() {
    const budgetForm = document.getElementById("budget-form");

    const ui = new UI();

    // budget submit form;
    budgetForm.addEventListener("submit", function (event) {
        event.preventDefault();
        ui.submitBudgetForm();
    });
    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();
        ui.submitExpenseForm();
    });
    expenseList.addEventListener("click", function () {
        if (event.target.parentElement.classList.contains("edit-icon")) {
            ui.editExpense(event.target.parentElement);
        } else if (event.target.parentElement.classList.contains("delete-icon")) {
            ui.deleteExpense(event.target.parentElement);
        }
    });
}