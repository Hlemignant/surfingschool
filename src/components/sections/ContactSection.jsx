import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectOption } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contactSection.messageSent'),
        description: t('contactSection.messageSentDesc'),
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="contactSection.title">
              Contactez-<span className="text-gradient">Nous</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('contactSection.intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">{t('contactSection.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contactSection.address')}</h4>
                    <p className="text-gray-600">{t('contactSection.addressValue')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contactSection.phone')}</h4>
                    <p className="text-gray-600">+62 819 1707 8109</p>
                  </div>
                </div>                
                               
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contactSection.hours')}</h4>
                    <p className="text-gray-600">{t('contactSection.hoursValue')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">{t('contactSection.followUs')}</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/yuz.oyozdirty" target="blank_" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/yuskaneil3/" target="blank_" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="https://wa.me/+6281917018103" target="blank_" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A11.817 11.817 0 0012.04 0C5.4 0 .04 5.36.04 12a11.9 11.9 0 001.6 5.9L0 24l6.28-1.64a11.928 11.928 0 005.76 1.46c6.64 0 12-5.36 12-12 0-3.2-1.24-6.2-3.52-8.52zm-8.48 18a9.92 9.92 0 01-5.12-1.44l-.36-.2-3.72.96.98-3.62-.24-.38A9.913 9.913 0 012.04 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.44-7.56c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.23-.66.08a8.28 8.28 0 01-2.42-1.5 9.12 9.12 0 01-1.68-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.38s-1.05 1.03-1.05 2.52 1.08 2.92 1.24 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.04-1.43.25-.7.25-1.3.18-1.42-.07-.13-.26-.2-.56-.35z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-lg overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps?q=Pantai+Senggigi,+Lombok,+Indonesia&z=10&output=embed"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
              title="Carte de Lombok"
            ></iframe>
          </div>
        </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;