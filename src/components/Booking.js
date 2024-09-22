import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';

const Booking = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        date: yup.string().required('Required'),
        time: yup.string().required('Required'),
        dinners: yup.string().required('Required'),
        occassion: yup.string().required('Required'),
        seating: yup.string().required('Required'),
    });

    return (
        <div className="bookingCmp">
            <Container>
                <Row className="titulos">
                    <Col>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>Find a table for any ocasion</h3>
                    </Col>
                </Row>

                <Row className="imagesBooking">
                    <Col xs={6}>
                        <div className='imgProduct imgChef1'></div>
                    </Col>
                    <Col xs={6}>
                        <div className='imgProduct imgChef2'></div>
                    </Col>
                </Row>

                <Row className="formBooking">
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values) => console.log(values)}
                        initialValues={{
                            date: '',
                            time: '',
                            dinners: '',
                            occassion: '',
                            seating: '',
                        }}
                        >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" md="12" controlId="validationDate">
                                <Form.Control
                                    type="date"
                                    name="date"
                                    placeholder="Select date"
                                    value={values.date}
                                    onChange={handleChange}
                                    isValid={touched.date && !errors.date}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" md="12" controlId="validationTime">
                                <Form.Select aria-label="Select Time">
                                    <option>Time</option>
                                    <option value="4">4:00</option>
                                    <option value="5">5:00</option>
                                    <option value="6">6:00</option>
                                    <option value="7">7:00</option>
                                    <option value="8">8:00</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" md="12" controlId="validationDinners">
                                <Form.Select aria-label="Number of Dinner">
                                    <option>Number of Dinners</option>
                                    <option value="4">less or 4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8 or more</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" md="12" controlId="validationOccassion">
                                <Form.Select aria-label="Occassion">
                                    <option>Occassion</option>
                                    <option value="casual">Casual</option>
                                    <option value="work">Work</option>
                                    <option value="special">Special</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <div key='inline-radio' className="mb-3">
                                    <Form.Check.Label className="white mb-1">Seating options</Form.Check.Label>
                                    <Form.Check
                                        label="Standard"
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-1'
                                    />
                                    <Form.Check
                                        label="Outside"
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-2'
                                    />
                                </div>
                            </Form.Group>

                            <Button className="submitBooking reserve" type="submit">Book</Button>
                        </Form>
                    )}
                    </Formik>
                </Row>
            </Container>  
        </div>
  )
}
export default Booking;