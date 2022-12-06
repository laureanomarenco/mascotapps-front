// export const URL = "https://juka-production.up.railway.app/";
export const URL = REACT_APP_URL || "http://localhost:3001/";
export const URL_CIUDAD_API =
  "https://apis.datos.gob.ar/georef/api/municipios?max=2500";

//PETS
export const ALLPETS = URL + "pets";
export const PET_SPECIES = URL + "pets/especies";
export const SEARCH_BY = URL + "pets/search?input=";
export const PET_DETAIL = URL + "pets/";
export const POST = URL + "pets/postnewpet";
export const GET_COMMENTS = URL + "comments/getComments?petId=";
export const FETCH_SUCCESS = URL + "pets/success";
export const DELETE = URL + "users/deletepet";
export const UPDATE_POST_PET = URL + "pets/update";

//USERS
export const URL_EXIST = URL + "users/exists";
export const MY_PROFILE = URL + "users/getMultipleUserInfo";
export const UPDATE_MY_PROFILE = URL + "users/update";
export const GET_MY_PETS = URL + "users/getallpetsofuser";
export const CREAT = URL + "users/newuser";
export const GET_INFO_FROM_DETAIL = URL + "users/contactinfo/";
export const INIT_TRANSACTION = URL + "transactions/newTransaction";
export const UPDATE_TRANSACTION_STATUS =
  URL + "transactions/transactionCheck?transactionId=";
export const RATE_USER = URL + "reviews/newReview ";
export const POINTS = URL + "users/points";
export const BUY = URL + "users/buyProducts";
export const CANCEL_POST = URL + "transactions/cancelpost";
export const FINISH_POST = URL + "transactions/postsuccess";
export const DONATE_POINTS = URL + "users/donatePoints";

//ADMIN
export const TOTAL_USERS = URL + "users/numberOfUsersInDB";
export const DONATION = URL + "checkout/balance";
export const ADOPTION_RANK = URL + "users/ranking";
export const GET_USERS = URL + "users";
export const POINTS_RANK = URL + "users/ranking";
export const NUMBER_OF_VISITORS = URL + "visitor/numberVisitors";
export const VISITORS_COUNTER = URL + "visitor/addVisitor";
export const ADMIN_CONSULT = URL + "visitor/mailAdmin";
export const DELETE_USER = URL + "admin/deleteUser/";
export const DELETE_POST_OF_USER = URL + "admin/cleanPostsOfUserId/";
export const DELETE_PET_WITH_NO_OWNER = URL + "admin/deletePetsWithNoUserId";
export const POINTS_SALE = URL + "admin/changeMultiplier/";
export const DELETE_POST = URL + "admin/deletePet/";
export const BAN_USERS = URL + "admin/banUser/";

export const GET_USER_REVIEWS = URL + "reviews/getReviewsToUser";
export const WEB_PUSH = URL + "pets/subscribe";
export const NOTIFY_POST = URL + "pets/notify";
export const DESUBSCRIBE = URL + "pets/desubscribe";
export const GET_ADMIN_ACTIONS = URL + "admin/getAdminActions";
