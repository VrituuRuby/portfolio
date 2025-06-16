import { Button } from "@/components/shared/button";
import { Title } from "../about/styles";
import {
  Container,
  Divider,
  Form,
  Input,
  InputContainer,
  Label,
  MailTo,
  TextArea,
} from "./stytles";

import EmailSvg from "@/assets/email.svg?react";

export function ContactFormSection() {
  return (
    <Container>
      <Title>Contato</Title>
      <Form>
        <InputContainer>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Label htmlFor="email">E-mail</Label>
        </InputContainer>
        <InputContainer>
          <TextArea rows={4} name="message" placeholder="E ai, Victor!" />
          <Label htmlFor="email">Mensagem</Label>
        </InputContainer>
        <Button>Enviar</Button>
      </Form>
      <Divider>ou me envie um e-mail em</Divider>
      <MailTo href="mailto:victor.velozo@outlook.com">
        <EmailSvg />
        victor.velozo@outlook.com
      </MailTo>
    </Container>
  );
}
