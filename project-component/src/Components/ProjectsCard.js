import React, { useState } from "react";
import "../App.css";

const ProjectsCard = () => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [title, setTitle] = useState("Full Wedding Package");
  const [description, setDescription] = useState(
    "Includes a complete and mastered wedding album with up to 10 songs and recordings."
  );
  const [price, setPrice] = useState("5000");

  const handleFocus = () => {
    console.log("Focused");
    setIsTextareaFocused(true);
  };

  const handleBlur = () => {
    console.log("Blurred");
    setIsTextareaFocused(false);
  };

  return (
    <div className="card" style={{ display: "flex", paddingLeft: "30%", paddingTop: "10%" }}>
      <section
        style={{
          padding: "0px",
          position: "relative",
          fontSize: "1.1rem",
          marginBottom: "2.75rem",
          lineHeight: "1.4",
          color: "rgb(34, 34, 34)",
          padding: "var(--content-pad) var(--content-pad)",
          background: "rgb(255, 255, 255)",
          boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 3px",
          display: "block",
          width: "90%",
        }}
      >
        <div className="flex-c" style={{ alignItems: "stretch", display: "flex", alignItems: "center" }}>
          <div
            style={{
              flex: "1 1 0%",
              display: "flex",
              gap: "10px",
              alignContent: "center",
              padding: "calc(var(--content-pad) * .5) calc(var(--content-pad) * .5) calc(var(--content-pad) * .5) var(--content-pad)",
            }}
          >
            <div className="flex-c" style={{ flex: "1 1 0%" }}>
              <div style={{ display: "block", width: "100%" }}>
                <form>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <button type="button" className="Products__ImgContainer-ke3axf-6 fvBNzY">
                      <img className="align-self-start" alt="Full Wedding Package" style={{ objectFit: "cover" }} />
                      <div className="edit">Edit</div>
                    </button>
                    <div className="w-100" style={{ width: "100% !important", transition: "height 0.3s ease-in-out"}}>
                      <label className="flex-c mb-0 Products__Label-ke3axf-0 ViAdX">
                        <input
                          maxLength="150"
                          type="text"
                          className="form-control Products__Input-ke3axf-3 JyYIe"
                          placeholder="Title – May include emoticons 👋 ✨"
                          required=""
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          style={{ fontWeight: "bold", border: "none" }}
                        />
                      </label>
                      <label className="flex-c Products__Label-ke3axf-0 ViAdX" style={{transition: "height 0.3s ease-in-out"}}>
                        <textarea
                          maxLength="1500"
                          rows="1"
                          type="text"
                          className={`form-control Products__InputTextArea-ke3axf-4 gAZTZj ${
                            isTextareaFocused ? "textarea-focused" : ""
                          }`}
                          placeholder="Description"
                          style={{ border: "none", width: "100%" }}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </label>
                      <div className="d-flex justify-content-between">
                        <label className="flex-c w-50 Products__Label-ke3axf-0 ViAdX">
                          <span className="Products__Prefix-ke3axf-2 hMsDKK">$</span>
                          <input
                            type="text"
                            className="form-control Products__Input-ke3axf-3 JyYIe"
                            placeholder="Price"
                            required=""
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{ border: "none" }}
                          />
                        </label>
                        <button type="button" className="btn btn-sm btn-link px-0" style={{ whiteSpace: "nowrap", display: "none" }}>
                          ...more settings
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-c"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsCard;


