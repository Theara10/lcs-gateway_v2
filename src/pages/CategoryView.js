import React, { useEffect, useReducer } from "react";
import { Breadcrumb, Card, Row, Col } from "antd";
import main_cards from "../data/main_cards.json";
import { Link } from "react-router-dom";

const { Meta } = Card;

function CategoryView() {
  const category = localStorage.getItem("category");
  /* eslint-disable */
  const [any, forceUpdate] = useReducer((num) => num + 1, 0);
  /* eslint-disable */

  useEffect(() => {
    forceUpdate();
  });

  return (
    <div className="home-page">
      <div className="breadcrumb">
        <Link to="/">
          <img alt=""
            src={require("../assets/icons/back.png")}
            height="12"
            width="auto"
          />
        </Link>
        <Breadcrumb
          style={{
            marginLeft: "16px",
          }}
        >
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to="/">{category}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row gutter={[24, 24]}>
        {main_cards
          .filter((x) => {
            for (let i = 0; i < x.card_categories.length; i++) {
              let result = x.card_categories[i];
              if (result === category) {
                return x.card_categories[i];
              }
            }
          })
          .map((x) => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={x.id}>
              {x.sub_cards ? (
                <Link to={x.sub_cards ? `/resource/${x.id}` : x.card_link}>
                  <Card
                    cover={
                      <img
                        className="card-img"
                        alt="example"
                        src={`/${x.card_thumbnail}`}
                      />
                    }
                  >
                    <Meta title={x.card_title} description={x.card_subtitle} />
                  </Card>
                </Link>
              ) : (
                <a
                  href={x.sub_cards ? `/resource/${x.id}` : x.card_link}
                  target="_blank" rel="noreferrer"
                >
                  <Card
                    cover={
                      <img
                        className="card-img"
                        alt="example"
                        src={`/${x.card_thumbnail}`}
                      />
                    }
                  >
                    <Meta title={x.card_title} description={x.card_subtitle} />
                  </Card>
                </a>
              )}
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default CategoryView;
