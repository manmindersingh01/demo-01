import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { caseStudies } from '@/data/portfolio-data';
import { BarChart, LineChart } from '@/components/Charts';
import Footer from '@/components/Footer';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <div className="section-container flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <Button asChild>
          <Link to="/"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-4">
        <div className="section-container">
          <Button variant="ghost" className="text-primary-foreground" asChild>
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
        </div>
      </div>
      
      <div className="section-container mt-8">
        <h1 className="text-4xl font-bold text-primary mb-2">{caseStudy.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{caseStudy.company} | {caseStudy.date}</p>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-4">{caseStudy.overview}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="card-style">
              <h3 className="font-bold mb-2">Challenge</h3>
              <p>{caseStudy.challenge}</p>
            </div>
            <div className="card-style">
              <h3 className="font-bold mb-2">Approach</h3>
              <p>{caseStudy.approach}</p>
            </div>
            <div className="card-style">
              <h3 className="font-bold mb-2">Results</h3>
              <p>{caseStudy.results}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance Over Time</h3>
              <LineChart data={caseStudy.metrics.lineData} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Campaign Results</h3>
              <BarChart data={caseStudy.metrics.barData} />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
          <ul className="list-disc pl-5 space-y-2">
            {caseStudy.learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </Card>
        
        <div className="flex justify-center mt-12 mb-8">
          <Button size="lg" asChild>
            <Link to="/">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
