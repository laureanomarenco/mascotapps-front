import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center content-center items-center min-h-screen w-full mx-auto my-12">
        <div className="flex content-center self-center my-4">
          <h1 className="text-4xl font-bold text-gray-800">Team</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          <TeamMember
            name="Alejandro Juka"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/alejandro-juka-a20846243/"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415162/mascotapps/1656361883676_naja16.jpg"
          />
          <TeamMember
            name="Gonzalo Farah"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/gonzalo-fara-377404212/"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664413980/mascotapps/1662472419913_s8fzop.jpg"
          />
          <TeamMember
            name="Laureano Marenco"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/laureano-marenco/"
            picture="https://avatars.githubusercontent.com/u/73677385?v=4"
          />
          <TeamMember
            name="Lucas Colman Paganelli"
            role="Full Stack Developer"
            linkedin="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415162/mascotapps/1657140637220_m2f51y.jpg"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415162/mascotapps/1657140637220_m2f51y.jpg"
          />
          <TeamMember
            name="Martin Fiori"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/martin-fiori/"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415162/mascotapps/1621965166188_sfllbu.jpg"
          />
          <TeamMember
            name="Roberto Spinelli"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/roberto-spinelli-980740244/"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415162/mascotapps/1657244268655_ypgwtp.jpg"
          />
          <TeamMember
            name="Renzo Tari"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/renzo-tari/"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415162/mascotapps/1659370970083_ss8rgg.jpg"
          />
          <TeamMember
            name="Tamara Frazzetta"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/tamara-frazzetta/"
            picture="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664415738/mascotapps/WhatsApp_Image_2022-09-13_at_17.52.23_xt5xmv.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
