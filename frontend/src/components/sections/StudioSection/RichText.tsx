/**
 * Renders server-sanitized rich-text HTML. The HTML is scrubbed with DOMPurify
 * in the API route before it is ever stored, so rendering it here is safe.
 * Styling lives in the `.rte` block in globals.css.
 */
export default function RichText({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={`rte${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
