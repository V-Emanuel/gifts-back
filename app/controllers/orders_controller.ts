import type { HttpContext } from "@adonisjs/core/http";
import axios from "axios";
import env from "#start/env";

export default class OrdersController {
  async create({ request }: HttpContext) {
    const body = request.body();

    const formData = {
      cart_token: body.body.card_token,
      currency: "R$",
      discount_code: "disc",
      email: "email@email.com",
      phone: "+51416385",
      presentment_currency: "R$",
      subtotal_amount: 1,
      card_token: "visa",
      customer_token: "qetgdgsdfg",
      order_discount: 0,
      products_total_amount: 1,
      total_amount: 1,
      payment_status: 4,
      line_items: body.body.line_items,
      shipping_address: {
        address1: "Address 1",
        address2: "Address 2",
        address: "Address",
        house_no: "135",
        compartment: "comp",
        neighborhood: "neighborhood",
        city: "city",
        company: "company",
        first_name: "Teste Completo",
        last_name: " ",
        phone: "+5118651268",
        province: "Rio de Janeiro",
        zip: 140101010,
        name: "Name",
        province_code: "RJ",
      },
      billing_address: {
        address1: "Address 1",
        address2: "Address 2",
        address: "Address",
        house_no: "135",
        compartment: "comp",
        neighborhood: "neighborhood",
        city: "city",
        company: "company",
        first_name: "First Name",
        last_name: "Last Name",
        phone: "+5118651268",
        province: "Rio de Janeiro",
        zip: 140101010,
        name: "Name",
        province_code: "RJ",
      },
      shipping: {
        price: 10,
        source: "source",
        title: "Express Shipping",
      },
      payment: {
        payment_gateway_id: "784512369852147",
        amount: 14,
        gateway: "appmax",
        type: "cc",
        boleto_link: "boleto_link",
        boleto_code: "boleto_code",
        boleto_limit_date: "boleto_code",
      },
      discount: {
        value: 10,
        amount: 100,
        value_type: "percentage",
        note: "Discount note",
      },
      customer: {
        id: 10,
        email: "email@email.com",
        first_name: "Nome Completo",
        last_name: " ",
        cpf: 156218321,
      },
      tags: ["test"],
    };

    const options = {
      method: "POST",
      url: `${env.get("SHOP_BASE_URL")}/${env.get("SHOP_SLUG")}/order`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${env.get("SHOP_TOKEN")}`,
      },
      data: formData,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
