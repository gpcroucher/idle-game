export default function MaterialIcon({
  material,
}: {
  material: Item["material"];
}) {
  function getIconUrl() {
    if (material === "aluminium") {
      return "src/assets/icons/aluminium-icon.png";
    }
    if (material === "paper") {
      return "src/assets/icons/paper-icon.png";
    }
    if (material === "steel") {
      return "src/assets/icons/steel-icon.png";
    }
    return "";
  }

  const iconUrl = getIconUrl();

  return <>{iconUrl ? <img src={iconUrl} alt={material} /> : <></>}</>;
}
