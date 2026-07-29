'use client';

import { useRef, useEffect } from 'react';

/**
 * Lightweight WYSIWYG editor: a contentEditable surface + a neobrutalist toolbar
 * driving document.execCommand. Emits sanitizable HTML via onChange. The HTML is
 * scrubbed again server-side before storage, so this only needs to be convenient.
 */

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

type ToolAction =
  | { cmd: string; arg?: string }
  | { custom: 'inlineCode' | 'link' };

const TOOLS: { label: string; title: string; action: ToolAction }[] = [
  { label: 'B', title: 'Bold', action: { cmd: 'bold' } },
  { label: 'I', title: 'Italic', action: { cmd: 'italic' } },
  { label: 'U', title: 'Underline', action: { cmd: 'underline' } },
  { label: 'H2', title: 'Heading', action: { cmd: 'formatBlock', arg: 'h2' } },
  { label: 'H3', title: 'Subheading', action: { cmd: 'formatBlock', arg: 'h3' } },
  { label: '• List', title: 'Bullet list', action: { cmd: 'insertUnorderedList' } },
  { label: '1. List', title: 'Numbered list', action: { cmd: 'insertOrderedList' } },
  { label: '❝ Quote', title: 'Quote', action: { cmd: 'formatBlock', arg: 'blockquote' } },
  { label: '</>', title: 'Inline code', action: { custom: 'inlineCode' } },
  { label: '🔗', title: 'Link', action: { custom: 'link' } },
  { label: '⎯', title: 'Divider', action: { cmd: 'insertHorizontalRule' } },
];

export default function WysiwygEditor({ value, onChange, placeholder, minHeight = 220 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Seed the editor once (and when it's externally cleared, e.g. after submit).
  useEffect(() => {
    const el = ref.current;
    if (el && el.innerHTML !== value && document.activeElement !== el) {
      el.innerHTML = value;
    }
  }, [value]);

  const emit = () => onChange(ref.current?.innerHTML ?? '');

  const run = (action: ToolAction) => {
    const el = ref.current;
    if (!el) return;
    el.focus();

    if ('custom' in action) {
      if (action.custom === 'link') {
        const url = window.prompt('Link URL:', 'https://');
        if (url) document.execCommand('createLink', false, url);
      } else if (action.custom === 'inlineCode') {
        const sel = window.getSelection();
        const text = sel?.toString();
        if (text) document.execCommand('insertHTML', false, `<code>${text}</code>`);
      }
    } else {
      document.execCommand(action.cmd, false, action.arg);
    }
    emit();
  };

  return (
    <div style={{ border: '2px solid #222', background: '#080808' }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: 6, borderBottom: '2px solid #222', background: '#0d0d0d' }}>
        {TOOLS.map((tool) => (
          <button
            key={tool.label}
            type="button"
            title={tool.title}
            // Prevent the button from stealing selection/focus before the command runs.
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => run(tool.action)}
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#ccc', background: '#111', border: '1px solid #2a2a2a', padding: '4px 8px', cursor: 'pointer', minWidth: 26 }}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* Editable surface (reuses .rte typography) */}
      <div
        ref={ref}
        className="rte"
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder ?? 'write something…'}
        onInput={emit}
        onBlur={emit}
        style={{ minHeight, padding: '12px 14px', outline: 'none' }}
      />
    </div>
  );
}
