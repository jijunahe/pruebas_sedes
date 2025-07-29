// src/api/sedesApi.js
import axios from 'axios';
  
export const getCampusList = async () => {
  try {
    const response = await   axios.get("http://localhost:8000/api/locations", {
      headers: {
        'X-API-KEY': '123456789qwe'  
      }
    });  
    return response.data;
  } catch (error) {
    console.error("Error al obtener campus:", error);

    if (error.response) {
      console.error("Respuesta del servidor:", error.response.data);
    } else if (error.request) {
      console.error("No hubo respuesta:", error.request);
    } else {
      console.error("Error al hacer la petición:", error.message);
    }

    throw error;
    
  }
};
