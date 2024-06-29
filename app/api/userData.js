export async function userData() {
  const res = await fetch("https://profile-generator-server.vercel.app/users", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
  console.log(data);
}
