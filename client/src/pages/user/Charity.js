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
    setCharity(data);
  }

  return <h1>{localStorage.getItem("token")}</h1>;
}
