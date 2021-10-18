import { useSelector } from "react-redux";

const Hello = ({ datos }) => {
  const data = useSelector((store) => store.count.payload);
  console.log(data);
  const bornYear = () => new Date().getFullYear() - data.age;

  return (
    <div>
      <p>
        Hello {data.name}, you are {data.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

export default Hello;
