import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import { IoTrashBinOutline } from "react-icons/io5";
import { Edit3 } from "lucide-react";
import { Dropdown } from "primereact/dropdown";
import Navbar from "../components/Navbar";
import { Toast } from "primereact/toast";
import api from "../axios"; // Import your configured axios instance
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GlobalContext } from "../context/GlobelContext";
const AddActivity = () => {
  const locations = [
    { name: "egypt", id: 1 },
    { name: "germany", id: 2 },
    { name: "usa", id: 3 },
    { name: "uk", id: 4 },
    { name: "uae", id: 5 },
    { name: "online", id: 6 },
    { name: "afghanistan", id: 7 },
    { name: "albania", id: 8 },
    { name: "algeria", id: 9 },
    { name: "andorra", id: 10 },
    { name: "angola", id: 11 },
    { name: "antigua and barbuda", id: 12 },
    { name: "argentina", id: 13 },
    { name: "armenia", id: 14 },
    { name: "australia", id: 15 },
    { name: "austria", id: 16 },
    { name: "azerbaijan", id: 17 },
    { name: "bahamas", id: 18 },
    { name: "bahrain", id: 19 },
    { name: "bangladesh", id: 20 },
    { name: "barbados", id: 21 },
    { name: "belarus", id: 22 },
    { name: "belgium", id: 23 },
    { name: "belize", id: 24 },
    { name: "benin", id: 25 },
    { name: "bhutan", id: 26 },
    { name: "bolivia", id: 27 },
    { name: "bosnia and herzegovina", id: 28 },
    { name: "botswana", id: 29 },
    { name: "brazil", id: 30 },
    { name: "brunei", id: 31 },
    { name: "bulgaria", id: 32 },
    { name: "burkina faso", id: 33 },
    { name: "burundi", id: 34 },
    { name: "cabo verde", id: 35 },
    { name: "cambodia", id: 36 },
    { name: "cameroon", id: 37 },
    { name: "canada", id: 38 },
    { name: "central african republic", id: 39 },
    { name: "chad", id: 40 },
    { name: "chile", id: 41 },
    { name: "china", id: 42 },
    { name: "colombia", id: 43 },
    { name: "comoros", id: 44 },
    { name: "congo", id: 45 },
    { name: "costa rica", id: 46 },
    { name: "croatia", id: 47 },
    { name: "cuba", id: 48 },
    { name: "cyprus", id: 49 },
    { name: "czech republic", id: 50 },
    { name: "democratic republic of the congo", id: 51 },
    { name: "denmark", id: 52 },
    { name: "djibouti", id: 53 },
    { name: "dominica", id: 54 },
    { name: "dominican republic", id: 55 },
    { name: "east timor", id: 56 },
    { name: "ecuador", id: 57 },
    // { name: "egypt", id: 58 },
    { name: "el salvador", id: 59 },
    { name: "equatorial guinea", id: 60 },
    { name: "eritrea", id: 61 },
    { name: "estonia", id: 62 },
    { name: "eswatini", id: 63 },
    { name: "ethiopia", id: 64 },
    { name: "fiji", id: 65 },
    { name: "finland", id: 66 },
    { name: "france", id: 67 },
    { name: "gabon", id: 68 },
    { name: "gambia", id: 69 },
    { name: "georgia", id: 70 },
    { name: "germany", id: 71 },
    { name: "ghana", id: 72 },
    { name: "greece", id: 73 },
    { name: "grenada", id: 74 },
    { name: "guatemala", id: 75 },
    { name: "guinea", id: 76 },
    { name: "guinea-bissau", id: 77 },
    { name: "guyana", id: 78 },
    { name: "haiti", id: 79 },
    { name: "honduras", id: 80 },
    { name: "hungary", id: 81 },
    { name: "iceland", id: 82 },
    { name: "india", id: 83 },
    { name: "indonesia", id: 84 },
    { name: "iran", id: 85 },
    { name: "iraq", id: 86 },
    { name: "ireland", id: 87 },
    { name: "israel", id: 88 },
    { name: "italy", id: 89 },
    { name: "jamaica", id: 90 },
    { name: "japan", id: 91 },
    { name: "jordan", id: 92 },
    { name: "kazakhstan", id: 93 },
    { name: "kenya", id: 94 },
    { name: "kiribati", id: 95 },
    { name: "kosovo", id: 96 },
    { name: "kuwait", id: 97 },
    { name: "kyrgyzstan", id: 98 },
    { name: "laos", id: 99 },
    { name: "latvia", id: 100 },
    { name: "lebanon", id: 101 },
    { name: "lesotho", id: 102 },
    { name: "liberia", id: 103 },
    { name: "libya", id: 104 },
    { name: "liechtenstein", id: 105 },
    { name: "lithuania", id: 106 },
    { name: "luxembourg", id: 107 },
    { name: "madagascar", id: 108 },
    { name: "malawi", id: 109 },
    { name: "malaysia", id: 110 },
    { name: "maldives", id: 111 },
    { name: "mali", id: 112 },
    { name: "malta", id: 113 },
    { name: "marshall islands", id: 114 },
    { name: "mauritania", id: 115 },
    { name: "mauritius", id: 116 },
    { name: "mexico", id: 117 },
    { name: "micronesia", id: 118 },
    { name: "moldova", id: 119 },
    { name: "monaco", id: 120 },
    { name: "mongolia", id: 121 },
    { name: "montenegro", id: 122 },
    { name: "morocco", id: 123 },
    { name: "mozambique", id: 124 },
    { name: "myanmar", id: 125 },
    { name: "namibia", id: 126 },
    { name: "nauru", id: 127 },
    { name: "nepal", id: 128 },
    { name: "netherlands", id: 129 },
    { name: "new zealand", id: 130 },
    { name: "nicaragua", id: 131 },
    { name: "niger", id: 132 },
    { name: "nigeria", id: 133 },
    { name: "north korea", id: 134 },
    { name: "north macedonia", id: 135 },
    { name: "norway", id: 136 },
    { name: "oman", id: 137 },
    { name: "pakistan", id: 138 },
    { name: "palau", id: 139 },
    { name: "panama", id: 140 },
    { name: "papua new guinea", id: 141 },
    { name: "paraguay", id: 142 },
    { name: "peru", id: 143 },
    { name: "philippines", id: 144 },
    { name: "poland", id: 145 },
    { name: "portugal", id: 146 },
    { name: "qatar", id: 147 },
    { name: "romania", id: 148 },
    { name: "russia", id: 149 },
    { name: "rwanda", id: 150 },
    { name: "saint kitts and nevis", id: 151 },
    { name: "saint lucia", id: 152 },
    { name: "saint vincent and the grenadines", id: 153 },
    { name: "samoa", id: 154 },
    { name: "san marino", id: 155 },
    { name: "sao tome and principe", id: 156 },
    { name: "saudi arabia", id: 157 },
    { name: "senegal", id: 158 },
    { name: "serbia", id: 159 },
    { name: "seychelles", id: 160 },
    { name: "sierra leone", id: 161 },
    { name: "singapore", id: 162 },
    { name: "slovakia", id: 163 },
    { name: "slovenia", id: 164 },
    { name: "solomon islands", id: 165 },
    { name: "somalia", id: 166 },
    { name: "south africa", id: 167 },
    { name: "south korea", id: 168 },
    { name: "south sudan", id: 169 },
    { name: "spain", id: 170 },
    { name: "sri lanka", id: 171 },
    { name: "sudan", id: 172 },
    { name: "suriname", id: 173 },
    { name: "sweden", id: 174 },
    { name: "switzerland", id: 175 },
    { name: "syria", id: 176 },
    { name: "taiwan", id: 177 },
    { name: "tajikistan", id: 178 },
    { name: "tanzania", id: 179 },
    { name: "thailand", id: 180 },
    { name: "togo", id: 181 },
    { name: "tonga", id: 182 },
    { name: "trinidad and tobago", id: 183 },
    { name: "tunisia", id: 184 },
    { name: "turkmenistan", id: 185 },
    { name: "turkey", id: 186 },
    { name: "tuvalu", id: 187 },
    { name: "uganda", id: 188 },
    { name: "ukraine", id: 189 },
    { name: "united arab emirates", id: 190 },
    { name: "united kingdom", id: 191 },
    { name: "united states", id: 192 },
    { name: "uruguay", id: 193 },
    { name: "uzbekistan", id: 194 },
    { name: "vanuatu", id: 195 },
    { name: "vatican city", id: 196 },
    { name: "venezuela", id: 197 },
    { name: "vietnam", id: 198 },
    { name: "yemen", id: 199 },
    { name: "zambia", id: 200 },
    { name: "zimbabwe", id: 201 }
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

  const navigate = useNavigate();
  const toastBC = useRef(null);
  const { setIsAuthUser, isAuthUser } = useContext(GlobalContext);
  const [uploading, setUploading] = useState(false);
  const [sponsorImages, setSponsorImages] = useState([]);
  const [sponsorPreviews, setSponsorPreviews] = useState([]);
  const [formData, setFormData] = useState({
    activityName: "",
    type: "Workshop",
    date: "",
    time: null,
    institution: "",
    location: "offline",
    locationDetails: "",
    price: "Free",
    priceAmount: "",
    description: "",
    timeline: "",
    externalLink: "",
    callToAction: "",
  });
  const sponsorUrls = [];
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setIsAuthUser(userInfo);
  }, [setIsAuthUser]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toastBC.current.show({
          severity: "error",
          summary: "Image size should be less than 5MB",
          sticky: true,
        });
        return;
      }
      setFeaturedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSponsorImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const oversizedFiles = files.filter((file) => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toastBC.current.show({
        severity: "error",
        summary: "Some images are larger than 5MB",
        sticky: true,
      });
      return;
    }
    setSponsorImages((prev) => [...prev, ...files]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setSponsorPreviews((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };
  const removeSponsorImage = (index) => {
    setSponsorImages((prev) => prev.filter((_, i) => i !== index));
    setSponsorPreviews((prev) => prev.filter((_, i) => i !== index));
  };
  const validateForm = () => {
    const required = [
      "activityName",
      "type",
      "date",
      "institution",
      "description",
    ];
    const missingFields = required.filter((field) => !formData[field]);
    if (missingFields.length) {
      toastBC.current.show({
        severity: "error",
        summary: `Required fields missing: ${missingFields.join(", ")}`,
        sticky: true,
      });
      return false;
    }
    if (!featuredImage) {
      toastBC.current.show({
        severity: "error",
        summary: `Required fields missing: featuredImage`,
        sticky: true,
      });
      return false;
    }
    if (formData.location === "offline" && !formData.locationDetails) {
      toastBC.current.show({
        severity: "error",
        summary: "Location details required for offline activities",
        sticky: true,
      });
      return false;
    }
    if (formData.price === "Paid" && !formData.priceAmount) {
      toastBC.current.show({
        severity: "error",
        summary: "Price amount required for paid activities",
        sticky: true,
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthUser) {
      return toastBC.current.show({
        severity: "error",
        summary: "Please login first",
        sticky: true,
      });
    }
    if (!validateForm()) {
      return;
    }
    try {
      setUploading(true);
      if (featuredImage) {
        const featuredFormData = new FormData();
        featuredFormData.append("file", featuredImage);
        const featuredResponse = await api.post(`upload`, featuredFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (featuredResponse) {
          for (const sponsorImage of sponsorImages) {
            const formData = new FormData();
            formData.append("file", sponsorImage);
            try {
              const response = await api.post(`upload`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
              });
              if (response) {
                sponsorUrls.push(
                  `https://agyademo.uber.space/files/${response.data.link}`
                );
              }
            } catch (error) {
              toastBC.current.show({
                severity: "error",
                summary: `Failed to upload sponsor image: ${sponsorImage.name}`,
                sticky: true,
              });
            }
          }
        }
        const formattedDate =
          formData.date instanceof Date
            ? formData.date.toISOString().split("T")[0]
            : formData.date;
        const formattedTime =
          formData.time instanceof Date
            ? formData.time.toLocaleTimeString()
            : formData.time;
        const activityData = {
          userId: isAuthUser.id,
          activityName: formData.activityName,
          activityType: formData.type,
          date: formattedDate,
          time: formattedTime,
          featuredImage: `https://agyademo.uber.space/files/${featuredResponse.data.link}`,
          organization: formData.institution,
          sponsors: sponsorUrls,
          location:
            formData.location === "offline"
              ? formData.locationDetails.name
              : formData.location,
          price: formData.price === "Free" ? "Free" : formData.priceAmount,
          description: formData.description,
          timeline: formData.timeline,
          activityExLink: formData.externalLink,
          apply: formData.callToAction,
          status: "pending",
        };
        const activityResponse = await fetch(
          "https://agyademo.uber.space/api/activities",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(activityData),
          }
        );
        if (activityResponse) {
          toastBC.current.show({
            severity: "success",
            summary: "Activity created successfully!",
            sticky: true,
          });
        }
        const newActivity = await activityResponse.json();
        navigate("/profile");
      }
    } catch (error) {
      toastBC.current.show({
        severity: "error",
        summary: error.message || "Failed to create activity",
        sticky: true,
      });
    } finally {
      setUploading(false);
    }
  };
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };
  return (
    <div className="p-4 sm:px-12 lg:px-24">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <nav className="text-gray-500 text-sm">
            <span>Activities</span> / <span>New Activity</span> /{" "}
            <span>Create</span>
          </nav>
          <h1 className="text-3xl font-bold text-center mt-6">New Activity</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block font-bold mb-2">
                  <span className="text-red-500 mr-1">*</span>Activity Name
                </label>
                <input
                  type="text"
                  name="activityName"
                  value={formData.activityName}
                  onChange={handleInputChange}
                  className="w-full p-2 border bg-white rounded-lg"
                  placeholder="Enter activity name"
                />
              </div>
              <div>
                <label className="block font-bold mb-2">
                  <span className="text-red-500  mr-1">*</span>Activity Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-2 border bg-white rounded-lg"
                >
                  <option value="Workshop">Workshop</option>
                  <option value="Publication">Publication</option>
                  <option value="Conference">Conference and talk</option>
                  <option value="Event">Event</option>
                  <option value="Interview">Interview</option>
                  <option value="Competition">Competition</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-bold">Date</label>
                  <Calendar
                    value={formData.date}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, date: e.value }))
                    }
                    className="w-full bg-white h-9"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold">Time</label>
                  <Calendar
                    value={formData.time}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, time: e.value }))
                    }
                    timeOnly
                    hourFormat="12"
                    className="w-full h-9 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold mb-2">
                  <span className="text-red-500 mr-1">*</span>
                  Organization
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full bg-white p-2 border rounded-lg"
                  placeholder="Enter organization name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-2">Location Type</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-white p-2 border rounded-lg"
                  >
                    <option value="offline">Offline</option>
                    <option value="online">Online</option>
                  </select>
                </div>
                {formData.location === "offline" && (
                  <div>
                    <label className="block font-bold mb-2">
                      Location Details
                    </label>
                    <Dropdown
                      value={formData.locationDetails}
                      onChange={(e) => 
                        setFormData({
                          ...formData,
                          locationDetails: e.target.value,
                        })}
                      options={locations}
                      optionLabel="name"
                      placeholder="Select a location"
                      filter
                      valueTemplate={selectedCountryTemplate}
                      itemTemplate={countryOptionTemplate}
                      className="w-full md:w-14rem border"
                      
                    />
                    {/* <input
                      type="text"
                      name="locationDetails"
                      value={formData.locationDetails}
                      onChange={handleInputChange}
                      className="w-full bg-white p-2 border rounded-lg"
                      placeholder="Enter location details"
                    /> */}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-2">Price Type</label>
                  <select
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full bg-white p-2 border rounded-lg"
                  >
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
                {formData.price === "Paid" && (
                  <div>
                    <label className="block font-bold mb-2">Price Amount</label>
                    <input
                      type="number"
                      name="priceAmount"
                      value={formData.priceAmount}
                      onChange={handleInputChange}
                      className="w-full bg-white p-2 border rounded-lg"
                      placeholder="Enter price amount"
                      min="0" // Optional: Prevent negative values
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Featured Image</h3>
                <div className="relative">
                  <img
                    src={imagePreview || "/png.png"}
                    alt="Featured preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full cursor-pointer">
                    <Edit3 className="w-5 h-5" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFeaturedImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Sponsor Images</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {sponsorPreviews === undefined ||
                  sponsorPreviews.length === 0 ? (
                    <div> no sponsor</div>
                  ) : (
                    sponsorPreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Sponsor ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeSponsorImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                        >
                          <IoTrashBinOutline className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleSponsorImagesChange}
                  className="mt-4 w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="space-y-16 sm:space-y-20 mb-4">
            <div>
              <label className="block mb-2 font-bold">
                <span className="text-red-500  mr-1">*</span>
                Description
              </label>
              <ReactQuill
                value={formData.description}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, description: value }))
                }
                modules={quillModules}
                className="h-40"
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Timeline</label>
              <ReactQuill
                value={formData.timeline}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, timeline: value }))
                }
                modules={quillModules}
                className="h-40"
              />
            </div>
            {/* <div>
              <label className="block font-bold mb-2">External Link</label>
              <input
                type="url"
                name="externalLink"
                value={formData.externalLink}
                onChange={handleInputChange}
                className="w-full bg-white p-2 border rounded-lg "
                placeholder="Enter external link"
              />
            </div> */}
            <div>
              <label className="block font-bold mb-2">Application Link</label>
              <input
                type="url"
                name="callToAction"
                value={formData.callToAction}
                onChange={handleInputChange}
                className="w-full bg-white p-2 border rounded-lg"
                placeholder="Enter Applying link"
              />
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={uploading}
              className="bg-main text-white px-6 sm:px-8 py-2 rounded-lg disabled:opacity-50 w-full sm:w-auto"
            >
              {uploading ? "Creating Activity..." : "Submit Activity"}
            </button>
          </div>
        </form>
        <Toast ref={toastBC} position="top-right" />
      </div>
    </div>
  );
};
export default AddActivity;
