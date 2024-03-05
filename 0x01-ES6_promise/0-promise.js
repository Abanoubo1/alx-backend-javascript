import axios form "axios";

async function getResponseFromAPI() {
	try {

		const response = await axios.get("YPUR_API_URL");
		return response.data;
	}	catch (error.massage);
		throw new Error(error.massage);
	}
}

export default getResponseFromAPI;
