import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPetComments } from "../../store/actions/index";

const PetComments = (petId) => {
  const dispatch = useDispatch();
  const petComments = useSelector((state) => state.petComments);

  useEffect(() => {
    !petComments?.length && dispatch(getPetComments(petId));
  }, [dispatch, petComments]);

  return (
    <>
      {petComments?.map((pet) => (
        <div
          key={pet?.id}
          className="relative p-8 m-1 overflow-hidden border border-gray-100 rounded-lg md:w-[250px]"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-yellow-200 to-yellow-400"></span>

          <div className="justify-between sm:flex">
            <div>
              <h5 className="text-xl font-bold text-gray-900">{pet?.nombre}</h5>

              <p className="mt-1 text-xs font-medium text-gray-600">
                Fecha: {pet?.createdAt.split("T")[0]}
              </p>
            </div>
          </div>

          <dl className="flex mt-2">
            <div className="flex flex-col-reverse">
              <dd className="text-xs text-gray-500">{pet?.fecha}</dd>
              <dt className="text-sm text-gray-700 font-semibold">Avistada</dt>
            </div>

            <div className="flex flex-col-reverse ml-3 sm:ml-6">
              <dd className="text-xs text-gray-500">{pet?.hora}</dd>
              <dt className="text-sm text-gray-700 font-semibold">Horario</dt>
            </div>
          </dl>
          <dl className="flex mt-2">
            <div className="flex flex-col-reverse">
              <dd className="text-xs text-gray-500">{pet?.localidad}</dd>
              <dt className="text-sm text-gray-700 font-semibold">Localidad</dt>
            </div>

            <div className="flex flex-col-reverse ml-3 sm:ml-6">
              <dd className="text-xs text-gray-500">{pet?.provincia}</dd>
              <dt className="text-sm text-gray-700 font-semibold">Provincia</dt>
            </div>
          </dl>

          <div className="mt-4 sm:pr-8">
            <dt className="text-sm text-gray-700 font-semibold">Condición</dt>
            <dd className="text-xs text-gray-500">{pet?.condicion}</dd>
          </div>
          <div className="mt-4 sm:pr-8">
            <dt className="text-sm text-gray-700 font-semibold">Comentarios</dt>
            <dd className="text-xs text-gray-500">{pet?.comentarios}</dd>
          </div>
        </div>
      ))}
    </>
  );
};

export default PetComments;
