import axios from 'axios';

export const fetchFromApi = async (ifsc) => {
  try {
    const response = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { error: 'Invalid IFSC code' };
    }
    throw new Error('External API error while fetching IFSC details');
  }
};
