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
} from "antd";
import { openNotificationWithIcon } from "../../utils/ui/notification";
import { axiosGet } from "../../services/axiosGet";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

const Appointment = ({ city }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

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
    const url = "https://mocki.io/v1/5341dc57-c19f-4101-8817-a94161138aaf";
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
    console.log(formdata);
    openNotificationWithIcon("success", "Appointment scheduled successfully");
  };
  const onError = (errorInfo) => {
    console.log("Validation failed:", errorInfo);
    // openNotificationWithIcon("error", "Please fill all the details properly");
  };

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
  return (
    <Element id="bookappointment">
    <div className={style.appointmentsection}>
      <Row className={style.appointmentheading}>Book Appointment</Row>
      <Form
        name="your-form"
        onFinish={onFinish}
        onFinishFailed={onError}
        layout="vertical"
        style={{ width: "60%" }}
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
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Phone number"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^5\d{9}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                ]}
              >
                <Input
                  maxLength={10}
                  onChange={(e) =>
                    setFormdata({ ...formdata, phonenum: e.target.value })
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
                  onSelect={(e) => setFormdata({ ...formdata, selecteddoc: e })}
                >
                  {options.map((doctor, index) => (
                    <Option key={index} value={doctor.doctor_name}>
                      {doctor.doctor_name}
                    </Option>
                  ))}
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
    </div>
    </Element>
  );
};

export default Appointment;
