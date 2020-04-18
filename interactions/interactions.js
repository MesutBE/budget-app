function eventListeners() {
    const budgetForm = document.getElementById("budget-form");

    const ui = new UI();

    // budget submit form;
    budgetForm.addEventListener("submit", function (event) {
        event.preventDefault();
        ui.submitBudgetForm();
    });
}