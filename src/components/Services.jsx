import customDevImg from '../assets/generated/custom_dev.png';
import aiStoreIconsImg from '../assets/generated/ai_store_icons.png';
import techPatternImg from '../assets/generated/tech_pattern.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const aiStoreItems = [
    {
      title: t('services.aiStore.items.hair.title'),
      price: t('services.aiStore.items.hair.price'),
      description: t('services.aiStore.items.hair.desc'),
      iconClass: "icon-1",
      bgPos: "0% 0%",
      tag: t('services.aiStore.badge')
    },
    {
      title: t('services.aiStore.items.chat.title'),
      price: t('services.aiStore.items.chat.price'),
      description: t('services.aiStore.items.chat.desc'),
      iconClass: "icon-2",
      bgPos: "100% 0%",
      tag: t('services.aiStore.badge')
    },
    {
      title: t('services.aiStore.items.ppt.title'),
      price: t('services.aiStore.items.ppt.price'),
      description: t('services.aiStore.items.ppt.desc'),
      iconClass: "icon-3",
      bgPos: "0% 100%",
      tag: t('services.aiStore.badge')
    },
    {
      title: t('services.aiStore.items.image.title'),
      price: t('services.aiStore.items.image.price'),
      description: t('services.aiStore.items.image.desc'),
      iconClass: "icon-4",
      bgPos: "100% 100%",
      tag: t('services.aiStore.badge')
    }
  ];

  const customServices = [
    {
      title: t('services.customDev.title'),
      description: t('services.customDev.desc'),
      options: [
        { label: t('services.customDev.industry'), value: t('services.customDev.industryValue') },
        { label: t('services.customDev.budget'), value: t('services.customDev.budgetValue') },
        { label: t('services.customDev.purpose'), value: t('services.customDev.purposeValue') }
      ],
      icon: <Code size={48} />
    }
  ];

  return (
    <section id="services" className="section services">
      <style>{`
        .services::before {
          background-image: url(${techPatternImg}) !important;
        }
        .custom-dev-card::after {
          background-image: linear-gradient(to right, var(--color-navy-900), transparent), url(${customDevImg}) !important;
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <div className="container">
        <div className="section-header">
          <span className="badge">{t('services.badge')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>

        <div className="custom-dev-grid">
          {customServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="custom-dev-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-top">
                <div className="icon-box">{service.icon}</div>
                <div className="text-box">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="options-grid">
                {service.options.map((opt, i) => (
                  <div key={i} className="option-item">
                    <span className="label">{opt.label}</span>
                    <span className="value">{opt.value}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={{ width: 'fit-content' }}>{t('services.customDev.btnContact')}</button>
            </motion.div>
          ))}
        </div>

        <div className="section-header mt-lg">
          <span className="badge blue">{t('services.aiStore.badge')}</span>
          <h2>{t('services.aiStore.title')}</h2>
        </div>

        <div className="bento-grid">
          {aiStoreItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bento-card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="card-badge">{item.tag}</div>
              <div
                className={`image-icon`}
                style={{
                  backgroundImage: `url(${aiStoreIconsImg})`,
                  backgroundPosition: item.bgPos
                }}
              ></div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
                <p>{item.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn-text">{t('services.aiStore.btnDemo')}</button>
                <button className="btn-text">{t('services.aiStore.btnContact')}</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="consultancy-box">
          <div className="consultancy-content">
            <span className="badge">{t('services.consultancy.badge')}</span>
            <h3>{t('services.consultancy.title')}</h3>
            <div className="course-tags">
              {t('services.consultancy.tags', { returnObjects: true }).map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
          <button className="btn btn-outline">{t('services.consultancy.btnMore')}</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

