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
// import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { login } from "../../store/actions/user.actions";

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
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "password",
            email: "gg@gg.com"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange=(e)=>{
        const { name, value} = e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit = () => {
        const { username, password , email} = this.state;
        this.props.login({username,password,email}).then(response => {
            console.log("niania res", response)
            this.props.history.push("/user")
        });
    }
    render() {
        const { username, password} = this.state;
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="2" />
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
                                                name={"username"}
                                                value={username}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Password</label>
                                            <Input
                                                type="password"
                                                name={"password"}
                                                value={password}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <div className="button-container">
                                        {/* <Link to={"/user"}> */}
                                        <Button color="info" type="submit" onClick={this.handleSubmit}>Sign in</Button>
                                        {/* </Link> */}
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}
function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn
    }
}
function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);
