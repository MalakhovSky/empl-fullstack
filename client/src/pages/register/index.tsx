import React from "react";
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {PasswordInput} from "../../components/password-input";
import {CustomButton} from "../../components/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Register = () => {
  return (
      <Layout>
        <Row align="middle" justify="center">
          <Card title="Зарегестрируйтесь" style={{width: "30rem"}}>
            <Form onFinish={() => null}>
              <CustomInput type="" name="name" placeholder="Имя"/>
              <CustomInput type="email" name="email" placeholder="Email"/>
              <PasswordInput name="password" placeholder="Пароль"/>
              <PasswordInput name="confirmPassword" placeholder="Повторите пороль"/>
              <CustomButton type='primary' htmlType='submit'>
                Зарегестрироваться
              </CustomButton>
            </Form>
            <Space direction="vertical" size='large'>
              <Typography.Text>
                Уже зарегестрированы? <Link to={Paths.login}>Войдите</Link>
              </Typography.Text>
            </Space>
          </Card>
        </Row>
      </Layout>

  )
}