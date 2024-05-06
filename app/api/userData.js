export async function userData() {
  const res = await fetch("http://localhost:7000/users", { cache: "no-store" });
  const data = await res.json();

  return data;
  console.log(data);
}
