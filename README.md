
# AmbulnzLLC - Frontend challenge - Pizza webapp

The challenge is to develop a small web app that allows users to order pizza.

First of all we'll display the list of pizzas with ingredients and prices. Data will be loaded from a backend that I develop in spring-boot.

When the user chooses something from the list the item should appear on cart (on the top right of the page).

There will be a button to confirm the order and the user should go to another page and see a message like this: "Your order will be delivered in x minutes".

The application must be single page and JS-based using Angular or ReactJS.

Link to the challenge: (https://github.com/AmbulnzLLC/frontend-challenge)


## Features and technologies

- Data from a spring-boot backend
- Load data using react-query
- React Context Api to share data in the entire app
- styled-components


## Next steps

- Summary of the last orders (items and total price);
- Add and remove quantity on items;
- Add unit and e2e tests (cypress and jest);
- Deploy of frontend and backend;
- Discounts on items;
