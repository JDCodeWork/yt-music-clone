
import { BackgroundDecoration, ReListen, TopicList } from "@/features/home/components";
import { MainContainer } from "@/shared/components";

export default function Home() {
  return (
    <>
      <BackgroundDecoration />
      <MainContainer>
        <TopicList />
        <ReListen />
      </MainContainer>
    </>
  );
}
