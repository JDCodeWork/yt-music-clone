import { PRIVACY_OPTIONS, PrivacyOption } from "./PrivacySelect";

interface Props {
  activeOption: PrivacyOption
  onSelect: (e: React.MouseEvent, option: PrivacyOption) => void;
}
export const PrivacyList = ({ activeOption, onSelect }: Props) => {
  return (
    <div
      className="hidden peer-focus:block absolute w-md top-4 py-2 items-center bg-stone-800 border rounded border-stone-700 shadow-lg"
    >
      <ul className="max-h-[250px] overflow-y-auto flex flex-col">
        {
          PRIVACY_OPTIONS.map(option => (
            <li
              key={option.value}
              className={`flex items-center gap-6 px-4 py-2 cursor-pointer  transition-colors ${activeOption.value === option.value ? 'bg-stone-700' : 'hover:bg-stone-900'}`}
              onMouseDown={(e) => onSelect(e, option)}
            >
              <option.icon className="size-7 text-stone-500" />
              <p className="flex flex-col">
                <span className="text-stone-200">{option.label}</span>
                <span className="text-sm text-stone-400">{option.description}</span>
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
