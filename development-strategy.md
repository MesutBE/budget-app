# Budget-App: development strategy

Building this site one step at a time

## 0. Setup

* `index.html` and folder structure with empty/prepared files.

## 1. DOM & Style

* Create all DOM elements.
* Add external styles `bootstrap` and `webfonts`.

## 2. Init & Log

* `init.js`
* `log.js`

## 3. User Story - 1: Add Budget Balance

A user can add a budget for balance.

__Interactions:__
* Create a listener for `submit` action to `budget-form`.

__Handlers:__ 
* Create a `submitBudgetForm` method to submit budget.
* Create a `showBalance` method to show balance.

## 4. User Story: Add Expense

A user can add expenses.

__Interactions:__
* Create a listener for `submit` action to `expense-form`.

__Handlers:__ 
* Create a `submitExpenseForm` method to submit expense.
* Create a `addExpense` method to reflect expense.

## 5. User Story: Edit & Delete Expense

A user can edit and delete one previously added expense at a time.

__Interactions:__
* Create a listener for `click` action to `expense-list`.

__Handlers:__
* Create a editExpense method to edit expense comment and value.
* Create a deleteExpense method to delete expense.
* Create a totalExpense method to calculate expense and balance values.

## 6. Complete README.md

* Complete README.md for more details about the project.
