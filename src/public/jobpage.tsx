import React, { useState, useEffect } from 'react';
import "../assets/css/jobpage.css";

const AssignmentPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [finalDialogOpen, setFinalDialogOpen] = useState(false); // New state for final confirmation dialog
  const [cvFile, setCvFile] = useState(null);
  const [furtherInfo, setFurtherInfo] = useState('');

  // Sample data for the assignments
  const assignments = [
    // DSA Assignments
    {
      title: 'DSA Algorithm Assignment - Sorting & Searching',
      category: 'DSA',
      description: 'Work on sorting and searching algorithms for a 2-week period.',
      deadline: '2024-12-31',
      amount: 5000,
    },
    {
      title: 'DSA Dynamic Programming Assignment',
      category: 'DSA',
      description: 'Solve dynamic programming problems with complexity analysis.',
      deadline: '2024-12-20',
      amount: 7000,
    },

    // Data Science Assignments
    {
      title: 'Data Science Regression Analysis',
      category: 'Data Science',
      description: 'Perform regression analysis on a dataset for prediction.',
      deadline: '2024-12-15',
      amount: 8000,
    },
    {
      title: 'Data Science Data Cleaning for AI Models',
      category: 'Data Science',
      description: 'Clean data to prepare it for AI model training.',
      deadline: '2024-12-18',
      amount: 6000,
    },

    // Python Assignments
    {
      title: 'Python Web Scraping - E-Commerce Data',
      category: 'Python',
      description: 'Build a Python scraper for e-commerce websites.',
      deadline: '2024-12-25',
      amount: 4500,
    },
    {
      title: 'Python Flask API Development',
      category: 'Python',
      description: 'Develop a RESTful API using Flask for a customer application.',
      deadline: '2024-12-30',
      amount: 5500,
    },
    {
      title: 'Python Data Visualization with Matplotlib',
      category: 'Python',
      description: 'Visualize dataset trends using Python’s Matplotlib library.',
      deadline: '2024-12-10',
      amount: 4000,
    },
  ];

  // Filter assignments based on selected category
  const filteredAssignments = assignments.filter(
    (assignment) => selectedCategory === '' || assignment.category === selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleApplyNow = () => {
    setIsDialogOpen(true); // Open dialog when "Apply Now" is clicked
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]); // Handle file selection
  };

  const handleFurtherInfoChange = (e) => {
    setFurtherInfo(e.target.value); // Handle further info input
  };

  const handleFinalSubmission = () => {
    // Here, you would ideally send the data (CV and Further Info) to the backend
    // For this demo, we'll just show the final confirmation dialog.
    setFinalDialogOpen(true); // Open the final confirmation dialog
    setIsDialogOpen(false); // Close the initial dialog
  };

  const handleCloseFinalDialog = () => {
    setFinalDialogOpen(false); // Close the final dialog
    // Reset the form or handle additional actions here if needed
  };

  return (
    <div className="assignment-page">
      <h1>Available Assignments</h1>

      {/* Short note for developers */}
      <div className="developer-note">
        <p><strong>Note:</strong> Privacy will be maintained from both sides</p>
      </div>

      {/* Category Buttons with Icons */}
      <div className="category-buttons">
        <button onClick={() => handleCategoryClick('DSA')} className="category-btn dsa-btn">
          <i className="fas fa-code"></i> DSA Assignments
        </button>
        <button onClick={() => handleCategoryClick('Data Science')} className="category-btn data-science-btn">
          <i className="fas fa-brain"></i> Data Science Assignments
        </button>
        <button onClick={() => handleCategoryClick('Python')} className="category-btn python-btn">
          <i className="fas fa-python"></i> Python Assignments
        </button>
      </div>

      {/* Loading State */}
      {isLoading && <div className="loading-state">Loading...</div>}

      {/* Assignment List */}
      <div className="assignment-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment, index) => (
            <div className="assignment-item active" key={index}>
              <h4>{assignment.title}</h4>
              <p>{assignment.description}</p>
              <div className="deadline">
                <i className="fas fa-calendar-alt"></i> Deadline: {assignment.deadline}
              </div>
              <div className="amount">
                <i className="fas fa-money-bill-wave"></i> Amount: {assignment.amount} NRS
              </div>
              <div className="developer-share">
                <i className="fas fa-hand-holding-usd"></i> 5% of this amount goes to developers who developed this syste
              </div>
              <button onClick={handleApplyNow}>Apply Now</button>
            </div>
          ))
        ) : (
          <div className="assignment-item no-result">
            <i className="fas fa-exclamation-triangle"></i>
            No assignments available in this category.
          </div>
        )}
      </div>

      {/* Form Submission Success Message */}
      {applySuccess && (
        <div className="success-message">
          <i className="fas fa-check-circle"></i> Applied Successfully!
        </div>
      )}

      {/* Apply Now Dialog */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Attach the sample of similar assignment you did previously</h3>
            <div className="dialog-content">
              <div className="file-upload">
                <label>Attach PDF:</label>
                <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />
              </div>
              <div className="further-info">
                <label>Further Information:</label>
                <textarea
                  value={furtherInfo}
                  onChange={handleFurtherInfoChange}
                  placeholder="If you are a fresher and no assignment experience.... You can mention academic excellency here"
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="submit-btn" onClick={handleFinalSubmission}>Final Submit</button>
              <button className="cancel-btn" onClick={() => setIsDialogOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Final Confirmation Dialog */}
      {finalDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Thank you for your submission!</h3>
            <p>The assignment holder will contact you within 24 hours if they believe you can complete the assignment based on the sample PDF you submitted.</p>
            <p>You will receive a message on your WhatsApp or email. Stay tuned!</p>
            <div className="dialog-actions">
              <button className="submit-btn" onClick={handleCloseFinalDialog}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentPage;
