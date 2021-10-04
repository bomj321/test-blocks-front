import React, { useState, useEffect } from 'react';
import { Table, Button, Tooltip } from 'antd';

import { LikeOutlined, DislikeOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

import Spinner from './Spinner';

// Services
import MovieService from '../services/MovieService';

import { parseJwt } from '../libs/utils';

const { Column } = Table;

const TableMovie = () => {
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [dataSource, setDataSource] = useState([]);
  const [user] = useState(parseJwt());

  const getMovies = (pageNumber = 1, pageSizeNumber = 20) => {
    setLoading(true);
    MovieService.getMovies(pageNumber, pageSizeNumber)
      .then((response) => {
        setDataSource([]);
        const rows = [];
        response.data.docs.forEach((item, index) =>
          rows.push({
            ...item,
            key: `${index}`,
          })
        );

        setDataSource(rows);
        setTotalItems(response.data.total);
        setLoading(false);
      })
      .catch(() => {
        toastr.error('Hubo un error al obtener los episodios.');
        setLoading(false);
      });
  };

  const likeMovie = (id, type = 'LIKE') => {
    setLoading(true);
    MovieService.likeMovie(id)
      .then(() => {
        if (type === 'LIKE') {
          toastr.success('Le diste like a la película');
        } else {
          toastr.success('Ya no te gusta la película');
        }
        getMovies(page, pageSize);
        setLoading(false);
        toastr.clear();
      })
      .catch(() => {
        toastr.error('Hubo un error al actualizar la película.');
        setLoading(false);
      });
  };

  const getPaginatedRows = (pageNumber) => {
    setPage(pageNumber.current);
    setPageSize(pageNumber.pageSize);
    getMovies(pageNumber.current, pageNumber.pageSize);
  };

  useEffect(() => {
    getMovies(page);
  }, []);

  return (
    <>
      {loading && <Spinner />}

      {!loading && (
        <>
          <Button type="primary">Películas</Button>

          <Table
            className="mt-1 table-movie"
            dataSource={dataSource}
            onChange={getPaginatedRows}
            pagination={{ pageSize, total: totalItems, defaultCurrent: page }}
          >
            <Column title="Nombre" dataIndex="name" key="name" />
            <Column title="Director" dataIndex="manager" key="manager" />
            <Column title="#N likes" dataIndex="like" key="like" />
            <Column
              title="Descripción"
              dataIndex="description"
              key="description"
            />

            <Column
              title="Acciones"
              key="actions"
              render={(data) => {
                return (
                  <>
                    <Tooltip title="Ver detalle" className="pointer">
                      <Link to={`/movies/${data._id}`}>
                        <EyeOutlined className="mr-1" />
                      </Link>
                    </Tooltip>

                    {data.userLikes &&
                    data.userLikes.length > 0 &&
                    data.userLikes.includes(user.sub) ? (
                      <Tooltip
                        title="Ya no me gusta la película"
                        className="pointer"
                      >
                        <DislikeOutlined
                          className="mr-1"
                          onClick={() => likeMovie(data._id, 'DISLIKE')}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Me gusta la película" className="pointer">
                        <LikeOutlined
                          className="mr-1"
                          onClick={() => likeMovie(data._id, 'LIKE')}
                        />
                      </Tooltip>
                    )}
                  </>
                );
              }}
            />
          </Table>
        </>
      )}
    </>
  );
};

export default TableMovie;
