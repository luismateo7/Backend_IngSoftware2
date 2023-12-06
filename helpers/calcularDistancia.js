
function calcularDistancia(userLat, userLng) {
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    function getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // radio de la tierra en km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // distancia en km
        return d;
    }

    function getClosestBranch(branches, userLat, userLng) {
        let minDistance = Infinity;
        let closestBranch = null;

        for (let branch of branches) {
            const { latitude, longitude } = branch;
            const distance = getDistance(userLat, userLng, latitude, longitude);
            if (distance < minDistance) {
                minDistance = distance;
                closestBranch = branch;
            }
        }

        return closestBranch;
    }

    const branches = [
        { name: "Gran Manzana", latitude: -2.1239371, longitude: -79.9061478, api_token_gacela: process.env.API_TOKEN_GACELA_GRAN_MANZANA},
        { name: "Kennedy Norte", latitude: -2.1594125, longitude: -79.8956094, api_token_gacela: process.env.API_TOKEN_GACELA_KENNEDY_NORTE },
        { name: "Garzota", latitude: -2.146273, longitude: -79.894191, api_token_gacela: process.env.API_TOKEN_GACELA_GARZOTA },
        { name: "Palmora Plaza", latitude: -2.0557625, longitude: -79.9189844, api_token_gacela: process.env.API_TOKEN_GACELA_PALMORA_PLAZA },
        { name: "Centro", latitude: -2.1871625, longitude: -79.8786719, api_token_gacela: process.env.API_TOKEN_GACELA_CENTRO },
        { name: "Centro", latitude: -2.1629962, longitude: -79.9314163, api_token_gacela: process.env.API_TOKEN_GACELA_CEIBOS },
        { name: "Urdesa", latitude: -2.1693125, longitude: -79.9103125, api_token_gacela: process.env.API_TOKEN_GACELA_URDESA },
    ];

    const closestBranch = getClosestBranch(branches, userLat, userLng);
    return closestBranch;
}

export default calcularDistancia