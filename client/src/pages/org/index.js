import { React, useEffect } from "react";
import "./Org.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CHARITY } from "../../utils/querys";

const Org = () => {
  let { orgId } = useParams();
  const { loading, error, data } = useQuery(QUERY_CHARITY, {
    variables: {charityId: orgId },
  });
  console.log(error);
  const [charityState, setCharity] = useState(data?.charity || {});
  
  if (!data.charity) {
    fetch("https://api.pledge.to/v1/organizations/" + orgId)
      .then((response) => {
        if (response.ok) {
          response.then((json) => {
            let charityResponse = {
              address: json.street1 + ", " + json.city + " " + json.region,
              causes: [],
              charityID: json.id,
              logo_url: json.logo_url,
              mission: json.mission,
              name: json.name,
              pledge_Url: json.website_url
            };
            setCharity(charityResponse);
            // Restructure reponse json to match charity from database
            // Upload to database
            // call setCharity
          });
        }
        //invalid Charity Id
        else {
          return(
            <div>There</div>
          )
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!loading) {
    console.log(data);
    console.log(data.charity.causes > 0);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="">
      <h1 className="text-center">{charityState.name}</h1>
      <h2 className="text-center">
        <img src={charityState.logo} alt="Organization Logo" />
      </h2>
      <p>{charityState.mission}</p>
      {/* Address */}
      <div className="mb-3">{charityState.address}</div>
      <div className="bg-color-grey">
        <div className="">
          <h3 className="fs-3 text-decoration-underline">Causes</h3>
        </div>
        <div className="d-flex justify-content-start">
          {
            charityState.causes > 0 ? (
              charityState.causes.map((cause, index) => {
                return (
                  <div key={"cause-" + index} className="p-2">
                    <span className="badge text-bg-secondary fs-4 rounded-pill">
                      {cause}
                    </span>
                  </div>
                );
              })
            ) : (
              <div>Look likes this charity has no causes</div>
            )
            //return an unordered list of causes
          }
        </div>
      </div>

      <div className="d-flex justify-content-evenly mx-5 mt-3">
        <a
          className="btn btn-primary"
          href={charityState.website_Url}
          alt="Organization Link"
        >
          Visit Us
        </a>
        <a
          className="btn btn-primary"
          href={charityState.pledge_Url}
          alt="Donation Link"
        >
          Donate using Pledge
        </a>
      </div>
    </Container>
  );
};

export default Org;
