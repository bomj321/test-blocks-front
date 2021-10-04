import React from 'react';
import { Card, Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <>
      <Button type="primary" className="mb-1">
        <Link to="/movies">
          <StepBackwardOutlined />
          Atrás
        </Link>
      </Button>

      <Card title="Detalle de la película" hoverable>
        <p>Nombre: {movie.name}</p>
        <p>Director: {movie.manager} </p>
        <p>Descripción: {movie.description} </p>
      </Card>
    </>
  );
};

export default MovieCard;
