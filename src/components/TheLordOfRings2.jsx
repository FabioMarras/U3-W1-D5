import { Card } from "react-bootstrap";

const TheLordOfRings2 = ({ data }) => {
  // console.log(data);
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3 mb-3">
      <Card.Link href="#">
        <Card className="borderNone">
          <Card.Img variant="top" src={data.Poster} className="imgCar" />
        </Card>
      </Card.Link>
    </div>
  );
};

export default TheLordOfRings2;
