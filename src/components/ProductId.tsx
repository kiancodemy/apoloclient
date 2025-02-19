import { useParams } from "react-router";
import { GET_onePRODUCTS } from "../hook/AllProducts";
import { useQuery } from "@apollo/client";
export default function ProductId() {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_onePRODUCTS, {
    variables: { id: id },
  });

  return <div>{data?.Product?.name}</div>;
}
