import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../utils/mutations";
import Auth from "../../utils/Auth.js";

export default function Login() {
  const [login, { error }] = useMutation(SIGNUP);

  const handleSubmission = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const mutationResponse = await login({
      variables: { email, password, firstName, lastName },
    });
    const token = mutationResponse.data.signup.token;
    const id = mutationResponse.data.signup.user._id;
    Auth.login(token, id);

    window.location = window.location.origin;
  };

  return (
    <div className="row d-flex justify-content-center mt-5">
      <form className="col-4">
        <div className="mb-3">
          <label for="firstname" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="mb-3">
          <label for="lastname" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmission}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
