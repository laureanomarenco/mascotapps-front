import React from "react";


import Cart from "./Cart";
import Item from "./Item";

export default function ItemCollection({
                 carrito,
                 setCarrito,
                 myPoints,
                 setUpdate,
                 update,
               }) {
                 //eslint-disable-next-line

                 return (
                   <div className=" md:w-11/12 px-3 py-12 lg:px-12 bg-white relative">
                     <Cart
                       carrito={carrito}
                       setCarrito={setCarrito}
                       setUpdate={setUpdate}
                       update={update}
                     />
                     <h2 className="text-3xl text-gray-700 font-bold md:text-6xl">
                       Cambiá tus puntos
                     </h2>
                     <p className="text-teal-700 my-4">
                       Podes cambiar todos tus Mascopoints por productos, elegí
                       el producto que quieras y te lo enviaremos sin costo.
                     </p>
                     <p className="text-teal-700 my-2 font-bold">
                       IMPORTANTE: sólo podrás elegir una unidad por producto.
                     </p>
                     <p className=" px-5 py-2 text-white bg-[#28B0A2] font-bold my-5 w-fit rounded-lg">
                       Disponible: {myPoints} Mascopoints
                     </p>
                     <div className="my-8 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-3">
                       <Item
                         image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664477655/mascotapps/424586-captura_0_g_dytdod.png"
                         title="Correa Retractil Flexi "
                         points="50"
                         myPoints={myPoints}
                         carrito={carrito}
                         setCarrito={setCarrito}
                         description="Hace que el perro se sienta libre durante el paseo y aporta tranquilidad al dueño ya que proporciona seguridad y estabilidad a ambos."
                       />
                       <Item
                         image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664480010/mascotapps/125825-87522-849910101410-1-jpg_0_g_f0eh7f.jpg"
                         title="Collar Reflectante Regulable"
                         points="50"
                         myPoints={myPoints}
                         carrito={carrito}
                         setCarrito={setCarrito}
                         description="Cómodo, acolchado, y de calidad.  Características: Color brillante Costuras reflectantes"
                       />
                       <Item
                         image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664480185/mascotapps/pelota-con-cuerda-xl_1_g_wzynnu.jpg"
                         title="Pelota Cuerda "
                         points="20"
                         myPoints={myPoints}
                         carrito={carrito}
                         setCarrito={setCarrito}
                         description="Adecuada para perros grandes - material natural, robusto y duradero - 50 % yute y 50 % algodón."
                       />
                       <Item
                         image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664478678/mascotapps/284-2_1_g_o02nnq.png"
                         title="Royal Canin Maxi Adult "
                         description="Pienso para Perro Adulto de Razas Tamaño Grande"
                         points="250"
                         myPoints={myPoints}
                         carrito={carrito}
                         setCarrito={setCarrito}
                       />
                       <Item
                         image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664479485/mascotapps/pho-pro-clip-2333-1-622b04549837d_g_w5f47k.jpg"
                         title="Guante para cepillar"
                         points="50"
                         myPoints={myPoints}
                         carrito={carrito}
                         setCarrito={setCarrito}
                         description="Guante hecho de goma con las puntas cuadradas y una tira para la mano para poder así cepillar de forma mas cómoda."
                       />
                       <Item
                         image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664479751/mascotapps/PHO-PRO-CLIP-4266-1-6315f696c47d2_g_rvqo2r.jpg"
                         title="Trixie Snack"
                         points="30"
                         myPoints={myPoints}
                         carrito={carrito}
                         setCarrito={setCarrito}
                         description="Snacks que proporcionan al gato importantes vitaminas y refuerzan sus defensas naturales."
                       />
                     </div>
                   </div>
                 );
               }
