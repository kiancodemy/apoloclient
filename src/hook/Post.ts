import { gql, useMutation } from "@apollo/client";
export const createpost = gql`
  mutation ($input: newproduct!) {
    creatproduct(input: $input) {
      id
      name
      description
      quantity
      price
    }
  }
`;

export const usecreatepost = () => {
  const [create, { data, error, loading }] = useMutation(createpost);
  const handlecreate = async (input: any) => {
    await create({ variables: { input } });
  };

  return { handlecreate, error, loading, data };
};
