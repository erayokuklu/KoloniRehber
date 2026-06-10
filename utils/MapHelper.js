export const getCityLabelPosition = (city, svgRef) => {
    const svgElement = svgRef.current;
    if (svgElement) {

        if (city.city === "İzmir") return { x: 100, y: 270 };
        if (city.city === "Antalya") return { x: 240, y: 356 };
        if (city.city === "Sakarya") return { x: 236, y: 110 };
        if (city.city === "Zonguldak") return { x: 290, y: 74 };
        if (city.city === "Kilis") return { x: 580, y: 380 };
        if (city.city === "Elazığ") return { x: 695, y: 265 };
        if (city.city === "Kahramanmaraş") return { x: 553, y: 306 };
        if (city.city === "Gaziantep") return { x: 585, y: 361 };
        if (city.city === "Osmaniye") return { x: 528, y: 349 };
        if (city.city === "Samsun") return { x: 520, y: 88 };
        if (city.city === "Giresun") return { x: 644, y: 118 };
        if (city.city === "Gümüşhane") return { x: 682, y: 130 };
        if (city.city === "Erzincan") return { x: 695, y: 180 };
        if (city.city === "Kastamonu") return { x: 393, y: 65 };
        if (city.city === "Bitlis") return { x: 840, y: 265 };
        if (city.city === "Yalova") return { x: 161, y: 111 };
        if (city.city === "Konya") return { x: 330, y: 300 };
        if (city.city === "Afyonkarahisar") return { x: 220, y: 250 };
        if (city.city === "Isparta") return { x: 244, y: 305 };
        if (city.city === "Aksaray") return { x: 400, y: 282 };
        if (city.city === "Balıkesir") return { x: 85, y: 170 };
        if (city.city === "Çorum") return { x: 450, y: 130 };
        if (city.city === "Kars") return { x: 880, y: 125 };
        if (city.city === "Malatya") return { x: 620, y: 265 };
        if (city.city === "Batman") return { x: 801, y: 303 };

        const validCityId = `city_${city.plate}`;
        const pathElement = svgElement.querySelector(`#${validCityId} path`);
        if (pathElement) {
            const bbox = pathElement.getBBox();
            return {
                x: bbox.x + bbox.width / 2 - 10, y: bbox.y + bbox.height / 2
            };
        }
    }
return { x: 0, y: 0 };
};