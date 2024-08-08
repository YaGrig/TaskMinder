import axios, { AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_URL}api/files` || "http://localhost:8080/api/files",
});

interface UploadResponse {
  path: string;
  filename: string;
}

export const dropboxService = {
  uploadFile: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response: AxiosResponse<UploadResponse> = await apiClient.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  },
};
