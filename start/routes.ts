/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CartsController from "#controllers/carts_controller";
import OrdersController from "#controllers/orders_controller";
import ProductsController from "#controllers/products_controller";
import router from "@adonisjs/core/services/router";

router.get("products", [ProductsController, "show"]);
router.get("products/:id", [ProductsController, "productById"]);
router.post("cart", [CartsController, "create"]);
router.post("order", [OrdersController, "create"]);