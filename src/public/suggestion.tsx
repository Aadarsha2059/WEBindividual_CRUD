import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/css/suggestion.css";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

type SuggestionFormData = {
  suggestionList: string;
};

function SuggestionsPage() {
  const { register, handleSubmit, reset } = useForm<SuggestionFormData>();
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    show: boolean;
    suggestionId: number | null;
  }>({ show: false, suggestionId: null });

  const apiCallToGetSuggestions = useQuery({
    queryKey: ["GET_SUGGESTIONS"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/suggestion");
      return response.data;
    },
  });

  const apiCallToSaveSuggestion = useMutation({
    mutationKey: ["SAVE_SUGGESTION"],
    mutationFn: async (data: SuggestionFormData) => {
      return axios.post("http://localhost:8080/suggestion", data);
    },
    onSuccess: () => {
      alert("Suggestion Added Successfully");
      apiCallToGetSuggestions.refetch();
      reset();
    },
  });

  const deleteSuggestion = useMutation({
    mutationKey: ["DELETE_SUGGESTION"],
    mutationFn: async (id: number) => {
      return axios.delete(`http://localhost:8080/suggestion/${id}`);
    },
    onSuccess: () => {
      apiCallToGetSuggestions.refetch();
      setDeleteConfirmation({ show: false, suggestionId: null });
    },
  });

  const submitSuggestion = (data: SuggestionFormData) => {
    apiCallToSaveSuggestion.mutate(data);
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmation.suggestionId) {
      
      const username = prompt("Enter your username:");
      const password = prompt("Enter your password:");

      // Assuming you have authentication logic here
      if (username && password) {
        // Call delete mutation with suggestionId
        deleteSuggestion.mutate(deleteConfirmation.suggestionId);
      } else {
        alert("Username and password are required.");
      }
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation({ show: false, suggestionId: null });
  };

  const handleDeleteRequest = (suggestionId: number) => {
    setDeleteConfirmation({ show: true, suggestionId });
  };

  return (
    <div className="container">
      <h1>Book Donors Nepal</h1>
      <section className="suggestion">
        <h2>Drop Your Suggestions</h2>
        <form onSubmit={handleSubmit(submitSuggestion)} id="suggestion-form">
          <label htmlFor="suggestion">Your Suggestion:</label>
          <textarea
            id="suggestion"
            {...register("suggestionList", { required: true })}
            rows={5}
            placeholder="Write your suggestion here..."
            required
          ></textarea>
          <div className="buttons">
            <button type="submit" id="drop-suggestion">
              Drop Suggestion
            </button>
          </div>
        </form>
      </section>

      <h2>Suggestions</h2>
      <table id="suggestionsTable">
        <thead>
          <tr>
            <th>Suggestion ID</th>
            <th>Suggestion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {apiCallToGetSuggestions?.data?.map((suggestion: any) => (
            <tr key={suggestion.id}>
              <td>{suggestion.id}</td>
              <td>{suggestion.suggestionList}</td>
              <td>
                {!deleteConfirmation.show && (
                  <button onClick={() => handleDeleteRequest(suggestion.id)}>
                    Delete
                  </button>
                )}
                {deleteConfirmation.show && deleteConfirmation.suggestionId === suggestion.id && (
                  <div>
                    <p>Confirm deletion for suggestion ID: {suggestion.id}</p>
                    <button onClick={handleDeleteConfirm}>Confirm</button>
                    <button onClick={handleDeleteCancel}>Cancel</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SuggestionsPage;
