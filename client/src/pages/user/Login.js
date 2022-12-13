import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/Auth.js";

export default function Login() {
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmission = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const mutationResponse = await login({
        variables: { email, password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

      window.location = window.location.origin;
    } catch (e) {
      alert("Incorrect login details!");
    }
  };

  return (
    <div className="row d-flex justify-content-center mt-5">
      <form className="col-4">
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={handleSubmission}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
