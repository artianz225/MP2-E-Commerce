export default async function fetchShopItems(api) {
  const response = await fetch(api);
  const data = await response.json();

  return data;
}