import React from 'react';

import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom'; 
import '../assets/css/admin.css';
import 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'; 
import  '../assets/jsf/script.js';
import manImage from '../assets/images/man.png.png'; 

const AdminPathSala: React.FC = () => {
  React.useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
  }, []);

  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">Admin PathSala</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-user-detail"></i>
              <span className="text">Check Donors</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-user"></i>
              <span className="text">Check Seekers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-book-open"></i>
              <span className="text">Books List</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-detail"></i>
              <span className="text">View Suggestions</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-lock"></i>
              <span className="text">Restrict Accounts</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}

      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu"></i>
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src={manImage} alt="Profile" />
          </a>
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download required data</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check"></i>
              <span className="text">
                <h3>150 & 20</h3>
                <p>Total Books sold & Total Books Donated</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
                <h3>100 & 200</h3>
                <p>Current book Donors & Current book Seekers</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle"></i>
              <span className="text">
                <h3>Rs. 1,50,000 </h3>
                <p>Books sells transaction till now</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Users History</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Account Created On</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={manImage} alt="Aadarsha" />
                      <p>Aadarsha</p>
                    </td>
                    <td>01-10-2024</td>
                    <td><span className="status completed">Available</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={manImage} alt="Bishnu" />
                      <p>Bishnu</p>
                    </td>
                    <td>01-15-2024</td>
                    <td><span className="status pending">Account Deleted</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={manImage} alt="Suraj Tamang" />
                      <p>Suraj Tamang</p>
                    </td>
                    <td>05-10-2024</td>
                    <td><span className="status process">Account Passive in use</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={manImage} alt="Anuj" />
                      <p>Anuj</p>
                    </td>
                    <td>01-10-2024</td>
                    <td><span className="status pending">Account Deleted</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={manImage} alt="Nirajan Bhattarai" />
                      <p>Nirajan Bhattarai</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Available</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Miscellaneous Activities</h3>
                <i className="bx bx-plus"></i>
                <i className="bx bx-filter"></i>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Manage Advertisements</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="completed">
                  <p>Review the system</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="not-completed">
                  <p>Delete the data history</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="completed">
                  <p>Send Vital Notice</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="not-completed">
                  <p>Update the system code of conduct</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default AdminPathSala;
