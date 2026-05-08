import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const NewsletterSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('newsletterSection.subscribeSuccess'),
        description: t('newsletterSection.subscribeSuccessDesc'),
        duration: 5000,
      });
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{t('newsletterSection.title')}</h2>
          <p className="text-blue-100 mb-8">
            {t('newsletterSection.intro')}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder={t('newsletterSection.yourEmail')}
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('newsletterSection.subscribing') : t('newsletterSection.subscribe')}
            </Button>
          </form>
          
          <p className="text-sm text-blue-100 mt-4">
            {t('newsletterSection.subscribeDisclaimer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;