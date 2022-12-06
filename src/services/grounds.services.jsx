import myAxios from "../axios/axiosSettings.ts";

export function getGroundsWithOwner() {
  return myAxios.get("/ground/ground-and-owner");
}

export function registerGround(data = {}) {
  const {
    name,
    city,
    mapAddress,
    bookingRate,
    sports,
    website,
    openAt,
    closeAt,
    description,
    ownerID,
  } = data;
  return myAxios.post("/ground/register", {
    bookingRate: parseInt(bookingRate),
    city: city,
    closeAt: closeAt,
    description: description,
    mapAddress: mapAddress,
    name: name,
    openAt: openAt,
    ownerID: ownerID,
    sports: sports,
    website: website,
  });
}

export function findGroundByID(id) {
  return myAxios.get(`/ground/${id}`);
}
// export function markAsVerified(id, type, city) {
//   return axios.patch(
//     `https://play-o.herokuapp.com/verify/ground?id=${id}&type=${type}&city=${city}`
//   );
// }
export function markAsRejected() {}

export function markAsVerified(id, type, city) {
  return myAxios.patch(`/ground/verify?id=${id}&type=${type}&city=${city}`);
}
