import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function Profile() {
  const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        phoneNumber: yup.string().required('Required'),
        email: yup.string().email('Invalid email address').required('Required'),
        password: yup.string().required('Required'),
        comment: yup.string().required('Write a special request'),
    });

    return (
        <div className='profileCmp'>
            <Container>
                <Row className="titulos">
                    <Col>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </Col>
                </Row>

                <Row>
                    <h3>Sign in to collect points</h3>
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values) => console.log(values)}
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: '',
                            password: '',
                            specialRequest: '',
                        }}
                        >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" md="12" controlId="validationFirstName">
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" md="12" controlId="validationLastName">
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" md="12" controlId="validationPhoneNumber">
                                <Form.Control
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    isValid={touched.phoneNumber && !errors.phoneNumber}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" md="12" controlId="validationEmail">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" md="12" controlId="validationPassword">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" md="12" controlId="validationComment">
                                <Form.Control
                                    as="textarea"
                                    name="comment"
                                    rows={3} 
                                    placeholder="Add a special request (optional)"
                                    value={values.comment}
                                    onChange={handleChange}
                                    // isValid={touched.comment && !errors.comment}
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                            <Button className="submitProfile" type="submit">Continue</Button>
                        </Form>
                    )}
                    </Formik>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;