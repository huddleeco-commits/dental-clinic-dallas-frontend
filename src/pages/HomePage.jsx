import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Shield, Award, Star, Phone, MapPin, Check, ChevronRight, Smile, Heart, Users } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

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

const HomePage = () => {
  const services = [
    {
      icon: <Smile size={40} />,
      title: 'General Dentistry',
      description: 'Comprehensive cleanings, exams, fillings, and preventive care for the whole family.',
      features: ['Regular Cleanings', 'Digital X-Rays', 'Cavity Treatment', 'Gum Disease Prevention']
    },
    {
      icon: <Star size={40} />,
      title: 'Cosmetic Dentistry', 
      description: 'Transform your smile with veneers, bonding, and professional whitening treatments.',
      features: ['Porcelain Veneers', 'Teeth Whitening', 'Dental Bonding', 'Smile Makeovers']
    },
    {
      icon: <Award size={40} />,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel like natural teeth.',
      features: ['Single Implants', 'Full Mouth Restoration', 'Implant-Supported Dentures', 'Bone Grafting']
    },
    {
      icon: <Shield size={40} />,
      title: 'Invisalign',
      description: 'Straighten your teeth discreetly with clear, removable aligners.',
      features: ['Clear Aligners', 'Teen Invisalign', 'Express Treatment', 'Retainers Included']
    },
    {
      icon: <Heart size={40} />,
      title: 'Sedation Dentistry',
      description: 'Comfortable, anxiety-free dental care with our gentle sedation options.',
      features: ['Nitrous Oxide', 'Oral Sedation', 'IV Sedation', 'Comfort Amenities']
    },
    {
      icon: <Clock size={40} />,
      title: 'Emergency Care',
      description: 'Same-day appointments for dental emergencies and urgent care needs.',
      features: ['24/7 On-Call', 'Pain Relief', 'Urgent Repairs', 'Weekend Availability']
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Martinez',
      specialty: 'General & Cosmetic Dentistry',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
      bio: 'Dedicated to creating beautiful, healthy smiles with gentle, personalized care.'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Oral Surgery & Implants',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
      bio: 'Specializes in advanced implant procedures and complex oral surgery.'
    },
    {
      name: 'Lisa Rodriguez, RDH',
      specialty: 'Dental Hygienist',
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800',
      bio: 'Passionate about preventive care and making every visit comfortable.'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer K.',
      text: 'The entire team made me feel so comfortable. My smile transformation with veneers exceeded all expectations!',
      rating: 5
    },
    {
      name: 'Mark T.',
      text: 'Dr. Martinez and her staff are amazing. They worked with my insurance and made my implant procedure painless.',
      rating: 5
    },
    {
      name: 'Sarah L.',
      text: 'Best dental experience ever! The office is beautiful and the staff genuinely cares about your comfort.',
      rating: 5
    }
  ];

  const styles = {
    hero: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${THEME.colors.background} 0%, ${THEME.colors.surface} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: '60px'
    },
    heroText: {
      zIndex: 2
    },
    heroTitle: {
      fontSize: '56px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      color: THEME.colors.text,
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '20px',
      color: THEME.colors.text,
      opacity: 0.8,
      marginBottom: '32px',
      lineHeight: '1.6',
      fontFamily: THEME.fonts.body
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.accent} 100%)`,
      color: 'white',
      border: 'none',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 10px 30px rgba(2, 132, 199, 0.3)',
      transition: 'all 0.3s ease'
    },
    secondaryButton: {
      background: 'transparent',
      color: THEME.colors.text,
      border: `2px solid ${THEME.colors.primary}`,
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    },
    heroImage: {
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      position: 'relative'
    },
    heroImg: {
      width: '100%',
      height: '600px',
      objectFit: 'cover'
    },
    features: {
      position: 'absolute',
      bottom: '-20px',
      left: '20px',
      right: '20px',
      background: 'white',
      padding: '20px',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      gap: '24px',
      justifyContent: 'space-between'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: THEME.colors.text,
      fontWeight: '600'
    },
    featureIcon: {
      color: THEME.colors.primary,
      background: `${THEME.colors.primary}20`,
      padding: '8px',
      borderRadius: '50%'
    },
    statsSection: {
      background: THEME.colors.primary,
      color: 'white',
      padding: '60px 20px'
    },
    statsContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      textAlign: 'center'
    },
    stat: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9
    },
    servicesSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      background: THEME.colors.surface
    },
    sectionContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '42px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      color: THEME.colors.text,
      textAlign: 'center',
      marginBottom: '60px'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '30px'
    },
    serviceCard: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid #f1f5f9'
    },
    serviceIcon: {
      color: THEME.colors.primary,
      marginBottom: '20px'
    },
    serviceTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '16px'
    },
    serviceDescription: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8,
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    serviceFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    serviceFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: THEME.colors.text
    },
    checkIcon: {
      color: THEME.colors.primary,
      backgroundColor: `${THEME.colors.primary}20`,
      borderRadius: '50%',
      padding: '2px'
    },
    teamSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      background: 'white'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px'
    },
    teamCard: {
      textAlign: 'center',
      background: THEME.colors.surface,
      borderRadius: '20px',
      padding: '40px',
      transition: 'all 0.3s ease'
    },
    teamImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 24px',
      border: `4px solid ${THEME.colors.primary}`
    },
    teamName: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '8px'
    },
    teamSpecialty: {
      fontSize: '16px',
      color: THEME.colors.primary,
      fontWeight: '600',
      marginBottom: '4px'
    },
    teamExperience: {
      fontSize: '14px',
      color: THEME.colors.text,
      opacity: 0.7,
      marginBottom: '16px'
    },
    teamBio: {
      fontSize: '14px',
      color: THEME.colors.text,
      opacity: 0.8,
      lineHeight: '1.5'
    },
    testimonialSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      background: THEME.colors.background
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px'
    },
    testimonialCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
      position: 'relative'
    },
    testimonialText: {
      fontSize: '16px',
      color: THEME.colors.text,
      lineHeight: '1.6',
      marginBottom: '20px',
      fontStyle: 'italic'
    },
    testimonialFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    testimonialName: {
      fontSize: '16px',
      fontWeight: '600',
      color: THEME.colors.text
    },
    stars: {
      display: 'flex',
      gap: '4px'
    },
    ctaSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.accent} 100%)`,
      color: 'white',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '36px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      marginBottom: '20px'
    },
    ctaText: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    whiteButton: {
      background: 'white',
      color: THEME.colors.primary,
      border: 'none',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease'
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '40px',
      flexWrap: 'wrap'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Your Gentle Dallas<br />
              <span style={{ color: THEME.colors.primary }}>Dental Care</span><br />
              Specialists
            </h1>
            <p style={styles.heroSubtitle}>
              Experience compassionate, modern dentistry in a comfortable environment. 
              We're dedicated to creating healthy, beautiful smiles for the whole family.
            </p>
            <div style={styles.heroButtons}>
              <GlowEffect color={THEME.colors.primary}>
                <button style={styles.primaryButton}>
                  <Calendar size={20} />
                  Book Appointment
                </button>
              </GlowEffect>
              <button style={styles.secondaryButton}>
                <Phone size={20} />
                Call Today
              </button>
            </div>
          </div>
          
          <div style={styles.heroImage}>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920"
              alt="Modern dental office"
              style={styles.heroImg}
            />
            <div style={styles.features}>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Shield size={16} />
                </div>
                Insurance Accepted
              </div>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Clock size={16} />
                </div>
                Same-Day Appointments
              </div>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Heart size={16} />
                </div>
                Gentle Care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div>
            <div style={styles.stat}>
              <AnimatedCounter end={20} suffix="+" duration={2} />
            </div>
            <div style={styles.statLabel}>Years Experience</div>
          </div>
          <div>
            <div style={styles.stat}>
              <AnimatedCounter end={3000} suffix="+" duration={2.5} />
            </div>
            <div style={styles.statLabel}>Happy Patients</div>
          </div>
          <div>
            <div style={styles.stat}>
              <AnimatedCounter end={99} suffix="%" duration={2} />
            </div>
            <div style={styles.statLabel}>Satisfaction Rate</div>
          </div>
          <div>
            <div style={styles.stat}>
              <AnimatedCounter end={10000} suffix="+" duration={3} />
            </div>
            <div style={styles.statLabel}>Procedures Completed</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section style={styles.servicesSection}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.sectionTitle}>
              Comprehensive Dental Services
            </h2>
            
            <div style={styles.servicesGrid}>
              {services.map((service, index) => (
                <TiltCard key={index}>
                  <div style={styles.serviceCard}>
                    <div style={styles.serviceIcon}>
                      {service.icon}
                    </div>
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <p style={styles.serviceDescription}>{service.description}</p>
                    <div style={styles.serviceFeatures}>
                      {service.features.map((feature, idx) => (
                        <div key={idx} style={styles.serviceFeature}>
                          <Check size={16} style={styles.checkIcon} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <section style={styles.teamSection}>
          <div style={styles.sectionContainer}>
            <h2 style={styles.sectionTitle}>Meet Our Caring Team</h2>
            
            <div style={styles.teamGrid}>
              {team.map((member, index) => (
                <TiltCard key={index}>
                  <div style={styles.teamCard}>
                    <img 
                      src={member.image}
                      alt={member.name}
                      style={styles.teamImage}
                    />
                    <h3 style={styles.teamName}>{member.name}</h3>
                    <div style={styles.teamSpecialty}>{member.specialty}</div>
                    <div style={styles.teamExperience}>{member.experience}</div>
                    <p style={styles.teamBio}>{member.bio}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <section style={styles.testimonialSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>What Our Patients Say</h2>
          
          <div style={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={styles.testimonialCard}>
                <p style={styles.testimonialText}>"{testimonial.text}"</p>
                <div style={styles.testimonialFooter}>
                  <div style={styles.testimonialName}>{testimonial.name}</div>
                  <div style={styles.stars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill={THEME.colors.accent} color={THEME.colors.accent} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready for Your Best Smile?</h2>
        <p style={styles.ctaText}>
          Schedule your appointment today and discover the difference gentle, comprehensive dental care makes. 
          We accept most major insurance plans and offer flexible payment options.
        </p>
        
        <div style={styles.ctaButtons}>
          <button style={styles.whiteButton}>
            <Calendar size={20} />
            Schedule Online
          </button>
          <button style={styles.whiteButton}>
            <Phone size={20} />
            (214) 555-SMILE
          </button>
        </div>

        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <MapPin size={20} />
            2451 Elm Street, Dallas, TX 75226
          </div>
          <div style={styles.contactItem}>
            <Clock size={20} />
            Mon-Fri 8am-5pm, Sat 9am-2pm
          </div>
          <div style={styles.contactItem}>
            <Shield size={20} />
            Most Insurance Accepted
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;