import React from "react";
import { Layout, Card, Row, Col } from "antd";
import main_cards from "../data/main_cards.json";

const { Meta } = Card;
const { Content } = Layout;

function Home() {
  return (
    <Content className="home-page">
      <Row gutter={[16, 16]}>
        {main_cards.map((x) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <a href={x.sub_cards ? `/resource/${x.id}` : x.card_link}>
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
          </Col>
        ))}
      </Row>
    </Content>
  );
}

export default Home;
