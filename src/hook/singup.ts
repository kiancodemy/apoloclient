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
const login_MUTATION = gql`
  mutation ($data: login!) {
    login(data: $data) {
      _id
      name
      email
    }
  }
`;
export const checkAuth = gql`
  query chechauth {
    checkauth {
      status
    }
  }
`;
export const logoutt = gql`
  mutation {
    logout {
      status
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
export const uselogin = () => {
  const [login, { data, loading, error }] = useMutation(login_MUTATION);

  const handlelogin = async (user: {
    email: string | undefined;
    password: string | undefined;
  }) => {
    await login({ variables: { data: user } });
  };

  return { handlelogin, data, loading, error };
};
export const uselogout = () => {
  const [logout, { data, loading, error }] = useMutation(logoutt);

  return { logout, data, loading, error };
};

export default useSignup;
