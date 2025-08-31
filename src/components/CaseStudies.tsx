import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle as BarChart2, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { caseStudies } from '@/data/portfolio-data';

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <h2 className="section-title">Case Studies</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Showcasing successful digital marketing campaigns and strategies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) =>
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>

              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary h-3" />
                <CardContent className="p-6">
                  <div className="mb-4">
                    {study.type === 'performance' ?
                  <TrendingUp className="h-8 w-8 text-primary" /> :
                  study.type === 'analytics' ?
                  <BarChart2 className="h-8 w-8 text-primary" /> :

                  <Users className="h-8 w-8 text-primary" />
                  }
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{study.company}</p>
                  <p className="mb-4 line-clamp-3">{study.overview}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) =>
                  <span
                    key={idx}
                    className="text-xs bg-muted px-2 py-1 rounded-full">

                        {tag}
                      </span>
                  )}
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
                      <Link to={`/case-study/${study.id}`} className="flex items-center text-primary">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default CaseStudies;