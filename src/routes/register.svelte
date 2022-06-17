<script>
  let firstname = "",
    lastname = "",
    email = "",
    password = "";

  const submit = async () => {
    var details = {
      firstname,
      lastname,
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

    await fetch("http://localhost:4000/api/online-course/registrations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        if (responseJson.metadata.http_code == "201") {
          alert("berhasil daftar");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>

<div class="form-signin">
  <form on:submit|preventDefault={submit}>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input
      bind:value={firstname}
      class="form-control"
      placeholder="First Name"
      required
    />
    <input bind:value={lastname} class="form-control" placeholder="Last Name" />

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

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</div>
