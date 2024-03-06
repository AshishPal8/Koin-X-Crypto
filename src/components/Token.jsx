import React from "react";
import DoughnutChart from "./DoughnutChart";

const Token = () => {
  return (
    <div className="bg-white rounded-lg py-4 px-2 md:px-8 mt-4">
      <h1 className="text-3xl font-semibold">Tokenomics</h1>
      <h3 className="text-2xl font-semibold my-5">Initial Distribution</h3>
      <div>
        <div>{/* <DoughnutChart /> */}</div>
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            <p>Crowdsale investors: 80%</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-orange-600"></div>
            <p>Foundations: 20%</p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="text-lg text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis
          nesciunt aspernatur facilis alias exercitationem autem dolor sequi
          quidem pariatur eveniet, magnam voluptate aliquam nam et est quas
          praesentium amet accusantium modi sunt dolorum labore! Nihil unde
          consectetur dicta architecto corporis saepe, harum voluptas eum
          repellat dolorem eaque. Corporis quia voluptatibus nulla repellendus
          minus, iure ducimus accusantium quasi hic reiciendis accusamus ipsam
          repellat, doloremque tempora optio dolore. Delectus aut quis a ipsa
          debitis magnam veniam vitae. Consequuntur minus tempore dolorem?
        </p>
      </div>
    </div>
  );
};

export default Token;
