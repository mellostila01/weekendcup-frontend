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
    Button,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    CardText,
    CardFooter,
    ModalBody,
    ModalHeader,
    Modal,
    ModalFooter
} from "reactstrap";

function MainPage(props) {
    const [modalSignin, setmodalSignin] = React.useState(false);
    const toggleModalSignin = () => {
        setmodalSignin(!modalSignin);
    };
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="2" />
                    <Col md="6">
                        <Card className="card-user text-center">
                            <CardBody>
                                <CardTitle>This is announcement</CardTitle>
                                <CardText>Next Tournament will start soon.</CardText>
                            </CardBody>
                            <CardFooter>
                                <Button size="sm" color="info" onClick={toggleModalSignin}>
                                    Cick here to sign up
                            </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Modal
                    isOpen={modalSignin}
                    toggle={toggleModalSignin}
                >
                    <ModalHeader>

                        <button
                            aria-label="Close"
                            className="close"
                            onClick={toggleModalSignin}
                        >
                            <i className="tim-icons icon-simple-remove" />
                        </button>
                    </ModalHeader>
                    <ModalBody align="center" style={{height:"150px"}}>
                        <p >                            
                        You need to sign in first
                        </p>
                     </ModalBody>
                </Modal>
            </div>
        </>
    );
}

export default MainPage;
