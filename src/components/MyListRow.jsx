import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors.js";
import AddForm from "./AddForm.jsx";
import Button, { CloseIcon } from "./Button.jsx";

// one of my own lists: its name, and a form to share it
export default function MyListRow({ list, onShare, onDelete }) {
  return (
    <ListBlock>
      <NameRow>
        <ListLink to={`/lists/${list.id}`}>{list.get("name")}</ListLink>
        <Button
          type="button"
          $block
          $danger
          label="Delete"
          icon={<CloseIcon />}
          onClick={() => onDelete(list)}
        />
      </NameRow>
      <AddForm
        onAdd={(username) => onShare(list, username)}
        buttonLabel="Share"
        placeholder="Username"
      />
    </ListBlock>
  );
}

const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.line};
`;

const NameRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 8px;
  align-items: center;
  width: 100%;
`;

const ListLink = styled(Link)`
  color: ${colors.accent};
  font-weight: 600;
  text-decoration: none;
  font-size: 34px;

  &:hover {
    text-decoration: underline;
  }
`;
