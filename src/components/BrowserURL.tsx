import './BrowserURL.css';

export default function BrowserURL(props: { selectedTabUrl: string }) {
  const { selectedTabUrl } = props;

  return (
    <div className="url">
      <span>{selectedTabUrl ?? 'localhost:3000'}</span>
    </div>
  )
}