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

    const [charityState, setCharity] = useState(data?.charity || {});
    useEffect(()=>{
      setCharity(data?.charity || {})
    },[data])

    return (
        <>
            <Container>
                <h1>{ firstName, lastName }</h1>
            </Container>

            <Container>
                <Card>
                    <Card.Title>My Causes</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-start">
                            {
                                user.charity.map((name) => {
                                    return(<div>
                                        {name}
                                    </div>)
                                })
                            }
                        </div>
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