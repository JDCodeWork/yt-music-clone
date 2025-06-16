import { Container } from "@/shared/components";

import { BackgroundDecoration, ReListen, TopicList } from "@/features/home/components";

export default function Home() {
  return (
    <>
      <BackgroundDecoration />
      <Container>
        <TopicList />
        <ReListen />
      </Container>
    </>
  );
}
