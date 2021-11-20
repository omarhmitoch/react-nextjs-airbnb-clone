import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter from "geolib/es/getCenter"
import { Result } from 'postcss';
function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});
    // refactor the search result objects to only retrieve longitude & latitude
    const coordinates = searchResults.map(res => {
        return {
            longitude: res.long,
            latitude: res.lat
        }
    })
    const center = getCenter(coordinates) // get center point from all the longtitude and latitude coordinates (one point in the middle)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
    });
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/omarhm/ckw7m4yvc0zs115qnerbnjrce"
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}>
            {searchResults.map(res => (
                <div key={res.long}>
                    <Marker
                        longitude={res.long}
                        latitude={res.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p onClick={() => setSelectedLocation(res)} className="cursor-pointer text-lg animate-bounce" aria-label="push pin icon">📌</p>
                    </Marker>

                    {selectedLocation.long === res.long ? (
                        <Popup
                            closeOnClick={true}
                            onClose={() => setSelectedLocation({})}
                            longitude={res.long}
                            latitude={res.lat}
                        >
                            {res.title}
                        </Popup>
                    ) : (false)
                    }
                </div>

            ))
            }
        </ReactMapGL>
    )
}

export default Map
