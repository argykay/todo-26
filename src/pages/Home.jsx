import Button from "../components/Button.jsx";
import AddForm from "../components/AddForm.jsx";
import MyListRow from "../components/MyListRow.jsx";
import SharedListRow from "../components/SharedListRow.jsx";
import styled from "styled-components";
import colors from "../colors.js";

// the home page: every list, by name, each one a link to its own page
export default function Home({
  lists,
  memberships,
  onAddList,
  onShare,
  onLeave,
  onDeleteList,
  onLogout,
}) {
  return (
    <>
      <Header>
        <Title>Lists</Title>
        <Button type="button" $block label="Logout" onClick={onLogout} />
      </Header>

      <Section>
        <SectionTitle>My lists</SectionTitle>
        {lists.length === 0 && <Empty>No lists yet.</Empty>}
        {lists.map((list) => (
          <MyListRow
            key={list.id}
            list={list}
            onShare={onShare}
            onDelete={onDeleteList}
          />
        ))}
      </Section>

      {memberships.length > 0 && (
        <Section>
          <SectionTitle>Shared with me</SectionTitle>
          {memberships.map((membership) => (
            <SharedListRow
              key={membership.id}
              membership={membership}
              onLeave={onLeave}
            />
          ))}
        </Section>
      )}

      <Section>
        <SectionTitle>New list</SectionTitle>
        <AddForm onAdd={onAddList} buttonLabel="Add" placeholder="List name" />
      </Section>
    </>
  );
}

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 8px;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: rgb(248, 107, 163);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.muted};
`;

const Empty = styled.p`
  margin: 0;
  color: ${colors.muted};
`;
