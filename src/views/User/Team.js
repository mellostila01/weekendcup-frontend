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
// nodejs library that concatenates classes

// reactstrap components
import {
    Row,
    CardBody,
    Card,
    CardHeader,
    Col,
    Table,
} from "reactstrap";

function Team(props) {
    return (
        <>
            <div className="content">
                <Row>
                    <Card>
                        <CardHeader>
                            <h5 className="title">Team Name</h5>
                        </CardHeader>
                        <CardBody>
                            <p>This is team detail info bla bla bla...</p>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                    <h5 className="title">Stats</h5>
                    <div style={{width:"100%"}} className="blockquote blockquote-info">
                        soon...
                    </div>
                    <h5 className="title">Team Members</h5>
                    <Col md="12">
                        <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                                <tr>
                                    <th><span>Admin 👑</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>First</td>
                                </tr>
                                <tr>
                                    <td>Second</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Team;
