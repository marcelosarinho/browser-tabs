import './Content.css';

export default function Content(props: { selectedTabName: string }) {
  const { selectedTabName } = props;

  return (
    <article className="content">
      <h1>Conteúdo da aba {selectedTabName}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, modi?</p>
    </article>
  )
}