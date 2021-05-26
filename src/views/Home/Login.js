/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes

// reactstrap components
import {
  Button,
  Row,
  Col,
  Form,
  CardBody,
  CardFooter,
  Card,
  CardHeader,
  FormGroup,
  Input,
} from "reactstrap";

function Login(props) {
  return (
    <>
        <div className="content">
            <Row>
                <Col md="2"/>
                <Col md="6">
                    <Card>
                        <CardHeader className="text-center">
                            <h3 className="title">Sign in</h3>
                        </CardHeader>
                        <CardBody>                            
                            <Form>
                                <FormGroup>
                                    <label>Steam account name</label>
                                    <Input
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Password</label>
                                    <Input
                                        type="password"
                                    />
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter className="text-center">
                            <div className="button-container">
                                <Link to={"/user"}>
                                    <Button color="info">Sign in</Button>
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    </>
  );
}

export default Login;
