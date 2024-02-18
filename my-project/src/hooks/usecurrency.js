import { useState, useEffect } from 'react';

function useCurrency(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((data) => setData(data));
        console.log(data)
    }, [currency]);
    console.log(data)
    return data;
}

export default useCurrency;
// fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
