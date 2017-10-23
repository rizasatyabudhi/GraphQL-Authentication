import gql from "graphql-tag";
import { graphql } from "react-apollo";

export default gql`
  {
    user {
      id
      email
    }
  }
`;
