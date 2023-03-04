import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export default function ResourceCategory({ params }) {
  return (
    <>
      <Container className="px-8">
        <Heading>{params.category}</Heading>
      </Container>
    </>
  );
}
