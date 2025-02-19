import { gql, useMutation } from "@apollo/client";
import { user } from "../types/user";
const SIGNUP_MUTATION = gql`
  mutation ($data: userdata!) {
    signup(data: $data) {
      name
      email
    }
  }
`;

const useSignup = () => {
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async (user: user) => {
    await signup({ variables: { data: user } });
  };

  return { handleSignup, data, loading, error };
};

export default useSignup;
