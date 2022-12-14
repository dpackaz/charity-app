import React, { useState, useEffect } from "react";
import "./user.css";
import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Charity from "./Charity.js";

const User = () => {
  //TODO: add charity relationships
  // I assume that I am logged in when i get here
  // When I load into the webpage, I get to get my user_id
  // using my user_id I want to query my user information using the user query
  // given a array of charity Ids
  // I want to pull the names of the charity using the charity query
  // then I want to populate the page with my user information
  // and charities with my charitie's name
  //
  const [myCharities, setMyCharities] = useState("");
  const { loading, data } = useQuery(QUERY_USER, {
    variables: {
      userId: localStorage.getItem("user_id"),
    },
    onCompleted: populate,
  });

  let causes = [];
  let friendCauses = [];
  //let totalDonations = donations.reduce((a, b) => a + b);

  const [charityState, setCharity] = useState([]);

  function populate() {
    let array = [];
    data.user.charities.forEach((charity) => {
      array.push(charity);
    });
    setCharity(array);
  }

  return (
    <>
      <Container>
        {/* <h1>{data.firstName + " " + data.lastName}</h1> */}
      </Container>

      <Container>
        <Card>
          <Card.Title>My Causes</Card.Title>
          <Card.Text>
            <div className="d-flex flex-column justify-content-start">
              {charityState.map((data) => {
                return <Charity charityID={data}/>;
              })}
            </div>
          </Card.Text>
        </Card>

        <Card>
          <Card.Title>Donate</Card.Title>
          {}
        </Card>
      </Container>
    </>
  );
};

export default User;
