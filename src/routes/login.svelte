<script>
  import { goto } from "@sapper/app.mjs";
  import { authenticated } from "../stores/auth";

  let email = "",
    password = "";

  const submit = async () => {
    var details = {
      email,
      password,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    await fetch("http://localhost:4000/api/online-course/sessions/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        if (responseJson.metadata.http_code == "200") {
          authenticated.set(responseJson.data.access_token);
          await goto('/');
        } else {
          alert("email atau password salah");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>
<div  class="form-signin">
<form on:submit|preventDefault={submit}>
  <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

  <input
    bind:value={email}
    type="email"
    class="form-control"
    placeholder="Email"
    required
  />

  <input
    bind:value={password}
    type="password"
    class="form-control"
    placeholder="Password"
    required
  />

  <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
</form>
</div>