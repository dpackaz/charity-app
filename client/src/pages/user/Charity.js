import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHARITY } from "../../utils/queries";

export default function Charity(props) {
  const { loading, data } = useQuery(QUERY_CHARITY, {
    variables: {
      charityId: props.charityID,
    },
    onCompleted: setCharityState,
  });

  const [charityState, setCharity] = useState({});

  function setCharityState(data) {
    console.log(data);
    setCharity(data.charity);
  }

  return (
    <div class="card col-4 shadow">
      <img
        src={charityState.logo_Url}
        class="card-img-top"
        alt="Charity logo"
      />
      <div class="card-body">
        <h5 class="card-title">{charityState.name}</h5>
        <p class="card-text">{charityState.mission?.substring(0, 250) + "..."}</p>
        <a href={charityState.website_Url} class="btn btn-primary">
          Check it out
        </a>
      </div>
    </div>
  );
}
