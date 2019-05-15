import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Jumbotron,Row,Col,Image,Button, Container} from "react-bootstrap";
import "./Home.css";


export default class Home extends Component {
    render() {
        return (
           <Container>
               <Jumbotron>
                   <h2>Welcome to yuma React webiste</h2>
                   <p>This is how to build a website with React , React-Router & React-bootstrap</p>
                   <Link to="/about">
                    <Button bsStyle="primary">Learn more</Button>
                   </Link>
               </Jumbotron>
               <Row className="show-grid text-center">
               <Col xs={12} sm={4} className="person-wrapper">
               <Image src="assets/person-1.jpg" circle className="profile-pic"/>
               <h3>frank</h3>
               <p>That's a crocked tree. We'll send him to washingmton.These little son of a guns hide in your brush and your just have to push them out.</p>
               </Col>
               <Col xs={12} sm={4} className="Person-wrapper">
               <Image src="assets/person-2.jpg2"circle className="profile-pic"/>
               <h3>Vanessa</h3>
               <p>That's a crocked tree.We'll send him to washigton. These little son of a guns hide in your brush and your brush and you just have to push them out. </p>
              </Col>
               </Row>
           </Container>
        );
    }
}

