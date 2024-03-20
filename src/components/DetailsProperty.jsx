export default function DetailsProperty({ property }) {
    console.log('DetailsProperty - render');
    const propertyName = property.category.name + ' ' + property.district.name;

    return (
        <section>
            <h1>{propertyName}</h1>
            <img src={'http://lojeris.api.pierre-jehan.com/uploads/' + property.picture.filePath} alt={propertyName}/>
            <p>{property.description}</p>
            <p>{property.price}</p>
        </section>
    );
}