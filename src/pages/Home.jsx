import { Card, CardBody, CardHeader } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Bienvenido</h1>
      <Card>
        <CardHeader>
          Información
        </CardHeader>
        <CardBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Possimus cumque minus provident fuga, quis suscipit? Dolores dolore eaque earum?
            Esse sapiente odio quibusdam dolor tempora aut consequatur quo reiciendis totam.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Possimus cumque minus provident fuga, quis suscipit? Dolores dolore eaque earum?
            Esse sapiente odio quibusdam dolor tempora aut consequatur quo reiciendis totam.</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
