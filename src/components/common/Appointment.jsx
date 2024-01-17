import React from 'react'
import style from '../../styles/appointment.module.scss'
import { Form, Input, Select, Button, AutoComplete, Row, Col } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const Appointment = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);S
      };
  return (
    <div className={style.appointmentsection}>
      <Row className={style.appointmentheading}>Book Appointment</Row>
            <Form
      name="your-form"
      onFinish={onFinish}
      layout='vertical'
      className={style.appointmentform}
    >
      <Row className={style.formrows}>
      <Col span={10}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]} >
        <Input />
      </Form.Item>
      </Col>
      <Col span={10}>
      <Form.Item label="Phone number" name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number' }]} >
        <Input />
      </Form.Item>
      </Col>
      </Row>
      <Row className={style.formrows}>
      <Col span={10}>
      <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Please enter your age' }]} >
        <Input />
      </Form.Item>
      </Col>
      <Col span={10}>
      <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter your city' }]} >
        <Input />
      </Form.Item>
      </Col>
      </Row>
      <Row className={style.formrows}>
      <Col span={10}>
      <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please enter your company' }]} >
        <Input />
      </Form.Item>
      </Col>
      <Col span={10}>
      <Form.Item label="Chief complaints" name="chiefComplaints" rules={[{ required: true, message: 'Please enter your chief complaints' }]}>
        <TextArea />
      </Form.Item>
      </Col>
      </Row>
      <Row className={style.formrows}>
      <Col span={10}>
      <Form.Item label="Previous experience with physiotherapy" name="previousExperience" >
        <TextArea />
      </Form.Item>
      </Col>
      <Col span={10}>
      <Form.Item label="Doctors" name="selectedCity" rules={[{ required: true, message: 'Please select your city' }]}>
        <Select placeholder="Available Doctors">
          <Option value="doctors1">City 1</Option>
          <Option value="doctors2">City 2</Option>
        </Select>
      </Form.Item>
      </Col>
      </Row>

      <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
        <Button type="primary" htmlType="submit" className={style.submitbutton}>
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
  )
}

export default Appointment