import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    Products {
      id
      name
      description
      quantity
      price
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
