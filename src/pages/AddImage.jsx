import React, { useState } from "react";
import axios from "axios";

const categories = ["Event", "Portrait", "Wedding"];

const AddImage = () => {
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const token = localStorage.getItem("token");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setMessage({ type: "error", text: "Please select a category." });
      return;
    }
    if (files.length === 0) {
      setMessage({
        type: "error",
        text: "Please select at least one image file.",
      });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      // Prepare FormData to send files
      const formData = new FormData();
      formData.append("category", category);
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const res = await axios.post(
        "https://sekani-backend.onrender.com/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage({ type: "success", text: "Images uploaded successfully!" });
      setCategory("");
      setFiles([]);
      e.target.reset();
      // go to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      setMessage({ type: "error", text: "Upload failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mt-[5rem] mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Image</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "error"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label className="block mb-2 font-semibold" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-semibold" htmlFor="images">
          Select Image(s)
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full mb-6"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`btn ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default AddImage;
