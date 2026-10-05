"use client";
import { useState } from 'react';

const trades = ['Roofing','Drywall','Painting','Flooring','Framing','Carpentry','Electrical','Plumbing','HVAC','Windows & Doors','Gutters','Decks & Fences','Concrete','Masonry','Demolition','General Remodeling','Other'];
const counties = ['Wayne','Oakland','Macomb','Washtenaw','Monroe','Livingston','Ohio','Other Southeast Michigan'];

export default function SubcontractorForm() {
  const [sent,setSent]=useState(false);
  const [busy,setBusy]=useState(false);

  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const form=e.currentTarget;
    const data=Object.fromEntries(new FormData(form).entries());
    try {
      const r=await fetch('/api/subcontractor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      if(!r.ok) throw new Error();
      setSent(true);
      form.reset();
    } catch {
      alert('Your application could not be submitted. Please call (313) 729-0398 or email tevin@tmlcontractors.com.');
    } finally { setBusy(false); }
  }

  if(sent) return <div className="notice"><strong>Thank you for applying to work with TML Contractor.</strong><br/>Your subcontractor application has been received for review.</div>;

  return <form className="form" onSubmit={submit}>
    <div className="eyebrow">Application</div>
    <h2 style={{margin:'0 0 4px'}}>Subcontractor Information</h2>
    <div className="form-grid">
      <div className="field"><label htmlFor="company">Company / Business Name</label><input id="company" name="company" required /></div>
      <div className="field"><label htmlFor="contactName">Primary Contact</label><input id="contactName" name="contactName" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="website">Website</label><input id="website" name="website" type="url" placeholder="https://" /></div>
      <div className="field"><label htmlFor="years">Years in Business</label><input id="years" name="years" type="number" min="0" /></div>
    </div>

    <div className="form-grid">
      <div className="field"><label htmlFor="trade">Primary Trade</label><select id="trade" name="trade" required><option value="">Select a trade</option>{trades.map(x=><option key={x}>{x}</option>)}</select></div>
      <div className="field"><label htmlFor="projectType">Project Type</label><select id="projectType" name="projectType" required><option value="">Select one</option><option>Residential</option><option>Commercial</option><option>Both</option></select></div>
      <div className="field"><label htmlFor="serviceArea">Primary Service Area</label><select id="serviceArea" name="serviceArea" required><option value="">Select one</option>{counties.map(x=><option key={x}>{x}</option>)}</select></div>
      <div className="field"><label htmlFor="crewSize">Typical Crew Size</label><input id="crewSize" name="crewSize" /></div>
    </div>

    <div className="field"><label htmlFor="services">Services / Scope You Perform</label><textarea id="services" name="services" required placeholder="Describe the work your company can perform." /></div>

    <h3 style={{margin:'8px 0 0'}}>Business & Compliance</h3>
    <div className="form-grid">
      <div className="field"><label htmlFor="license">License / Credential Information</label><input id="license" name="license" placeholder="If applicable" /></div>
      <div className="field"><label htmlFor="insurance">General Liability Insurance</label><select id="insurance" name="insurance" required><option value="">Select one</option><option>Current</option><option>Not currently insured</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="workersComp">Workers' Compensation</label><select id="workersComp" name="workersComp" required><option value="">Select one</option><option>Current</option><option>Not required for my business</option><option>Not currently covered</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="w9">W-9</label><select id="w9" name="w9" required><option value="">Select one</option><option>Available</option><option>Can provide upon request</option><option>Not available</option></select></div>
      <div className="field"><label htmlFor="bonding">Bonding</label><select id="bonding" name="bonding"><option value="">Select one</option><option>Bonded</option><option>Can obtain if required</option><option>Not bonded</option><option>Not applicable</option></select></div>
      <div className="field"><label htmlFor="references">References Available</label><select id="references" name="references"><option value="">Select one</option><option>Yes</option><option>Upon request</option><option>No</option></select></div>
    </div>

    <h3 style={{margin:'8px 0 0'}}>Project Capacity</h3>
    <div className="form-grid">
      <div className="field"><label htmlFor="availability">Availability</label><select id="availability" name="availability"><option>Currently Available</option><option>Available Within 30 Days</option><option>Limited Availability</option><option>Not Currently Available</option></select></div>
      <div className="field"><label htmlFor="materials">Materials</label><select id="materials" name="materials"><option>Labor Only</option><option>Labor & Materials</option><option>Either</option></select></div>
    </div>

    <div className="field"><label htmlFor="equipment">Equipment / Specialty Capabilities</label><textarea id="equipment" name="equipment" placeholder="List major equipment, certifications, specialty capabilities, or other useful information." /></div>
    <div className="field"><label htmlFor="referencesInfo">Project References</label><textarea id="referencesInfo" name="referencesInfo" placeholder="Provide names, companies, phone numbers, emails, or project examples if available." /></div>
    <div className="field"><label htmlFor="additional">Additional Information</label><textarea id="additional" name="additional" /></div>

    <div className="notice">By submitting this application, I certify that the information provided is accurate to the best of my knowledge and understand that submission does not guarantee subcontracting work or a contract with TML Contractor.</div>
    <input name="websiteTrap" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
    <label style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:13}}><input type="checkbox" name="certify" value="yes" required /> I certify that the information above is accurate and authorize TML Contractor to contact me regarding subcontractor opportunities.</label>
    <button className="btn btn-gold" disabled={busy}>{busy?'Submitting…':'Submit Subcontractor Application'}</button>
  </form>;
}
