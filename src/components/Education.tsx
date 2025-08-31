import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { educationData } from '@/data/portfolio-data';

const Education = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Academic background and qualifications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="card-style"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  {edu.type === 'degree' ? (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  ) : (
                    <Award className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm mt-1">{edu.period}</p>
                  {edu.description && (
                    <p className="mt-3">{edu.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
