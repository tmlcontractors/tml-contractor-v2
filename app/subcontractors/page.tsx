import SubcontractorForm from '@/components/SubcontractorForm';

export const metadata = {
  title: 'Subcontractor Application | TML Contractor',
  description: 'Apply to work with TML Contractor as a subcontractor or trade partner serving Southeast Michigan & Ohio.',
};

export default function Subcontractors() {
  return <>
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">TML Contractor</div>
        <h1>Become a TML Subcontractor.</h1>
        <p className="section-copy">TML Contractor is building a network of qualified subcontractors and trade professionals for residential and commercial construction projects throughout Southeast Michigan.</p>
      </div>
    </section>
    <section className="section">
      <div className="container grid grid-2">
        <div>
          <div className="eyebrow">Subcontractor Network</div>
          <h2 className="section-title">Qualified Partners Wanted.</h2>
          <p className="section-copy">Complete the application so TML can review your company, trade experience, service area, availability, and business qualifications for current or future projects.</p>
          <div style={{marginTop:28}}>
            <div className="notice"><strong>Have your information ready.</strong><br/>You may be asked for license information, insurance details, W-9 information, references, and other documentation before being assigned work.</div>
          </div>
          <div style={{marginTop:28}}>
            <h3>What we look for</h3>
            <p className="section-copy">Quality workmanship, reliable communication, appropriate licensing or credentials where required, current insurance, safe work practices, and dependable project performance.</p>
          </div>
        </div>
        <SubcontractorForm />
      </div>
    </section>
  </>;
}
