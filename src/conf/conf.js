/*
 * @Author: Ada J
 * @Date: 2024-02-27 11:17:07
 * @LastEditTime: 2024-02-27 11:22:05
 * @Description: 
 */
const conf = {
  appwriteUrl: String(process.env.REACT_APPWRITE_URL),
  appwriteProjectId: String(process.env.REACT_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.REACT_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(process.env.REACT_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(process.env.REACT_APPWRITE_BUCKET_ID)
}

export default conf