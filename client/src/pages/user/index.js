import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./user.css";
import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_FRIENDS } from "../../utils/queries";
import { ADD_FRIEND } from "../../utils/mutations";
import Charity from "./Charity.js";
import Auth from "../../utils/Auth.js";

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
  let { userID } = useParams();
  let isOwned = Auth.isLoggedIn && userID == localStorage.getItem("user_id");
  const [myCharities, setMyCharities] = useState("");
  const [addFriendMutation, { error }] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(QUERY_USER, {
    variables: {
      userId: userID,
    },
    onCompleted: populate,
  });
  const { isLoading, friendData } = useQuery(QUERY_FRIENDS, {
    variables: {
      userId: localStorage.getItem("user_id"),
    },
    onCompleted: checkIsFriend,
  });

  let [isFriend, setIsFriend] = useState(false);

  function checkIsFriend(data) {
    let hasFriend = false;
    data.user.friends.forEach((friend) => {
      if (friend._id == userID) {
        hasFriend = true;
      }
    });
    setIsFriend(hasFriend);
  }

  let causes = [];
  let friendCauses = [];
  //let totalDonations = donations.reduce((a, b) => a + b);

  const [charityState, setCharity] = useState([]);
  const [friendState, setFriends] = useState([]);

  function populate() {
    let array = [];
    data.user.charities.forEach((charity) => {
      array.push(charity);
    });
    setCharity(array);

    let friends = [];
    data.user.friends.forEach((friend) => {
      friends.push(friend);
    });
    setFriends(friends);
  }

  async function addFriend() {
    try {
      const mutationResponse = await addFriendMutation({
        variables: {
          addFriendId: localStorage.getItem("user_id"),
          friendId: userID,
        },
      });
      setIsFriend(true);
      alert("Now following " + data.user.firstName + " " + data.user.lastName);
    } catch (e) {
      alert("Could not add friend");
    }
  }

  return (
    <>
      <Container>
        {/* <h1>{data.firstName + " " + data.lastName}</h1> */}
      </Container>

      <div class="container">
        <div class="row justify-content-evenly">
          <div class="col m-3 pl-3">
            <Card.Title class="text-center m-3 text-bold fw-bold fs-4">
              My Causes
            </Card.Title>
            <Card.Text class="mb-4">
              <div className="d-flex flex-row justify-content-evenly row flex-r ">
                {charityState.length > 0 ? (
                  charityState.map((data) => {
                    return <Charity charityID={data} />;
                  })
                ) : (
                  <h2 class="text-center">No charities added</h2>
                )}
              </div>
            </Card.Text>
          </div>

          <div class="col-2 m-3">
            <Card.Title class="text-center m-3 text-bold fw-bold fs-4">
              Following
            </Card.Title>
            <div class="d-flex flex-column">
              {friendState.length > 0 ? (
                friendState.map((friend) => {
                  return (
                    <a
                      class="text-center"
                      href={window.location.origin + "/user/" + friend._id}
                    >
                      {friend.firstName + " " + friend.lastName}
                    </a>
                  );
                })
              ) : (
                <h6 class="text-center">No friends</h6>
              )}
              {Auth.isLoggedIn() && !isOwned && !isFriend ? (
                <button class="btn btn-primary p-0 mt-3" onClick={addFriend}>
                  Add Friend
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
