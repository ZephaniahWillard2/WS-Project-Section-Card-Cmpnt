import React, { useState, useRef, useEffect } from "react";
import SquareRadioButton from "./SquareRadioButton";
import "../App.css";


const ProjectsCard = () => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);           //Created a state variable and a function to update the variable's state from "Not Focused" to "Focused".
  const [title, setTitle] = useState("Full Wedding Package");                  //Not important
  const [description, setDescription] = useState(                              //Not important
    "Includes a complete and mastered wedding album with up to 10 songs and recordings."
  );
  const [price, setPrice] = useState("5000");                                  //Not important
  const [isMultiline, setIsMultiline] = useState(false);                       //State variable and function to update the variable's state from not multiline to multiline, indicating whether or not ellipses needed.

  
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);    //Copied from source code
  const [clickedShowAdvanced, setClickedShowAdvanced] = useState(false);
  const advancedSettingsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (advancedSettingsRef.current && !advancedSettingsRef.current.contains(event.target)) {
      setShowAdvancedSettings(false);
    }
  };
  

  const [quantityAvailableFocus, setQuantityAvailableFocus] = useState(false);
  const [quantityAvailableValue, setQuantityAvailableValue] = useState("");

 
    const [selectedValue, setSelectedValue] = useState(null);
  
    const handleRadioChange = (value) => {                                    //Radio button function
      setSelectedValue((prevValue) => (prevValue === value ? null : value));
    };
  



  const textareaRef = useRef(null);

  const handleFocus = () => {                                                 //Made a function to handle the onFocus event and change the state of the state variable,
    console.log("Focused");                                                   //using the setIsTextareaFocused function, from "false" to "true".
    setIsTextareaFocused(true);
  };

  const handleBlur = () => {                                                 //Made a function to change the state of the state variable, using the setIsTextareaFocused function,
    console.log("Blurred");                                                  //back to "false" when the textarea is no longer onFocus.
    setIsTextareaFocused(false);
  };

  const handleTextareaChange = (e) => {                                     //Made a function to change the state of the description through calling the checkIfMultiline function.
    setDescription(e.target.value);
    checkIfMultiline();
  };

  const checkIfMultiline = () => {                                          //A function that determines if textarea has multiple lines that will eventually update the state of 
    const textarea = textareaRef.current;                                   //the handleTextareaChange function.
    if (textarea) {
      const hasMultipleLines = textarea.scrollHeight > textarea.clientHeight;
      setIsMultiline(hasMultipleLines);
    }
  };

  useEffect(() => {
    if (showAdvancedSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAdvancedSettings]);



  useEffect(() => {                                                         //useEffect for function performing side effect.
    checkIfMultiline();
  }, [description]);

  const editing =
    // inputChanged ||
    // titleFocus ||
    // descriptionFocus ||
    // imageUrlFocus ||
    // priceFocus ||
    // additionalConfirmationFocus ||
    // requiresShippingFocus ||
    quantityAvailableFocus ||
    isTextareaFocused ||
    // storePickupEnabledFocus ||
    // storePickupAppointmentTypeFocus ||
    // sendDownloadEmailFocus ||
    // hidePublicFocus ||
    // edit ||
    showAdvancedSettings ||
    // clickedCopy ||
    clickedShowAdvanced
    // clickedRemove ||
    // clickedSave
    ;

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
                  <div style={{ display: "flex", gap: "15px", width:"80%" }}>
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
                            className={`form-control Products__InputTextArea-ke3axf-4 gAZTZj ${isTextareaFocused ? "textarea-focused" : ""}`}
                            placeholder="Description"
                            style={{ border: "none", overflowY: "scroll" }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={description}
                            onChange={handleTextareaChange}
                            ref={textareaRef}
                          />
                          <div className={`textarea-wrapper ${!isTextareaFocused && isMultiline ? "multiline" : ""}`}></div>
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
                        
                          <button
                          type="button"
                          className="btn btn-sm btn-link px-0"
                          style={{
                            whiteSpace: 'nowrap',
                            display:
                              !editing || showAdvancedSettings ? 'none' : 'inline',
                          }}
                          onPointerDown={() => setClickedShowAdvanced(true)}
                          onPointerUp={() => setClickedShowAdvanced(false)}
                          onClick={() => setShowAdvancedSettings(true)}
                          >
                          ...more settings
                          </button>

                          {showAdvancedSettings && (
                            <div  ref={advancedSettingsRef}
                            className="advancedSetting">
                              <hr />
                              <div className="form-group" style={{paddingTop:"50px"}}>
                                {quantityAvailableValue }
                                  <label htmlFor="quantityAvailable">
                                    Quantity Available
                                  </label>
                               
                                            {/* MY NOTES_____Why is this label here? Is it just acting as a container? */}
                                <label className={'flex-c'}>
                                  <input
                                    id="quantityAvailable"
                                    onFocus={() => setQuantityAvailableFocus(true)}
                                    onBlur={() => setQuantityAvailableFocus(false)}
                                    onChange={e => {
                                      const val = e.target.value;

                                      // If original quantity was 0 and new quantity is more than that
                                      // show checkbox option for notifying the waitlist
                                      // if (
                                      //   quantityAvailableValue <= 0 &&
                                      //   parseInt(val, 10) > 0
                                      // ) {
                                      //   setShowWaitlistNotification(true);
                                      // } else {
                                      //   setShowWaitlistNotification(false);
                                      // }

                                      setQuantityAvailableValue(val);
                                    }
                                  }
                                    value={quantityAvailableValue}
                                    type="text"
                                    className="form-control"
                                    placeholder="Quantity Available"
                                    quantityAvailable
                                  />
                                </label>
                              </div>

                                  {/* Confirmation Screen */}
                              <div className="form-group">
                                <label htmlFor="confirmationScreen">
                                    Confirmation Screen
                                </label>
                                <label className={'flex-c'}>
                                  <input
                                    id="confirmationScreen"
                                    // Change these from quantty to confirm. stuff
                                    onFocus={() => setQuantityAvailableFocus(true)}
                                    onBlur={() => setQuantityAvailableFocus(false)}
                                    onChange={e => {
                                      const val = e.target.value;

                                      setQuantityAvailableValue(val);
                                    }
                                  }
                                    value={quantityAvailableValue}
                                    type="text"
                                    className="form-control"
                                    placeholder="Confirmation Screen"
                                    quantityAvailable
                                  />
                                </label>
                              </div>

                                  {/* Hide From Public */}
                              <div className="form-group">
                                <h2 htmlFor="hidePublic">
                                    Hide on Sparkle Site
                                </h2>
                                <label className={'flex-c'}>
                                  <div className="radioBtn1">
                                    <SquareRadioButton
                                      value="option1"
                                      selected={selectedValue === 'option1'}
                                      onChange={handleRadioChange}
                                    />
                                  </div>
                                </label>
                              </div>

                                   {/* Send Digitally*/}
                              <div className="form-group">
                                <h2 htmlFor="sendDigital">
                                    Send Digitally
                                </h2>
                                <label className={'flex-c'}>
                                  <div className="radioBtn2">
                                  <SquareRadioButton
                                  
                                    value="option2"
                                    selected={selectedValue === 'option2'}
                                    onChange={handleRadioChange}
                                  />
                                  </div>
                                </label>
                              </div>

                               {/* Shipping address*/}
                               <div className="form-group">
                                <h2 htmlFor="sendDigital">
                                    Requires Shipping Address
                                </h2>
                                <label className={'flex-c'}>
                                  <div className="radioBtn3">
                                  <SquareRadioButton
                                  
                                    value="option3"
                                    selected={selectedValue === 'option3'}
                                    onChange={handleRadioChange}
                                  />
                                  </div>
                                </label>
                              </div>

                               {/*Store Pickup*/}
                               <div className="form-group">
                                <h2 htmlFor="sendDigital">
                                    Store Pick-Up
                                </h2>
                                <label className={'flex-c'}>
                                  <div className="radioBtn4">
                                  <SquareRadioButton
                                  
                                    value="option4"
                                    selected={selectedValue === 'option4'}
                                    onChange={handleRadioChange}
                                  />
                                  </div>
                                </label>
                              </div>
                              <button
                                type="button"
                                className="btn btn-sm btn-link px-0"
                                onClick={() => setShowAdvancedSettings(false)}
                              >
                                Cancel
                              </button>
                            </div>)}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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


