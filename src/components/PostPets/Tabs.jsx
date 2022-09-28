import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Tabs = ({ color, setPost, setInput, post, input }) => {
  //eslint-disable-next-line
  const [openTab, setOpenTab] = useState(1);
  const handleClick = (index) => {
    setOpenTab(index);
    setPost(index);
  };
  useEffect(() => {
    setInput({
      ...input,
      status:
        post === 1 ? "encontrado" : post === 2 ? "perdido" : "en adopción",
    });
  }, [post]);
  return (
    <>
      <div className={"flex min-h-12 w-full border-b-2 justify-between border-" + color}>
        <div className="w-max">
          <button
            onClick={() => handleClick(1)}
            className={
              "text-xs font-bold uppercase px-2 py-3 rounded-tl-lg rounded-tr-lg block leading-normal h-full w-full" +
              (openTab === 1
                ? "text-white bg-" + color
                : "text-" + color + "-600 bg-white")
            }
          >
            Encontré una mascota
          </button>
        </div>
        <div className="w-max">
          <button
            onClick={() => handleClick(2)}
            className={
              "text-xs font-bold uppercase px-2  py-3 rounded-tl-lg rounded-tr-lg block leading-normal h-full w-full" +
              (openTab === 2
                ? "text-white bg-" + color
                : "text-" + color + "-600 bg-white")
            }
          >
            Perdí mi mascota
          </button>
        </div>
        <div className="w-max">
          <button
            onClick={() => handleClick(3)}
            className={
              "text-xs font-bold uppercase px-2  py-3 rounded-tl-lg rounded-tr-lg block leading-normal h-full w-full" +
              (openTab === 3
                ? "text-white bg-" + color
                : "text-" + color + "-600 bg-white")
            }
          >
            Dar en adopción
          </button>
        </div>
      </div>
    </>
  );
};

export default function TabsRender({ setPost, setInput, post, input }) {
  return (
    <>
      <Tabs
        color="[#FFC700]"
        setPost={setPost}
        setInput={setInput}
        post={post}
        input={input}
      />
    </>
  );
}
