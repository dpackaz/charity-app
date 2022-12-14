import React, { useState } from "react";
import "./user.css";
import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

const User = () => {
  //TODO: add charity relationships
  //When I load into the webpage, I want to pull my user information
  const [myCharities, setMyCharities] = useState("");
  const { loading, data } = useQuery(QUERY_USER, { variables: {} });

  let causes = [];
  let friendCauses = [];
  let totalDonations = donations.reduce((a, b) => a + b);

  const [charityState, setCharity] = useState(data?.charity || {});
  useEffect(() => {
    setCharity(data?.charity || {});
  }, [data]);

  return (
    <>
      <Container>
        <h1>{firstName + " " + lastName}</h1>
      </Container>

      <Container>
        <Card>
          <Card.Title>My Causes</Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-start">
              {user.charity.map((name) => {
                return <div>{name}</div>;
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
