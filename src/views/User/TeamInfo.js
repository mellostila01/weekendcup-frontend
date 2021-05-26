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
  Form,
  CardBody,
  CardFooter,
  Card,
  CardHeader,
  FormGroup,
  Input,
} from "reactstrap";

function TeamInfo(props) {
    let members=[{username:"first"},{username:"second"}];
  return (
    <>
        <div className="content">
            <Row>
                <Card>
                    <CardHeader>
                        <h5 className="title">Team information</h5>
                    </CardHeader>
                    <CardBody>                            
                        <Form>
                            <FormGroup>
                                <label>Team name</label>
                                <Input
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Detail info</label>
                                <Input
                                    type="textarea"
                                    rows={5}
                                    cols={5}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Team members</label>
                                {members.map((user)=>{ 
                                    return(                                   
                                        <Input
                                            type="text"
                                            value={user.username}
                                        />
                                    );
                                })}
                            </FormGroup>
                            <FormGroup align="right">
                                <Button size="sm">+</Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <div className="button-container">
                            <Link to={"/user/team"}>
                                <Button className="btn-fill" color="info" type="submit">Save</Button>
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </Row>
        </div>
    </>
  );
}

export default TeamInfo;
