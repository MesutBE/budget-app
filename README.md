
# Project Budget-App

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development Strategy](#development-strategy)
- [Screen Capture of Project](#screen-capture-of-project)
- [Project Status](#project-status)
- [Contact](#contact)
- [Live Project](https://mesutbe.github.io/budget-app/)

## General info

This project is gathered from [Budget-App tutorial](https://www.youtube.com/watch?v=m_HJ3juuFvo) from FCC, and upgraded step by step.
If you want to see how it is growing see [branches](https://github.com/MesutBE/budget-app/branches).

What you can do with this application:

- Save your budget and expenses. And then calculate what you have.
- You can delete and edit saved expenses.

## Technologies

Project is created with:

- JScript ES6
- HTML5 / CSS3
- Bootstrap
- Google API
- jquery

## Setup

Clone this repository and start using it with your editor.

## Development Strategy

Building this site one step at a time

### 0. Setup

* `index.html` and folder structure with empty/prepared files.

### 1. DOM & Style

* Create all DOM elements.
* Add external styles `bootstrap` and `webfonts`.

### 2. Init & Log

* `init.js`
* `log.js`

### 3. User Story - 1: Add Budget Balance

A user can add a budget for balance.

__Interactions:__
* Create a listener for `submit` action to `budget-form`.

__Handlers:__ 
* Create a `submitBudgetForm` method to submit budget.
* Create a `showBalance` method to show balance.

### 4. User Story: Add Expense

A user can add expenses.

__Interactions:__
* Create a listener for `submit` action to `expense-form`.

__Handlers:__ 
* Create a `submitExpenseForm` method to submit expense.
* Create a `addExpense` method to reflect expense.

### 5. User Story: Edit & Delete Expense

A user can edit and delete one previously added expense at a time.

__Interactions:__
* Create a listener for `click` action to `expense-list`.

__Handlers:__
* Create a editExpense method to edit expense comment and value.
* Create a deleteExpense method to delete expense.
* Create a totalExpense method to calculate expense and balance values.

### 6. Complete README.md

* Complete README.md for more details about the project.

## Screen Capture of Project

![Screenshot from 2020-04-18 05-28-47](https://user-images.githubusercontent.com/59531743/79627069-84d4a680-8135-11ea-8c7b-2d9e8998234e.png)

## Project Status

Project finished

## Contact

You can contact me using [my repository](https://mesutbe.github.io/) whenever you want.