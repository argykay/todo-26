import { useState } from "react";
import styled from "styled-components";
import colors from "../colors.js";
import { signUp, logIn } from "../services/authService.js";
import Button from "../components/UI/Button.jsx";

export default function AuthPage({ onAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    setError("");
    try {
      const user = await signUp(username, password);
      onAuthenticated(user);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    try {
      const user = await logIn(username, password);
      onAuthenticated(user);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Stack onSubmit={handleSignUp}>
      <Title>Login / SignUp</Title>
      {error && <ErrorText>{error}</ErrorText>}

      <Field
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Field
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Actions>
        <Button type="submit" $block label="Sign Up" />
        <Button
          type="button"
          $block
          $primary
          label="Log In"
          onClick={handleLogin}
        />
      </Actions>
    </Stack>
  );
}

const Stack = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: ${colors.accent};
`;

const ErrorText = styled.p`
  margin: 0;
  color: ${colors.danger};
`;

const Field = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid ${colors.border};
  min-height: 40px;
  border-radius: 8px;
  background: ${colors.white};
  color: inherit;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;
