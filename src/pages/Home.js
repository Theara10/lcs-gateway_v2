import React from "react";
import { Layout, Card, Row, Col } from "antd";
import main_cards from "../data/main_cards.json";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Content } = Layout;

function Home() {
  return (
    <Content className="home-page">
      <Row gutter={[24, 24]}>
        {main_cards.map((x) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6} key={x.id}>
            {x.sub_cards ? (
              <Link to={`/resource/${x.id}`}>
                <Card
                  cover={
                    <img
                      className="card-img"
                      alt="example"
                      src={x.card_thumbnail}
                    />
                  }
                >
                  <Meta title={x.card_title} description={x.card_subtitle} />
                </Card>
              </Link>
            ) : (
              <a href={x.card_link} target="_blank" rel="noreferrer">
                <Card
                  cover={
                    <img
                      className="card-img"
                      alt="example"
                      src={x.card_thumbnail}
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
    </Content>
  );
}

export default Home;
