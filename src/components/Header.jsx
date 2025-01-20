import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderImage_01 from '../assets/images/HeaderImage_01.jpg';

const Header = () => {
  return (
    <header className='mt-5'>
      <Container>
        <Row>
          <Col xs={6} className='d-flex align-items-center'>
            <div className='header__position'>
              <h5 className='header__smallword'>我們使用這個網頁來當範例</h5>
              <br />
              <h1 className='header__bigword'>學習用網頁</h1>
              <br />
              <a className='block-btn block-btn--gradient' href='#'>
                閃光按鈕
              </a>
            </div>
          </Col>
          <Col
            xs={6}
            className='d-flex justify-content-center align-items-center'
          >
            <div
              className='rounded-circle overflow-hidden'
              style={{
                width: '300px',
                height: '300px',
              }}
            >
              <img
                src={HeaderImage_01}
                alt='HeaderImage'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
