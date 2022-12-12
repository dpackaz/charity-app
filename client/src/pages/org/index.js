import {React, useEffect} from "react";
import './Org.css'
import {Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
const Org = () => {
    let {orgId} = useParams();
    return(
        <Container>
            <h1>test
            </h1>
            this is a Org page
            <p>
                {orgId}
            </p>
        </Container>
    )
}

export default Org;