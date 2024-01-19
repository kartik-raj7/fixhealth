import React, { useEffect, useState } from "react";
import style from "../../styles/appointment.module.scss";
import {
  Form,
  Input,
  Select,
  Button,
  AutoComplete,
  Row,
  Col,
  Steps,
  Image,
  Space,
} from "antd";
import { openNotificationWithIcon } from "../../utils/ui/notification";
import { axiosGet } from "../../services/axiosGet";
import { useNavigate } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { Element } from "react-scroll";
import { FaCity } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;
import { motion } from 'framer-motion';

const Appointment = ({ city }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const [appointmentscheduled,setAppointmentScheduled] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    phonenum: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    anyprevexp: "",
    selecteddoc: "",
  });
  const fetchData = async () => {
    const url = "https://mocki.io/v1/646db521-b10a-4ba4-a62e-54df95b3f695";
    try {
      const response = await axiosGet(url);
      city = city.toLowerCase();
      console.log(city);
      if (response.status) {
        if (response.location[city]) {
          setOptions(response.location[city]);
        } else {
          setOptions([]);
        }
      } else {
        console.error("Error:", response.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
    setFormdata({ ...formdata, city: city });
  }, [city]);
  const onFinish = (values) => {
    console.log("Received values:", values);
    setAppointmentScheduled(true);
    console.log(formdata);
    openNotificationWithIcon("success", "Appointment scheduled successfully");
  };
  const onError = (errorInfo) => {
    console.log("Validation failed:", errorInfo);
    // openNotificationWithIcon("error", "Please fill all the details properly");
  };
  console.log(formdata)
  const nextStep = async () => {
    console.log(formdata);
    try {
      await form.validateFields();
      if (currentStep == 0) {
        if (formdata.name && formdata.phonenum) {
          setCurrentStep(currentStep + 1);
        } else {
          openNotificationWithIcon(
            "error",
            "Please fill all the details properly"
          );
          return;
        }
      }
      if (currentStep == 1) {
        if (formdata.age && formdata.city && formdata.company) {
          setCurrentStep(currentStep + 1);
          navigate(`/?city=${formdata.city}`);
        } else {
          openNotificationWithIcon(
            "error",
            "Please fill all the details properly"
          );
          return;
        }
      }
      if (currentStep == 2) {
        if (formdata.complaints) {
          if (formdata.age < 40) {
            setCurrentStep(currentStep + 2);
          } else {
            setCurrentStep(currentStep + 1);
          }
        } else {
          openNotificationWithIcon(
            "error",
            "Please fill all the details properly"
          );
          return;
        }
      } else setCurrentStep(currentStep + 1);
    } catch (errorInfo) {
      console.log("Validation failed:", errorInfo);
    }
  };
  const doctorsdetails = options.map((doctor, index) => (
    <Option key={index} value={doctor.doctor_name} title={doctor.doctor_name}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={doctor.image_url} alt={`${doctor.doctor_name}'s Image`} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
        <div>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Dr. {doctor.doctor_name}</span>
          <div style={{ fontSize: '14px' }}>
            <span>{doctor.speciality}</span>
            <span style={{ marginLeft: '10px' }}>Practicing Since: {doctor.practice_since}</span>
          </div>
          <div style={{ fontSize: '14px' }}>Average Rating: {doctor.average_rating}</div>
        </div>
      </div>
    </Option>
  ));
  function ScheduleAppointment(){
    return (
      <Row style={{height:'100%',width:'80%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
      <Col xs={24} xl={12} className={style.appointmentleftsection}>
      <Row className={style.appointmentheading} >
      <Image src='/doctor.png' preview={false} className={style.bookappointmentimage}/>
      <Image src='/therapy.png' preview={false} className={style.bookappointmentimage}/>
      <Image src='/therapy2.png' preview={false} className={style.bookappointmentimage}/>
      <span>Book an Appointment for <span style={{color:'white',textDecoration:'line-through'}}>1000</span> FREE</span>
      <Row style={{color:'white',paddingTop:'15px'}}>60+ Expert Physiotherapists for 200+ Conditions</Row>
      </Row>
      <Form
        name="your-form"
        onFinish={onFinish}
        onFinishFailed={onError}
        layout="vertical"
        className={style.appointmentformdiv}
      >
        {currentStep === 0 && (
          <Row className={style.formrows}>
            <Col span={24}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
               <Input
  onChange={(e) =>
    setFormdata({ ...formdata, name: e.target.value })
  }
  className={style.inputfield}
  autoComplete={false}
  placeholder="Enter Name"
  prefix={
    <Space>
      <FaRegUser style={{ color: 'black' }} />
    </Space>
  }
/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Phone"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^[6-9]\d{9}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                ]}
              >
                <Input
                  maxLength={10}
                  onChange={(e) =>
                    setFormdata({ ...formdata, phonenum: e.target.value })
                  }
                  autoComplete={false}
                  className={style.inputfield}
                  placeholder="86856565656"
                  prefix={
                    <Space>
                      <FaPhoneAlt style={{ color: 'black' }} />
                    </Space>
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        )}

        {currentStep === 1 && (
          <Row className={style.formrows}>
            <Col span={24}>
              <Form.Item
                label="Age"
                name="age"
                rules={[
                  { required: true, message: "Please enter your age" },
                  {
                    pattern: /^(0|[1-9][0-9]*)$/,
                    message: "Please enter a valid age (non-negative integer)",
                  },
                ]}
                
              >
                <Input
                  onChange={(e) =>
                    setFormdata({ ...formdata, age: e.target.value })
                  }
                  className={style.inputfield}
                  placeholder="Enter your age"
                  maxLength={2}
                  prefix={
                    <Space>
                      <FaBabyCarriage style={{ color: 'black' }} />
                    </Space>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter your city" }]}
                initialValue={city}
              >
                <Input
                  onChange={(e) =>
                    setFormdata({ ...formdata, city: e.target.value })
                  }
                  className={style.inputfield}
                  placeholder="Enter your City"
                  prefix={
                    <Space>
                      <FaCity style={{ color: 'black' }} />
                    </Space>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Company"
                name="company"
                rules={[
                  { required: true, message: "Please enter your company" },
                ]}
              >
                <Input
                  onChange={(e) =>
                    setFormdata({ ...formdata, company: e.target.value })
                  }
                  className={style.inputfield}
                  placeholder="Enter your Company"
                  prefix={
                    <Space>
                      <MdOutlineWork style={{ color: 'black' }} />
                    </Space>
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        )}

        {currentStep === 2 && (
          <Row className={style.formrows}>
            <Col span={24}>
              <Form.Item
                label="Chief complaints"
                name="chiefComplaints"
                rules={[
                  {
                    required: true,
                    message: "Please enter your chief complaints",
                  },
                ]}
              >
                <TextArea
                  onChange={(e) =>
                    setFormdata({ ...formdata, complaints: e.target.value })
                  }
                  className={style.inputfield}
                  placeholder="Enter your issues here"
                />
              </Form.Item>
            </Col>
          </Row>
        )}

        {currentStep === 3 && (
          <Row className={style.formrows}>
            <Col span={24}>
              <Form.Item
                label="Previous experience with physiotherapy"
                name="previousExperience"
              >
                <TextArea
                  onChange={(e) =>
                    setFormdata({ ...formdata, anyprevexp: e.target.value })
                  }
                  className={style.inputfield}
                  placeholder="Enter previous experience with physiotherapy if any here"
                />
              </Form.Item>
            </Col>
          </Row>
        )}

        {currentStep === 4 && (
          <Row className={style.formrows}>
            <Col span={24}>
              <Form.Item
                label="Doctors"
                name="selectedCity"
                rules={[{ required: true, message: "Please select doctor" }]}
              >
                <Select
      placeholder="Available Doctors"
      onSelect={(e) => {console.log('heere',e); setFormdata({ ...formdata, selecteddoc: e.value })}}
      value={formdata.selecteddoc}
      labelInValue
      className={style.selectdoc}
    >
      {doctorsdetails}
    </Select>
              </Form.Item>
            </Col>
          </Row>
        )}

        <Form.Item className={style.actionbtndiv}>
          {currentStep <= 3 && (
            <Button type="primary" onClick={nextStep} className={style.nextbtn}>
              Next
            </Button>
          )}
          {currentStep === 4 && (
            <Button
              type="primary"
              htmlType="submit"
              className={style.submitbutton}
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
      </Col>
      <Col xs={24} xl={12} className={style.appointmentrightsection}>
      <motion.div
      animate={{ y: [-10, 10, -10], transition: { duration: 2, repeat: Infinity } }}
    >
      <Image src='/physio.png' preview={false}/>
      </motion.div>
      </Col>
      </Row>
    )
  }
  function AppointmentScheduled(){
    console.log(formdata)
    return(
  <>
  <Row className={style.confirmation}>
    <Col span={24} className={style.confirmationsymbol}><GiConfirmed/></Col>
    <Col span={24} className={style.confirmationheading}>Your Appointment Request Successfully Sent!!</Col>
    <Col span={24} className={style.confirmationsubheading}>We have recieved your Appointment Request and will contact you soon</Col>
    <Row className={style.confirmationbox}>
      <Col xs={24 }md={11} className={style.appointmentdetailcol}>
        <Row className={style.appointmentdetailheading}>Client's Name:</Row>
        <Row className={style.appointmentdetailvalue}>{formdata.name}</Row>
      </Col>
      <Col xs={24 }md={11} className={style.appointmentdetailcol}>
        <Row className={style.appointmentdetailheading}>Client's Age:</Row>
        <Row className={style.appointmentdetailvalue}>{formdata.age}</Row>
      </Col>
      <Col xs={24 }md={11} className={style.appointmentdetailcol}>
        <Row className={style.appointmentdetailheading}>Client's City:</Row>
        <Row className={style.appointmentdetailvalue}>{formdata.city}</Row>
      </Col>
      <Col xs={24 }md={11} className={style.appointmentdetailcol}>
        <Row className={style.appointmentdetailheading}>Client's Company:</Row>
        <Row className={style.appointmentdetailvalue}>{formdata.company}</Row>
      </Col>
      <Col xs={24 }md={11}className={style.appointmentdetailcol}>
        <Row className={style.appointmentdetailheading}>Client's Complaint:</Row>
        <Row className={style.appointmentdetailvalue}>{formdata.complaints}</Row>
      </Col>
      <Col xs={24 }md={11} className={style.appointmentdetailcol}>
        <Row className={style.appointmentdetailheading}>Doctor Consultant:</Row>
        <Row className={style.appointmentdetailvalue}>Dr. {formdata.selecteddoc}</Row>
      </Col>
    </Row>
  </Row>
  </>
    )
  }
  return (
    <Element id="bookappointment">
     {appointmentscheduled?<div className={style.appointmentscheduledsection}>{AppointmentScheduled()}</div>:<div className={style.appointmentsection}>{ScheduleAppointment()}</div>}
    
   
    </Element>
  );
};

export default Appointment;
