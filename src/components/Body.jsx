import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Calendar, MapPin, Facebook } from 'lucide-react';
import LayoutImage_01 from '../assets/images/LayoutImage_01.png';
import LayoutImage_02 from '../assets/images/LayoutImage_02.png';

const Body = () => {
  const events = [
    {
      date: '28',
      month: 'September',
      day: 'Friday',
      title: 'The Legendary DJ Supernova',
      time: '9pm-4am',
    },
    {
      date: '15',
      month: 'November',
      day: 'Monday',
      title: 'The Legendary DJ Supernova',
      time: '3pm-7am',
    },
    {
      date: '28',
      month: 'September',
      day: 'Friday',
      title: 'The Legendary DJ Supernova',
      time: '9pm-4am',
    },
    {
      date: '15',
      month: 'November',
      day: 'Monday',
      title: 'The Legendary DJ Supernova',
      time: '3pm-7am',
    },
    {
      date: '28',
      month: 'September',
      day: 'Friday',
      title: 'The Legendary DJ Supernova',
      time: '9pm-4am',
    },
  ];
  const cardData = [
    {
      id: 1,
      title: '我是標題內容',
      content: '我是內容文字我是內容文字我是內容文字',
      image: LayoutImage_02,
      views: 22,
    },
    {
      id: 2,
      title: '我是標題內容',
      content: '我是內容文字我是內容文字我是內容文字',
      image: LayoutImage_02,
      views: 22,
    },
    {
      id: 3,
      title: '我是標題內容',
      content: '我是內容文字我是內容文字我是內容文字',
      image: LayoutImage_02,
      views: 22,
    },
    {
      id: 4,
      title: '我是標題內容',
      content: '我是內容文字我是內容文字我是內容文字',
      image: LayoutImage_02,
      views: 22,
    },
    {
      id: 5,
      title: '我是標題內容',
      content: '我是內容文字我是內容文字我是內容文字',
      image: LayoutImage_02,
      views: 22,
    },
  ];
  return (
    <>
      <Container className='mt-5'>
        <Row className='align-items-stretch'>
          {/* 左側卡片 */}
          <Col md={5}>
            <div className='cardWrapper'>
              <img
                src={LayoutImage_01}
                alt='Event background'
                className='image'
              />
              <div className='overlay' />
              <div className='dateInfo'>
                <Calendar className='icon' />
                <small className='infoText'>10.10.2023</small>
              </div>
              <div className='content'>
                <h2 className='mb-2 fw-bold'>Award Events</h2>
                <p className='mb-2 text-light'>Lorem ipsum dolor sit amet,</p>
                <p className='text-light'>
                  consectetur adipisicing elit. Animi
                </p>
              </div>
              <div className='locationInfo'>
                <MapPin className='icon' />
                <small className='infoText'>New York, NY</small>
              </div>
            </div>
          </Col>

          {/* 右側活動列表 */}
          <Col md={7}>
            <div className='eventHeader'>Event</div>
            <div className='eventList'>
              {events.map((event, index) => (
                <div key={index} className='eventItem'>
                  <div className=''>
                    <div className='eventDate'>{event.date}</div>
                  </div>
                  <div className='me-3'>
                    <div className='eventMonth'>{event.month}</div>
                    <div className='eventDay'>{event.day}</div>
                  </div>
                  <div className='eventInfo'>
                    <div className='eventTitle'>{event.title}</div>
                    <div className='eventTime'>{event.time}</div>
                  </div>
                  <div className='buttonContainer'>
                    <button className='bookButton'>Book Event</button>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row className='mb-4'>
          {cardData.slice(0, 3).map((card) => (
            <Col md={4} key={card.id}>
              <Card className='h-100 bg-dark text-white border-0'>
                <div className='p-4'>
                  <Card.Img
                    variant='top'
                    src={card.image}
                    alt={card.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className='ps-4'>
                  <Card.Title className='text-info mb-3'>
                    {card.title}
                  </Card.Title>
                  <Card.Text className='mb-4'>{card.content}</Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <span style={{ color: '#9CA3AF' }}>
                      閱覽人數：{card.views}
                    </span>
                    <i class='bi bi-facebook fs-5'></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className='mb-5'>
          <Col md={7}>
            <Card className='h-100 bg-dark text-white border-0'>
              <div className='p-4'>
                <Card.Img
                  variant='top'
                  src={cardData[3].image}
                  alt={cardData[3].title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <Card.Body className='ps-4'>
                <Card.Title className='text-info mb-3'>
                  {cardData[3].title}
                </Card.Title>
                <Card.Text className='mb-4'>{cardData[3].content}</Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                  <span style={{ color: '#9CA3AF' }}>
                    閱覽人數：{cardData[3].views}
                  </span>
                  <i class='bi bi-facebook fs-5'></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className='h-100 bg-dark text-white border-0'>
              <div className='p-4'>
                <Card.Img
                  variant='top'
                  src={cardData[4].image}
                  alt={cardData[4].title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <Card.Body className='ps-4'>
                <Card.Title className='text-info mb-3'>
                  {cardData[4].title}
                </Card.Title>
                <Card.Text className='mb-4'>{cardData[4].content}</Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                  <span style={{ color: '#9CA3AF' }}>
                    閱覽人數：{cardData[4].views}
                  </span>
                  <i class='bi bi-facebook fs-5'></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
