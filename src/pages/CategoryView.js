import React from "react";
import { Breadcrumb, Card, Row, Col } from "antd";
import main_cards from "../data/main_cards.json";
import { Link } from "react-router-dom";

const { Meta } = Card;

function CategoryView() {
  const category = localStorage.getItem("category");
  return (
    <div className="home-page">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">{category}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={[16, 16]}>
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
            <Col xs={24} sm={24} md={12} lg={8} xl={6}>
              <a href={x.sub_cards ? `/resource/${x.id}` : x.card_link}>
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
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default CategoryView;
