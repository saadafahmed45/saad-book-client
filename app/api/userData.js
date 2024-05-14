export async function userData() {
  const res = await fetch("https://saad-book-server.onrender.com/users/", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
  console.log(data);
}
