import React, { useEffect, useState } from "react";

const Review = ({ steps }) => {
  const { name, gender, age } = steps;
  const [reviews, setReviews] = useState({
    name: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    setReviews({ name, gender, age });
  }, [reviews]);

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Review;
