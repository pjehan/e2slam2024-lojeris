import { useState } from "react";
import ListProperties from "../components/ListProperties";
import DetailsProperty from "../components/DetailsProperty";

export default function Home() {
    const [currentProperty, setCurrentProperty] = useState(null);

    function changeCurrentProperty(property) {
        setCurrentProperty(property);
    }

    return (
        <section>
            <h1>Page d'accueil</h1>
            <div className="flex gap-4">
                <div style={{ flex: 2 }}>
                    <ListProperties changeCurrentProperty={changeCurrentProperty}/>
                </div>
                <div style={{ flex: 1 }}>
                    { currentProperty && <DetailsProperty property={currentProperty}/> }
                </div>
            </div>
        </section>
    )
}