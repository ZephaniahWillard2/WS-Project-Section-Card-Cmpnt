import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const ProjectsCard = () => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);           //Created a state variable and a function to update the variable's state from "Not Focused" to "Focused".
  const [title, setTitle] = useState("Full Wedding Package");                  //Not important
  const [description, setDescription] = useState(                              //Not important
    "Includes a complete and mastered wedding album with up to 10 songs and recordings."
  );
  const [price, setPrice] = useState("5000");                                  //Not important
  const [isMultiline, setIsMultiline] = useState(false);

  const textareaRef = useRef(null);

  const handleFocus = () => {                                                 //Made a function to handle the onFocus event and change the state of the state variable,
    console.log("Focused");                                                   //using the setIsTextareaFocused function, from "false" to "true".
    setIsTextareaFocused(true);
  };

  const handleBlur = () => {                                                 //using the setIsTextareaFocused function, from "false" to "true".
    console.log("Blurred");                                                  //back to "false" when the textarea is no longer onFocus.
    setIsTextareaFocused(false);
  };

  const handleTextareaChange = (e) => {
    setDescription(e.target.value);
    checkIfMultiline();
  };

  const checkIfMultiline = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const hasMultipleLines = textarea.scrollHeight > textarea.clientHeight;
      setIsMultiline(hasMultipleLines);
    }
  };

  useEffect(() => {
    checkIfMultiline();
  }, [description]);

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
          width: "70%",
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
                        <div className={`textarea-wrapper ${!isTextareaFocused && isMultiline ? "multiline" : ""}`}>
                          <textarea
                            maxLength="1500"
                            rows="1"
                            type="text"
                            className={`form-control Products__InputTextArea-ke3axf-4 gAZTZj ${isTextareaFocused ? "textarea-focused" : ""}`}
                            placeholder="Description"
                            style={{ border: "none", overflowY: "scroll" }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={description}
                            onChange={handleTextareaChange}
                            ref={textareaRef}
                          />
                        </div>
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

























// import React, { useState } from "react";
// import "../App.css";

// const ProjectsCard = () => {
//   const [isTextareaFocused, setIsTextareaFocused] = useState(false);    //Created a state variable and a function to update the variable's state from "Not Focused" to "Focused".
//   const [title, setTitle] = useState("Full Wedding Package");                   //Not important
//   const [description, setDescription] = useState(                               //Not important
//     "Includes a complete and mastered wedding album with up to 10 songs and recordings."
//   );
//   const [price, setPrice] = useState("5000");                                   //Not important

//   const handleFocus = () => {                                           //Made a function to handle the onFocus event and change the state of the state variable,
//     console.log("Focused");                                             //using the setIsTextareaFocused function, from "false" to "true".
//     setIsTextareaFocused(true);
//   };

//   const handleBlur = () => {                                            //Made a function to change the state of the state variable, using the setIsTextareaFocused function,
//     console.log("Blurred");                                             //back to "false" when the textarea is no longer onFocus.
//     setIsTextareaFocused(false);
//   };

//   return (
//     <div className="card"
//         style={{
//           display: "flex",
//           paddingLeft: "30%",
//           paddingTop: "10%"
//         }}>
// {/* Changed some of the styling in various sections not for functional purposes, just for stylistic purposes. */}
// {/* None of these specific changes are meant to relfect a change in the original component. */}
//       <section
//         style={{
//           padding: "0px",
//           position: "relative",
//           fontSize: "1.1rem",
//           marginBottom: "2.75rem",
//           lineHeight: "1.4",
//           color: "rgb(34, 34, 34)",
//           padding: "var(--content-pad) var(--content-pad)",
//           background: "rgb(255, 255, 255)",
//           boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 3px",
//           display: "block",
//           width: "70%",
//         }}>
//         <div className="flex-c"
//             style={{
//               alignItems: "stretch",
//               display: "flex",
//               alignItems: "center"
//             }}>
//           <div
//             style={{
//               flex: "1 1 0%",
//               display: "flex",
//               gap: "10px",
//               alignContent: "center",
//               padding: "calc(var(--content-pad) * .5) calc(var(--content-pad) * .5) calc(var(--content-pad) * .5) var(--content-pad)",
//             }}>
//             <div className="flex-c" style={{ flex: "1 1 0%" }}>
//               <div style={{ display: "block", width: "100%" }}>
//                 <form>
//                   <div style={{ display: "flex", gap: "15px" }}>
//                     <button type="button" className="Products__ImgContainer-ke3axf-6 fvBNzY">
//                       <img className="align-self-start" alt="Full Wedding Package" style={{ objectFit: "cover" }} />
//                       <div className="edit">Edit</div>
//                     </button>
//                     <div className="w-100" style={{ width: "100% !important", transition: "height 0.3s ease-in-out"}}>
//                       <label className="flex-c mb-0 Products__Label-ke3axf-0 ViAdX">
//                         <input
//                           maxLength="150"
//                           type="text"
//                           className="form-control Products__Input-ke3axf-3 JyYIe"
//                           placeholder="Title – May include emoticons 👋 ✨"
//                           required=""
//                           value={title}
//                           onChange={(e) => setTitle(e.target.value)}
//                           style={{ fontWeight: "bold", border: "none" }}
//                         />
//                       </label>
//                       <label className="flex-c Products__Label-ke3axf-0 ViAdX" style={{transition: "height 0.3s ease-in-out"}}>

// {/* Passed in the handleFocus and handleBlur functions to the onFocus and onBlur event handlers in the textarea */}

//                         <textarea
//                           maxLength="1500"
//                           rows="1"
//                           type="text"
//                        // Added in a ternary operator to add a class to the textarea in the event of "onFocus" in order to create conditional css styling.
//                           className={`form-control Products__InputTextArea-ke3axf-4 gAZTZj ${isTextareaFocused ? "textarea-focused" : ""}`}
//                           placeholder="Description"
//                           style={{ border: "none", width: "100%", overflowY: "scroll" }}
//                           onFocus={handleFocus}
//                           onBlur={handleBlur}
//                           value={description}
//                           onChange={(e) => setDescription(e.target.value)}
//                         />
//                       </label>
//                       <div className="d-flex justify-content-between">
//                         <label className="flex-c w-50 Products__Label-ke3axf-0 ViAdX">
//                           <span className="Products__Prefix-ke3axf-2 hMsDKK">$</span>

//                           <input
//                             type="text"
//                             className="form-control Products__Input-ke3axf-3 JyYIe"
//                             placeholder="Price"
//                             required=""
//                             value={price}
//                             onChange={(e) => setPrice(e.target.value)}
//                             style={{ border: "none" }}
//                           />
//                         </label>
//                         <button type="button" className="btn btn-sm btn-link px-0" style={{ whiteSpace: "nowrap", display: "none" }}>
//                           ...more settings
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="flex-c"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProjectsCard;


