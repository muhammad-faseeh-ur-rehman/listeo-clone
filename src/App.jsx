import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import TrendingListings from "./components/TrendingListings";
import LocalDeals from "./components/LocalDeals";
import HowItWorks from "./components/HowItWorks";
import ClientStories from "./components/ClientStories";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <PopularCategories />
        <TrendingListings />
        <LocalDeals />
        <HowItWorks />
        <ClientStories />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
