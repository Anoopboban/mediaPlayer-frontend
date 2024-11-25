import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <Container className='mt-5'>
      <Row>
        <Col sm={12} md={6}>
        <h3>Welcome to <span className='text-warning'>Media player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde provident quia? Tempora quos labore aliquid, consectetur velit, officiis optio quasi recusandae fuga doloremque harum. Atque, veritatis? Vel, impedit exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet doloremque eaque cum aliquam vero, quam a vitae ab veritatis natus accusamus non libero rerum consequuntur illum ullam architecto, velit et.</p>
        <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        
        <Col sm={12} md={6} className='d-flex justify-content-center'>
        <img src="https://cdn.pixabay.com/animation/2023/10/24/13/50/13-50-26-112_512.gif" alt="no image" className='w-50'/>
        </Col>

      </Row>

    </Container>
    
    <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center">Features</h1>
            <div className="row mt-5">
            <div className="col-md-4">
              <Card style={{ width: "100%" }} className="p-1">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/f2/8b/62/f28b62e3c73e0991d51e6c0dcb412360.gif" className="w-100" style={{  height: "200px" }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }} className="p-1">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/c9/bc/98/c9bc987940c4fca69fc9047ebbd61e9c.gif" className="w-100" style={{  height: "200px" }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card style={{ width: "100%" }} className="p-1">
                <Card.Img variant="top" src="https://i.makeagif.com/media/11-26-2021/HE1yvD.gif"className="w-100"  style={{  height: "200px" }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={6}>
          <h1>Simple fast and powerful</h1>
          <p><span style={{fontSize:'40px' ,textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p><span style={{fontSize:'40px', textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p><span style={{fontSize:'40px', textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          </Col>
          <Col md={6}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5KH2WKISoxs?list=RD5KH2WKISoxs" title="Yeya En Kottikkaaraa Video Song | Papanasam | Kamal Haasan | Gautami | Jeethu Joseph | Ghibran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    
    
    
    </>
  )
}

export default Landingpage