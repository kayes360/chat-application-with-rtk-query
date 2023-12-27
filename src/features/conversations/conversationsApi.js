 
import {apiSlice} from '../api/apiSlice'
export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: (email)=> `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${import.meta.env.VITE_REACT_APP_CONVERSATION_PER_PAGE}`
        }),
        
    }),
});

export const {useGetConversationsQuery} =conversationsApi;