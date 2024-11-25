import { commonApi } from "./commomApi"
import {serverUrl} from "./serverUrl"


export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverUrl}/videos`,reqBody)}



 // api to get all video
 export const getVideoApi = async()=>{
    return await commonApi('GET', `${serverUrl}/videos`,"")
 } 

// api to remove a video
export const removeVideo = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})



}
  // api to add video to the history
  export const addHistory = async(reqBody)=>{
   return await commonApi('POST', `${serverUrl}/history` , reqBody)
} 

// api to get all video from history
export const getAllVedioHistoryApi= async()=>{
   return await commonApi('GET',`${serverUrl}/history`,"")
}

// api to delete history video
export const deleteHistoryVedioApi = async(id)=>{
return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

// Api to add category
export const addCategoryApi = async(reqBody)=>{
   return await commonApi('POST', `${serverUrl}/category`, reqBody)
}

//api to get all category
export const getCategoryApi=async()=>{
   return await commonApi('GET',`${serverUrl}/category`,"")
}

// api to delete category
export const deleteCategoryApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/category/${id}` , {})
}

// api to update category
export const updateCategoryApi = async(categoryid , reqBody)=>{
   return await commonApi('PUT' ,`${serverUrl}/category/${categoryid}`,reqBody )
}