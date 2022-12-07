import axios from "axios";

async function generateResponse(prompt) {
    try {
      // Make a request to the OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: prompt,
          model: "text-curie-001",
          temperature: 0.5,
          max_tokens: 1064,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
  
      // Return the response data as a Promise object
      return Promise.resolve(response);
    } catch (error) {
      // Handle any errors
      console.log(error.response);
      console.error(error);
      return Promise.reject(error);
    }
  }
  
  
  
  
  
  

export default generateResponse;