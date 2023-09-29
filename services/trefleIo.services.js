require("dotenv").config();
const axios = require("axios");

exports.getAllPlants = async () => {
    try {
        const response = await axios.get("https://trefle.io/api/v1/plants", {
            params: {
                token: process.env.TREFLE_IO_TOKEN,
            },
        });
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error.data);
        return [];
    }
};

exports.searchForPlant = async (searchText) => {
    try {
        const response = await axios.get(
            "https://trefle.io/api/v1/plants/search",
            {
                params: {
                    q: searchText,
                    token: process.env.TREFLE_IO_TOKEN,
                },
            }
        );
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error(error.data);
        return [];
    }
};
