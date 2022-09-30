export const URL = "https://juka-production.up.railway.app/";
export const URL_CIUDAD_API =
  "https://apis.datos.gob.ar/georef/api/municipios?max=2500";

export const TOTAL_USERS = URL + "users/numberOfUsersInDB";
export const ALLPETS = URL + "pets";
export const PET_DETAIL = URL + "pets/";
export const SEARCH_BY = URL + "pets/search?input=";
export const DONATION = URL + "checkout/balance";
export const CREAT = "https://juka-production.up.railway.app/users/newuser";
export const GET_MY_PETS =
  "https://juka-production.up.railway.app/users/getallpetsofuser";
export const PET_SPECIES = URL + "pets/especies";
// export const URL_POST_PET=URL_ROUTES + "users/postnewpet"
export const POST = "https://juka-production.up.railway.app/pets/postnewpet";
export const DELETE = URL + "users/deletepet";
export const LOGIN = URL + "auth/google";
export const LOGIN_LOGGED = URL + "auth/logged_in";
export const GET_INFO_FROM_DETAIL = URL + "users/contactinfo/";
export const MY_PROFILE = URL + "users/getMultipleUserInfo";
export const UPDATE_MY_PROFILE = URL + "users/update";
export const INIT_TRANSACTION = URL + "transactions/newTransaction";
export const UPDATE_POST_PET = URL + "pets/update";
export const UPDATE_TRANSACTION_STATUS =
  URL + "transactions/transactionCheck?transactionId=";

export const RATE_USER = URL + "reviews/newReview ";
export const GET_USER_REVIEWS = URL + "/reviews/getReviewsToUser";
export const NUMBER_OF_VISITORS = URL + "visitor/numberVisitors";
export const VISITORS_COUNTER = URL + "visitor/addVisitor";
export const SUCCESS = URL + "pets/success";
export const WEB_PUSH = URL + "pets/subscribe"
export const NOTIFY_POST = URL + "pets/notify"
export const BUY = URL + "users/buyProducts"