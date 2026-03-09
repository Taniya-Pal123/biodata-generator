import { Eye, Download, User, Calendar } from "lucide-react";

export default function BioDataPreview({
  form,
  age,
  titleFont,
  previewRows,
  photo,
  onDownloadPdf,
  previewRef,
  template,
}) {
  const isTraditional = template === "Traditional";

  return (
    <section className="print:block">
      <div className="flex items-center justify-between mb-4 print:hidden">
        <div className="flex items-center gap-3">
          <Eye className="text-[#a61b38]" size={20} />
          <h2
            className="text-[22px] font-semibold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Live Preview
          </h2>
        </div>

        <button
          onClick={onDownloadPdf}
          className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#ddd3ca] px-4 py-2 text-[#2f2723]"
        >
          <Download size={18} />
          PDF
        </button>
      </div>

      <div
        ref={previewRef}
        className={`overflow-hidden shadow-sm ${
          isTraditional
            ? "bg-[#f7f1e7] border-2 border-[#d4a12d] rounded-[14px]"
            : "bg-white border border-[#ddd3ca] rounded-2xl"
        }`}
      >
        {isTraditional ? (
          <>
            <div className="bg-linear-to-r from-[#d19a28] to-[#e6c37a] py-4 px-6 text-center">
              <p className="text-[12px] md:text-[14px] tracking-[3px] text-[#5c4630] uppercase mb-1">
                || Shree Ganeshaya Namah ||
              </p>
              <h1
                className="text-[#1f1712] text-[30px] md:text-[36px] font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Biodata
              </h1>
            </div>

            <div className="p-6 md:p-8 bg-[#fbf7f2]">
              <div className="flex justify-center mb-8">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="h-36 w-28 md:h-44 md:w-32 object-cover border-2 border-[#d4a12d] rounded-md bg-white"
                  />
                ) : (
                  <div className="h-36 w-28 md:h-44 md:w-32 border-2 border-[#d4a12d] rounded-md bg-white flex items-center justify-center text-[#8f7a73]">
                    <User size={46} strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {form.fullName && (
                <div className="text-center mb-8">
                  <h2
                    className="text-[28px] font-bold text-[#2c2017]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {form.fullName}
                  </h2>
                  {form.profession && (
                    <p className="text-[#6c5847] mt-2 text-[16px]">{form.profession}</p>
                  )}
                  {age && (
                    <p className="text-[#6c5847] mt-1 text-[15px]">Age: {age}</p>
                  )}
                </div>
              )}

              {previewRows.length > 0 ? (
                <div>
                  <h3
                    className="text-[#8b5d11] text-[20px] font-bold border-b border-[#dfc089] pb-2 mb-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Personal Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {previewRows.map(([label, value]) => (
                      <div
                        key={label}
                        className="py-1.5 border-b border-[#eadcc0]"
                      >
                        <span className="font-semibold text-[#2f2723]">{label}: </span>
                        <span className="text-[#5d514b] wrap-break-word">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-[#8f7f76]">
                  <Calendar size={44} className="mx-auto mb-4 opacity-70" />
                  <p className="text-[17px]">Fill the form on the left side.</p>
                  <p className="text-[15px] mt-2">
                    Your biodata preview will appear here automatically.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="bg-linear-to-r from-[#8f0f2a] to-[#b21f41] py-6 px-6 text-center">
              <h1
                className="text-white text-[30px] md:text-[34px] font-semibold"
                style={{
                  fontFamily:
                    titleFont === "Playfair Display" ? "Georgia, serif" : titleFont,
                }}
              >
                Marriage Biodata
              </h1>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-8">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="h-32 w-32 md:h-36 md:w-36 rounded-full border-4 border-[#dfc7cc] object-cover"
                  />
                ) : (
                  <div className="h-32 w-32 md:h-36 md:w-36 rounded-full border-4 border-[#dfc7cc] flex items-center justify-center text-[#8f7a73] bg-[#fbf8f7]">
                    <User size={52} strokeWidth={1.5} />
                  </div>
                )}
              </div>

              {form.fullName && (
                <div className="text-center mb-8">
                  <h2
                    className="text-[28px] font-semibold text-[#2a211d]"
                    style={{
                      fontFamily:
                        titleFont === "Playfair Display" ? "Georgia, serif" : titleFont,
                    }}
                  >
                    {form.fullName}
                  </h2>

                  {form.profession && (
                    <p className="text-[#7b6d65] mt-2 text-[16px]">{form.profession}</p>
                  )}

                  {age && (
                    <p className="text-[#7b6d65] mt-1 text-[15px]">Age: {age}</p>
                  )}
                </div>
              )}

              <div className="space-y-7">
                {previewRows.length > 0 ? (
                  <div>
                    <h3
                      className="text-[#a61b38] text-[20px] font-semibold border-b border-[#e6ddd5] pb-2 mb-4"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Biodata Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {previewRows.map(([label, value]) => (
                        <div
                          key={label}
                          className="py-1.5 border-b border-[#f1ebe6]"
                        >
                          <span className="font-semibold text-[#2f2723]">{label}: </span>
                          <span className="text-[#5d514b] wrap-break-word">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-[#8f7f76]">
                    <Calendar size={44} className="mx-auto mb-4 opacity-70" />
                    <p className="text-[17px]">Fill the form on the left side.</p>
                    <p className="text-[15px] mt-2">
                      Your biodata preview will appear here automatically.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}