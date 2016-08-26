# _Pizza Order Form_

#### _Basic pizza order form, 08.26.2016_

#### By _**Blake Scala**_

## Description

_This application is a basic order form for a pizza place. Currently, it only works for one pizza at a time. It gathers user input for which toppings & size of pizza they would like, and they displays a receipt with the price. If they want it delivered, it displays a form to enter their address and thanks them for the order._

## Specs

| Behavior                                                      	| Input 	| Output 	|
|----------	|-------	|--------	|
| Website allows users to choose pizza toppings 	| [Vegan Cheese / Peppers...]  | "Your Pizza: Vegan Cheese ..." |
| Website allows users to choose multiple pizza toppings 	| [Vegan Cheese / Onions/ ...]  | "Your Pizza: Vegan Cheese & Onions ..." |
| Website allows users to choose pizza size |  Sm. / Med. / Lg. | "Your Pizza: Large" |
| Output a final cost |  Vegan Cheese ($2), Mushrooms ($2), Medium ($8). | "Your Pizza Costs $12" |
| Website allows users to order more than one pizza | 2 pizzas | "Pizza 1: Vegan cheese and mushrooms", "Pizza 2: Onions and Peppers" |

## Setup/Installation Requirements

* _Open terminal_
* _Run the command 'git clone https://github.com/BlakeScala/pizza-shop'_
* _Open index.html_

## Known Bugs

* _The application cannot yet accept multiple pizzas on one order._
* _If all toppings are chosen, the toppings array goes outside of the output divider._

## Support and contact details

_If you have any questions or comments, email me at blakescala@gmail.com_

## Technologies Used

_HTML, CSS, Javascript, jQuery, Atom, Git_

### License

*This application is licensed under the MIT license*

Copyright (c) 2016 **_Blake Scala_**
