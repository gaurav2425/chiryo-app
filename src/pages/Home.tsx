import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🏥</span>
          <span className={styles.logoText}>toh</span>
        </div>
        <nav className={styles.nav}>
          <a href="#k12">K12</a>
          <a href="#higher-ed">Higher Ed</a>
          <a href="#families">Families</a>
          <a href="#business">Business</a>
        </nav>
        <div className={styles.authButtons}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.joinBtn}>Join now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Mental health, reimagined for{' '}
            <span className={styles.cursiveText}>students</span>
          </h1>
          <p className={styles.heroDescription}>
            Accessible, inclusive mental health support and peace with the help of licensed therapists and a community of peers who understand what you're going through.
          </p>
          <button className={styles.ctaButton}>Get started</button>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            {/* Main images */}
            <div className={styles.imageGrid}>
              <div className={styles.imageCard}>
                <img src="/student1.jpg" alt="Student" />
              </div>
              <div className={styles.imageCard}>
                <img src="/student2.jpg" alt="Student" />
              </div>
            </div>
            {/* Floating icons */}
            <div className={styles.floatingIcon} style={{ top: '5%', left: '10%' }}>📍</div>
            <div className={styles.floatingIcon} style={{ top: '15%', right: '5%' }}>💙</div>
            <div className={styles.floatingIcon} style={{ bottom: '25%', left: '5%' }}>🎨</div>
            <div className={styles.floatingIcon} style={{ bottom: '10%', right: '15%' }}>😊</div>
            <div className={styles.decorStar} style={{ top: '30%', left: '0' }}>✨</div>
            <div className={styles.decorCircle} style={{ bottom: '40%', right: '0' }}></div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className={styles.trustedSection}>
        <p className={styles.trustedText}>Students default choice at schools</p>
        <div className={styles.logoGrid}>
          <div className={styles.schoolLogo}>🎓 Stanford</div>
          <div className={styles.schoolLogo}>🎓 Berkeley</div>
          <div className={styles.schoolLogo}>🎓 Stanford Medicine</div>
          <div className={styles.schoolLogo}>🎓 Harvard</div>
          <div className={styles.schoolLogo}>🎓 UChicago</div>
        </div>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <div className={styles.supportContent}>
          <h2 className={styles.sectionTitle}>Care you can feel better with.</h2>
          <p className={styles.sectionSubtitle}>
            We support students no matter what they're going through with.
          </p>
          
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h3>On-demand mental health support</h3>
                <p>Weekly, virtual group sessions and 24/7 digital support, without the hassle of finding a therapist.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h3>Live support through instant messaging</h3>
                <p>Text-based support whenever you need it from licensed professionals.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h3>Community with peers</h3>
                <p>Connect with students who understand what you're going through.</p>
              </div>
            </div>
          </div>

          <div className={styles.benefitCards}>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>💰</span>
              <p>10x lower cost with culturally-competent care</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🎯</span>
              <p>Real-time, 24/7 support</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🔒</span>
              <p>Privacy-first, anonymous consultations</p>
            </div>
          </div>
        </div>
        
        <div className={styles.supportImage}>
          <div className={styles.videoCallMockup}>
            <div className={styles.mockupGrid}>
              <div className={styles.mockupCard}>👤</div>
              <div className={styles.mockupCard}>👤</div>
              <div className={styles.mockupCard}>👤</div>
              <div className={styles.mockupCard}>👤</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <h3 className={styles.statNumber}>10 <span className={styles.cursiveText}>students</span></h3>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statNumber}>Once <span className={styles.cursiveText}>forever</span></h3>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statNumber}>60 <span className={styles.cursiveText}>min</span></h3>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialImage}>
          <img src="/testimonial.jpg" alt="Student testimonial" />
        </div>
        <div className={styles.testimonialContent}>
          <p className={styles.testimonialTitle}>
            students default love from top
          </p>
          <blockquote className={styles.testimonialQuote}>
            "It was so nice to get to know my teammates and talk about what we're all going through. It really helped me understand my anxiety and pressure to please other people. Also, even though we were on calls, they didn't feel like interviews."
          </blockquote>
          <div className={styles.testimonialAuthor}>
            <img src="/stanford-logo.png" alt="Stanford" />
            <div>
              <p className={styles.authorName}>Student</p>
              <p className={styles.authorSchool}>Stanford University</p>
            </div>
          </div>
          <div className={styles.testimonialNav}>
            <button className={styles.navDot}></button>
            <button className={styles.navDot}></button>
            <button className={styles.navDotActive}></button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className={styles.whoWeHelpSection}>
        <h2 className={styles.sectionHeading}>Who we help</h2>
        
        <div className={styles.categoryCards}>
          <div className={styles.categoryCard}>
            <h3>K12</h3>
            <p>Support for students in primary and secondary education with age-appropriate care.</p>
            <button className={styles.learnMoreBtn}>Learn more →</button>
          </div>
          
          <div className={styles.categoryCard}>
            <h3>Higher Ed</h3>
            <p>Mental health resources tailored for college and university students.</p>
            <button className={styles.learnMoreBtn}>Learn more →</button>
          </div>
          
          <div className={styles.categoryCard}>
            <h3>Families</h3>
            <p>Comprehensive support for entire families navigating mental health together.</p>
            <button className={styles.learnMoreBtn}>Learn more →</button>
          </div>
          
          <div className={styles.categoryCard}>
            <h3>Enterprise</h3>
            <p>Employee assistance programs for organizations of all sizes.</p>
            <button className={styles.learnMoreBtn}>Learn more →</button>
          </div>
        </div>

        <div className={styles.dashboardPreview}>
          <div className={styles.dashboardMockup}>
            <h4>Good morning, Julian!</h4>
            <div className={styles.progressCircle}>
              <span className={styles.progressValue}>4/4</span>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>💙 Mood</div>
              <div className={styles.statBox}>⚡ Energy</div>
              <div className={styles.statBox}>😊 Happiness</div>
              <div className={styles.statBox}>🎯 Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCtaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            A proprietary matching algorithm pairs students with expert therapists who understand students.
          </h2>
          <p className={styles.ctaDescription}>
            We use a combination of machine learning and human expertise to match students with the right therapist for their unique needs. Our therapists are specially trained to work with students and understand the unique challenges they face.
          </p>
        </div>
        <div className={styles.ctaImage}>
          <div className={styles.therapistCard}>
            <img src="/therapist.jpg" alt="Therapist" />
            <div className={styles.therapistLabels}>
              <span className={styles.label}>ENGLISH, HEBREW</span>
              <span className={styles.label}>POPULAR</span>
              <span className={styles.label}>TRAUMA</span>
              <span className={styles.label}>$50/HR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.logoIcon}>🏥</span>
              <span className={styles.logoText}>toh</span>
            </div>
            <p className={styles.footerTagline}>
              "Reinventing mental health for a new generation"
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Products</h4>
              <a href="#k12">For K12</a>
              <a href="#higher-ed">For Higher Ed</a>
              <a href="#families">For Families</a>
              <a href="#business">For Business</a>
              <a href="#therapists">For therapists</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <a href="#about">About us</a>
              <a href="#impact">Impact</a>
              <a href="#diversity">Diversity</a>
              <a href="#blog">Blog</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>Follow us</h4>
              <a href="#linkedin">LinkedIn</a>
              <a href="#twitter">Twitter</a>
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span>😊</span>
              <div>
                <p>HIPAA compliant</p>
                <p>Your data is safe</p>
              </div>
            </div>
          </div>
          
          <div className={styles.footerMeta}>
            <p>© 2024 Reinvent Labs Inc.</p>
            <div className={styles.footerMetaLinks}>
              <a href="#terms">Terms</a>
              <a href="#privacy">Privacy</a>
              <a href="#contact">Contact us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;