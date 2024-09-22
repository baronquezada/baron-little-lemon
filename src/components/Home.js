import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Home = () => {
    /* json-server --watch db.json --port 3030 */
    const [menus, setMenus] = useState([]);
    const [spinner, setSpinner] = useState(false);    

    const getMenu = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("http://localhost:3030/menu", requestOptions)
        .then((response) => response.json())
        .then((result) => {setMenus(result); setSpinner(false);})
        .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        setSpinner(true);
        getMenu();
    }, []);

    return (
        <div className="homeCmp">
            <Container>
                <Row className="titulos">
                    <Col>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </Col>
                </Row>

                <Row className="bannerHome">
                    <Col xs={12} md={8}>
                        <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='imgProduct imgChef'></div>
                    </Col>

                    <Col>
                        <Button className="reserve reserveTable" as={Link} to="/booking">Reserve a table</Button>
                    </Col>
                </Row>

                <Row className="catsHome">
                    <Col>
                        <h3>ORDER for DELIVERY!</h3>
                        <ul className='listCats'>
                            <li><Button>Lunch</Button></li>
                            <li><Button>Mains</Button></li>
                            <li><Button>Dessets</Button></li>
                            <li><Button>A la carte</Button></li>
                            <li><Button>Special</Button></li>
                        </ul>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    {spinner && (<p className='loadingMesage'>Menu is loading...</p>)}
                    <ListGroup className='listProduct'>
                        {menus.map((menu) => (
                            <ListGroup.Item key={menu.id}>
                                <Row>
                                    <Col xs={12} md={9}>
                                        <h3>{menu.name}</h3>
                                        <p>{menu.info}</p>
                                        <span>{menu.price}</span>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <div className='imgProduct imgFood' id={menu.img}></div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Row>
            </Container>  
        </div>
    )
}
export default Home;