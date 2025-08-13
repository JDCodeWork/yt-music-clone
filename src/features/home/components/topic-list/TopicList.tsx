"use client";

import { TOPICS_TAGS } from "@/shared/data/search.data"
import { useState } from "react";
import { TopicItem } from "./TopicItem";

export const TopicList = () => {
  const topics = TOPICS_TAGS

  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleSelect = (selectedLabel: string) => {
    if (selectedLabel == selectedTag) setSelectedTag(null)
    else setSelectedTag(selectedLabel)
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 py-4 min-w-auto">
        {topics.map((topic) => (
          <TopicItem label={topic} isSelected={selectedTag === topic} key={topic} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  )
}
