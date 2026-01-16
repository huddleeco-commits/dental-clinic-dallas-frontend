import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, MapPin, Shield, Award, Users, Heart, Clock, Star, CheckCircle, ArrowRight, Smile } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard } from '../effects';

const THEME = {
  colors: { 
    primary: '#0284c7', 
    accent: '#06b6d4', 
    background: '#f0fdfa', 
    text: '#164e63', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "'Poppins', sans-serif", body: "'Open Sans', system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const AboutPage = () => {
  const services = [
    {
      icon: <Smile size={40} />,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, exams, and preventive treatments",
      features: ["Regular Cleanings", "Oral Exams", "Digital X-Rays", "Fluoride Treatments"]
    },
    {
      icon: <Star size={40} />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures",
      features: ["Porcelain Veneers", "Teeth Whitening", "Smile Makeovers", "Bonding"]
    },
    {
      icon: <Shield size={40} />,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural",
      features: ["Single Implants", "Full Mouth Restoration", "Same-Day Implants", "Bone Grafting"]
    },
    {
      icon: <Award size={40} />,
      title: "Invisalign",
      description: "Straighten your teeth with clear, removable aligners",
      features: ["Custom Treatment Plans", "Clear Aligners", "Teen Options", "Retainers"]
    },
    {
      icon: <Phone size={40} />,
      title: "Emergency Care",
      description: "Urgent dental care when you need it most",
      features: ["Same-Day Appointments", "Pain Relief", "Trauma Care", "After-Hours Service"]
    },
    {
      icon: <Heart size={40} />,
      title: "Sedation Dentistry",
      description: "Comfortable, anxiety-free dental treatments",
      features: ["Nitrous Oxide", "Oral Sedation", "IV Sedation", "General Anesthesia"]
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Martinez",
      specialty: "General & Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
      experience: "15+ years",
      education: "DDS, UT Health San Antonio"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Oral Surgery & Implants",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
      experience: "12+ years",
      education: "DDS, Baylor College of Dentistry"
    },
    {
      name: "Lisa Thompson, RDH",
      specialty: "Dental Hygienist",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
      experience: "10+ years",
      education: "RDH, Dallas College"
    }
  ];

  const values = [
    {
      title: "Patient-Centered Care",
      description: "We listen to your concerns and create personalized treatment plans that fit your needs and budget."
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment and techniques ensure precise, comfortable, and efficient treatments."
    },
    {
      title: "Gentle Approach",
      description: "Our caring team makes every visit comfortable, especially for anxious or nervous patients."
    },
    {
      title: "Education First",
      description: "We believe in empowering patients with knowledge about their oral health and treatment options."
    }
  ];

  const styles = {
    hero: {
      background: `linear-gradient(135deg, ${THEME.colors.background} 0%, ${THEME.colors.surface} 100%)`,
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '800px',
      position: 'relative',
      zIndex: 2
    },
    heroTitle: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '20px',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '20px',
      color: THEME.colors.text,
      opacity: 0.8,
      marginBottom: '30px',
      lineHeight: 1.6
    },
    heroCTA: {
      background: THEME.colors.primary,
      color: 'white',
      padding: '16px 32px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(2, 132, 199, 0.3)'
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '36px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      textAlign: 'center',
      marginBottom: '60px',
      position: 'relative'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginBottom: '40px'
    },
    serviceCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      border: `1px solid ${THEME.colors.accent}20`,
      transition: 'all 0.3s ease',
      height: '100%'
    },
    serviceIcon: {
      color: THEME.colors.primary,
      marginBottom: '20px'
    },
    serviceTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '15px'
    },
    serviceDescription: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8,
      lineHeight: 1.6,
      marginBottom: '20px'
    },
    serviceFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    serviceFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px',
      fontSize: '14px',
      color: THEME.colors.text,
      opacity: 0.7
    },
    statsSection: {
      background: THEME.colors.primary,
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: 'bold',
      fontFamily: THEME.fonts.heading,
      marginBottom: '10px'
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '40px'
    },
    teamCard: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    },
    teamImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    },
    teamInfo: {
      padding: '30px'
    },
    teamName: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '8px'
    },
    teamSpecialty: {
      fontSize: '16px',
      color: THEME.colors.primary,
      marginBottom: '15px'
    },
    teamDetails: {
      fontSize: '14px',
      color: THEME.colors.text,
      opacity: 0.7,
      lineHeight: 1.6
    },
    valuesSection: {
      background: THEME.colors.background,
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    valuesList: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    valueItem: {
      marginBottom: '40px',
      textAlign: 'center'
    },
    valueTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '15px'
    },
    valueDescription: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8,
      lineHeight: 1.6
    },
    missionSection: {
      padding: '120px 20px',
      background: `linear-gradient(135deg, ${THEME.colors.primary}15 0%, ${THEME.colors.accent}10 100%)`,
      textAlign: 'center'
    },
    missionQuote: {
      fontSize: '36px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      lineHeight: 1.4,
      maxWidth: '900px',
      margin: '0 auto',
      fontStyle: 'italic',
      position: 'relative'
    },
    infoSection: {
      background: 'white',
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      maxWidth: '900px',
      margin: '0 auto'
    },
    infoCard: {
      textAlign: 'center',
      padding: '30px'
    },
    infoIcon: {
      color: THEME.colors.primary,
      marginBottom: '20px'
    },
    infoTitle: {
      fontSize: '20px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '15px'
    },
    infoText: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8,
      lineHeight: 1.6
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Your Smile is Our Priority</h1>
          <p style={styles.heroSubtitle}>
            Experience gentle, comprehensive dental care in the heart of Dallas. 
            Our modern practice combines advanced technology with a caring touch 
            to give you the healthy, beautiful smile you deserve.
          </p>
          <Link to="/contact" style={styles.heroCTA}>
            Schedule Your Visit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={20} suffix="+" duration={2} />
              </div>
              <div style={styles.statLabel}>Years of Excellence</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={3000} suffix="+" duration={2.5} />
              </div>
              <div style={styles.statLabel}>Happy Patients</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={99} suffix="%" duration={2} />
              </div>
              <div style={styles.statLabel}>Satisfaction Rate</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={10000} suffix="+" duration={3} />
              </div>
              <div style={styles.statLabel}>Procedures Completed</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Complete Dental Care Services</h2>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TiltCard key={index}>
                <div style={styles.serviceCard}>
                  <div style={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <ul style={styles.serviceFeatures}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={styles.serviceFeature}>
                        <CheckCircle size={16} color={THEME.colors.accent} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <blockquote style={styles.missionQuote}>
          "Our mission is to provide exceptional dental care in a warm, welcoming environment 
          where every patient feels valued, comfortable, and confident in their treatment."
        </blockquote>
      </section>

      {/* Team Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet Our Dental Team</h2>
          <div style={styles.teamGrid}>
            {team.map((member, index) => (
              <TiltCard key={index}>
                <div style={styles.teamCard}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={styles.teamImage}
                  />
                  <div style={styles.teamInfo}>
                    <h3 style={styles.teamName}>{member.name}</h3>
                    <p style={styles.teamSpecialty}>{member.specialty}</p>
                    <div style={styles.teamDetails}>
                      <p>Experience: {member.experience}</p>
                      <p>Education: {member.education}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Values Section */}
      <section style={styles.valuesSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Core Values</h2>
          <div style={styles.valuesList}>
            {values.map((value, index) => (
              <div key={index} style={styles.valueItem}>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.infoSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Practice Information</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <Clock size={40} style={styles.infoIcon} />
              <h3 style={styles.infoTitle}>Office Hours</h3>
              <div style={styles.infoText}>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM (by appointment)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div style={styles.infoCard}>
              <Shield size={40} style={styles.infoIcon} />
              <h3 style={styles.infoTitle}>Insurance Accepted</h3>
              <div style={styles.infoText}>
                <p>We accept most major insurance plans including Delta Dental, Cigna, Aetna, MetLife, and many others.</p>
                <p>Call us to verify your coverage.</p>
              </div>
            </div>
            <div style={styles.infoCard}>
              <Star size={40} style={styles.infoIcon} />
              <h3 style={styles.infoTitle}>New Patient Special</h3>
              <div style={styles.infoText}>
                <p>Comprehensive exam, cleaning, and X-rays for new patients.</p>
                <p>Same-day appointments available.</p>
                <p>Emergency care when you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;