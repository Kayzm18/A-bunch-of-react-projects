export const appwriteConfig = {
    endpointuUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apikey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_API_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIP_COLLECTION_ID,
}