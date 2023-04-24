import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'f5d0787476mshcf5408c3f1e5465p15a84bjsne094acf7e22a',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'KEY');
      headers.set('X-RapidAPI-Host',
      'article-extractor-and-summarizer.p.rapidapi.com');
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`
    })
  })
});