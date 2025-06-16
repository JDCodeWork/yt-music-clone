interface Props {
  label: string
  onSelect: (label: string) => void
  isSelected?: boolean
}
export const TopicItem = ({ label, onSelect, isSelected }: Props) => {
  return (
    <button className={`px-3 py-2 rounded-lg cursor-pointer ${isSelected ? "bg-stone-100 text-stone-900 font-medium" : "bg-stone-600/20 text-stone-100 hover:bg-stone-400/20"}`} onClick={() => onSelect(label)}>
      {label}
    </button>
  )
}
