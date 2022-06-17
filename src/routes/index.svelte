<script>
  import { onMount } from "svelte";
  import { authenticated } from "../stores/auth";

  let message = "",
    id = "",
    first_name = "",
    last_name = "",
    email = "",
    token = "";

  onMount(async () => {
    try {
      authenticated.subscribe(async (value) => {
        if (value) {
          await fetch(
            "http://localhost:4000/api/online-course/sessions/current-user",
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `${value}`,
              },
            }
          )
            .then((response) => response.json())
            .then(async (responseJson) => {
              if (responseJson.metadata.http_code == "200") {
                id = responseJson.data.id;
                first_name = responseJson.data.first_name;
                last_name = responseJson.data.last_name;
                email = responseJson.data.email;
                token = value;
              }
            })
            .catch((error) => {
              console.error(error);
              token = "";
            });
        }
      });
      message = "You are not logged in";
    } catch (e) {
      message = "You are not logged in";
      authenticated.set("");
      token = "";
    }
  });
</script>

{#if token != ""}
  <h2>Data User</h2>

  <table class="text-center">
    <tr>
      <th>id</th>
      <th>Nama Depan</th>
      <th>Nama Belakang</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>{id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  </table>
{:else}
  <h2 class="text-center">{message}</h2>
{/if}

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
