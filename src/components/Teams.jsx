import React from "react";
import PersonCard from "./PersonCard";

const Teams = () => {
  return (
    <div className="bg-white rounded-lg py-4 px-2 md:px-8 mt-4">
      <h1 className="text-2xl font-semibold">Teams</h1>
      <div className="my-4">
        <p className="text-base font-normal text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          numquam corporis nesciunt sunt voluptate minus, veritatis nisi
          aliquam. Perspiciatis recusandae alias magni, blanditiis natus
          repellendus architecto quis vitae quidem eaque!
        </p>
      </div>
      <div>
        <PersonCard
          name="John Smith"
          designation="Designation Here"
          imageSrc="./person1.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta veniam magni et impedit deserunt quos corporis laborum eum praesentium numquam. Voluptatum aut recusandae fugiat repellat, dolorum dolorem dolor eius laudantium ad maiores itaque natus quisquam architecto minima iusto voluptas repudiandae quos amet. Dolor, temporibus quisquam similique sequi dolorem veritatis quaerat!"
        />
        <PersonCard
          name="Elina Williams"
          designation="Designation Here"
          imageSrc="./person2.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta veniam magni et impedit deserunt quos corporis laborum eum praesentium numquam. Voluptatum aut recusandae fugiat repellat, dolorum dolorem dolor eius laudantium ad maiores itaque natus quisquam architecto minima iusto voluptas repudiandae quos amet. Dolor, temporibus quisquam similique sequi dolorem veritatis quaerat!"
        />
        <PersonCard
          name="John Doe"
          designation="Designation Here"
          imageSrc="./person3.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta veniam magni et impedit deserunt quos corporis laborum eum praesentium numquam. Voluptatum aut recusandae fugiat repellat, dolorum dolorem dolor eius laudantium ad maiores itaque natus quisquam architecto minima iusto voluptas repudiandae quos amet. Dolor, temporibus quisquam similique sequi dolorem veritatis quaerat!"
        />
      </div>
    </div>
  );
};

export default Teams;
