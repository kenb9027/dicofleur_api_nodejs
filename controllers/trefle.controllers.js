const HttpStatus = require("../utils/httpStatus.utils.js");
const Response = require("../utils/response.utils.js");

const trefleIoService = require("../services/trefleIo.services.js");

exports.get_all_plants = async (req, res, next) => {
    const plants = await trefleIoService.getAllPlants();
    // console.log(plants);
    if (plants.data.length === 0) {
        res.status(HttpStatus.NO_CONTENT.code).send(
            new Response(
                HttpStatus.NO_CONTENT.code,
                HttpStatus.NO_CONTENT.message,
                `No Results for this search`,
                plants
            )
        );
    }
    else {
        res.status(HttpStatus.OK.code).send(
            new Response(
                HttpStatus.OK.code,
                HttpStatus.OK.message,
                `All plants are retrieved`,
                plants
            )
        );        
    }
};

exports.search_for_a_plant = async (req, res, next) => {
    const searchText = req.params.searchText;
    // console.log(searchText);
    const results = await trefleIoService.searchForPlant(searchText);
    // console.log(results.data);
    if (results.data.length === 0) {
        res.status(HttpStatus.NO_CONTENT.code).send(
            new Response(
                HttpStatus.NO_CONTENT.code,
                HttpStatus.NO_CONTENT.message,
                `No Results for this search`,
                results
            )
        );
    } else if (
        results.data.length > 0 
    ) {
        res.status(HttpStatus.OK.code).send(
            new Response(
                HttpStatus.OK.code,
                HttpStatus.OK.message,
                `Results are retrieved`,
                results
            )
        );
    } else {
        res.status(HttpStatus.NOT_FOUND.code).send(
            new Response(
                HttpStatus.NOT_FOUND.code,
                HttpStatus.NOT_FOUND.message,
                `No results to retrieved`,
                results
            )
        );
    }
};
