import PortfolioHero from '@/components/projects/PortfolioHero';
import PortfolioGrid from '@/components/projects/PortfolioGrid';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ConstructionExpertise from '@/components/projects/ConstructionExpertise';
import ClientTestimonials from '@/components/projects/ClientTestimonials';
import ProjectCTA from '@/components/projects/ProjectCTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Projects | Ansh Developers',
  description: 'Explore the premium construction portfolio of Ansh Developers, showcasing our residential, commercial, and renovation projects across Lucknow.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* We use a solid background navbar or adapt the existing one as needed */}
      {/* <div className="bg-white"> */}
        <Navbar />
      {/* </div> */}
      
      {/* 1. Portfolio Hero Section */}
      <PortfolioHero />
      
      {/* 4. Featured Projects Section */}
      <FeaturedProjects />

      {/* 2 & 3. Portfolio Filter Navigation & Grid */}
      <PortfolioGrid />

      {/* 6. Construction Expertise Section */}
      <ConstructionExpertise />

      {/* 7. Client Testimonial Section */}
      <ClientTestimonials />

      {/* 8. Call To Action */}
      <ProjectCTA />

      <Footer />
    </main>
  );
}
