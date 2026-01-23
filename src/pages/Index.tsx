import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ValueProps from "@/components/home/ValueProps";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <ValueProps />
      <CTASection />
    </Layout>
  );
};

export default Index;
