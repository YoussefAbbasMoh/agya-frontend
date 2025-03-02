import React, { useState, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdOutlineTranslate } from "react-icons/md";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Dialog } from 'primereact/dialog';
const countries = [
  { name: "English", value: "en" },
  { name: "Arabic", value: "ar" },
  { name: "French", value: "fr" },
  { name: "German", value: "de" },
  { name: "Chinese", value: "zh" },
  { name: "Spanish", value: "es" },
  { name: "Italian", value: "it" },
  { name: "Portuguese", value: "pt" },
  { name: "Russian", value: "ru" },
  { name: "Japanese", value: "ja" },
  { name: "Korean", value: "ko" },
  { name: "Hindi", value: "hi" },
  { name: "Bengali", value: "bn" },
  { name: "Punjabi", value: "pa" },
  { name: "Urdu", value: "ur" },
  { name: "Indonesian", value: "id" },
  { name: "Malay", value: "ms" },
  { name: "Thai", value: "th" },
  { name: "Vietnamese", value: "vi" },
  { name: "Persian", value: "fa" },
  { name: "Turkish", value: "tr" },
  { name: "Polish", value: "pl" },
  { name: "Dutch", value: "nl" },
  { name: "Greek", value: "el" },
  { name: "Swedish", value: "sv" },
  { name: "Finnish", value: "fi" },
  { name: "Norwegian", value: "no" },
  { name: "Danish", value: "da" },
  { name: "Czech", value: "cs" },
  { name: "Slovak", value: "sk" },
  { name: "Hungarian", value: "hu" },
  { name: "Hebrew", value: "he" },
  { name: "Ukrainian", value: "uk" },
  { name: "Romanian", value: "ro" },
  { name: "Bulgarian", value: "bg" },
  { name: "Serbian", value: "sr" },
  { name: "Croatian", value: "hr" },
  { name: "Slovenian", value: "sl" },
  { name: "Lithuanian", value: "lt" },
  { name: "Latvian", value: "lv" },
  { name: "Estonian", value: "et" },
  { name: "Irish", value: "ga" },
  { name: "Welsh", value: "cy" },
  { name: "Icelandic", value: "is" },
  { name: "Maltese", value: "mt" },
  { name: "Albanian", value: "sq" },
  { name: "Bosnian", value: "bs" },
  { name: "Macedonian", value: "mk" },
  { name: "Swahili", value: "sw" },
  { name: "Amharic", value: "am" },
  { name: "Zulu", value: "zu" },
  { name: "Xhosa", value: "xh" },
  { name: "Afrikaans", value: "af" },
  { name: "Yoruba", value: "yo" },
  { name: "Igbo", value: "ig" },
  { name: "Hausa", value: "ha" },
  { name: "Somali", value: "so" },
  { name: "Khmer", value: "km" },
  { name: "Lao", value: "lo" },
  { name: "Burmese", value: "my" },
  { name: "Tamil", value: "ta" },
  { name: "Telugu", value: "te" },
  { name: "Kannada", value: "kn" },
  { name: "Malayalam", value: "ml" },
  { name: "Marathi", value: "mr" },
  { name: "Gujarati", value: "gu" },
  { name: "Sinhalese", value: "si" },
  { name: "Nepali", value: "ne" },
  { name: "Mongolian", value: "mn" },
  { name: "Tajik", value: "tg" },
  { name: "Uzbek", value: "uz" },
  { name: "Kazakh", value: "kk" },
  { name: "Kyrgyz", value: "ky" },
  { name: "Pashto", value: "ps" },
  { name: "Sindhi", value: "sd" },
  { name: "Turkmen", value: "tk" },
  { name: "Azerbaijani", value: "az" },
  { name: "Armenian", value: "hy" },
  { name: "Georgian", value: "ka" },
  { name: "Tatar", value: "tt" },
  { name: "Belarusian", value: "be" },
  { name: "Latin", value: "la" },
  { name: "Esperanto", value: "eo" },
];

const selectedCountryTemplate = (option, props) => {
  if (option) {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  }

  return <span>{props.placeholder}</span>;
};

const countryOptionTemplate = (option) => {
  return (
    <div className="flex align-items-center">
      <div>{option.name}</div>
    </div>
  );
};

const CustomToolbar = () => (
  <div id="toolbar" className="flex md:gap-2 p-2 border-b border-gray-300">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option defaultValue></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button className="ql-translate">
      <MdOutlineTranslate />
    </button>
  </div>
);

const RichTextWithTranslate = ({ onEditorChange }) => {
  const [editorValue, setEditorValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("en");
  const quillRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("");
    const toastBC = useRef(null);
  
  // Memoize modules to prevent unnecessary re-renders

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files[0];

      // Check file size (e.g., limit size to 2MB)
      if (file && file.size > 2 * 1024 * 1024) {
        toastBC.current.show({
          severity: "error",
          summary: "File is too large. Please select an image smaller than 2MB.",
          sticky: true,
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        const imageUrl = reader.result;

        // Insert image into editor
        quill.insertEmbed(range.index, 'image', imageUrl);
      };
      reader.readAsDataURL(file);
    };
  };


  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          translate: () => {
            setShowModal(true);
          },
          video: () => {
              const url = prompt("add video url")
            if (url) {
              // You might need to adjust this based on your specific setup
              const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S*?[?&]v=)|youtu\.be\/)([\w-]{11})/;
              const match = url.match(youtubeRegex);
              if (match) {
                const videoId = match[1]; // Extract video ID
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection();
                // Insert the YouTube video as an embed
                quill.insertEmbed(range.index, 'video', embedUrl);
              } else {
                const selection = window.getSelection();
                const range = selection.getRangeAt(0);
                const videoNode = document.createElement("div");
                videoNode.innerHTML = `<iframe src="${url}" frameborder="0"></iframe>`;
                range.insertNode(videoNode);
              }
            }
          },
          image: imageHandler 
          ,
        },
      },
    }),
    []
  );

  const handleTranslate = () => {
    // console.log(targetLang)
    fetch(
      `https://agyademo.uber.space/translate?target_lang=${targetLang}&text=${originalText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTranslatedText(data.translated_text);
      })
      .catch((err) => {
        console.error("Translation error:", err);
      });
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
    if (onEditorChange) {
      onEditorChange(value); // Pass the value to the parent
    }
  };

  return (
    <div className="py-2">
      <CustomToolbar />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={editorValue}
        onChange={handleEditorChange}
        modules={modules}
        placeholder="Write something amazing..."
        style={{ height: "300px", marginBottom: "20px" }}
      />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-lg w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Translate Text
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Text
              </label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                rows="3"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Translate Language
              </label>
              <div className="flex items-center gap-2">
                <Dropdown
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.value)}
                  options={countries}
                  optionLabel="name"
                  placeholder="Select a lang"
                  filter
                  valueTemplate={selectedCountryTemplate}
                  itemTemplate={countryOptionTemplate}
                  className="w-full md:w-14rem"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-main text-white rounded-lg hover:bg-blue-600"
                  onClick={handleTranslate}
                >
                  Translate
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Translated Text
              </label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                rows="3"
                readOnly
                value={translatedText}
              ></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-main text-white rounded-lg hover:bg-blue-600"
                onClick={() => {
                  const quill = document.querySelector(".ql-editor");
                  quill.innerHTML += `<p>${translatedText}</p>`;
                  setShowModal(false);
                  setOriginalText("");
                  setTranslatedText("");
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
            <Toast ref={toastBC} position="top-right" />
      
    </div>
  );
};

export default RichTextWithTranslate;
