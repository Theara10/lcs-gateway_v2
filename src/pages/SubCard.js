import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb, Card, Row, Col } from 'antd';
import main_cards from '../data/main_cards.json';

const { Meta } = Card;

function SubCard() {
  const param = useParams();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="breadcrumb">
        <img
          onClick={() => navigate(-1)}
          src={require('../assets/icons/back.png')}
          height="12"
          width="auto"
          alt="koompi-img"
        />

        <Breadcrumb style={{ marginLeft: '16px' }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">
              {main_cards
                .filter((x) => x.id === param.id)
                .map((x) => (
                  <span>{x.card_title}</span>
                ))}
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {main_cards
        .filter((x) => x.id === param.id)
        .map((x) => {
          return (
            <Row gutter={[24, 24]}>
              {x.sub_cards.map((data) => {
                console.log('hi', data);
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <a
                      href={data.card_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        cover={
                          <img
                            className="card-img"
                            alt={data.card_thumbnail}
                            src={`/${data.card_thumbnail}`}
                          />
                        }
                      >
                        <Meta
                          title={data.card_title}
                          description={data.card_subtitle}
                        />
                      </Card>
                    </a>
                  </Col>
                );
              })}
            </Row>
          );
        })}
    </div>
  );
}

export default SubCard;
