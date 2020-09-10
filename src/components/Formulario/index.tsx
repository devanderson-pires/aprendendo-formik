import * as React from "react";
import { Formik, ErrorMessage } from "formik";
import { object, string, ref } from "yup";

import {
  ContainerForm,
  StyledForm,
  Title,
  InputGroup,
  Input,
  MsgDeErro,
  Button,
} from "./styles";

const schema = object({
  nome: string().required("Nome é obrigatório"),
  email: string()
    .email("Insira um e-mail válido")
    .required("E-mail é obrigatório"),
  senha: string()
    .min(4, "Senha deve ter no mínimo 4 caracteres")
    .required("Senha é obrigatório"),
  confirmacaoSenha: string()
    .oneOf([ref("senha")], "Senhas não conferem")
    .required("Confirmação de sua senha é obrigatório"),
});

const Formulario = () => {
  return (
    <ContainerForm>
      <Formik
        initialValues={{
          nome: "",
          email: "",
          senha: "",
          confirmacaoSenha: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (
          <StyledForm>
            <Title>Crie sua conta</Title>

            <InputGroup>
              <Input
                name="nome"
                placeholder="Seu nome"
                erro={touched.nome && errors.nome}
              />
              <ErrorMessage name="nome" component={MsgDeErro} />
            </InputGroup>

            <InputGroup>
              <Input
                name="email"
                placeholder="E-mail"
                type="email"
                erro={touched.email && errors.email}
              />
              <ErrorMessage name="email" component={MsgDeErro} />
            </InputGroup>

            <InputGroup>
              <Input
                name="senha"
                placeholder="Senha"
                type="password"
                erro={touched.senha && errors.senha}
              />
              <ErrorMessage name="senha" component={MsgDeErro} />
            </InputGroup>

            <InputGroup>
              <Input
                name="confirmacaoSenha"
                placeholder="Confirme sua senha"
                type="password"
                erro={touched.confirmacaoSenha && errors.confirmacaoSenha}
              />
              <ErrorMessage name="confirmacaoSenha" component={MsgDeErro} />
            </InputGroup>

            <Button type="submit">Cadastrar</Button>
          </StyledForm>
        )}
      </Formik>
    </ContainerForm>
  );
};

export default Formulario;
