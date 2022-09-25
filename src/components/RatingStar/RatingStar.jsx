import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { rateUser } from "../../store/actions";



export default function RatingStar({ objBello, setShowModal, setOrder }) {
  console.log(
    "🚀 ~ file: RatingStar.jsx ~ line 10 ~ RatingStar ~ objBello",
    objBello
  );
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(2);
  //eslint-disable-next-line
  const [review, setReview] = React.useState({
    ...objBello,
    stars: 0,
    comments: "",
  });
  console.log(
    "🚀 ~ file: RatingStar.jsx ~ line 21 ~ RatingStar ~ review",
    review
  );

  const handleChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(rateUser(review));
    setShowModal(false);
    setOrder('new')
  };

  return (
    <div className="flex flex-col text-center">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="stars"
          value={value}
          onChange={(event, newValue) => {
            handleChange(event);
            setValue(newValue);
          }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-multiline-static"
          label="Dejá tu opinión"
          multiline
          name="comments"
          rows={4}
          defaultValue=""
          onChange={handleChange}
        />
      </Box>
      <div>
        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            onClick={handleClick}
            className="inline-block px-6 py-2 my-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
          >
            Calificar
          </button>
        </div>
      </div>
    </div>
  );
}
