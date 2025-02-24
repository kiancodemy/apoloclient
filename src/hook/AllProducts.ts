import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts(
    $price: String
    $quantity: String
    $page: String
    $limit: String
  ) {
    Products(
      filter: { price: $price, quantity: $quantity, page: $page, limit: $limit }
    ) {
      length

      products {
        id
        name
        price
        quantity
      }
    }
  }
`;

export const GET_onePRODUCTS = gql`
  query ($id: String!) {
    Product(id: $id) {
      id
      name
      description
      quantity
      price
    }
  }
`;
