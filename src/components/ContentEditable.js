import { useEffect, useRef } from "react";

export default function Contenteditable(props) {
  const contentEditableRef = useRef(null);

  useEffect(() => {
    if (contentEditableRef.current.textContent !== props.value) {
      contentEditableRef.current.textContent = props.value;
    }
    contentEditableRef.current.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(contentEditableRef.current);
    range.collapse(false); // Collapse range to end
    selection.removeAllRanges();
    selection.addRange(range);
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      contentEditableRef.current.blur()
    }
  };

  return (
    <div
      className="focus:outline-none z-10 relative"
      contentEditable="true"
      ref={contentEditableRef}
      onInput={event => {
        props.onChange(event.target.textContent);
      }}
      onKeyDown={handleKeyDown}
    />
  );
}