import { gql } from "@apollo/client";

export const CREATE_DONATION = gql`
  mutation createDonation($user: String!, $charity: String!) {
    createDonation(user: $user, charity: $charity) {
      _id
      user
      charity
    }
  }
`;

export const CREATE_DRIVE = gql`
  mutation createDrive($user: String!, $charity: String!) {
    createDrive(user: $user, charity: $charity) {
      _id
      user
      charity
      drive {
        _id
        goal
      }
    }
  }
`;
