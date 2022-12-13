import { React, useEffect } from "react";
import "./Org.css";
import { Container, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
const Org = () => {
  let causes = ["Environment", "Nature", "Ocean", "Education"];
  let { orgId } = useParams();
  let message =
    "Covenant House California (CHC) is a non-profit agency whose mission is to reach out to at-risk homeless youth living on the streets and offer them hope and opportunities to turn their lives around. We help abused or neglected youth who have nowhere else to go. A large number have been thrown out of their homes while others have aged out or left the foster care system with no family, no support, and no one to turn to.\r\n\nSince 1988, CHC has impacted the lives of more than 160,000 homeless youth out of our Los Angeles and Bay Area locations. More than 80% of our funding comes from private donations.";
  let message1 =
    "Heal the Bay is an environmental nonprofit dedicated to making the coastal waters and watersheds of Greater Los Angeles safe, healthy and clean. To fulfill our mission, we use science, education, community action, and advocacy.\n\nOur passionate team conducts hundreds of beach and community cleanups each year, informing people about the root causes of pollution along the shorelines and in their neighborhoods. We advocate for strict water quality regulations that protect the health of both humans and the aquatic life who call local creeks, rivers, and the Santa Monica Bay home. \n\nIn the past year, Heal the Bay sponsored-Assembly Bill 1066 to protect people who participate in water recreation activities in California. Our Nothin' But Sand public group cleanups were accomplished with 5, 800 cleanup volunteers that helped remove 111,000 pieces of trash from Los Angeles Country beaches, rivers, and neighborhoods.";
  return (
    <Container className="">
      <h1 className="text-center">Heal the Bay</h1>
      <h2 className="text-center">
        <img
          src="https://pledgeling-res.cloudinary.com/image/upload/c_fit,h_266,w_266/v1/prod-media/images/npos/logos/2018/9/7/db1dae800f9145b0.png"
          alt="Organization Logo"
        />
      </h2>
      <p>{message1}</p>
      {/* Address */}
      <div className="mb-3">Address: 1444 9th St Santa Monica CA</div>
      <div className="bg-color-grey">
        <div className="">
          <h3 className="fs-3 text-decoration-underline">
            <bold>Causes</bold>
          </h3>
        </div>
        <div className="d-flex justify-content-start">
          {
            //return an unordered list of causes
            causes.map((cause) => {
              return (
                <div className="p-2">
                  <span className="badge text-bg-secondary fs-4 rounded-pill">
                    {cause}
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="d-flex justify-content-evenly mx-5 mt-3">
        <a
          class="btn btn-primary"
          href="http://www.healthebay.org/"
          alt="Organization Link"
        >
          Visit Us
        </a>
        <a
          class="btn btn-primary"
          href="https://www.pledge.to/organizations/95-4031055/heal-the-bay"
          alt="Donation Link"
        >
          Donate using Pledge
        </a>
      </div>
    </Container>
  );
};

export default Org;
