import React, { useState } from 'react';
import { ScrollReveal, AnimatedCounter, TiltCard } from '../effects';
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle, Star, Award, Shield, Users } from 'lucide-react';

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    isNewPatient: false,
    isEmergency: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'General Cleaning & Checkup',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Dental Implants',
    'Invisalign Treatment',
    'Emergency Dental Care',
    'Pediatric Dentistry',
    'Oral Surgery'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: THEME.colors.background,
      fontFamily: THEME.fonts.body
    },
    hero: {
      background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
      padding: '100px 20px 60px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    heroPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      opacity: 0.3
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      marginBottom: '40px',
      lineHeight: '1.6'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'start'
    },
    formSection: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0'
    },
    formTitle: {
      fontSize: '32px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '30px',
      textAlign: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '16px',
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '4px'
    },
    input: {
      padding: '16px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      fontFamily: THEME.fonts.body,
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    inputFocus: {
      borderColor: THEME.colors.primary,
      boxShadow: '0 0 0 3px rgba(2, 132, 199, 0.1)'
    },
    textarea: {
      padding: '16px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      fontFamily: THEME.fonts.body,
      resize: 'vertical',
      minHeight: '120px',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    select: {
      padding: '16px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      fontFamily: THEME.fonts.body,
      backgroundColor: 'white',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    checkboxGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '8px'
    },
    checkboxItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    checkbox: {
      width: '20px',
      height: '20px',
      cursor: 'pointer'
    },
    checkboxLabel: {
      fontSize: '16px',
      color: THEME.colors.text,
      cursor: 'pointer'
    },
    submitButton: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '18px 32px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      fontFamily: THEME.fonts.heading,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      marginTop: '16px'
    },
    submitButtonHover: {
      backgroundColor: '#0369a1',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(2, 132, 199, 0.3)'
    },
    successMessage: {
      backgroundColor: '#dcfce7',
      border: '2px solid #22c55e',
      borderRadius: '12px',
      padding: '20px',
      color: '#166534',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      fontSize: '16px',
      fontWeight: '600'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    },
    infoCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '32px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0'
    },
    cardTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '20px',
      padding: '12px',
      borderRadius: '10px',
      transition: 'all 0.3s ease'
    },
    infoItemHover: {
      backgroundColor: THEME.colors.background,
      transform: 'translateX(4px)'
    },
    infoIcon: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '10px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    infoText: {
      fontSize: '16px',
      color: THEME.colors.text,
      fontWeight: '500'
    },
    statsSection: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '40px',
      textAlign: 'center',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
      marginBottom: '30px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '32px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      color: THEME.colors.primary,
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '14px',
      color: THEME.colors.text,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '600'
    },
    emergencyCard: {
      backgroundColor: '#fef2f2',
      border: '2px solid #f87171',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center'
    },
    emergencyTitle: {
      fontSize: '20px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      color: '#dc2626',
      marginBottom: '12px'
    },
    emergencyText: {
      fontSize: '16px',
      color: '#991b1b',
      marginBottom: '16px'
    },
    emergencyButton: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
      transition: 'all 0.3s ease'
    },
    mobileLayout: {
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '40px',
        padding: '40px 20px'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <ScrollReveal>
            <h1 style={styles.heroTitle}>Schedule Your Visit</h1>
            <p style={styles.heroSubtitle}>
              Ready for a healthier, brighter smile? We're here to provide gentle, professional dental care 
              for you and your family in a comfortable, modern environment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section style={{...styles.mainContent, '@media (max-width: 768px)': { gridTemplateColumns: '1fr', gap: '40px', padding: '40px 20px' }}}>
        
        {/* Contact Form */}
        <ScrollReveal>
          <TiltCard>
            <div style={styles.formSection}>
              <h2 style={styles.formTitle}>Book Your Appointment</h2>
              
              {isSubmitted ? (
                <div style={styles.successMessage}>
                  <CheckCircle size={24} />
                  <span>Thank you! We'll contact you within 24 hours to confirm your appointment.</span>
                </div>
              ) : (
                <form style={styles.form} onSubmit={handleSubmit}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email *</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        style={styles.input}
                        required
                      />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Phone *</label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      style={styles.select}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Additional Details</label>
                    <textarea
                      placeholder="Tell us about any concerns, insurance information, or special requests..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      style={styles.textarea}
                    />
                  </div>

                  <div style={styles.checkboxGroup}>
                    <div style={styles.checkboxItem}>
                      <input
                        type="checkbox"
                        id="newPatient"
                        checked={formData.isNewPatient}
                        onChange={(e) => handleInputChange('isNewPatient', e.target.checked)}
                        style={styles.checkbox}
                      />
                      <label htmlFor="newPatient" style={styles.checkboxLabel}>
                        I'm a new patient
                      </label>
                    </div>
                    <div style={styles.checkboxItem}>
                      <input
                        type="checkbox"
                        id="emergency"
                        checked={formData.isEmergency}
                        onChange={(e) => handleInputChange('isEmergency', e.target.checked)}
                        style={styles.checkbox}
                      />
                      <label htmlFor="emergency" style={styles.checkboxLabel}>
                        This is an emergency
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={styles.submitButton}
                    onMouseEnter={(e) => Object.assign(e.target.style, styles.submitButtonHover)}
                    onMouseLeave={(e) => Object.assign(e.target.style, styles.submitButton)}
                  >
                    <Send size={20} />
                    Schedule Appointment
                  </button>
                </form>
              )}
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Contact Information */}
        <div style={styles.contactInfo}>
          
          {/* Practice Stats */}
          <ScrollReveal>
            <TiltCard>
              <div style={styles.statsSection}>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={15} suffix="+" duration={2} />
                  </div>
                  <div style={styles.statLabel}>Years Experience</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={4800} suffix="+" duration={2.5} />
                  </div>
                  <div style={styles.statLabel}>Happy Patients</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={98} suffix="%" duration={2} />
                  </div>
                  <div style={styles.statLabel}>Satisfaction Rate</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={6} suffix="" duration={1.5} />
                  </div>
                  <div style={styles.statLabel}>Dental Professionals</div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal>
            <TiltCard>
              <div style={styles.infoCard}>
                <h3 style={styles.cardTitle}>
                  <MapPin size={24} color={THEME.colors.primary} />
                  Visit Our Practice
                </h3>
                
                <div style={styles.infoItem}>
                  <div style={styles.infoIcon}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={styles.infoText}>3845 Maple Avenue</div>
                    <div style={{...styles.infoText, fontSize: '14px', opacity: 0.7}}>Dallas, TX 75219</div>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <div style={styles.infoIcon}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={styles.infoText}>(214) 555-CARE</div>
                    <div style={{...styles.infoText, fontSize: '14px', opacity: 0.7}}>Call or text anytime</div>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <div style={styles.infoIcon}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={styles.infoText}>smile@dallasdental.com</div>
                    <div style={{...styles.infoText, fontSize: '14px', opacity: 0.7}}>We respond within 2 hours</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Office Hours */}
          <ScrollReveal>
            <TiltCard>
              <div style={styles.infoCard}>
                <h3 style={styles.cardTitle}>
                  <Clock size={24} color={THEME.colors.primary} />
                  Office Hours
                </h3>
                
                <div style={styles.infoItem}>
                  <div style={styles.infoIcon}>
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div style={styles.infoText}>Monday - Friday: 8:00 AM - 5:00 PM</div>
                    <div style={{...styles.infoText, fontSize: '14px', opacity: 0.7}}>Saturday: 9:00 AM - 2:00 PM (by appointment)</div>
                    <div style={{...styles.infoText, fontSize: '14px', opacity: 0.7, marginTop: '4px'}}>Sunday: Emergency calls only</div>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <div style={styles.infoIcon}>
                    <Shield size={20} />
                  </div>
                  <div>
                    <div style={styles.infoText}>Insurance Accepted</div>
                    <div style={{...styles.infoText, fontSize: '14px', opacity: 0.7}}>Delta, Cigna, Aetna, MetLife, and most major plans</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Emergency Care */}
          <ScrollReveal>
            <TiltCard>
              <div style={styles.emergencyCard}>
                <h3 style={styles.emergencyTitle}>Dental Emergency?</h3>
                <p style={styles.emergencyText}>
                  We provide same-day emergency appointments for urgent dental needs. 
                  Don't wait - call us immediately for pain relief and emergency care.
                </p>
                <button style={styles.emergencyButton}>
                  <Phone size={18} />
                  Call Emergency Line: (214) 555-HELP
                </button>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;