import React from 'react';
import Navbar from './Navbar';
import '../assets/styles/courses.css';
import '../assets/styles/index.css';

const CoursesPage = () => {
    return (
        <div className="container">
            <Navbar />

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>Learn with Expert Anytime Anywhere.</h1>
                        <p>Our mission is to help people to find the best course online and learn with expert anytime, anywhere.</p>
                        <div className="search-bar">
                            <input type="text" placeholder="What do you want to learn..." />
                            <select>
                                <option value="">Category</option>
                            </select>
                            <button className="btn btn-primary">SEARCH</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/assets/images/Hero.jpg" alt="Student learning online" />
                    </div>
                </section>

                <section className="categories">
                    <h2>Browse Course with Top Categories</h2>
                    <div className="category-slider">
                        <button className="slider-arrow left"><i className="fas fa-chevron-left"></i></button>
                        <div className="category-items">
                            <div className="category-item">
                                <i className="fas fa-camera"></i>
                                <h3>Photography</h3>
                                <p>587 Courses</p>
                            </div>
                            <div className="category-item active">
                                <i className="fas fa-code"></i>
                                <h3>Development</h3>
                                <p>17k Courses</p>
                            </div>
                            <div className="category-item">
                                <i className="fas fa-pencil-ruler"></i>
                                <h3>Design</h3>
                                <p>23k Courses</p>
                            </div>
                            <div className="category-item">
                                <i className="fas fa-music"></i>
                                <h3>Music</h3>
                                <p>297 Courses</p>
                            </div>
                            <div className="category-item">
                                <i className="fas fa-bullhorn"></i>
                                <h3>Marketing</h3>
                                <p>2k Courses</p>
                            </div>
                        </div>
                        <button className="slider-arrow right"><i className="fas fa-chevron-right"></i></button>
                    </div>
                </section>

                <section className="popular-courses">
                    <h2>Our Popular Courses</h2>
                    <div className="course-filters">
                        <button className="active">All</button>
                        <button>Design</button>
                        <button>Development</button>
                        <button>Business</button>
                        <button>IT & Software</button>
                    </div>
                    <div className="course-grid">
                        <a href="./lecture.html">
                            <div className="course-card">
                                <img src="/assets/images/course1.jpg" alt="Course Image" />
                                <div className="course-content">
                                    <h3>Java Fundamentals</h3>
                                    <div className="instructor">
                                        <span>Brandon Dias</span>
                                    </div>
                                    <div className="course-info">
                                        <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                                        <span className="students"><i className="fas fa-user"></i> 24,517</span>
                                        <span className="lessons"><i className="fas fa-book"></i> 35 lesson</span>
                                        <span className="duration"><i className="fas fa-clock"></i> 3 Hours</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                       

                    </div>
                    <div className="pagination">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default CoursesPage;
