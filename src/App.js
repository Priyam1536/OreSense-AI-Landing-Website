import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Leaf, BarChart3, Shield, Zap, Github, Mail, Linkedin } from 'lucide-react';
import './App.css';

function App() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Environmental Scientist",
      image: "/api/placeholder/150/150",
      bio: "15+ years in sustainable mining practices"
    },
    {
      name: "Mark Rodriguez",
      role: "Software Architect",
      image: "/api/placeholder/150/150", 
      bio: "Full-stack developer specializing in data analytics"
    },
    {
      name: "Dr. Amara Okafor",
      role: "Mining Engineer",
      image: "/api/placeholder/150/150",
      bio: "Expert in lifecycle assessment methodologies"
    },
    {
      name: "Lisa Wang",
      role: "UX/UI Designer",
      image: "/api/placeholder/150/150",
      bio: "Creating intuitive interfaces for complex data"
    }
  ];

  const features = [
    {
      icon: <Leaf className="feature-icon" />,
      title: "Environmental Impact Analysis",
      description: "Comprehensive assessment of mining operations' environmental footprint with real-time monitoring and reporting."
    },
    {
      icon: <BarChart3 className="feature-icon" />,
      title: "Advanced Analytics",
      description: "AI-powered insights and predictive modeling to optimize mining processes while minimizing environmental impact."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Compliance Monitoring",
      description: "Stay compliant with international environmental standards and regulations with automated reporting."
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Real-time Processing",
      description: "Process massive datasets in real-time to make informed decisions quickly and efficiently."
    }
  ];

  const handleDownload = () => {
    // Simulate download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'LCA-Mining-Tool-v1.0.exe';
    link.click();
    alert('Download would start here! (Demo version)');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Leaf className="logo-icon" />
            <span>EcoMine LCA</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Revolutionizing Mining with
            <span className="highlight"> Life Cycle Assessment</span>
          </h1>
          <p className="hero-subtitle">
            Our cutting-edge LCA tool helps mining companies assess environmental impact, 
            optimize operations, and achieve sustainability goals through data-driven insights.
          </p>
          <div className="hero-buttons">
            <motion.button 
              className="cta-button primary"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="button-icon" />
              Download Tool
            </motion.button>
            <motion.button 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="button-icon" />
              Learn More
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <div className="dashboard-title">Mining Impact Dashboard</div>
              <div className="dashboard-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="metric-card">
                <div className="metric-value">-23%</div>
                <div className="metric-label">Carbon Footprint</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">89%</div>
                <div className="metric-label">Efficiency Score</div>
              </div>
              <div className="chart-placeholder"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Powerful Features for Sustainable Mining</h2>
            <p>Everything you need to assess, monitor, and optimize your mining operations</p>
          </motion.div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>About Our LCA Mining Tool</h2>
              <p>
                Born from years of research and real-world experience, our Life Cycle Assessment tool 
                represents a breakthrough in sustainable mining technology. We combine environmental science 
                with cutting-edge software engineering to deliver actionable insights.
              </p>
              <p>
                Our tool has been tested across 50+ mining operations worldwide, helping reduce 
                environmental impact by an average of 35% while maintaining operational efficiency.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Mining Sites</div>
                </div>
                <div className="stat">
                  <div className="stat-number">35%</div>
                  <div className="stat-label">Impact Reduction</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Monitoring</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="about-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="process-flow">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-title">Data Collection</div>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-title">Analysis</div>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-title">Optimization</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>Passionate experts dedicated to sustainable mining solutions</p>
          </motion.div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="member-avatar">
                  <div className="avatar-placeholder">
                    <Users className="avatar-icon" />
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <motion.div 
            className="download-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Mining Operations?</h2>
            <p>
              Download our LCA Mining Tool today and start your journey towards 
              more sustainable and efficient mining practices.
            </p>
            <motion.button 
              className="cta-button primary large"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="button-icon" />
              Download Now - Free Trial
            </motion.button>
            <div className="download-info">
              <span>✓ 30-day free trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Full feature access</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <Leaf className="logo-icon" />
                <span>EcoMine LCA</span>
              </div>
              <p>
                Pioneering sustainable mining through advanced life cycle assessment technology.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Github />
                </a>
                <a href="#" className="social-link">
                  <Mail />
                </a>
                <a href="#" className="social-link">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#team">Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>contact@ecomine-lca.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Green Tech Ave</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 EcoMine LCA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
