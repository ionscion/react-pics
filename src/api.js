import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zmCVkvOm-BHEV8TOevsP97WioQpbDCLyfv5E6RDO3Ro",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;