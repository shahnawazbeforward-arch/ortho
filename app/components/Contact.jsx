'use client';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <Container className="relative z-10">
     <SectionHeading
  className="text-white"
  badge="Get In Touch"
  title="Visit Our Office Or Request An Appointment"
  subtitle="We are conveniently located. Drop by or send us a request below."
/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-[500px] lg:min-h-[1100px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.217709322303!2d-73.98658142342598!3d40.75549293484218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259011471569f%3A0xe21262d4e8c1e2b5!2sTimes%20Square%20Dental!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="USA Medical Office Location"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-3 md:p-6 border border-slate-800"
          >
            <iframe 
              style={{
                width: '100%', 
                height: '1100px', 
                borderWidth: 'medium', 
                borderStyle: 'none', 
                borderColor: 'currentcolor', 
                borderImage: 'none', 
                borderRadius: '16px', 
                opacity: 1, 
                visibility: 'visible', 
                pointerEvents: 'auto', 
                position: 'relative', 
                overflow: 'auto', 
                display: 'block'
              }} 
              id="inline-H5hVf9qU2eEae6Vba2Tc" 
              data-layout="{'id':'INLINE'}" 
              data-trigger-type="alwaysShow" 
              data-form-name=" Website Form - Request an Appt." 
              data-height="1100" 
              data-layout-iframe-id="inline-H5hVf9qU2eEae6Vba2Tc" 
              data-form-id="H5hVf9qU2eEae6Vba2Tc" 
              title=" Website Form - Request an Appt." 
              src="https://api.leadconnectorhq.com/widget/form/H5hVf9qU2eEae6Vba2Tc" 
              scrolling="yes"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}