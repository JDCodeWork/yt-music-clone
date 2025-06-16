"use client";

import { TOPICS_TAGS } from "@/shared/data/search.data"
import { useState } from "react";
import { TopicItem } from "./TopicItem";

export const TopicList = () => {
  const topics = TOPICS_TAGS

  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  return (
    <div className="flex gap-3 py-4">
      {topics.map((topic) => (
        <TopicItem label={topic} isSelected={selectedTag === topic} key={topic} onSelect={setSelectedTag} />
      ))}
    </div>
  )
}
