# GivDex, the Charity Index

## Description

This application is meant to make it easier for people to donate to charitable causes by providing them with a place where they can keep track of their favorite charities and see what charities their friends support

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Code Snippets](#code-snippets)<br />
- [Usage](#usage)<br />
- [Contributing to This Repository](#how-to-contribute-to-this-repository)<br />
- [Questions](#questions)<br />

## Overview of the application

<img src="./client/public/givdex-overview.gif">

## Technologies Used

### Front end:

- HTML / CSS / JavaScript
- Fetch / AJAX
- Pledge API
- Bootstrap
- Local Storage
- AM Maps

### Back End:

- GraphQL
- Apollo
- Node
- NPM
- Express
- MongoDB
- Mongoose
- JWT

## Code Snippets

The following code snippet demonstrates key data that is retrieved from our local database and the Pledge API through our Users Query.

```javascript
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
```

This next snippet displays the client-side event listener that calls the Pledge API to return the charity data.

```javascript
if (!data.charity) {
      fetch("https://api.pledge.to/v1/organizations/" + orgId, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + process.env.PLEDGE_API_KEY,
        },
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            response.then((json) => {
              let charityResponse = {
                address: json.street1 + ", " + json.city + " " + json.region,
                causes: [],
                charityID: json.id,
                logo_url: json.logo_url,
                mission: json.mission,
                name: json.name,
                pledge_Url: json.website_url,
              };
              setCharity(charityResponse);
              console.log(charityResponse);
            });
          } else {
            console.log("Error with request");
          }
```

## Usage

Simply visit the site using the following link!

[GivDex](https://shielded-earth-98576.herokuapp.com/)

## How to Contribute to This Repository:

    Contact one of us via email

## Questions

    If you have any questions about this project, feel free to reach out to one of us at:

<a href="danielapacker@gmail.com">danielapacker@gmail.com</a><br/>
<a href="willcrain1@gmail.com">willcrain1@gmail.com</a><br/>
<a href="phliphuang2@gmail.com">phliphuang2@gmail.com</a><br/>
<a href="mpete3d@gmail.com">mpete3d@gmail.com</a>
