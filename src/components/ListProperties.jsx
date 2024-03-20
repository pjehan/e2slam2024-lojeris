import { useEffect, useState } from "react";
import CardProperty from "./CardProperty";
import useFormInput from "../hooks/useFormInput";

export default function ListProperties({ changeCurrentProperty }) {
    console.log('ListProperties - render');
    const [properties, setProperties] = useState([]); // Crée une variable d'état vide pour stocker la liste des biens immobiliers
    const search = useFormInput(''); // Crée une variable d'état vide pour stocker la recherche de biens immobiliers
    const [districts, setDistricts] = useState([]); // Crée une variable d'état vide pour stocker la liste des quartiers
    const [selectedDistrict, setSelectedDistrict] = useState(''); // Crée une variable d'état vide pour stocker le quartier sélectionné

    // Exécutez une seule fois, après le premier rendu
    useEffect(() => {
        console.log('ListProperties - useEffect');
        fetch('http://lojeris.api.pierre-jehan.com/properties')
            .then(response => response.json()) // Transforme la réponse en objet JavaScript
            .then(data => setProperties(data['hydra:member'])); // Stocke les données dans le state
        fetch('http://lojeris.api.pierre-jehan.com/districts')
            .then(response => response.json()) // Transforme la réponse en objet JavaScript
            .then(data => setDistricts(data['hydra:member'])); // Stocke les données dans le state
    }, []);

    const filteredProperties = properties.filter(property => {
        const propertyName = property.category.name + ' ' + property.district.name;
        let isFiltered = true;
        isFiltered = propertyName.toLowerCase().includes(search.value.toLowerCase());
        if (selectedDistrict) {
            isFiltered = isFiltered && parseInt(selectedDistrict) === property.district.id;
        }
        return isFiltered;
    });

    const propertiesList = filteredProperties.map(property => (
        <CardProperty key={property.id} property={property} changeCurrentProperty={changeCurrentProperty}/>
    ));

    let options = [];
    for (const district of districts) {
        options.push(<option key={district.id} value={district.id}>{district.name}</option>);
    }

    return (
        <section>
            <h1>Liste des biens</h1>

            <form onSubmit={e => e.preventDefault()}>
                <input type="text" {...search} placeholder="Rechercher un bien..."></input>
                <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)}>
                    <option value="">Voir tout</option>
                    {options}
                </select>
            </form>

            {properties.length === 0 && <p>Chargement en cours...</p>}
            <div className="grid grid-cols-4 gap-2">
                {propertiesList}
            </div>
        </section>
    )
}