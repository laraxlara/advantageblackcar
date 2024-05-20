// import React, { useState } from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// interface PlacesAutocompleteProps {
//   onSelect: (selection: { lat: number; lng: number; value: string }) => void;
//   id: string;
// }

// const PlacesAutocomplete = ({ onSelect, id }: PlacesAutocompleteProps) => {
//   const [selected, setSelected] = useState(null);
//   const {
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address: string) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });

//     if (onSelect) onSelect({ lat, lng, value: results[0].formatted_address });
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         required
//         className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };

// export default PlacesAutocomplete;

import React, { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import Loader from "../Loader";
import "@reach/combobox/styles.css";

interface PlacesAutocompleteProps {
  onSelect: (selection: { lat: number; lng: number; value: string }) => void;
  id: string;
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  onSelect,
  id,
}) => {
  // useGoogleMapsScript();
  const center = useMemo(() => ({ lat: 37.0902, lng: -95.7129 }), []);
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(
    null
  );
  usePlacesAutocomplete({
    initOnMount: true,
  });
  const {
    value,
    ready,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInternalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });

    if (onSelect) onSelect({ lat, lng, value: results[0].formatted_address });
  };
  if (!ready) return <Loader />;

  return (
    <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          id={id}
          autoComplete="off"
          onChange={handleInternalChange}
          required
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-100 transition duration-100 focus:ring"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
};

export default PlacesAutocomplete;
