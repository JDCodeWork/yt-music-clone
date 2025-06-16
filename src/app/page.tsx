import { BackgroundDecoration, TopicList } from "@/features/home/components";
import { Container } from "@/shared/components";

export default function Home() {
  return (
    <>
      <BackgroundDecoration />
      <Container>
        <TopicList />
      </Container>
    </>
  );
}
