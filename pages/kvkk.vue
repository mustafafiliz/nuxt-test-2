<template>
  <div class="kvkk-page">
    <div class="kvkk-content">
      <h1>Privacy Policy</h1>
      
      <section>
        <h2>1. Data Controller</h2>
        <p>
          Pursuant to the Law on Protection of Personal Data No. 6698 ("KVKK"), your personal data may be processed by Beosin (the "Company") as the data controller within the scope explained below.
        </p>
      </section>

      <section>
        <h2>2. Purpose of Processing Personal Data</h2>
        <p>
          Your personal data is processed for the following purposes:
        </p>
        <ul>
          <li>Carrying out necessary operations for you to benefit from products and services offered by our Company</li>
          <li>Improving service quality within the scope of blockchain security and compliance solutions</li>
          <li>Customizing and recommending products and services offered by our Company according to your preferences, usage habits, and needs</li>
          <li>Ensuring legal and commercial security of our Company and business partners</li>
          <li>Determining and implementing our business strategies</li>
          <li>Conducting customer satisfaction activities</li>
        </ul>
      </section>

      <section>
        <h2>3. Transfer of Personal Data</h2>
        <p>
          Your personal data may be transferred, limited to the fulfillment of the purposes mentioned above, to:
        </p>
        <ul>
          <li>Our business partners</li>
          <li>Our suppliers</li>
          <li>Legally authorized public institutions</li>
          <li>Legally authorized private institutions</li>
        </ul>
        <p>
          within the framework of personal data processing conditions and purposes specified in Articles 8 and 9 of the KVKK.
        </p>
      </section>

      <section>
        <h2>4. Method and Legal Basis for Collecting Personal Data</h2>
        <p>
          Your personal data is collected by our Company through various methods such as our website, mobile application, email, call center, and similar channels; verbally, in writing, or electronically.
        </p>
        <p>
          In this context, based on the legal reasons specified in Articles 5 and 6 of the KVKK, your data is processed on the grounds of:
        </p>
        <ul>
          <li>Your explicit consent</li>
          <li>Explicit provision in the laws</li>
          <li>Direct relevance to the establishment or performance of a contract</li>
          <li>Fulfillment of our legal obligation</li>
          <li>Mandatory for our legitimate interests, provided that it does not harm your fundamental rights and freedoms</li>
        </ul>
      </section>

      <section>
        <h2>5. Your Rights Under KVKK</h2>
        <p>
          Pursuant to Article 11 of the KVKK, you may exercise the following rights by applying to our Company:
        </p>
        <ul>
          <li>Learn whether your personal data is being processed</li>
          <li>Request information if your personal data has been processed</li>
          <li>Learn the purpose of processing your personal data and whether they are used in accordance with the purpose</li>
          <li>Know the third parties to whom your personal data is transferred domestically or abroad</li>
          <li>Request correction if your personal data is processed incompletely or inaccurately</li>
          <li>Request deletion or destruction of your personal data within the framework of conditions set forth in Article 7 of the KVKK</li>
          <li>Request notification of correction, deletion, and destruction operations to third parties to whom your personal data has been transferred</li>
          <li>Object to the occurrence of a result against you by analyzing your processed data exclusively through automated systems</li>
          <li>Request compensation for damages if you suffer damage due to unlawful processing of your personal data</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          To exercise your rights mentioned above, you can submit your request in writing or via email to the address below, along with the necessary information to identify you and your explanations regarding which right under Article 11 of the KVKK you wish to exercise:
        </p>
        <p>
          Email: privacy@beosin.com
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kvkk-page {
  padding: 120px 24px 60px;
  display: flex;
  justify-content: center;
  
  .kvkk-content {
    max-width: 1230px;
    width: 100%;
    
    h1 {
      font-size: 40px;
      color: var(--txt-1);
      margin-bottom: 40px;
    }
    
    section {
      margin-bottom: 40px;
      
      h2 {
        font-size: 24px;
        color: var(--txt-1);
        margin-bottom: 16px;
      }
      
      p {
        font-size: 16px;
        line-height: 1.6;
        color: var(--txt-2);
        margin-bottom: 16px;
      }

      ul {
        list-style-type: disc;
        padding-left: 24px;
        margin-bottom: 16px;
        
        li {
          font-size: 16px;
          line-height: 1.6;
          color: var(--txt-2);
          margin-bottom: 8px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .kvkk-page {
    padding: 80px 24px 40px;
    
    .kvkk-content {
      h1 {
        font-size: 32px;
      }
      
      h2 {
        font-size: 20px;
      }
    }
  }
}
</style> 