import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Fish, Map, Clock, Users } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const SnorkelingSection = () => {
  const { t } = useTranslation();
  const snorkelingTours = [
    {
      titleKey: "snorkelingSection.reefDiscoveryTitle",
      descriptionKey: "snorkelingSection.reefDiscoveryDesc",
      duration: "3 heures",
      location: "Gili Air",
      highlightsKey: "snorkelingSection.highlights",
      imageAltKey: "snorkelingSection.altReefDiscovery",
      src: "img/reef-snorkeling.png"
    },
    {
      titleKey: "snorkelingSection.seaTurtlesTitle",
      descriptionKey: "snorkelingSection.seaTurtlesDesc",
      duration: "4 heures",
      location: "Gili Meno",
      highlightsKey: "snorkelingSection.seaTurtleHighlights",
      imageAltKey: "snorkelingSection.altSeaTurtles",
      src: "img/turtle-snorkeling2.png"
    },
    {
      titleKey: "snorkelingSection.wreckExplorationTitle",
      descriptionKey: "snorkelingSection.wreckExplorationDesc",
      duration: "5 heures",
      location: "Sekotong",
      highlightsKey: "snorkelingSection.wreckHighlights",
      imageAltKey: "snorkelingSection.altWreckExploration",
      src: "img/wreck.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="snorkeling" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="snorkelingSection.title">
              Excursions de <span className="text-gradient">Snorkeling</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('snorkelingSection.intro')}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {snorkelingTours.map((tour, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full card-hover flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img  
                    alt={t(tour.imageAltKey)} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   src={tour.src} />
                </div>
                <CardHeader>
                  <CardTitle>{t(tour.titleKey)}</CardTitle>
                  <CardDescription>{t(tour.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{t('snorkelingSection.duration')}: {tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Map className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{t('snorkelingSection.location')}: {tour.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t(tour.highlightsKey, { returnObjects: true }).map((highlight, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">{t('snorkelingSection.experienceTitle')}</h3>
              <p className="mb-6">
                {t('snorkelingSection.experienceDesc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Fish className="h-6 w-6 text-cyan-200 mt-0.5" />
                  <div>
                    <p className="font-medium">{t('snorkelingSection.exceptionalBiodiversity')}</p>
                    <p className="text-blue-100">{t('snorkelingSection.exceptionalBiodiversityDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-cyan-200 mt-0.5" />
                  <div>
                    <p className="font-medium">{t('snorkelingSection.experiencedGuides')}</p>
                    <p className="text-blue-100">{t('snorkelingSection.experiencedGuidesDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Anchor className="h-6 w-6 text-cyan-200 mt-0.5" />
                  <div>
                    <p className="font-medium">{t('snorkelingSection.equipmentProvided')}</p>
                    <p className="text-blue-100">{t('snorkelingSection.equipmentProvidedDesc')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img  
                  alt={t('snorkelingSection.altUnderwaterReef')} 
                  className="w-full h-64 object-cover"
                 src="img/snorkeling2.png" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SnorkelingSection;