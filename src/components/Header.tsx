import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header__buttons">
        <button className="button__close" type="button"></button>
        <button className="button__minimize" type="button"></button>
        <button className="button_maximize" type="button"></button>
      </div>

      <div className="header__options">
        <button type="button">
          <i className="ph-bold ph-arrow-left"></i>
        </button>
        <button type="button">
          <i className="ph-bold ph-arrow-right"></i>
        </button>
        <button type="button">
          <i className="ph-bold ph-arrows-clockwise"></i>
        </button>
        <button type="button">
          <i className="ph-bold ph-house"></i>
        </button>
      </div>

      <button className="header__more_options">
        <i className="ph-fill ph-dots-three-outline"></i>
      </button>
    </header>
  )
}