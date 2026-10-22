import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors.js";
import Button from "./UI/Button.jsx";

// a list somebody shared with me: its name, its owner, and a way out
export default function SharedListRow({ membership, onLeave }) {
  const list = membership.get("list");

  return (
    <Row>
      <Details>
        <ListLink to={`/lists/${list.id}`}>{list.get("name")}</ListLink>
        {/* include() leaves the owner out if I may not read that user's row */}
        <Owner>shared by {list.get("owner")?.get("username") ?? "someone"}</Owner>
      </Details>
      <Button
        type="button"
        $block
        label="Leave"
        onClick={() => onLeave(membership)}
      />
    </Row>
  );
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.line};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const Owner = styled.span`
  color: ${colors.muted};
  font-size: 14px;
`;

const ListLink = styled(Link)`
  color: ${colors.accent};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

