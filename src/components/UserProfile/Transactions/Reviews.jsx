import React from "react";
import Rating from "@mui/material/Rating";

const Reviews = ({ userProf }) => {
  console.log("HOLAAAA", userProf.reviews);

  let userReviews = userProf.reviews;
  console.log(userReviews);
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold text-[#28B0A2]">
        Opiniones de otros usuarios
      </h2>

      <div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userReviews.length > 0 ? (
            userReviews.map((r) => {
              return (
                <div
                  className="flex items-start rounded-xl bg-white p-4 shadow-lg"
                  key={r.id}
                >
                  <div className="flex h-12 w-12 items-center align-center justify-center  ">
                    <img
                      src={r.reviewer_image}
                      alt="img"
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <Rating name="read-only" value={r.starts} readOnly />
                    <h2 className="font-semibold capitalize">
                      {r.reviewer_name.toLowerCase()}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">{r.comments}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Este usuario aun no cuenta con calificaciones</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
