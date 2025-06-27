import Header from "@/components/Header";
import Biography from "@/components/Biography";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Biography />
      <Services />
      <Contacts />
    </div>
  );
};

export default Index;
