import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import toastr from 'toastr';
import { useParams } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import 'antd/dist/antd.css';

import Spinner from '../components/Spinner';
import MovieCard from '../components/MovieCard';
// Services
import MovieService from '../services/MovieService';

// Get ID from URL
const { Content } = Layout;

const MovieDetail = () => {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const getMovie = (id) => {
    setLoading(true);
    MovieService.getMovie(id)
      .then((response) => {
        setMovie(response.data[0]);
        setLoading(false);
      })
      .catch(() => {
        toastr.error('Hubo un error al obtener el episodio.');
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie(params.id);
  }, []);

  return (
    <Layout>
      {loading && <Spinner />}

      {!loading && movie && (
        <Content className="content-login animate__animated animate__backInDown">
          <Row>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 14, offset: 6 }}
              md={{ span: 8, offset: 8 }}
              lg={{ span: 7, offset: 9 }}
            >
              <MovieCard movie={movie} />
            </Col>
          </Row>
        </Content>
      )}
    </Layout>
  );
};

export default MovieDetail;
