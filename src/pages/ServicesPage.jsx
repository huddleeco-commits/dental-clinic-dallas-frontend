import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Shield, Award, Star, Clock, Phone, CheckCircle, Users, Stethoscope, Smile } from 'lucide-react';
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

const ServicesPage = () => {
  const services = [
    {
      icon: <CheckCircle size={48} color={THEME.colors.primary} />,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, crowns, and preventive treatments to keep your smile healthy.",
      features: ["Regular Cleanings", "Cavity Fillings", "Digital X-Rays", "Oral Cancer Screenings"],
      price: "Starting at $89"
    },
    {
      icon: <Smile size={48} color={THEME.colors.primary} />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, bonding, and aesthetic treatments designed to boost your confidence.",
      features: ["Porcelain Veneers", "Dental Bonding", "Smile Makeovers", "Gum Contouring"],
      price: "Starting at $299"
    },
    {
      icon: <Star size={48} color={THEME.colors.primary} />,
      title: "Teeth Whitening",
      description: "Professional whitening treatments that safely brighten your teeth up to 8 shades in just one visit.",
      features: ["In-Office Whitening", "Take-Home Trays", "Laser Whitening", "Touch-Up Sessions"],
      price: "Starting at $199"
    },
    {
      icon: <Award size={48} color={THEME.colors.primary} />,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like your natural teeth.",
      features: ["Single Implants", "Full Mouth Restoration", "Implant-Supported Dentures", "Bone Grafting"],
      price: "Starting at $1,299"
    },
    {
      icon: <Shield size={48} color={THEME.colors.primary} />,
      title: "Invisalign®",
      description: "Straighten your teeth discreetly with clear, removable aligners that fit seamlessly into your lifestyle.",
      features: ["Clear Aligners", "Digital Treatment Planning", "Progress Monitoring", "Retainer Included"],
      price: "Starting at $2,999"
    },
    {
      icon: <Stethoscope size={48} color={THEME.colors.primary} />,
      title: "Emergency Care",
      description: "Immediate relief for dental emergencies including severe pain, broken teeth, and urgent oral health issues.",
      features: ["Same-Day Appointments", "Pain Management", "Trauma Care", "After-Hours Availability"],
      price: "Starting at $150"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Martinez",
      specialty: "General & Cosmetic Dentistry",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
      bio: "Passionate about creating beautiful, healthy smiles with a gentle approach."
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Oral Surgery & Implants",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
      bio: "Specializes in complex restorative procedures and dental implant placement."
    },
    {
      name: "Lisa Rodriguez, RDH",
      specialty: "Dental Hygienist",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
      bio: "Dedicated to patient education and preventive care for optimal oral health."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer K.",
      text: "The team at Dallas Dental made me feel comfortable from the moment I walked in. My smile has never looked better!",
      rating: 5
    },
    {
      name: "Robert M.",
      text: "Professional, gentle, and efficient. They transformed my fear of dentists into confidence in my oral health.",
      rating: 5
    },
    {
      name: "Maria S.",
      text: "Outstanding service and results. The Invisalign treatment exceeded my expectations completely.",
      rating: 5
    }
  ];

  return (
    <div style={{ fontFamily: THEME.fonts.body, color: THEME.text }}>
      {/* Hero Section */}
      <section style={{
        background: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920') center/cover`,
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(2, 132, 199, 0.85), rgba(6, 182, 212, 0.75))'
        }} />
        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '0 20px',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: '48px',
            fontFamily: THEME.fonts.heading,
            fontWeight: 'bold',
            marginBottom: '24px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Comprehensive Dental Care
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            marginBottom: '32px',
            lineHeight: 1.6
          }}>
            Experience gentle, modern dentistry with a team that cares about your comfort and confidence
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            backgroundColor: 'white',
            color: THEME.colors.primary,
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease'
          }}>
            Schedule Your Visit
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          background: THEME.colors.background
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '36px',
                fontFamily: THEME.fonts.heading,
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                Our Services
              </h2>
              <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                From routine cleanings to complete smile makeovers, we provide comprehensive dental care for the whole family
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {services.map((service, index) => (
                <TiltCard key={index}>
                  <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div style={{ marginBottom: '24px' }}>
                      {service.icon}
                    </div>
                    <h3 style={{
                      fontSize: '24px',
                      fontFamily: THEME.fonts.heading,
                      fontWeight: 'bold',
                      marginBottom: '16px'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      opacity: 0.8,
                      flex: 1
                    }}>
                      {service.description}
                    </p>
                    <div style={{ marginBottom: '20px' }}>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '8px'
                        }}>
                          <CheckCircle size={16} color={THEME.colors.accent} style={{ marginRight: '8px' }} />
                          <span style={{ fontSize: '14px' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: `1px solid ${THEME.colors.background}`,
                      paddingTop: '20px'
                    }}>
                      <span style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: THEME.colors.primary
                      }}>
                        {service.price}
                      </span>
                      <Link to="/contact" style={{
                        backgroundColor: THEME.colors.primary,
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s ease'
                      }}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <section style={{
        background: THEME.colors.primary,
        padding: `${THEME.spacing.sectionPadding} 20px`,
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <AnimatedCounter end={20} suffix="+" duration={2} />
              <div style={{ fontSize: '48px', fontFamily: THEME.fonts.heading, fontWeight: 'bold', marginBottom: '8px' }}>
                <span style={{ display: 'none' }}>Years</span>
              </div>
              <p style={{ fontSize: '18px', opacity: 0.9 }}>Years of Experience</p>
            </div>
            <div>
              <AnimatedCounter end={5000} suffix="+" duration={2.5} />
              <div style={{ fontSize: '48px', fontFamily: THEME.fonts.heading, fontWeight: 'bold', marginBottom: '8px' }}>
                <span style={{ display: 'none' }}>Patients</span>
              </div>
              <p style={{ fontSize: '18px', opacity: 0.9 }}>Happy Patients</p>
            </div>
            <div>
              <AnimatedCounter end={15000} suffix="+" duration={3} />
              <div style={{ fontSize: '48px', fontFamily: THEME.fonts.heading, fontWeight: 'bold', marginBottom: '8px' }}>
                <span style={{ display: 'none' }}>Procedures</span>
              </div>
              <p style={{ fontSize: '18px', opacity: 0.9 }}>Procedures Completed</p>
            </div>
            <div>
              <AnimatedCounter end={99} suffix="%" duration={2} />
              <div style={{ fontSize: '48px', fontFamily: THEME.fonts.heading, fontWeight: 'bold', marginBottom: '8px' }}>
                <span style={{ display: 'none' }}>Satisfaction</span>
              </div>
              <p style={{ fontSize: '18px', opacity: 0.9 }}>Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          background: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '36px',
                fontFamily: THEME.fonts.heading,
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                Meet Our Team
              </h2>
              <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                Our experienced dental professionals are committed to providing exceptional care in a comfortable environment
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              {teamMembers.map((member, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  background: THEME.colors.surface,
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 24px',
                      border: `4px solid ${THEME.colors.accent}`
                    }}
                  />
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: THEME.fonts.heading,
                    fontWeight: 'bold',
                    marginBottom: '8px'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: THEME.colors.primary,
                    fontWeight: 'bold',
                    marginBottom: '8px'
                  }}>
                    {member.specialty}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    opacity: 0.7,
                    marginBottom: '16px'
                  }}>
                    {member.experience} experience
                  </p>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    opacity: 0.8
                  }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        background: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '36px',
              fontFamily: THEME.fonts.heading,
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              What Our Patients Say
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill={THEME.colors.accent} color={THEME.colors.accent} />
                  ))}
                </div>
                <p style={{
                  fontSize: '16px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  opacity: 0.8
                }}>
                  "{testimonial.text}"
                </p>
                <p style={{
                  fontWeight: 'bold',
                  color: THEME.colors.primary
                }}>
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Info */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                fontWeight: 'bold',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Shield size={24} color={THEME.colors.primary} style={{ marginRight: '12px' }} />
                Insurance Accepted
              </h3>
              <p style={{ marginBottom: '16px', opacity: 0.8 }}>
                We accept most major insurance plans including:
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'Blue Cross Blue Shield'].map((insurance, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <CheckCircle size={16} color={THEME.colors.accent} style={{ marginRight: '8px' }} />
                    {insurance}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                fontWeight: 'bold',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Clock size={24} color={THEME.colors.primary} style={{ marginRight: '12px' }} />
                Office Hours
              </h3>
              <div style={{ opacity: 0.8 }}>
                <p style={{ marginBottom: '8px' }}>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p style={{ marginBottom: '8px' }}>Saturday: 9:00 AM - 2:00 PM</p>
                <p style={{ marginBottom: '16px' }}>Sunday: Closed</p>
                <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
                  Saturday appointments by appointment only
                </p>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                fontWeight: 'bold',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Star size={24} color={THEME.colors.primary} style={{ marginRight: '12px' }} />
                Special Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['New Patient Special - $99 Exam & Cleaning', 'Same-Day Emergency Appointments', 'Sedation Dentistry Available', 'Digital X-Rays & Imaging', 'Family-Friendly Environment'].map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '12px'
                  }}>
                    <CheckCircle size={16} color={THEME.colors.accent} style={{ marginRight: '8px', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.accent})`,
        padding: `${THEME.spacing.sectionPadding} 20px`,
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontFamily: THEME.fonts.heading,
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Ready to Transform Your Smile?
          </h2>
          <p style={{
            fontSize: '18px',
            opacity: 0.9,
            marginBottom: '32px',
            lineHeight: 1.6
          }}>
            Schedule your consultation today and discover how our gentle, modern approach to dentistry can give you the healthy, beautiful smile you've always wanted.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <Link to="/contact" style={{
              backgroundColor: 'white',
              color: THEME.colors.primary,
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease'
            }}>
              <Calendar size={20} />
              Schedule Appointment
            </Link>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              opacity: 0.9
            }}>
              <Phone size={20} />
              <span>Call us: (214) 555-SMILE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;