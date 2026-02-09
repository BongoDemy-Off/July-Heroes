import React, { useState } from 'react';
import { submitHero } from '../services/api';
import { FormStatus, HeroData } from '../types';

interface SubmissionFormProps {
  onSuccess: () => void;
}

const politicalParties = [
  "সাধারণ শিক্ষার্থী/জনতা (General Student/Public)",
  "Bangladesh Nationalist Party (BNP)",
  "Bangladesh Jamaat-e-Islami",
  "Jatiya Party (Ershad)",
  "Islami Andolan Bangladesh",
  "Ganosamhati Andolon",
  "Gono Odhikar Parishad",
  "Nagorik Oikya",
  "Jatiya Samajtantrik Dal (JASAD - Inu)",
  "Workers Party of Bangladesh",
  "Communist Party of Bangladesh (CPB)",
  "Biplobi Workers Party",
  "Liberal Democratic Party (LDP)",
  "Krishak Sramik Janata League",
  "BASAD (Khalequzzaman)",
  "Jatiya Party (JP - Manju)",
  "Bikalpa Dhara Bangladesh",
  "Khelafat Majlish",
  "Jamiat Ulema-e-Islam Bangladesh",
  "Bangladesh Awami League",
  "অন্যান্য (Other)"
];

export const SubmissionForm: React.FC<SubmissionFormProps> = ({ onSuccess }) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState<Partial<HeroData>>({
    name: '',
    district: '',
    story: '',
    driveLink: '',
    profession: '',
    ageGroup: '',
    gender: '',
    institution: '',
    incidentDate: '',
    cause: '',
    politicalAffiliation: 'সাধারণ শিক্ষার্থী/জনতা (General Student/Public)'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    const submissionData: HeroData = {
      name: formData.name || '',
      district: formData.district || '',
      story: formData.story || '',
      driveLink: formData.driveLink || '',
      createdAt: new Date().toISOString(),
      profession: formData.profession,
      ageGroup: formData.ageGroup,
      gender: formData.gender,
      institution: formData.institution,
      incidentDate: formData.incidentDate,
      cause: formData.cause,
      politicalAffiliation: formData.politicalAffiliation
    };

    const response = await submitHero(submissionData);

    if (response.success) {
      setStatus(FormStatus.SUCCESS);
      setFormData({ 
        name: '', district: '', story: '', driveLink: '',
        profession: '', ageGroup: '', gender: '', institution: '', 
        incidentDate: '', cause: '', politicalAffiliation: 'সাধারণ শিক্ষার্থী/জনতা (General Student/Public)'
      });
      onSuccess();
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
    } else {
      setStatus(FormStatus.ERROR);
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all";
  const labelClass = "block text-sm font-medium font-bengali text-gray-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="name" className={labelClass}>বীরের নাম *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="পুরো নাম লিখুন" />
        </div>
        <div className="group">
          <label htmlFor="district" className={labelClass}>জেলা *</label>
          <input type="text" id="district" name="district" required value={formData.district} onChange={handleChange} className={inputClass} placeholder="যেমন: ঢাকা" />
        </div>
      </div>

      {/* Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group">
          <label htmlFor="profession" className={labelClass}>পেশা</label>
          <select id="profession" name="profession" value={formData.profession} onChange={handleChange} className={inputClass}>
            <option value="">নির্বাচন করুন</option>
            <option value="Student">শিক্ষার্থী</option>
            <option value="Private Service">বেসরকারি চাকরিজীবী</option>
            <option value="Business">ব্যবসায়ী</option>
            <option value="Day Laborer">দিনমজুর</option>
            <option value="Rickshaw Puller">রিকশাচালক</option>
            <option value="Journalist">সাংবাদিক</option>
            <option value="Police/Ansar">পুলিশ/আনসার</option>
            <option value="Housewife">গৃহিণী</option>
            <option value="Other">অন্যান্য</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="ageGroup" className={labelClass}>বয়স</label>
          <select id="ageGroup" name="ageGroup" value={formData.ageGroup} onChange={handleChange} className={inputClass}>
            <option value="">নির্বাচন করুন</option>
            <option value="Child (0-12)">শিশু (০-১২)</option>
            <option value="Teenager (13-18)">কিশোর (১৩-১৮)</option>
            <option value="Youth (19-30)">যুবক (১৯-৩০)</option>
            <option value="Middle Aged (31-50)">মধ্যবয়সী (৩১-৫০)</option>
            <option value="Senior (50+)">বয়োজ্যেষ্ঠ (৫০+)</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="gender" className={labelClass}>লিঙ্গ</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
            <option value="">নির্বাচন করুন</option>
            <option value="Male">পুরুষ</option>
            <option value="Female">নারী</option>
          </select>
        </div>
      </div>

      {/* Incident Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="institution" className={labelClass}>শিক্ষা প্রতিষ্ঠান / কর্মস্থল</label>
          <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} className={inputClass} placeholder="যেমন: ঢাকা বিশ্ববিদ্যালয়" />
        </div>
        <div className="group">
          <label htmlFor="incidentDate" className={labelClass}>ঘটনার তারিখ</label>
          <input type="date" id="incidentDate" name="incidentDate" value={formData.incidentDate} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="cause" className={labelClass}>আহত/নিহতের কারণ</label>
          <select id="cause" name="cause" value={formData.cause} onChange={handleChange} className={inputClass}>
            <option value="">নির্বাচন করুন</option>
            <option value="Gunshot">গুলিবিদ্ধ</option>
            <option value="Beating">মারধর</option>
            <option value="Blunt Force">ভোতা অস্ত্রের আঘাত</option>
            <option value="Sound Grenade">সাউন্ড গ্রেনেড</option>
            <option value="Arson">অগ্নিসংযোগ</option>
            <option value="Other">অন্যান্য</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="politicalAffiliation" className={labelClass}>রাজনৈতিক পরিচয়</label>
          <select id="politicalAffiliation" name="politicalAffiliation" value={formData.politicalAffiliation} onChange={handleChange} className={inputClass}>
            {politicalParties.map((party, idx) => (
              <option key={idx} value={party}>{party}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="group">
        <label htmlFor="story" className={labelClass}>ঘটনার বিবরণ *</label>
        <textarea id="story" name="story" required rows={4} value={formData.story} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="কি ঘটেছিল? বিস্তারিত লিখুন..."></textarea>
      </div>

      <div className="group">
        <label htmlFor="driveLink" className={labelClass}>ছবি/ভিডিও লিংক (Google Drive)</label>
        <input type="url" id="driveLink" name="driveLink" value={formData.driveLink} onChange={handleChange} className={inputClass} placeholder="https://drive.google.com/..." />
        <p className="mt-1 text-xs text-gray-400 font-bengali">লিংকটি অবশ্যই 'Public' বা 'Anyone with the link' হতে হবে।</p>
      </div>

      <button
        type="submit"
        disabled={status === FormStatus.SUBMITTING}
        className={`w-full py-4 px-6 rounded-xl font-bengali font-bold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
          status === FormStatus.SUBMITTING ? 'bg-gray-400 cursor-not-allowed' : 
          status === FormStatus.SUCCESS ? 'bg-green-600' : 
          status === FormStatus.ERROR ? 'bg-red-800' :
          'bg-brand-red hover:bg-red-700'
        }`}
      >
        {status === FormStatus.SUBMITTING ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            জমা দেওয়া হচ্ছে...
          </span>
        ) : status === FormStatus.SUCCESS ? 'সফলভাবে জমা হয়েছে!' : status === FormStatus.ERROR ? 'ত্রুটি হয়েছে, আবার চেষ্টা করুন' : 'জমা দিন'}
      </button>
    </form>
  );
};