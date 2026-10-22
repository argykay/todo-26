import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors.js";
import ToDoList from "../components/ToDoList/ToDoList.jsx";
import { loadList } from "../services/listService.js";

export default function ListPage() {
  // the :listId part of the URL, e.g. /lists/Xk3v9QaB2c
  const { listId } = useParams();

  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setList(await loadList(listId));
      } catch (err) {
        // "Object not found": no such list, or its ACL does not let me read it
        setError(err.message);
      }
    }

    load();
  }, [listId]);

  return (
    <>
      <BackLink to="/">← All lists</BackLink>

      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : !list ? (
        <Muted>Loading…</Muted>
      ) : (
        <ToDoList key={list.id} list={list} />
      )}
    </>
  );
}

const BackLink = styled(Link)`
  color: ${colors.accent};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  margin: 12px 0;
  color: ${colors.danger};
`;

const Muted = styled.p`
  margin: 12px 0;
  color: ${colors.muted};
`;
