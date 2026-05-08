import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Clock } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const SurfSection = () => {
  const { t } = useTranslation();
  const surfCourses = [
    {
      titleKey: "surfSection.beginnerTitle",
      descriptionKey: "surfSection.beginnerDesc",
      durationKey: "surfSection.duration",
      durationValue: "2 heures",
      groupSizeKey: "surfSection.groupSize",
      groupSizeValue: "Max 4 personnes",
      levelKey: "surfSection.level",
      levelValueKey: "surfSection.beginner",
      imageAltKey: "surfSection.altBeginnerCourse",
      src:"img/surf-for-beginner.png"
    },
    {
      titleKey: "surfSection.intermediateTitle",
      descriptionKey: "surfSection.intermediateDesc",
      durationKey: "surfSection.duration",
      durationValue: "3 heures",
      groupSizeKey: "surfSection.groupSize",
      groupSizeValue: "Max 3 personnes",
      levelKey: "surfSection.level",
      levelValueKey: "surfSection.intermediate",
      imageAltKey: "surfSection.altIntermediateCourse",
      src:"img/surf-for-intermediate.png"
    },
    {
      titleKey: "surfSection.advancedTitle",
      descriptionKey: "surfSection.advancedDesc",
      durationKey: "surfSection.duration",
      durationValue: "4 heures",
      groupSizeKey: "surfSection.groupSize",
      groupSizeValue: "Max 2 personnes",
      levelKey: "surfSection.level",
      levelValueKey: "surfSection.advanced",
      imageAltKey: "surfSection.altAdvancedCourse",
      src:"img/surf-for-pro.png"
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
    <section id="surf" className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="surfSection.title">
              Cours de <span className="text-gradient">Surf</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('surfSection.intro')}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {surfCourses.map((course, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full card-hover flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img  
                    alt={t(course.imageAltKey)} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   src={course.src} />
                  <div className="absolute top-2 right-2 bg-primary text-white text-sm font-medium py-1 px-2 rounded">
                    {t(course.levelValueKey)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{t(course.titleKey)}</CardTitle>
                  <CardDescription>{t(course.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{t(course.durationKey)}: {course.durationValue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{t(course.groupSizeKey)}: {course.groupSizeValue}</span>
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
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">{t('surfSection.whyChooseUs')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{t('surfSection.instructors')}</p>
                    <p className="text-gray-600">{t('surfSection.instructorsDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{t('surfSection.smallGroups')}</p>
                    <p className="text-gray-600">{t('surfSection.smallGroupsDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary mt-0.5">
                    <path d="M2 12h20M2 7h20M2 17h20M15 2c0 5.523-4.477 10-10 10S-5 7.523-5 2" />
                  </svg>
                  <div>
                    <p className="font-medium">{t('surfSection.qualityEquipment')}</p>
                    <p className="text-gray-600">{t('surfSection.qualityEquipmentDesc')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img  
                  alt={t('surfSection.altInstructorGroup')} 
                  className="w-full h-64 object-cover"
                 src="img/teacher2.jpg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurfSection;