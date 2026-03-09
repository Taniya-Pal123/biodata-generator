import { useMemo, useState, useRef, useEffect } from "react";
import { Download, Upload, LogOut, Clock } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import gsap from "gsap";

import SectionTitle from "../components/SectionTitle";
import Field from "../components/Field";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import BioDataPreview from "../components/BioDataPreview";

import { calculateAge } from "../utils/calculateAge";
import { languages } from "../constants/language";
import { redirect, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const initialForm = {
  fullName: "",
  gender: "",
  dob: "",
  height: "",
  complexion: "",
  maritalStatus: "",
  religion: "",
  caste: "",
  motherTongue: "",
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  siblings: "",
  highestEducation: "",
  profession: "",
  annualIncome: "",
  workLocation: "",
  rashi: "",
  nakshatra: "",
  birthPlace: "",
  birthTime: "",
  contactNumber: "",
  address: "",
};

function BioData() {
  const [form, setForm] = useState(initialForm);
  const [template, setTemplate] = useState("Modern");
  const [titleFont, setTitleFont] = useState("Playfair Display");
  const [photo, setPhoto] = useState("");

  const age = useMemo(() => calculateAge(form.dob), [form.dob]);
  const previewRef = useRef(null);
  const leftRef = useRef(null);
  const navigate = useNavigate()

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleDownloadPdf = async () => {
  const element = previewRef.current;
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("biodata.pdf");
};

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPhoto(imageUrl);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");   
    navigate("/");                 
  };

  const previewRows = [
    ["Name", form.fullName],
    ["Gender", form.gender],
    ["Date of Birth", form.dob],
    ["Age", age],
    ["Height", form.height],
    ["Complexion", form.complexion],
    ["Marital Status", form.maritalStatus],
    ["Religion", form.religion],
    ["Caste", form.caste],
    ["Mother Tongue", form.motherTongue],
    ["Father's Name", form.fatherName],
    ["Father's Occupation", form.fatherOccupation],
    ["Mother's Name", form.motherName],
    ["Mother's Occupation", form.motherOccupation],
    ["Siblings", form.siblings],
    ["Highest Education", form.highestEducation],
    ["Profession", form.profession],
    ["Annual Income", form.annualIncome],
    ["Work Location", form.workLocation],
    ["Rashi", form.rashi],
    ["Nakshatra", form.nakshatra],
    ["Birth Place", form.birthPlace],
    ["Birth Time", form.birthTime],
    ["Contact Number", form.contactNumber],
    ["Address", form.address],
  ].filter(([, value]) => value);

  useEffect(() => {
    if (!leftRef?.current && !previewRef?.current) return;
    const targets = [];
    if (leftRef.current) targets.push(leftRef.current);
    if (previewRef.current) targets.push(previewRef.current);
    if (targets.length) {
      gsap.from(targets, { opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: "power2.out" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1ed] text-[#2f2723] print:bg-white">
      <header className="sticky top-0 z-20 bg-[#f5f1ed]/95 backdrop-blur border-b border-[#ddd3ca] print:hidden">
        <div className=" mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaHeart className="text-[#981b34]  text-2xl" />
            <div
              className="text-[22px] font-semibold text-[#2b1f1b]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ShaadiBio
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-2 rounded-xl bg-[#a61b38] text-white px-4 py-2.5 font-medium shadow-sm hover:opacity-95"
            >
              <Download size={18} />
              Download PDF
            </button>

            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-[#2f2723] hover:bg-white border border-transparent hover:border-[#ddd3ca]">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-350 mx-auto px-4 md:px-8 py-6 md:py-8 print:px-0 print:py-0 ">
        <div className="flex flex-wrap items-center gap-4 mb-6 print:hidden">
          <div className="flex items-center gap-3">
            <span className="text-[#7b6d65] text-[15px]">Template:</span>

            <button
              onClick={() => setTemplate("Modern")}
              className={`rounded-xl px-4 py-2 font-medium border ${
                template === "Modern"
                  ? "bg-[#a61b38] text-white border-[#a61b38]"
                  : "bg-white text-[#2f2723] border-[#ddd3ca]"
              }`}
            >
              Modern
            </button>

            <button
              onClick={() => setTemplate("Traditional")}
              className={`rounded-xl px-4 py-2 font-medium border ${
                template === "Traditional"
                  ? "bg-[#a61b38] text-white border-[#a61b38]"
                  : "bg-white text-[#2f2723] border-[#ddd3ca]"
              }`}
            >
              Traditional
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-[#7b6d65] text-[22px] leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              T
            </span>

            <select
              value={titleFont}
              onChange={(e) => setTitleFont(e.target.value)}
              className="h-11 rounded-xl border border-[#ddd3ca] bg-white px-4 min-w-45"
            >
              <option>Playfair Display</option>
              <option>Georgia</option>
              <option>Times New Roman</option>
              <option>serif</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-8 print:grid-cols-1">
          <section ref={leftRef} className="bg-white border border-[#ddd3ca] rounded-2xl p-6 md:p-7 shadow-sm print:hidden">
            <h2
              className="text-[26px] font-semibold mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Fill Your Details
            </h2>

            <div className="flex justify-center mb-6">
              <label className="h-28 w-28 rounded-full border-2 border-dashed border-[#d8b4bc] flex flex-col items-center justify-center text-[#9a847b] hover:bg-[#fcf8f7] transition cursor-pointer">
                <Upload size={24} />
                <span className="mt-2 text-sm">Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>

            <SectionTitle>Personal Details</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Field label="Full Name">
                <Input
                  placeholder="Enter full name"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
              </Field>

              <Field label="Gender">
                <Select
                  value={form.gender}
                  onChange={(e) => updateField("gender", e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Select>
              </Field>

              <Field label="Date of Birth">
                <Input
                  type="date"
                  value={form.dob}
                  onChange={(e) => updateField("dob", e.target.value)}
                />
              </Field>

              <Field label="Age">
                <Input value={age} placeholder="Auto-calculated" readOnly />
              </Field>

              <Field label="Height">
                <Input
                  placeholder={`e.g. 5'8"`}
                  value={form.height}
                  onChange={(e) => updateField("height", e.target.value)}
                />
              </Field>

              <Field label="Complexion">
                <Input
                  placeholder="e.g. Fair, Wheatish"
                  value={form.complexion}
                  onChange={(e) => updateField("complexion", e.target.value)}
                />
              </Field>

              <Field label="Marital Status">
                <Select
                  value={form.maritalStatus}
                  onChange={(e) => updateField("maritalStatus", e.target.value)}
                >
                  <option value="">Select</option>
                  <option>Unmarried</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </Select>
              </Field>

              <Field label="Religion">
                <Input
                  placeholder="e.g. Hindu"
                  value={form.religion}
                  onChange={(e) => updateField("religion", e.target.value)}
                />
              </Field>

              <Field label="Caste">
                <Input
                  placeholder="e.g. Brahmin"
                  value={form.caste}
                  onChange={(e) => updateField("caste", e.target.value)}
                />
              </Field>

              <Field label="Mother Tongue">
                <Select
                  value={form.motherTongue}
                  onChange={(e) => updateField("motherTongue", e.target.value)}
                >
                  <option value="">Select language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <SectionTitle>Family Details</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Field label="Father's Name">
                <Input
                  placeholder="Father's full name"
                  value={form.fatherName}
                  onChange={(e) => updateField("fatherName", e.target.value)}
                />
              </Field>

              <Field label="Father's Occupation">
                <Input
                  placeholder="e.g. Business"
                  value={form.fatherOccupation}
                  onChange={(e) => updateField("fatherOccupation", e.target.value)}
                />
              </Field>

              <Field label="Mother's Name">
                <Input
                  placeholder="Mother's full name"
                  value={form.motherName}
                  onChange={(e) => updateField("motherName", e.target.value)}
                />
              </Field>

              <Field label="Mother's Occupation">
                <Input
                  placeholder="e.g. Homemaker"
                  value={form.motherOccupation}
                  onChange={(e) => updateField("motherOccupation", e.target.value)}
                />
              </Field>

              <Field label="Siblings" full>
                <Input
                  placeholder="e.g. 1 Elder Brother, 1 Younger Sister"
                  value={form.siblings}
                  onChange={(e) => updateField("siblings", e.target.value)}
                />
              </Field>
            </div>

            <SectionTitle>Education & Profession</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Field label="Highest Education">
                <Input
                  placeholder="e.g. B.Tech, MBA"
                  value={form.highestEducation}
                  onChange={(e) => updateField("highestEducation", e.target.value)}
                />
              </Field>

              <Field label="Profession">
                <Input
                  placeholder="e.g. Software Engineer"
                  value={form.profession}
                  onChange={(e) => updateField("profession", e.target.value)}
                />
              </Field>

              <Field label="Annual Income">
                <Input
                  placeholder="e.g. 10 LPA"
                  value={form.annualIncome}
                  onChange={(e) => updateField("annualIncome", e.target.value)}
                />
              </Field>

              <Field label="Work Location">
                <Input
                  placeholder="e.g. Mumbai"
                  value={form.workLocation}
                  onChange={(e) => updateField("workLocation", e.target.value)}
                />
              </Field>
            </div>

            <SectionTitle>Horoscope (Optional)</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Field label="Rashi">
                <Input
                  placeholder="e.g. Mesh, Vrushabh"
                  value={form.rashi}
                  onChange={(e) => updateField("rashi", e.target.value)}
                />
              </Field>

              <Field label="Nakshatra">
                <Input
                  placeholder="e.g. Ashwini"
                  value={form.nakshatra}
                  onChange={(e) => updateField("nakshatra", e.target.value)}
                />
              </Field>

              <Field label="Birth Place">
                <Input
                  placeholder="e.g. Pune"
                  value={form.birthPlace}
                  onChange={(e) => updateField("birthPlace", e.target.value)}
                />
              </Field>

              <Field label="Birth Time">
                <div className="relative">
                  <Input
                    type="time"
                    value={form.birthTime}
                    onChange={(e) => updateField("birthTime", e.target.value)}
                  />
                  <Clock
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f7f76] pointer-events-none"
                    size={18}
                  />
                </div>
              </Field>
            </div>

            <SectionTitle>Contact Details</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Field label="Contact Number">
                <Input
                  placeholder="+91 98765 43210"
                  value={form.contactNumber}
                  onChange={(e) => updateField("contactNumber", e.target.value)}
                />
              </Field>

              <Field label="Address" full>
                <TextArea
                  placeholder="Full address"
                  value={form.address}
                  onChange={(e) => updateField("address", e.target.value)}
                />
              </Field>
            </div>
          </section>

          <BioDataPreview
            form={form}
            age={age}
            titleFont={titleFont}
            previewRows={previewRows}
            photo={photo}
            onDownloadPdf={handleDownloadPdf}
             previewRef={previewRef}
               template={template}
          />
        </div>
      </main>
    </div>
  );
}

export default BioData