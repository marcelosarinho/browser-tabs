import './Content.css';

interface ContentProps {
  url?: string,
}

export default function Content(props: ContentProps) {
  const { url } = props;

  return (
    <article className="content">
      {url && (
        <iframe src={url}></iframe>
      )}
    </article>
  )
}