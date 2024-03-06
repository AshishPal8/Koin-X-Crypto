import React from "react";

const PersonCard = ({ name, designation, imageSrc, description }) => {
  return (
    <div className="p-4 bg-[#E8F4FD] rounded-xl flex justify-center items-center my-5">
      <div className="w-1/6">
        <img
          className="w-[100px] h-[100px] object-cover rounded-xl"
          src={imageSrc}
          alt={name}
        />
        <h4 className="text-medium font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>
      <div className="w-5/6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PersonCard;
