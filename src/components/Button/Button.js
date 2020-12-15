export default function Button(props) {
  return (
    <button type="submit" className="Button" onClick={props.onClick}>
      <span className="LoadMore-button-label">Load More</span>
    </button>
  );
}
