export default function CardProperty({ property, changeCurrentProperty }) {
    console.log('CardProperty - render');
    const propertyName = property.category.name + ' ' + property.district.name;

    function handleClick(event) {
        event.preventDefault(); // Annule l'action par défaut (redirection)
        changeCurrentProperty(property);
    }

    return (
        <article>
            <img src={'http://lojeris.api.pierre-jehan.com/uploads/' + property.picture.filePath} alt={propertyName}/>
            <h2>{propertyName}</h2>
            <p>{property.price}</p>
            <a href="#" onClick={handleClick}>Voir plus</a>
        </article>
    );
}