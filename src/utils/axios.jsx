import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWIwYWEyMjk3YzJjYmNlODQxMjI4ZWUyYmMwODNmZSIsIm5iZiI6MTcyNTYyMzI2OC45MDUzNiwic3ViIjoiNjZkYWU4ODE5YmVlNjg3YjQ5MjU2M2RlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LgXJdKmK5mS0V7-t7gHXivXsgAxWyTmmRS9cLL12LdY",
  },
});

export default instance;