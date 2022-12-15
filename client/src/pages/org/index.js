import { React, useEffect } from "react";
import "./Org.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CHARITY } from "../../utils/queries";
import { ADD_CHARITY_TO_USER } from "../../utils/mutations";
import Auth from '../../utils/Auth'

const Org = () => {
  //Write a function that adds charity to user's charity
  const charityButtonHandle = async() => {
    let id = localStorage.getItem("user_id");
    console.log("entered charityButtonHandle Function");
    try{
      await addCharitytoUser({variables:{addCharityId: id, charityName: orgId}});
      
    } catch(er){
      console.log(er);
    }
  };

  function fetchIfEmpty(data) {
    if (!data.charity) {
      fetch("https://api.pledge.to/v1/organizations/" + orgId, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: "Bearer 20a72174a80aec48cfb3ddca840ae084",
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
        })
        .catch((err) => {
          console.log(err);
        });
    } else return data;
  }
  let { orgId } = useParams();
  let isOwned = Auth.isLoggedIn;
  const[ addCharitytoUser, {mutErr}] = useMutation(ADD_CHARITY_TO_USER);
  const { loading, error, data } = useQuery(QUERY_CHARITY, {
    variables: { charityId: orgId },
    // ,
    // onCompleted: fetchIfEmpty
  });
  const [charityState, setCharity] = useState(data?.charity || {});
  useEffect(() => {
    setCharity(data?.charity || {});
  }, [data]);

  //data isn't loaded by the time we have reached this line
  // console.log(charityState);
  return (
    <>
      {loading ? (
        <div> Loading...</div>
      ) : charityState.name ? (
        <Container >
          <h1 className="text-center">{charityState.name}</h1>
          <h2 className="text-center">
            <img src={charityState.logo_Url} alt="Organization Logo" />
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
                charityState.causes.length > 0 ? (
                  charityState.causes.map((cause, index) => {
                    return (
                      <div key={"cause-" + (index + 1)} className="p-2">
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
            {/* TODO: Come back wheneverthing else works */}
            {Auth.isLoggedIn() ? (  <button
              className="btn btn-primary"
              onClick={()=>{charityButtonHandle()}}
            >
              Add to your Profile
            </button>) : (<></>)}
            <a
              className="btn btn-primary"
              href={charityState.pledge_Url}
              alt="Donation Link"
            >
              Donate using Pledge
            </a>
          </div>
        </Container>
      ) : (
        <h1 className="text-center mt-5">
          Looks like this charity isn't in our database
        </h1>
      )}
    </>
  );
};

export default Org;
