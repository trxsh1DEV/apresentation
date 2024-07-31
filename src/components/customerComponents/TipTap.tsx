import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import ToolBar from "./ToolBar";
import Underline from "@tiptap/extension-underline";
import CharacterCount from "@tiptap/extension-character-count";
import { createSuggestion } from "@/utils/data/suggestion";
import { createMentionExtension } from "./CustomMention";

interface TipTapProps {
  onChange: (value: string) => void;
  content: string;
}

const Tiptap: FC<TipTapProps> = ({ onChange, content }) => {
  const limit = 10000;

  const extensions = [
    StarterKit,
    Underline,
    CharacterCount.configure({ limit }),
    createMentionExtension("suggestion").configure({
      suggestion: createSuggestion("@"),
      HTMLAttributes: {
        class: "mention",
      },
    }),
    createMentionExtension("mention").configure({
      suggestion: createSuggestion("#"),
      HTMLAttributes: {
        class: "mention",
      },
    }),
  ];

  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;

  return (
    <div className="w-full px-4">
      <ToolBar editor={editor} content={content} />
      <EditorContent editor={editor} />
      {editor && (
        <div
          className={`character-count ${
            editor.storage.characterCount.characters() === limit
              ? "character-count--warning"
              : ""
          }`}
        >
          <svg height="20" width="20" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="#e9ecef" />
            <circle
              r="5"
              cx="10"
              cy="10"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`${(percentage * 31.4) / 100} 31.4`}
              transform="rotate(-90) translate(-20)"
            />
            <circle r="6" cx="10" cy="10" fill="white" />
          </svg>
          {editor.storage.characterCount.characters()} / {limit} characters
        </div>
      )}
    </div>
  );
};

export default Tiptap;
