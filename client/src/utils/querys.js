import { gql } from "@apollo/client";

export const QUERY_CHARITY = gql`
  query Charities($charityId: String) {
  charity(id: $charityId) {
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
