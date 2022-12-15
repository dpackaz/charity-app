import { gql } from "@apollo/client";

export const QUERY_CHARITY = gql`
  query charity($charityId: String) {
    charity(id: $charityId) {
      _id
      name
      mission
      address
      website_Url
      pledge_Url
      logo_Url
      causes
    }
  }
`;

export const QUERY_CHARITIES = gql`
  query charities {
    charities {
      address
      causes
      charityID
      logo_Url
      mission
      name
      pledge_Url
      website_Url
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    firstName
    lastName
    email
    password
    friends {
      firstName
      lastName
    }
    charities {
      address
      causes
      charityID
      logo_Url
      mission
      name
      pledge_Url
      website_Url
    }
  }
`;
export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      firstName
      lastName
      charities
      friends {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_FRIENDS = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      friends {
        _id
      }
    }
  }
`;
