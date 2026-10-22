import { useState } from "react";
import styled from "styled-components";
import Button from "./Button.jsx";
import TextInput from "./TextInput.jsx";

export default function AddForm({ onAdd, buttonLabel = "Add", placeholder }) {
  let [task, setTask] = useState("");

  function onButtonClick(event) {
    event.preventDefault();
    onAdd(task);
    setTask("");
  }

  return (
    <FormRow onSubmit={onButtonClick}>
      <TextInput value={task} onChange={setTask} placeholder={placeholder} />
      <Button
        type="submit"
        $primary
        $block
        label={buttonLabel}
        disabled={task.length === 0}
      />
    </FormRow>
  );
}

const FormRow = styled.form`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 8px;
  align-items: center;
  width: 100%;
`;

