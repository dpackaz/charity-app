import { React, useEffect } from "react";
import "./Org.css";
import { Container, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
const Org = () => {
  let causes = ["Environment", "Nature", "Ocean", "Education"];
  let { orgId } = useParams();
  return (
    <Container className="">
      <h1>Heal the Bay</h1>
      <h2>
        <img
          src="https://pledgeling-res.cloudinary.com/image/upload/c_fit,h_266,w_266/v1/prod-media/images/npos/logos/2018/9/7/db1dae800f9145b0.png"
          alt="Organization Logo"
        />
      </h2>
      <p>
        "Heal the Bay is an environmental nonprofit dedicated to making the
        coastal waters and watersheds of Greater Los Angeles safe, healthy and
        clean. To fulfill our mission, we use science, education, community
        action, and advocacy.\n\nOur passionate team conducts hundreds of beach
        and community cleanups each year, informing people about the root causes
        of pollution along the shorelines and in their neighborhoods. We
        advocate for strict water quality regulations that protect the health of
        both humans and the aquatic life who call local creeks, rivers, and the
        Santa Monica Bay home. \n\nIn the past year, Heal the Bay
        sponsored-Assembly Bill 1066 to protect people who participate in water
        recreation activities in California. Our Nothin' But Sand public group
        cleanups were accomplished with 5, 800 cleanup volunteers that helped
        remove 111,000 pieces of trash from Los Angeles Country beaches, rivers,
        and neighborhoods."
      </p>
      <h3 className="text-center">Causes</h3>
      <div className="d-flex justify-content-around">
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

      {/* Address */}
      <div>Adress: 1444 9th St Santa Monica CA</div>
      <a href="http://www.healthebay.org/" alt="Organization Link">
        Visit Us
      </a>
      <p> </p>
      <a href="https://www.pledge.to/organizations/95-4031055/heal-the-bay">
        Donate using Pledge
      </a>
    </Container>
  );
};

export default Org;
