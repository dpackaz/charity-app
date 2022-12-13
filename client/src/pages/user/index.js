import React, { useState } from 'react';
import "./user.css";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";


const User = () => {
    //TODO: add charity relationships
    const [myCharities, setMyCharities] = useState("");
    const { loading, data } = useQuery("charities")

    let causes = [];
    let friendCauses = [];
    let achievements = [];
    let totalDonations = donations.reduce((a, b) => a + b);


    return (
        <>
            <Container>
                <h1>{ firstName, lastName }</h1>
            </Container>

            <Container>
                <Card>
                    <Card.Title>My Causes</Card.Title>
                    <Card.Text>
                        <ul>
                        <li>{cause[0]}</li>
                        <li>{cause[1]}</li>
                        <li>{cause[2]}</li>
                        </ul>
                    </Card.Text>
                </Card>

                <Card>
                    <Card.Title>Friends' Causes</Card.Title>
                        <ul>
                        
                        </ul>
                </Card>

                <Card>
                    <Card.Title>Total Donations</Card.Title>
                        {totalDonations}
                </Card>

                <Card>
                    <Card.Title>Achievements</Card.Title>
                        <ul>

                        </ul>
                </Card>
            </Container>
            
        </>
    )
}
};